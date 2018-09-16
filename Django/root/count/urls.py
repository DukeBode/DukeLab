from django.urls import path, re_path

from . import views

urlpatterns = (
    re_path(r'^app([0-9]*)/$', views.app, name='app'),
    re_path(r'^article([0-9]*)/$', views.article, name='article'),
    re_path(r'^$', views.index, name='index'),
    re_path(r'^detail/([0-9]+)/$', views.detail, name='detail'),
    path('save', views.save, name='save'),
)
