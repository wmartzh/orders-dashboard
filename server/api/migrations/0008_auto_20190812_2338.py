# Generated by Django 2.2.3 on 2019-08-13 05:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20190812_2336'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'ordering': ['date_finish']},
        ),
    ]
