#Lab8
from django.urls import path
from . import views
#Lab9
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet,ProductViewSet


#Lab8
urlpatterns = [
    path('products/',views.product_list),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
]

#Lab9
router = DefaultRouter()
router.register(r'categories',CategoryViewSet)
router.register(r'products',ProductViewSet)
urlpatterns = router.urls