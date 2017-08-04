"""Project level URL."""
import graphene
import graphcool.graphapp.schema


class Query(graphcool.graphapp.schema.Query, graphene.ObjectType):
    """Project level mapper."""

    pass


schema = graphene.Schema(query=Query)
