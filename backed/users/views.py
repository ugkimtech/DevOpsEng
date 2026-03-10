from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from .serializers import ResetPasswordSerializer


class ResetPassword(ModelViewSet):
    serializer_class = ResetPasswordSerializer
    
    def get_queryset(self):
        user = self.request.user
        #Logic for password change here
        return [user]
        