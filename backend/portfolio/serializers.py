from rest_framework import serializers
from .models import Project, Internship, Award, Hobby


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'icon', 'link', 'image_url', 'tags', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = ['id', 'title', 'company', 'date', 'description', 'responsibilities', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = ['id', 'title', 'organization', 'date', 'description', 'icon', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class HobbySerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby
        fields = ['id', 'title', 'description', 'icon', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

