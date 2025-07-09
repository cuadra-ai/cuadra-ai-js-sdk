# Chat

Interact with our different models to get intelligent results

```ts
const chatController = new ChatController(client);
```

## Class Name

`ChatController`


# Chat

This endpoint creates a new chat interaction with our AI Models.

```ts
async chat(
  body: Chat,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChatResponseEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Chat`](../../doc/models/chat.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ChatResponseEx](../../doc/models/chat-response-ex.md).

## Example Usage

```ts
const body: Chat = {
  model: 'ive.legal.1.1.0',
  content: [
    {
      text: 'Guide me on creating a legal document for x.',
    }
  ],
};

try {
  const { result, ...httpResponse } = await chatController.chat(body);
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

