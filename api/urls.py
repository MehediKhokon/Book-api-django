from django.urls import path
from .views import BookListView, BookApiView

urlpatterns = [
    path('', BookListView.as_view(), name='home'),
    path('api/', BookApiView.as_view()),
]
