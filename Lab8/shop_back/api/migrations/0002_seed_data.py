from django.db import migrations


def seed_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    smartphones = Category.objects.create(name='Smartphones')
    laptops = Category.objects.create(name='Laptops')
    headphones = Category.objects.create(name='Headphones')
    tablets = Category.objects.create(name='Tablets')

    Product.objects.bulk_create([
        Product(
            name='iPhone 15 Pro',
            price=599000,
            description='Apple flagship smartphone with A17 Pro chip and titanium design.',
            count=10,
            is_active=True,
            category=smartphones,
        ),
        Product(
            name='Samsung Galaxy S24 Ultra',
            price=580000,
            description='Premium Android smartphone with powerful camera and S-Pen.',
            count=8,
            is_active=True,
            category=smartphones,
        ),
        Product(
            name='MacBook Air M1',
            price=620000,
            description='Lightweight laptop with Apple M1 chip and all-day battery.',
            count=5,
            is_active=True,
            category=laptops,
        ),
        Product(
            name='Sony WH-1000XM5',
            price=210000,
            description='Industry-leading noise cancelling wireless headphones.',
            count=12,
            is_active=True,
            category=headphones,
        ),
        Product(
            name='iPad Pro 12.9',
            price=700000,
            description='Powerful tablet with M2 chip.',
            count=7,
            is_active=True,
            category=tablets,
        ),
    ])


def remove_seed_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    Product.objects.filter(
        name__in=[
            'iPhone 15 Pro',
            'Samsung Galaxy S24 Ultra',
            'MacBook Air M1',
            'Sony WH-1000XM5',
            'iPad Pro 12.9',
        ]
    ).delete()
    Category.objects.filter(
        name__in=['Smartphones', 'Laptops', 'Headphones', 'Tablets']
    ).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_data, remove_seed_data),
    ]
