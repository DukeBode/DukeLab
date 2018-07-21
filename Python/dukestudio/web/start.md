## 开发
1. 创建django项目web
`django-admin startproject web`
1. 切换目录至web
`cd web`
1. 启动开发服务器
`python manage.py runserver`
1. [change->setting.py]:en-us zh-Hans
创建应用
1. python manage.py startapp count
创建超级账户
python manage.py createsuperuser


生成迁移文件，在migrations生成一个文件
python manage.py makemigrations count
执行迁移
python manage.py migrate

## linux环境
```shell
yum install python36
python36 get-pip.py
pip3 install uwsgi
yum install nginx
yum install
```

## 部署前
1. 修改settings.py
ALLOWED_HOSTS = ['公网ip','域名']

1. 删除migrations下数字开头的python文件

1. 生成环境包
`pip freeze > requirements.txt`

## 部署
1. 创建虚拟环境
`python36 -m venv /home/web/venv`
1. 激活虚拟环境
`source /home/web/venv/bin/activate`
1. 安装环境包
`pip3 install -r requirements`
1. 同步数据库、建立管理员账号、同步静态文件
```shell
python36 manage.py makemigrations
python36 manage.py migrate
python36 manage.py createsuperuser
python36 manage.py collectstatic
```
1. 测试
`python36 manage.py runserver 172.18.173.34:80`
1. 修改settings.py
`DEBUG = False`
1. 退出环境
`deactivate`

uwsgi.ini
nginx.conf
测试
nginx -t