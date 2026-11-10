# locale

## locale-get

Get user locale

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeGet();

console.log(result);
```

## locale-list-codes

List locale codes

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeListCodes();

console.log(result);
```

## locale-list-continents

List continents

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeListContinents();

console.log(result);
```

## locale-list-countries

List countries

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeListCountries();

console.log(result);
```

## locale-list-countries-eu

List EU countries

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeListCountriesEU();

console.log(result);
```

## locale-list-countries-phones

List countries phone codes

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeListCountriesPhones();

console.log(result);
```

## locale-list-currencies

List currencies

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeListCurrencies();

console.log(result);
```

## locale-list-languages

List languages

```javascript
import { Client, Locale } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const locale = new Locale(client);

const result = await locale.localeListLanguages();

console.log(result);
```
