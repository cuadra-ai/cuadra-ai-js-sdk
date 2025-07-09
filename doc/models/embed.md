
# Embed

*This model accepts additional fields of type unknown.*

## Structure

`Embed`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `model` | `string` | Required | Model name<br><br>**Constraints**: *Maximum Length*: `50` |
| `content` | [`ContentEx[]`](../../doc/models/content-ex.md) | Required | Request content |
| `purpose` | `string` | Required | The purpose of the embed, it could be 'search_document', 'search_query', 'classification', o 'clustering'.<br><br>**Constraints**: *Maximum Length*: `50`, *Pattern*: `search_document\|search_query\|classification\|clustering` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "model": "ive.legal.1.1.0",
  "content": [
    {
      "text": "Guide me on creating a legal document for x.",
      "inlineData": {
        "mimeType": "mimeType8",
        "data": "data6",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "purpose": "classification",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

