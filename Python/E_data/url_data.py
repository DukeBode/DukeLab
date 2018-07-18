import json
import re
# import pandas
import requests
from bs4 import BeautifulSoup

user_id=5189448
app_url='https://q.yiban.cn/audit/index'
access_token='84bf898f8e442e1c812e6b5aac531f12'

#    页面浏览量 URL: https://q.yiban.cn/stat/getStatAjax
#   APP_id flag：5 tab：2独立访客量1页面浏览量
# 

def get_cookies():
    s = requests.session()
    url = s.get(app_url,params={'access_token':access_token})
    return s.cookies.get_dict()

def url_data(item=1):
    get_data=dict(checkStatus=2,user_id=user_id,keyword='',page=item)
    # url=requests.get(web_url,cookies=get_cookies())
    url=requests.get(app_url, params=get_data, cookies=get_cookies())
    # url = requests.get(web_url)
    # print(requests.cookies.RrequestsCookieJar())
    state = url.status_code
    if state == 200:
        url.encoding = 'UTF-8'#'gbk'
        web_content = BeautifulSoup(url.text, 'html.parser')
        # 正则获取数据
        information = re.search(r"var data =(.*?);$",web_content.body.script.get_text()).group(1)
        information = eval(information)
        for content in web_content.select('table tbody tr'):
            # print(content)
            print(content.contents)
            # 更新时间
            print(content.contents[9].get_text())
            # 应用名
            print(content.contents[5].get_text())
            # 应用链接
            print(content.select('.copy-btn')[0]['data-url'])
            # 更多信息
            info=information[int(re.sub("\D","",content.contents[7].a['href']))]
            # 应用logo
            print(info["logo"])
            # 应用简介
            print(info['intro'])
            # 可见范围
            print(info['seePrivacy'])
            # 操作权限
            print(info['doPrivacy'])
            # 用户名
            print(content.contents[1].a.get_text())
            # 用户电话
            print(content.contents[3].get_text())
            # 用户链接
            print(content.contents[1].a['href'])
            # 应用状态
            print(content.contents[11].get_text())
            # 应用数据
            # print(content.contents[-2].select('a')[2]['href'])
            # content_dir = dict(time=content.span.string, url=content.a['href'], name=content.a.string)
            # file_content.append(content_dir)



if __name__ == '__main__':
    for n in range(1):
        url_data(n+1)
    # url_data()
