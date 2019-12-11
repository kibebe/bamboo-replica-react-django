from bamboo.models import Profile
from rest_framework import viewsets, permissions
from .serializers import ProfileSerializer

class ProfileViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return self.request.user.profile.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)