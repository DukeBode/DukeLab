from django.shortcuts import render, HttpResponseRedirect, HttpResponse
from django.contrib import auth
from .config import app, bind_option

# Create your views here.

def before_bind(request):
    if request.method == 'GET':
        try:
            website = request.GET['op']
            # try:
            #     state = parse.quote(request.GET['next'])
            #     state = request.GET['next']
            #     bind_option[website] = app.authorize(state=state)
            #     print(state)
            # except KeyError:
            #     pass
            try:
                HttpResponseRedirect(bind_option[website])
            except KeyError:
                return HttpResponse(f'<p>非常抱歉，暂不支持{website}授权，请联系网站管理员添加！！</p>')
        except KeyError:
            pass
    return HttpResponseRedirect(bind_option['yiban'])

def back(request):
    if request.method == 'GET':
        try:
            data = app.access_token(request.GET['code'])
            # try:
            #     demo = User.objects.get(username=data['userid'])
            #     demo.set_password(data['access_token'])
            # except:
            #     demo = User.objects.create_user(username=data['userid'], password=data['access_token'])
            # demo.save()
            user = auth.authenticate(request, username=data['userid'], password=data['access_token'])
            auth.login(request, user)
            # app.letter({
            #     'access_token': data['access_token'],
            #     'to_yb_uid': data["userid"],
            #     'content': '你正在使用易班账户登陆博德校园，欢迎你的使用！！',
            #     'template': 'system'
            # })
            state = request['state']
            print(state)
            # if state != 'yiban':
                # return HttpResponseRedirect(state)
            return HttpResponse(f'<p>{data}</p>'
                                f'<a target="_blank" href="add_friend">'
                                f'Spring学习之旅(十一) Sp...</a>')
        except KeyError:
            return HttpResponse('<p>error，请重试！！！</p>')
    return HttpResponse('<p>网站维护中</p>')

def login(request):
    # auth.login(request, user)
    pass

def logout(request):
    auth.logout(request)