"""Project backend URL Configuration."""
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('api.urls', namespace='api', app_name='api')),
]
