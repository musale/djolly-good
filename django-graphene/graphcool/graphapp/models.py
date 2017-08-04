"""Graph app models."""
from __future__ import unicode_literals
from django.db import models


class Author(models.Model):
    """Author model."""

    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Object string literal."""
        return self.first_name
