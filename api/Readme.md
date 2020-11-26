# Instructions for creating an API
### Processes
- Need to install drf _pip install djangorestframework_ .
- import name in installed app by adding _rest_framewotk_ .
- Create serializers for creating instances for rest_framework classes. They turn model instance to json data.
    - In serializers invoke ModelSerializer class to turn model data into json.
- create view & invoke generic rest_framework classes to create api endpoints class for routing.
- ListApi, CreateApi views are generic rest_framewrok classes example.
- create a view class with invoking appropriate rest_framework class.
- and call the created serializers.
- create urls for views.
- & done ✅

#### code for serializers file
```python
from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
```

#### code for views file
```python
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

class BookApiView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
```
