import requests
import Config as School

# BASE_URL = 

login = '/login/doLoginAjax'
Article = dict(
    list = '/forum/article/listAjax',
    content = '/forum/article/showAjax',
    reply = '/forum/reply/listAjax',
)

App = dict(
    # 小应用审查管理
    list = 'https://q.yiban.cn/audit/index',
    # 快搭数据
    data = 'https://q.yiban.cn/audit/stat',
)

index = dict(
    # 主页管理
    manage = 'http://www.yiban.cn/manage/ad/index',
)
articleHot_url = 'https://www.yiban.cn/forum/article/hotArticleAjax'