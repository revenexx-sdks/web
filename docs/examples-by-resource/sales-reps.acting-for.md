# sales-reps.acting-for

## sales-reps-impersonations-list

List every occasion a rep acted for a buyer

```javascript
import { Client, SalesRepsActingFor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsActingFor = new SalesRepsActingFor(client);

const result = await salesRepsActingFor.salesRepsImpersonationsList({
    id: '', // optional
    repCode: 'VK-04711', // optional
    organizationId: '', // optional
    contactId: '', // optional
    startedAt: '2026-01-01T12:00:00Z', // optional
    endedAt: '2026-01-01T12:00:00Z', // optional
    reason: 'placed a telephone order', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## sales-reps-impersonations-create

Record that a rep acted for a buyer

```javascript
import { Client, SalesRepsActingFor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsActingFor = new SalesRepsActingFor(client);

const result = await salesRepsActingFor.salesRepsImpersonationsCreate({
    contactId: '',
    organizationId: '',
    repCode: 'VK-04711',
    endedAt: '2026-09-30T09:48:10.000Z', // optional
    reason: 'placed a telephone order', // optional
    startedAt: '2026-09-30T09:12:44.000Z' // optional
});

console.log(result);
```

## sales-reps-impersonations-delete

Erase one entry from the log

```javascript
import { Client, SalesRepsActingFor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsActingFor = new SalesRepsActingFor(client);

const result = await salesRepsActingFor.salesRepsImpersonationsDelete({
    id: ''
});

console.log(result);
```

## sales-reps-impersonations-get

Read one occasion a rep acted for a buyer

```javascript
import { Client, SalesRepsActingFor } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsActingFor = new SalesRepsActingFor(client);

const result = await salesRepsActingFor.salesRepsImpersonationsGet({
    id: ''
});

console.log(result);
```
