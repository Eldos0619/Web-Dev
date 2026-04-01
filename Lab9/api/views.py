#Lab8 imports
from django.shortcuts import render
from django.http import JsonResponse
from .models import Product,Category
#Lab9 imports
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import CategorySerializer,ProductSerializer


# Create your views here.

#Lab8
def product_list(request):
    products = Product.objects.all()
    data = []

    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        })

    return JsonResponse(data, safe=False)

def product_detail(request,id):
    try:
        p = Product.objects.get(id = id)
        data = ({
            "id" : p.id,
            "name" : p.name,
            "price" : p.price,
            "description" : p.description,
            "count" : p.count,
            "is_active" : p.is_active,
            "category_id" : p.categoty_id
        })

        return jsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({"error" : "Product not found"},status = 404)

def category_list(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request,id):
    try:
        c = Category.objects.get(id = id)
        data = {"id:" : c.id,"name" : c.name}
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({"error" : "Category not found"},status = 404)

def category_products(request,id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()

        data = []
        for p in products:
            data.append({
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "description": p.description,
                "count": p.count,
                "is_active": p.is_active,
            })

        return JsonResponse(data,safe = False)
    except Category.DoesNotExist:
        return JsonResponse({"error" : "Category not found"},ststus = 404)

#Lab9
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail = True,methods = ['get'])
    def products (self,request,pk = None):
        category = self.get_object()
        products = Prosuct.objects,filter(category=category)
        serializer = ProductSerializer(products,many = True)
        return Response(serializer.data)
    

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

