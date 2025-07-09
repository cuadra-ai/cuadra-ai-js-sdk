
# Getting Started with Cuadra AI

## Introduction

API Documentation

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install cuadra-ai-sdk@1.0.3
```

For additional package details, see the [Npm page for the cuadra-ai-sdk@1.0.3 npm](https://www.npmjs.com/package/cuadra-ai-sdk/v/1.0.3).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `30000` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/partial-logging-options.md) | Logging Configuration to enable logging |
| authorizationCodeAuthCredentials | [`AuthorizationCodeAuthCredentials`](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/auth/oauth-2-authorization-code-grant.md) | The credential object for authorizationCodeAuth |

The API client can be initialized as follows:

```ts
const client = new Client({
  authorizationCodeAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthRedirectUri: 'OAuthRedirectUri'
  },
  timeout: 30000,
  environment: Environment.Production,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

## Authorization

This API uses the following authentication schemes.

* [`OAuth2 (OAuth 2 Authorization Code Grant)`](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/auth/oauth-2-authorization-code-grant.md)

## List of APIs

* [Chat](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/controllers/chat.md)
* [Models](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/controllers/models.md)
* [Embeds](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/controllers/embeds.md)
* [Usage](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/controllers/usage.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/retry-configuration.md)
* [PartialLoggingOptions](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/partial-response-logging-options.md)
* [LoggerInterface](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/logger-interface.md)

### HTTP

* [HttpRequest](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/api-response.md)
* [ApiError](https://www.github.com/cuadra-ai/cuadra-ai-js-sdk/tree/1.0.3/doc/api-error.md)

