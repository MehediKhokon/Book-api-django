from django.urls import path
from .views import BookListView, BookApiView, DetailBook

urlpatterns = [
    # path('', BookListView.as_view(), name='home'),
    path('', BookApiView.as_view()),
    path('<int:pk>/', DetailBook.as_view()),
]
