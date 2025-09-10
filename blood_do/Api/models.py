from django.db import models

# Create your models here.
class Admin(models.Model):
    Adminname = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.Adminname

class Donor(models.Model):
    name = models.CharField(max_length=100)
    email=models.EmailField(max_length=100, unique=True)
    phone=models.CharField(max_length=15)
    age = models.IntegerField()
    blood_type = models.CharField(max_length=3)
    last_donation_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.blood_type})"

class Donation(models.Model):
    donor = models.ForeignKey(Donor, on_delete=models.CASCADE)
    donation_date = models.DateField()
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    location = models.CharField(max_length=200)

    def __str__(self):
        return f"Donation by {self.donor.name} on {self.donation_date}"

class Recipient(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=15)
    age = models.IntegerField()
    blood_type = models.CharField(max_length=3)
    last_received_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.blood_type})"

class BloodRequest(models.Model):
    recipient = models.ForeignKey(Recipient, on_delete=models.CASCADE)
    request_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('fulfilled', 'Fulfilled')])
    location = models.CharField(max_length=200)

    def __str__(self):
        return f"Blood request by {self.recipient.name} on {self.request_date}"


