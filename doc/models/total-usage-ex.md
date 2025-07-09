
# Total Usage Ex

*This model accepts additional fields of type unknown.*

## Structure

`TotalUsageEx`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalInput` | `bigint \| undefined` | Optional | Total Input Tokens used for this month |
| `totalOutput` | `bigint \| undefined` | Optional | Total Ouput Tokens used for this month |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "totalInput": 12492,
  "totalOutput": 24381,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

