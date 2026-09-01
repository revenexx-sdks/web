```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationMetricsList({
    id: '', // optional
    organizationId: '', // optional
    orderCount: 1, // optional
    orderCount30d: 1, // optional
    orderCount90d: 1, // optional
    orderCount365d: 1, // optional
    revenueTotal: 9.99, // optional
    revenue30d: 9.99, // optional
    revenue90d: 9.99, // optional
    revenue365d: 9.99, // optional
    avgOrderValue: 9.99, // optional
    avgOrderValue365d: 9.99, // optional
    firstOrderAt: '2026-01-01T12:00:00Z', // optional
    lastOrderAt: '2026-01-01T12:00:00Z', // optional
    currency: 'EUR', // optional
    currencyMixed: true, // optional
    ordersAsOf: '2026-01-01T12:00:00Z', // optional
    computedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
