import requests
import time
import xml.etree.ElementTree as ET


class MediaPlatform:
    def __init__(self, host):
        self.BASE_URL = 'http://mp.yiban.cn/'
        self.payload = dict(
            grant_type='client_credentials',
            appid=host['AppId'],
            secret=host['AppSceret'],
        )
        self.__end_time = 0
        self.data = {}

    @property
    def access_token(self):
        if self.__end_time <= time.time():
            req = requests.post(
                url=f'{self.BASE_URL}cgibin/oauth/token', data=self.payload)
            self.data = req.json()
            print(self.data)
            try:
                self.__end_time = time.time() + int(self.data['expires_in'])
            except KeyError:
                return ''
        return self.data['access_token']

    def group_create(self):
        # http: // mp.yiban.cn / cgibin / groups / create?access_token = ACCESS_TOKEN
        pass

    @property
    def group_list(self):
        req = requests.get(url=self.BASE_URL + f'cgibin/groups/get?access_token={self.access_token}')
        return req.json()

    # 用户所在分组
    def group_search(self, openid):
        req = requests.post(url=f'{self.BASE_URL}cgibin/groups/getid?access_token={self.ACCESS_TOKEN}', data={
            'openid': openid,
        })
        return req.json()

    def group_update(self):
        # http: // mp.yiban.cn / cgibin / groups / update?access_token = ACCESS_TOKEN
        pass

    def group_move(self):
        # http: // mp.yiban.cn / cgibin / groups / members / update?access_token = ACCESS_TOKEN
        pass

    def user_info(self, openid, lang='zh_CN'):
        req = requests.get(url=f'{self.BASE_URL}cgibin/user/info', params={
            'access_token': self.access_token,
            'openid': openid,
            'lang': lang,
        })
        return req.json()

    def user_list(self, next_openid=''):
        # data = '&next_openid={next_openid}'
        req = requests.get(url=f'{self.BASE_URL}cgibin/user/get?access_token={self.access_token}')
        return req.json()

    @property
    def menu(self):
        req = requests.get(url=f'{self.BASE_URL}cgibin/menu/get?access_token={self.access_token}')
        return req.json()

    # 自定义菜单
    @menu.setter
    def menu(self, data):
        if data:
            # {'errcode': 43002, 'errmsg': '需要POST请求'}
            req = requests.post(url=f'{self.BASE_URL}cgibin/menu/create?access_token={self.access_token}', data=data)
        else:
            req = requests.get(url=f'{self.BASE_URL}cgibin/menu/delete?access_token={self.access_token}')
        print(req.json())


class App:
    def __init__(self, host):
        self.BASE_URL = 'https://openapi.yiban.cn/'
        self.__app_url = host['APP_URL']
        self.__redirect_uri = host['redirect_uri']
        self.__app_id = host['AppID']
        self.__app_secret = host['AppSecret']
        self.__data = {}

    # 授权接口
    # 官方授权页面
    def authorize(self, state='yiban'):
        return f'{self.BASE_URL}oauth/authorize?' \
               f'client_id={self.__app_id}&redirect_uri={self.__redirect_uri}&state={state}'

    # access_token
    def access_token(self, code):
        data = {
            'client_id': self.__app_id,
            'client_secret': self.__app_secret,
            'code': code,
            'redirect_uri': self.__redirect_uri
        }
        req = requests.post(url=f'{self.BASE_URL}oauth/access_token', data=data)
        return req.json()

    def token_info(self, yb_uid):
        req = requests.post(url=f'{self.BASE_URL}oauth/token_info', data={
            'client_id': self.__app_id,
            'yb_uid': yb_uid,
        })
        return req.json()

    # 用户接口
    def user(self, item, data):
        url = f'{self.BASE_URL}user/{item}'
        req = requests.get(url, params=data)
        return req.json()

    def friend_apply(self, data):
        req = requests.post(url=f'{self.BASE_URL}friend/apply', data=data)
        return req.json()

    # 获取当前应用所属开发者/可见学校其它的关联应用
    def relate_app(self, data):
        req = requests.get(url=f'{self.BASE_URL}school/relate_app', params=data)
        return req.json()

    # 站内信
    def letter(self, data):
        req = requests.post(url=f'{self.BASE_URL}msg/letter', data=data)
        return req.json()


    def sport_steps(self):
        pass


class Message:
    def __init__(self, message):
        xml = ET.fromstring(message)
        self.data = dict(
            ToUserName=xml.find('ToUserName').text,
            FromUserName=xml.find('FromUserName').text,
            CreateTime=xml.find('CreateTime').text,
            MsgType=xml.find('MsgType').text,
            Content=xml.find('Content').text,
            MsgId=xml.find('MsgId').text
        )

    def text(self):
        pass

    def reply(self):
        xml_base = f'''
            <xml>
            <ToUserName><![CDATA[{self.data['FromUserName']}]]></ToUserName>
            <FromUserName><![CDATA[{self.data['ToUserName']}]]></FromUserName>
            <CreateTime>{str(int(time.time()))}</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[123]]></Content>
            </xml>
        '''
# https://q.yiban.cn/joingroup/joinGroupAjax
# post
   # App_id: 117153

   # code: joingroup-1533792916812