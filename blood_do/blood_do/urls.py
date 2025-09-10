"""
URL configuration for blood_do project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from Api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/admin/', AdminViewSet.as_view({'get': 'list', 'post': 'create'}), name='admin-list'),
    path('api/donors/', DonorViewSet.as_view({'get': 'list', 'post': 'create'}), name='donor-list'),
    path('api/donations/', DonationViewSet.as_view({'get': 'list', 'post': 'create'}), name='donation-list'),
    path('api/recipients/', RecipientViewSet.as_view({'get': 'list', 'post': 'create'}), name='recipient-list'),
    path('api/blood-requests/', BloodRequestViewSet.as_view({'get': 'list', 'post': 'create'}), name='blood-request-list'),
]