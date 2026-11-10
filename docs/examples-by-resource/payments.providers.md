# payments.providers

## payments-logos-get

Serve a provider logo

```javascript
import { Client, PaymentsProviders, Variant } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsLogosGet({
    slug: 'stripe',
    variant: Variant.Logo // optional
});

console.log(result);
```

## payments-providers-list

List PSP configurations

```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    provider: 'stripe', // optional
    enabled: true, // optional
    testMode: true // optional
});

console.log(result);
```

## payments-providers-create

Create a PSP configuration

```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersCreate({
    provider: 'stripe',
    credentials: {}, // optional
    enabled: true, // optional
    name: 'Stripe', // optional
    options: {
        "capture_method": "automatic",
        "logo_url": "https:\/\/apps.example.com\/payments\/logos\/stripe",
        "three_ds": false
    }, // optional
    testMode: true, // optional
    webhookSecret: '' // optional
});

console.log(result);
```

## payments-providers-catalog

List the PSPs that can be configured

```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersCatalog();

console.log(result);
```

## payments-providers-delete

Delete a PSP configuration

```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersDelete({
    id: ''
});

console.log(result);
```

## payments-providers-get

Read one PSP configuration

```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersGet({
    id: ''
});

console.log(result);
```

## payments-providers-update

Update a PSP configuration

```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersUpdate({
    id: '',
    credentials: {}, // optional
    enabled: true, // optional
    name: 'Stripe', // optional
    options: {
        "capture_method": "automatic",
        "logo_url": "https:\/\/apps.example.com\/payments\/logos\/stripe",
        "three_ds": false
    }, // optional
    provider: 'stripe', // optional
    testMode: true, // optional
    webhookSecret: '' // optional
});

console.log(result);
```

## payments-providers-check

Check a PSP configuration's credentials

```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsProvidersCheck({
    id: ''
});

console.log(result);
```
