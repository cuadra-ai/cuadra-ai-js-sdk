
# Model Ex

*This model accepts additional fields of type unknown.*

## Structure

`ModelEx`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Model Id |
| `name` | `string` | Required | Model name |
| `type` | `string` | Required | Model type of content generation and processing |
| `description` | `string` | Required | Brief description of the model |
| `proprietary` | `boolean \| undefined` | Optional | Indicates whether is a custom model created by you or not |
| `baseModel` | `string \| undefined` | Optional | Base model name, if it was created from another model |
| `baseModelId` | `string \| undefined` | Optional | Base model id, if it was created from another model |
| `createdAt` | `string \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| undefined` | Optional | Last time it was updated |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": "72dfb4f5-27dc-40e2-9278-b0de30e8b131",
  "name": "ive.legal.1.1.0",
  "type": "multimedia",
  "description": "Oura-Legal is our next-generation AI model designed for powerful, intelligent, and adaptable legal purposes.",
  "proprietary": false,
  "baseModel": "ive.legal.1.1.0",
  "baseModelId": "baseModelId8",
  "createdAt": "2016-03-13T12:52:32.123Z",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

