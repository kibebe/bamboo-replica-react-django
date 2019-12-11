from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    MARITAL_CHOICES = (
        ('S', 'Single'),
        ('M', 'Married'),
    )
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    marital_status = models.CharField(max_length=1, choices=MARITAL_CHOICES)
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    country = models.CharField(max_length=100)
    profile_photo = models.ImageField(upload_to='images/')
    live = models.CharField(max_length=200)
    programming_languages = models.CharField(max_length=200)
    spoken_languages = models.CharField(max_length=200)
    fav_ide = models.CharField(max_length=200)

    def __str__(self):
        return self.last_name