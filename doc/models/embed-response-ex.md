
# Embed Response Ex

*This model accepts additional fields of type unknown.*

## Structure

`EmbedResponseEx`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Embed id |
| `usage` | [`UsageEx \| undefined`](../../doc/models/usage-ex.md) | Optional | This is the token usage result of your request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": "bd39e814-159d-4024-8e83-14025070ef77",
  "usage": {
    "billedTokens": {
      "inputTokens": 156,
      "outputTokens": 240,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "usedTokens": {
      "inputTokens": 58,
      "outputTokens": 142,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
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
```

