from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

from .models import  User, Kit, Piece, Client, Order

class UserAdmin(admin.ModelAdmin):
     list_display = ('username','email','is_staff','is_admin','is_superuser')
     list_filter = ("username",)


class KitAdmin (admin.ModelAdmin):
     list_display = ('brand','model')
     list_filter = ("brand",)

class PieceAdmin (admin.ModelAdmin):
     list_display = ('name','kit')
     list_filter = ("name",)

class ClientAdmin(admin.ModelAdmin):
     list_display = ('first_name','last_name','email','phone_number','address','timestamp')
     list_filter = ("first_name",)
     
class OrderAdmin(admin.ModelAdmin):
     list_display = ('order_code','client_name','kit_name','date_init','date_finish')
     list_filter = ("order_code",)


admin.site.register(User,UserAdmin)
admin.site.register(Kit, KitAdmin)
admin.site.register(Piece, PieceAdmin)
admin.site.register(Client,ClientAdmin)
admin.site.register(Order,OrderAdmin)