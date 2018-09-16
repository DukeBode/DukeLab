from django.urls import path, re_path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('login', views.login),
    path('logout', views.logout),
    path('before_bind', views.before_bind),
    path('<slug:website>/back',views.back)
]