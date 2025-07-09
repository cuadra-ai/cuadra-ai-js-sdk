
# Error Response Error

Standard error response format for Cuadra AI

*This model accepts additional fields of type unknown.*

## Structure

`ErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | A message describing the error |
| `status` | `number \| undefined` | Optional | HTTP status code |
| `fieldErrors` | `Record<string, string \| null> \| null \| undefined` | Optional | Optional: Field-specific validation errors |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "message": "Incorrect request",
  "status": 400,
  "field_errors": {
    "model": "model cannot be null",
    "user_id": "must not be blank"
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

