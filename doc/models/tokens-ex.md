
# Tokens Ex

Tokens used

*This model accepts additional fields of type unknown.*

## Structure

`TokensEx`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inputTokens` | `number \| undefined` | Optional | Number of tokens of the request input |
| `outputTokens` | `number \| undefined` | Optional | Number of tokens of the response output |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "inputTokens": 320,
  "outputTokens": 490,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

