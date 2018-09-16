from django.contrib import admin
from django.utils.html import format_html
from .models import Article, Writer, Section

# Register your models here.
admin.site.site_header = '易班帖管理系统'
admin.site.site_title = '运维中心'


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    def title_show(self):
        color = '#000000' if self.status else '#FF0000'
        return format_html(f'<a href={self.url} target="_blank" style="color:{color}">{self.title}</a>')
    title_show.short_description = '题目'
    list_display = ['pk', 'updateTime', title_show, 'author', 'clicks', 'upCount', 'replyCount', 'section_title']
    # 每页显示数量
    list_per_page = 20
    # 过滤字段
    list_filter = ('status', 'section_title', 'createTime')
    # 搜索字段
    # search_fields = ('author',)


@admin.register(Writer)
class WriterAdmin(admin.ModelAdmin):
    def sex_show(self):
        if self.sex is None:
            return '未知'
        else:
            return '男'if self.sex else '女'
    list_display = ['userId', 'name', sex_show, 'birth', 'regTime']
    list_filter = ('sex',)


@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ['sectionId', 'title']
