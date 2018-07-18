import requests
# 文章
article_url = 'http://www.yiban.cn/forum/article/listAjax'
# 内容
show_url = 'https://www.yiban.cn/forum/article/showAjax'
articleHot_url = 'https://www.yiban.cn/forum/article/hotArticleAjax'
# 回复
reply_url = 'https://www.yiban.cn/forum/reply/listAjax'
# 快搭应用数据统计
'https://q.yiban.cn/audit/stat?access_token=84bf898f8e442e1c812e6b5aac531f12'
# 小应用审查管理
'https://q.yiban.cn/audit/index?access_token=84bf898f8e442e1c812e6b5aac531f12'
# 主页管理
'http://www.yiban.cn/manage/ad/index?access_token=84bf898f8e442e1c812e6b5aac531f12'

post = dict(channel_id=55461, group_id=0, my=0, need_notice=0, orderby='updateTime', page=1, puid=5189448,
            Sections_id=-1, size=20)
show_post = dict(article_id=43748900, channel_id=55461, origin=0, puid=5189448)
reply_post = dict(article_id=43748900, channel_id=55461, order=1, page=1, puid=5189448, size=5)
articleHot_post = dict(article_id=43748900, channel_id=55461, puid=5189448)

 
url = requests.post(show_url, data=show_post)
state = url.status_code
if state == 200:
    url_content = url.json()
    print(url_content)
