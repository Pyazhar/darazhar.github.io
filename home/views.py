

from django.shortcuts import render,HttpResponse
from home.models import Contact
from datetime import datetime

# Create your views here.
def index(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        phone=request.POST.get('phone')
        message=request.POST.get('message')
        contact=Contact(name=name, email=email, phone=phone, message=message)
        contact.save()
    return render(request, 'contact.html')