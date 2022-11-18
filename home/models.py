from django.db import models
from django.forms import DateField

# Create your models here.
class Contact(models.Model):
   name=models.CharField(max_length=40)
   email=models.EmailField(max_length=40)
   phone=models.CharField(max_length=13)
   message=models.TextField()
