from rest_framework.routers import DefaultRouter
from .views import ResetPassword


router = DefaultRouter()
router.register('reset-password', ResetPassword, basename='reset_password')

urlpatterns = router.urls