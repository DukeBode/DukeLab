#!/usr/bin/env python3
import re
import time
import requests
from PIL import Image
from urllib import parse
from base64 import b64encode,urlsafe_b64encode
from Crypto.Cipher import PKCS1_OAEP,PKCS1_v1_5
from Crypto.PublicKey import RSA

HOST = 'https://www.yiban.cn'

class User:
    token=''
    header = {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134',
    }
    def __init__(self, account, password):
        self.account=account
        self.password=password
        self.req=requests.Session()

    # 加密
    def __password(self, publicKey):
        return self.password
        cipher = PKCS1_v1_5.new(RSA.importKey(publicKey))
        ciphertext = cipher.encrypt(self.password.encode(encoding='utf-8'))
        return b64encode(ciphertext).decode('utf-8')

    # 获得验证码图片
    def __captcha(self, img):
        f = open('./captcha.png','wb')
        f.write(img.content)
        f.close()
        return img.cookies

    def token(self):
        loginPage = self.req.get(url=f'{HOST}/login',headers=self.header)
        print(loginPage.cookies)
        publicKey = re.search(r'data-keys=\'([\s\S]*?)\'',loginPage.text).group(1)
        iscaptcha = re.search(r'isCaptcha=\"([0-9])\"',loginPage.text).group(1)
        captchaUrl = HOST+re.search(r'/captcha/index\?([0-9]+)',loginPage.text).group(0)
        img = self.req.get(captchaUrl,headers=self.header)
        self.__captcha(img)
        data = dict(
            account=self.account,
            captcha=None,
            keysTime=re.search(r'data-keys-time=\'(.*?)\'',loginPage.text).group(1),
            # password=parse.quote(self.__password(publicKey)),
            password=self.__password(publicKey)
        )
        LOGIN_URL = HOST + '/login/doLoginAjax'
        # data['captcha']=parse.quote(input("请输入图形验证码："))
        login = self.req.post(LOGIN_URL, headers=self.header, data=data)
        print(login.text)
        # while loginUrl.json()['code']!='200':#=='711':
        #     print(loginUrl.json())
        #     captchaUrl=HOST+'/captcha/index?'+str(int(time.time()))
        #     # captchaUrl=BASE_URL+re.search(r'/captcha/index\?([0-9]+)',loginPage.text).group(0)
        #     # cookies = requests.utils.dict_from_cookiejar(self.__captcha(req, captchaUrl))
        #     self.__captcha(self.req.get(captchaUrl,headers=self.header))
        #     data['captcha']=parse.quote(input("请输入图形验证码："))
        #     loginUrl = self.req.post(LOGIN_URL, headers=self.header, data=data)
     
        # print(login.text)
        hello=self.req.get('https://www.yiban.cn')
        token = hello.cookies
        return token



if __name__=='__main__':
    song=User('17009327942','123456a')
    print(song.token())
   

