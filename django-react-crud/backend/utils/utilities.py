"""Utilities for use within the project."""
import os

from django.core.exceptions import ImproperlyConfigured


def get_env(var_name):
    """Get the environment variable."""
    try:
        return os.environ[var_name]
    except KeyError:
        raise ImproperlyConfigured(
            "Set the %s environment variable" % var_name)
