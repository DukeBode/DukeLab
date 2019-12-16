





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
        return requests.post(url=f'{self.BASE_URL}msg/letter', data=data).json()

    def sport_steps(self):
        pass


# https://q.yiban.cn/joingroup/joinGroupAjax
# post
   # App_id: 117153

   # code: joingroup-1533792916812