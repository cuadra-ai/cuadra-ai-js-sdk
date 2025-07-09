
# Chat

*This model accepts additional fields of type unknown.*

## Structure

`Chat`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `model` | `string` | Required | Model name<br><br>**Constraints**: *Maximum Length*: `50` |
| `content` | [`ContentEx[]`](../../doc/models/content-ex.md) | Required | Request content |
| `chatId` | `string \| undefined` | Optional | If you want to keep context between request, otherwise leave it empty, you get one with every chat you create. |
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
  "chatId": "chatId2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

