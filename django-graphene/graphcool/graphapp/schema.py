"""Define the URLs used for GraphQL."""
import graphene

from graphene_django.types import DjangoObjectType
from graphcool.graphapp.models import Author


class AuthorType(DjangoObjectType):
    """AuthorType django object type."""

    class Meta:
        """Meta data."""

        model = Author


class Query(graphene.AbstractType):
    """GraphQL query class."""

    all_authors = graphene.List(AuthorType)
    author = graphene.Field(AuthorType, id=graphene.Int())

    def resolve_all_authors(self, args, context, info):
        """Return all authors."""
        return Author.objects.all()

    def resolve_author(self, args, context, info):
        """Return a single author."""
        id = args.get('id')
        if id is not None:
            return Author.objects.get(pk=id)
        return None
