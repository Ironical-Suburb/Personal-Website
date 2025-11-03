from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, InternshipViewSet, AwardViewSet, HobbyViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'internships', InternshipViewSet, basename='internship')
router.register(r'awards', AwardViewSet, basename='award')
router.register(r'hobbies', HobbyViewSet, basename='hobby')

urlpatterns = [
    path('', include(router.urls)),
]

