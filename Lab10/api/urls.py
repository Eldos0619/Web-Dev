#Lab8
from django.urls import path
from . import views
#Lab9
from rest_framework.routers import DefaultRouter
# from .views import CategoryViewSet,ProductViewSet
from .views import *


#Lab8
urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryListAPIView.as_view()),
]

#Lab9
# router = DefaultRouter()
# router.register(r'categories',CategoryViewSet)
# router.register(r'products',ProductViewSet)
# urlpatterns = router.urls