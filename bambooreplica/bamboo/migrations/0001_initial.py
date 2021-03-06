# Generated by Django 3.0 on 2019-12-09 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('dob', models.DateField()),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('marital_status', models.CharField(choices=[('S', 'Single'), ('M', 'Married')], max_length=1)),
                ('country', models.CharField(max_length=100)),
                ('profile_photo', models.ImageField(upload_to='images/')),
                ('live', models.CharField(max_length=200)),
                ('programming_languages', models.CharField(max_length=200)),
                ('spoken_languages', models.CharField(max_length=200)),
                ('fav_ide', models.CharField(max_length=200)),
            ],
        ),
    ]
