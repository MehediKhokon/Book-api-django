# Instructions for creating an API
### Processes
- Need to install drf _pip install djangorestframework_ .
- import name in installed app by adding _rest_framewotk_ .
- Create serializers for creating instances for rest_framework classes. They turn model instance to json data.
    - In serializers invoke ModelSerializer class to turn model data json.
- create view & invoke generic rest_framework classes to create api endpoints class for routing.
- ListApi, CreateApi views are generic rest_framewrok classes example.
- create a view class with invoking appropriate rest_framework class.
- and call the created serializers.
- create urls for views.
- & done ✅
