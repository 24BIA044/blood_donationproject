from django.contrib import admin
from .models import Admin, Donor, Donation, Recipient, BloodRequest

# Register your models here.
admin.site.register(Admin)
admin.site.register(Donor)
admin.site.register(Donation)
admin.site.register(Recipient)
admin.site.register(BloodRequest)
