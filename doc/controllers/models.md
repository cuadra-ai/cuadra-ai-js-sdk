# Models

Create your own custom model, train it and use it!

```ts
const modelsController = new ModelsController(client);
```

## Class Name

`ModelsController`

## Methods

* [Get Models](../../doc/controllers/models.md#get-models)
* [Create Model](../../doc/controllers/models.md#create-model)
* [Get Model](../../doc/controllers/models.md#get-model)
* [Remove Model](../../doc/controllers/models.md#remove-model)
* [Update Model](../../doc/controllers/models.md#update-model)


# Get Models

This endpoint display all of our AI models.

```ts
async getModels(
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaginatedResponseExListModelEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | - |
| `size` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [PaginatedResponseExListModelEx](../../doc/models/paginated-response-ex-list-model-ex.md).

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await modelsController.getModels();
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


# Create Model

This endpoint creates a new custom Model for you to train and use.

```ts
async createModel(
  body: ModelEx,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ModelEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ModelEx`](../../doc/models/model-ex.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ModelEx](../../doc/models/model-ex.md).

## Example Usage

```ts
const body: ModelEx = {
  name: 'ive.legal.1.1.0',
  type: 'multimedia',
  description: 'Oura-Legal is our next-generation AI model designed for powerful, intelligent, and adaptable legal purposes.',
  id: '72dfb4f5-27dc-40e2-9278-b0de30e8b131',
  proprietary: false,
  baseModel: 'ive.legal.1.1.0',
};

try {
  const { result, ...httpResponse } = await modelsController.createModel(body);
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


# Get Model

This endpoint shows you information about a particular model given an id.

```ts
async getModel(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ModelEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ModelEx](../../doc/models/model-ex.md).

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await modelsController.getModel(id);
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


# Remove Model

This endpoint removes a custom model you created.

```ts
async removeModel(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ModelEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ModelEx](../../doc/models/model-ex.md).

## Example Usage

```ts
const id = 'id0';

try {
  const { result, ...httpResponse } = await modelsController.removeModel(id);
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


# Update Model

This endpoint updates a custom model you created.

```ts
async updateModel(
  id: string,
  body: ModelEx,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ModelEx>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`ModelEx`](../../doc/models/model-ex.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [ModelEx](../../doc/models/model-ex.md).

## Example Usage

```ts
const id = 'id0';

const body: ModelEx = {
  name: 'ive.legal.1.1.0',
  type: 'multimedia',
  description: 'Oura-Legal is our next-generation AI model designed for powerful, intelligent, and adaptable legal purposes.',
  id: '72dfb4f5-27dc-40e2-9278-b0de30e8b131',
  proprietary: false,
  baseModel: 'ive.legal.1.1.0',
};

try {
  const { result, ...httpResponse } = await modelsController.updateModel(
  id,
  body
);
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

