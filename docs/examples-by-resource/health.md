# health

## health-live

Liveness probe

```javascript
import { Client, Health } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const health = new Health(client);

const result = await health.healthLive();

console.log(result);
```

## health-ready

Readiness probe

```javascript
import { Client, Health } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const health = new Health(client);

const result = await health.healthReady();

console.log(result);
```
