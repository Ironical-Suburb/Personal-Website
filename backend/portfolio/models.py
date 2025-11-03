from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=10, default='💻')
    link = models.URLField(blank=True, null=True)
    image_url = models.URLField(blank=True, null=True, help_text='URL to project image/screenshot')
    tags = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Internship(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    date = models.CharField(max_length=50)
    description = models.TextField()
    responsibilities = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} at {self.company}"


class Award(models.Model):
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    date = models.CharField(max_length=50)
    description = models.TextField()
    icon = models.CharField(max_length=10, default='🏆')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title


class Hobby(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=10, default='🎯')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['title']
        verbose_name_plural = 'Hobbies'

    def __str__(self):
        return self.title

