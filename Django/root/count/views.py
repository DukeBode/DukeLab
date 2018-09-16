from django.shortcuts import render
# 分页
from django.core.paginator import Paginator
from django.http import HttpResponse, JsonResponse
from .models import App, Article
from . import data
# Create your views here.


def index(request):
    return render(request, 'count/index.html', {
        'list': list
    })


def article(request, page):
    page = 1 if page == '' else int(page)
    articles = Paginator(Article.objects.all(), 20)
    return render(request, 'count/article.html', {
        'articles': articles.page(page)
    })


def app(request, page):
    page = 1 if page == '' else int(page)
    apps = Paginator(App.objects.all(), 10)
    return render(request, 'count/app.html', {
        'apps': apps.page(page)
    })


def detail(request, id):
    return render(request, 'count/detail.html', {
        'content': data.article_content(articleId=id)
    })


def save(request):
    content = {}
    if request.POST:
        startTime = request.POST['startTime']
        lastTime = request.POST['lastTime']
        data.save(start=startTime, last=lastTime)
        data.app()
        content = dict(startTime=startTime, lastTime=lastTime)
    return render(request, "count/form.html", content)


def ajax(request):
    list_all = Paginator(App.objects.all, 10)
    return JsonResponse({'data': list_all})
