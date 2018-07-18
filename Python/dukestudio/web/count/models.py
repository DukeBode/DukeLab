from django.db import models

# Create your models here.


# 应用
class App(models.Model):
    name = models.CharField(max_length=100)
    update = models.DateTimeField()
    logo = models.ImageField()
    url = models.URLField()
    # 应用状态
    lock = models.BooleanField(default=True)
    # 应用简介
    intro = models.CharField(max_length=500)
    # 可见范围
    privacy = models.CharField(max_length=50)
    # 操作权限
    doPrivacy =models.CharField(max_length=50)
    # 用户名
    uName = models.CharField(max_length=50)
    # 用户电话
    uTell = models.IntegerField()
    # 用户链接
    uUrl = models.URLField()
    # 应用数据
    # print(content.contents[-2].select('a')[2]['href'])
    # content_dir = dict(time=content.span.string, url=content.a['href'], name=content.a.string)
    # file_content.append(content_dir)

    def __str__(self):
        return self.name


# 板块
class Section(models.Model):
    title = models.CharField(max_length=10)
    sectionId = models.IntegerField(primary_key=True)
    url = models.URLField()

    def __str__(self):
        return self.title


# 作者
class Writer(models.Model):
    userId = models.IntegerField(primary_key=True)
    regTime = models.DateTimeField()
    name = models.CharField(max_length=10)
    sex = models.NullBooleanField()
    birth = models.DateTimeField(default='1000-01-01')
    url = models.URLField()

    def __str__(self):
        return self.name


# 帖子
class Article(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    # 回复量
    replyCount = models.IntegerField()
    replyTime = models.DateTimeField()
    createTime = models.DateTimeField()
    updateTime = models.DateTimeField()
    # 点击量
    clicks = models.IntegerField()
    # 点赞量
    upCount = models.IntegerField()
    # 状态
    status = models.BooleanField()
    url = models.URLField()
    # 关联外键
    author = models.ForeignKey("Writer", on_delete=models.CASCADE)
    section_title = models.ForeignKey("Section", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

# 说明:
# 一个数据表对应一个模型
# 主键不需要定义，在生成时自动添加，并且值为自动增加
