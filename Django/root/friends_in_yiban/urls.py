from django.urls import re_path,path

from . import views

urlpatterns = [
    path('/back', views.add_friends),
    path('', views.index)
]
