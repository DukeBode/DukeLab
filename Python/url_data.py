import json

import pandas
import requests
from bs4 import BeautifulSoup


def url_data(web_url, file_url='json.json', web_element='#text_list ul li'):
    file_content = []
    url = requests.get(web_url)
    state = url.status_code
    if state == 200:
        url.encoding = 'gbk'
        web_content = BeautifulSoup(url.text, 'html.parser')
        # content.prettify()
        for content in web_content.select(web_element):
            content_dir = dict(time=content.span.string, url=content.a['href'], name=content.a.string)
            file_content.append(content_dir)

        print(file_content)
        file = open(file_url, mode='a', encoding='utf-8')
        json.dump(file_content, file, indent=4)
        file.close()


if __name__ == '__main__':
    # web = input('网址：')
    web = 'http://www.gsut.edu.cn/www/HdClsContentMain.asp?ClassId=56&Keywords=&MainType=0&page='
    for n in range(2):
        url_data(web + str(n + 1))
