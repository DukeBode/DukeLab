from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Account(AbstractUser):
    yb_userid=models.IntegerField()


class YB_account(models.Model):
    yb_userid = models.IntegerField()
    yb_username = models.CharField()
    yb_usernick = models.CharField(blank=True)
    yb_sex = models.CharField(blank=True)
    yb_money = models.IntegerField()
    yb_exp = models.IntegerField()
    yb_userhead = models.URLField()
    yb_schoolid = models.IntegerField()
    yb_schoolname = models.CharField()