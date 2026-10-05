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
