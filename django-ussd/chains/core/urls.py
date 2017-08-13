from ussd.views import AfricasTalkingUssdGateway
from django.conf.urls import url

urlpatterns = [
    url(r'at_gateway',
        AfricasTalkingUssdGateway.as_view(),
        name='africastalking_url')
    ]
