"""URL Configuration for chains app."""
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('core.urls'), name='api'),
]
