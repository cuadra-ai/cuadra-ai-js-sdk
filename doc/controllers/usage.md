# Usage

Estimate you're request usage, and access to your current usage data.

```ts
const usageController = new UsageController(client);
```

## Class Name

`UsageController`

## Methods

* [Calculate Tokens](../../doc/controllers/usage.md#calculate-tokens)
* [Total Usage](../../doc/controllers/usage.md#total-usage)


# Calculate Tokens

This endpoint allows you to calculate the usage, so you get an idea of the amount of tokens that will be consumed.

```ts
async calculateTokens(
  body: Chat,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsageCalculationEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Chat`](../../doc/models/chat.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [UsageCalculationEx](../../doc/models/usage-calculation-ex.md).

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
  const { result, ...httpResponse } = await usageController.calculateTokens(body);
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


# Total Usage

This endpoint calculates the amount of tokens used by the user in the given month.

```ts
async totalUsage(
  requestOptions?: RequestOptions
): Promise<ApiResponse<TotalUsageEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [TotalUsageEx](../../doc/models/total-usage-ex.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usageController.totalUsage();
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

