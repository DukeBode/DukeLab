from django.shortcuts import render, HttpResponse
from xml.etree import ElementTree as ET
import hashlib, time
from django.views.decorators.csrf import csrf_exempt
from .config import TOKEN, mp

# Create your views here.
@csrf_exempt
def validate(request):
    if request.method == 'POST':
        xml = ET.fromstring(request.body)
        return render(request,'mp/yb_reply_text.xml', {
            'FromUserName': xml.find('ToUserName').text,
            'ToUserName': xml.find('FromUserName').text,
            'CreateTime': str(int(time.time()))
        })
    if request.method == 'GET':
        tmpArr = [
            TOKEN,
            request.GET['timestamp'],
            request.GET['nonce'],
        ]
        tmpArr.sort()
        temp = hashlib.sha1(''.join(tmpArr).encode('utf-8')).hexdigest()
        if temp == request.GET['signature']:
            return HttpResponse(request.GET['echostr'])
    return HttpResponse('')

# @login_required(login_url='/yiban/before_bind?op=yiban')