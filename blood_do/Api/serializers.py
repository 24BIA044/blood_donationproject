from rest_framework import serializers
from .models import *
# Create your views here.
class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class DonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donor
        fields = "__all__"
 
class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        field ="__all__"

class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipient
        fields = '__all__'

class BloodRequestSerializer(serializers.ModelSerializer):  
    class Meta:
        model = BloodRequest
        fields = '__all__'



