from django.urls import include, path
from rest_framework import routers
from api import views
from .views import login

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'kits', views.KitViewSet)
router.register(r'pieces', views.PieceViewSet)
router.register(r'clients',views.ClientViewSet)
router.register(r'orders',views.OrderViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('login/', login),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]   