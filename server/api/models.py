from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager
# Create your models here.
class UserManager(BaseUserManager):

    
    def create_user(self,email,username,first_name="",last_name="",password=None,active=True,is_staff=False,is_admin=False,is_active=True,is_superuser=False):
        if not email:
            raise ValueError("User must have an email address")
        
        if not password:
            raise ValueError("Usrs must have a password")
        
        user_obj = self.model(
            email= self.normalize_email(email)
        )
        user_obj.username = username
        user_obj.first_name = first_name
        user_obj.last_name = last_name 
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.is_superuser = is_superuser
        user_obj.active = is_active
        user_obj.save(using=self._db)

        return user_obj
        

    def create_staffuser(self, email,username, password):
        user = self.create_user(email, username, password=password, is_staff=True, is_admin=True)
        
        return user

    def create_admin(self, username,first_name,last_name,email,password):
        user = self.create_user(email=email,username=username,first_name=first_name,last_name=last_name,password=password, is_staff=True,is_active=True,is_admin=True,is_superuser=False)
        return  user

    def create_superuser(self,email,username,password,):
        user = self.create_user(email,username, password=password, is_staff=True,is_admin=True, is_superuser=True)
        return user


class User(AbstractUser):
    
    objects = UserManager() 

    email       = models.EmailField(max_length=255, unique=True)
    first_name  = models.CharField(max_length=12)
    last_name   = models.CharField(max_length=12)
    username    = models.CharField(max_length=15, unique=True)
    active      = models.BooleanField(default=True)
    staff       = models.BooleanField(default=False)
    admin       = models.BooleanField(default=False)
    timestamp   = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'username'

    REQUIRED_FIELDS = ['email','password']

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.username

    def get_short_name():
        return self.username
    
    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin
    
    @property
    def is_active(self):
        return self.active
    
class Kit(models.Model):
    id = models.AutoField(primary_key=True)
    brand = models.CharField(max_length=30)
    model = models.CharField(max_length=15)
    hp = models.CharField(null=True ,max_length=15)

    class Meta:
        ordering = ['brand']

    
    def __str__(self):
        return " %s %s %s"%( self.brand,self.model,self.hp)

class Piece(models.Model):
    id = models.AutoField(primary_key=True)
    name =  models.CharField(max_length=15)
    kit = models.CharField(max_length=100)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return " %s %s"%( self.name,self.kit)

class Client(models.Model):
    
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email     = models.EmailField(max_length=255, unique=True,default='no-def')

    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=120)
    timestamp   = models.DateTimeField(auto_now=True)


class Order(models.Model):
    order_code = models.CharField(max_length=12)
    client_name = models.CharField(max_length=60)
    kit_name = models.CharField(max_length=60)
    date_init = models.CharField(max_length=12)
    date_finish = models.CharField(max_length=24)
    class Meta:
        ordering = ['date_finish']
   



