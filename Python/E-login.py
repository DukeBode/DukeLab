import json
import requests
from bs4 import BeautifulSoup


class Yiban:
    def init(self):
        pass


def url_data(web_url):
    url = requests.get(web_url)
    state = url.status_code
    if state == 200:
        url.encoding = 'utf-8'
        web_content = BeautifulSoup(url.text, 'html.parser')
        print(web_content.prettify())

        # for content in web_content.select(web_element):
        #     content_time = content.span.string
        #     content_url = content.a['href']
        #     content_name = content.a.string
        #     file_content = {
        #         'time': content_time,
        #         'name': content_name,
        #         'url': content_url
        #     }
        #     print(file_content)
        #     print(content_time + content_name + '\n' + content_url)


def login(user):
    session = requests.session()
    login_url = "https://www.yiban.cn/login/doLoginAjax"
    response_login = session.post(login_url, user)
    # if json.loads(response_login.text)["message"] == "操作成功":
    #     print('ok')
    # else:
    #     print('false')
    # print(session)
    


if __name__ == '__main__':
    user = {
        "account": 17009327942,
        "password": 'db196078',
        "captcha": None
    }
    session = login(user)
    url_data('https://www.yiban.cn/Org/orglistShow/type/forum/puid/5189448')
