from bamboo.models import Profile
from rest_framework import viewsets, permissions
from .serializers import ProfileSerializer

class ProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProfileSerializer