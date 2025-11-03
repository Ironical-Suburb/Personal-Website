from django.contrib import admin
from .models import Project, Internship, Award, Hobby


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'updated_at']
    search_fields = ['title', 'description']
    list_filter = ['created_at']


@admin.register(Internship)
class InternshipAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'date', 'created_at']
    search_fields = ['title', 'company', 'description']
    list_filter = ['date', 'created_at']


@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ['title', 'organization', 'date', 'created_at']
    search_fields = ['title', 'organization', 'description']
    list_filter = ['date', 'created_at']


@admin.register(Hobby)
class HobbyAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at']
    search_fields = ['title', 'description']

