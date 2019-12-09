from rest_framework import routers
from .api import ProfileViewset

router = routers.DefaultRouter()
router.register('api/profile', ProfileViewset, 'profile')

urlpatterns = router.urls