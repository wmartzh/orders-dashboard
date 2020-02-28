from .models import User, Kit,Piece,Client,Order
from rest_framework import serializers



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url','id', 'username','first_name','last_name', 'email','password','is_staff']

class KitSerializer( serializers.ModelSerializer):

    class Meta:
        model = Kit
        fields=["id","brand","model","hp"]

class PieceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Piece
        fields = ['id','name','kit']


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = ['id','first_name','last_name','email','phone_number','address','timestamp']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id','order_code','client_name','kit_name','date_init','date_finish']