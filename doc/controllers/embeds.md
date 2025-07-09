# Embeds

Feed your custom models with relevant information.

```ts
const embedsController = new EmbedsController(client);
```

## Class Name

`EmbedsController`


# Embed

This endpoint creates a new embed for training your custom AI Models.

```ts
async embed(
  body: Embed,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmbedResponseEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Embed`](../../doc/models/embed.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [EmbedResponseEx](../../doc/models/embed-response-ex.md).

## Example Usage

```ts
const body: Embed = {
  model: 'ive.legal.1.1.0',
  content: [
    {
      text: 'Guide me on creating a legal document for x.',
    }
  ],
  purpose: 'classification',
};

try {
  const { result, ...httpResponse } = await embedsController.embed(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request, read again our documentation or contact support for guidance. | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 401 | Not authorized, check our OAuth2 doc. | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal error, if this error persist, please contact support. | [`ErrorResponseError`](../../doc/models/error-response-error.md) |

