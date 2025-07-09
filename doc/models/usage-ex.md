
# Usage Ex

This is the token usage result of your request

*This model accepts additional fields of type unknown.*

## Structure

`UsageEx`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billedTokens` | [`TokensEx \| undefined`](../../doc/models/tokens-ex.md) | Optional | Tokens used |
| `usedTokens` | [`TokensEx \| undefined`](../../doc/models/tokens-ex.md) | Optional | Tokens used |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
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
}
```

