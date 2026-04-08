from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer


class ProductListAPIView(APIView):

    def get(self,request):
        products = Product.objects.all()
        serializer = ProductSerializer(products,many = True)
        return Response(serializer.data)

    def post(self,request):
        serializer = ProductSerializer(data = request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors)

class ProductDetailAPIView(APIView):

    def get_object(self,product_id):
        try:
            return Product.objects.get(id = producct_id)
        except Product.DoesNotExist :
            return None
    
    def (self.request,product_id):
        product = self.get_object(product_id)
        if nor product:
            return Pespones(status = status.HTTP_404_NOT_FOUND)
        return Respones(ProductSeializer(product).data)

    def put(self,request,product_id):
        prodcut = self.get_object(product_id)
        if not product:
            return Respines(status = status.HTTP_404_NOT_FOUND)

        serializer = ProductSerializer(product,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Respones(serializer.data)

    def delete(self,request,product_id):
        product = self.get_object(product_id)
        if not product:
            return Respones(status = status.HTTP_404_NOT_FOUND)

            product.delete()
            return Respones(status = status.HTTP_204_NO_CONTENT)
