from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Article, Section, Writer, App
from django.utils import timezone
from datetime import *
import requests
import re
from bs4 import BeautifulSoup

user_id = 5189448
access_token = '84bf898f8e442e1c812e6b5aac531f12'

# 文章、应用、回复列表
article_url = 'http://www.yiban.cn/forum/article/listAjax'
app_url = 'https://q.yiban.cn/audit/index'
reply_url = 'https://www.yiban.cn/forum/reply/listAjax'
#    页面浏览量 URL: https://q.yiban.cn/stat/getStatAjax
#   APP_id flag：5 tab：2独立访客量1页面浏览量
#
post = dict(channel_id=55461, group_id=0, my=0, need_notice=0, orderby='updateTime', page=1, puid=user_id,
            Sections_id=-1, size=500)
reply_post = dict(article_id=43748900, channel_id=55461, order=1, page=1, puid=user_id, size=5)


def strtime(DTime):
    dt = datetime.now()
    if DTime.find('分钟前') > -1:
        dt -= timedelta(minutes=int(re.match('[0-9]+', DTime).group()))
    elif DTime.find('小时前') > -1:
        dt -= timedelta(hours=int(re.match('[0-9]+', DTime).group()))
    elif DTime.find('-') < 4:
        return f'{datetime.now().year}-' + DTime
    else:
        return DTime
    return dt.strftime('%Y-%m-%d %H:%M:%S')


def get_cookies():
    s = requests.session()
    s.get(app_url, params={'access_token': access_token})
    return s.cookies.get_dict()


def app(item=1):
    get_data = dict(checkStatus=2, user_id=user_id, keyword='', page=item)
    url = requests.get(app_url, params=get_data, cookies=get_cookies())
    state = url.status_code
    if state == 200:
        url.encoding = 'UTF-8'  # 'gbk'
        web_content = BeautifulSoup(url.text, 'html.parser')
        # 正则获取数据
        information = re.search(r"var data =(.*?);$", web_content.body.script.get_text()).group(1)
        information = eval(information)
        for content in web_content.select('table tbody tr'):
            info = information[int(re.sub("\D", "", content.contents[7].a['href']))]
            app = App(
                update=content.contents[9].get_text(),
                name=content.contents[5].get_text(),
                logo=info["logo"],
                url=content.select('.copy-btn')[0]['data-url'],
                lock=True if content.contents[11].get_text() == "审查通过" else False,
                intro=info['intro'],
                privacy=info['seePrivacy'],
                doPrivacy=info['doPrivacy'],
                uName=content.contents[1].a.get_text(),
                uTell=content.contents[3].get_text(),
                uUrl=content.contents[1].a['href'],
            )
            app.save()

            # 应用数据
            # print(content.contents[-2].select('a')[2]['href'])
            # content_dir = dict(time=content.span.string, url=content.a['href'], name=content.a.string)
            # file_content.append(content_dir)


def article_content(articleId):
    show_url = 'https://www.yiban.cn/forum/article/showAjax'
    show_post = dict(article_id=articleId, channel_id=55461, origin=0, puid=5189448)
    url = requests.post(show_url, data=show_post)
    state = url.status_code
    if state == 200:
        return url.json()


def save(start, last):
    url = requests.post(article_url, data=post)
    state = url.status_code
    if state == 200:
        url_content = url.json()
        list = url_content['data']['list']
    # 存入数据库
    content = list
    mode = True
    for line in content:
        if not start <= strtime(line['updateTime'])[:10] <= last:
            print(start, strtime(line['updateTime']), last)
            mode = False
            break
        article = Article()
        article.id = line['id']
        article.title = line['title']
        article.replyCount = line['replyCount']
        article.replyTime = strtime(line['replyTime'])
        article.createTime = strtime(line['createTime'])
        article.updateTime = strtime(line['updateTime'])
        article.clicks = line['clicks']
        article.upCount = line['upCount']
        article.status = True if line['status'] == '1' else False
        article.url = 'https://www.yiban.cn' + line['url']
        try:
            Writer.objects.get(userId=line['User_id'])
        except:
            writer = Writer()
            writer.userId = line['author']['id']
            writer.regTime = line['author']['regTime']
            writer.name = line['author']['name']
            writer.url = 'https://www.yiban.cn' + line['author']['homeUrl']
            if line['author']['sex'] == 'F':
                writer.sex = False
            elif line['author']['sex'] == 'M':
                writer.sex = True
            if line['author']['birth'] != '0000-00-00':
                writer.birth = line['author']['birth']
            writer.save()
        article.author = Writer.objects.get(userId=line['User_id'])
        try:
            Section.objects.get(sectionId=line['Sections_id'])
        except:
            section = Section()
            section.title = line['Sections_name']
            section.sectionId = line['Sections_id']
            section.save()
        article.section_title = Section.objects.get(sectionId=line['Sections_id'])
        article.save()
    if mode:
        post['page'] += 1
        save(start=start, last=last)
    post['page'] = 1
