# sales-reps.roster

## sales-reps-reps-list

List the field sales reps this merchant employs

```javascript
import { Client, SalesRepsRoster } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsRoster = new SalesRepsRoster(client);

const result = await salesRepsRoster.salesRepsRepsList({
    id: '', // optional
    code: 'VK-04711', // optional
    name: 'Sabine Vogt', // optional
    email: 's.vogt@example.test', // optional
    phone: '+49 921 897 214', // optional
    territory: 'Nordbayern', // optional
    active: true, // optional
    platformUserId: 'usr_7c19f4a2e0', // optional
    hasLogin: true, // optional
    customerCount: 12, // optional
    primaryCount: 4, // optional
    externalId: 'BC-SALESPERSON-0007', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## sales-reps-reps-create

Create one rep

```javascript
import { Client, SalesRepsRoster } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsRoster = new SalesRepsRoster(client);

const result = await salesRepsRoster.salesRepsRepsCreate({
    code: 'VK-04711',
    name: 'Sabine Vogt',
    active: true, // optional
    email: 's.vogt@example.test', // optional
    externalId: 'BC-SALESPERSON-0007', // optional
    externalRefs: {
        "business-central": "BC-SALESPERSON-0007",
        "crm": "CRM-88214"
    }, // optional
    metadata: {
        "cost_center": "VT-NORD"
    }, // optional
    phone: '+49 921 897 214', // optional
    platformUserId: 'usr_7c19f4a2e0', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Salesperson_Code": "VK-04711"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    territory: 'Nordbayern' // optional
});

console.log(result);
```

## sales-reps-reps-recount

Recount what every rep carries and leads

```javascript
import { Client, SalesRepsRoster } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsRoster = new SalesRepsRoster(client);

const result = await salesRepsRoster.salesRepsRepsRecount();

console.log(result);
```

## sales-reps-reps-delete

Remove one rep, if nothing still names them

```javascript
import { Client, SalesRepsRoster } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsRoster = new SalesRepsRoster(client);

const result = await salesRepsRoster.salesRepsRepsDelete({
    id: ''
});

console.log(result);
```

## sales-reps-reps-get

Read one rep

```javascript
import { Client, SalesRepsRoster } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsRoster = new SalesRepsRoster(client);

const result = await salesRepsRoster.salesRepsRepsGet({
    id: ''
});

console.log(result);
```

## sales-reps-reps-update

Edit one rep, or deactivate them

```javascript
import { Client, SalesRepsRoster } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsRoster = new SalesRepsRoster(client);

const result = await salesRepsRoster.salesRepsRepsUpdate({
    id: '',
    active: true, // optional
    code: 'VK-04711', // optional
    email: 's.vogt@example.test', // optional
    externalId: 'BC-SALESPERSON-0007', // optional
    externalRefs: {
        "business-central": "BC-SALESPERSON-0007",
        "crm": "CRM-88214"
    }, // optional
    metadata: {
        "cost_center": "VT-NORD"
    }, // optional
    name: 'Sabine Vogt', // optional
    phone: '+49 921 897 214', // optional
    platformUserId: 'usr_7c19f4a2e0', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Salesperson_Code": "VK-04711"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    territory: 'Nordbayern' // optional
});

console.log(result);
```
