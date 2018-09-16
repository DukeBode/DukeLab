from django.shortcuts import render, HttpResponseRedirect, HttpResponse

from .config import app
# Create your views here.


def index(request):
    try:
        uid = request.GET['uid']
        return HttpResponseRedirect(app.authorize(state=uid))
    except KeyError:
        return HttpResponseRedirect(app.authorize())


def add_friends(request):
    if request.method == 'GET':
        try:
            data = app.access_token(request.GET['code'])
            state = request.GET['state']
            info = app.user('me', {'access_token': data['access_token']})
            if state == 'yiban':
                return render(request, 'friends_in_yiban/index.html', {
                    'info': info['info'],
                    'msg': '成功为你生成你的二维码！！',
                    'data': f'http://dukestudio.tech/yiban/add_friends?uid={data["userid"]}'
                })
            status = app.friend_apply({
                'access_token': data['access_token'],
                'to_yb_uid': request.GET['state'],
                'content': '通过博德校园添加好友'
            })
            if status['status'] == 'success':
                 msg = '成功发送申请！！',
            msg = status["info"]["msgCN"]
            return render(request, 'friends_in_yiban/index.html', {
                    'info': info['info'],
                    'msg': msg,
                    'data': f'http://dukestudio.tech/yiban/add_friends?uid={data["userid"]}',
                })
        except KeyError:
            return HttpResponseRedirect(app.authorize())





