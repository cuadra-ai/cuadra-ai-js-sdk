
# Usage Calculation Ex

*This model accepts additional fields of type unknown.*

## Structure

`UsageCalculationEx`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedTokens` | `number \| undefined` | Optional | Estimated tokens for your request |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "estimatedTokens": 482,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

