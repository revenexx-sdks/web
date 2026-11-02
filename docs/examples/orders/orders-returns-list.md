```javascript
import { Client, Orders, OrderReturnStatus, OrderReturnRefundMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnsList({
    id: '', // optional
    orderId: '', // optional
    number: 'RET-000123', // optional
    status: OrderReturnStatus.Registered, // optional
    reasonCode: 'damaged', // optional
    reason: 'Two of the four arrived with a cracked housing', // optional
    registeredAt: 'gte.2026-10-01T00:00:00Z', // optional
    receivedAt: 'gte.2026-10-01T00:00:00Z', // optional
    completedAt: 'gte.2026-10-01T00:00:00Z', // optional
    rejectedAt: 'gte.2026-10-01T00:00:00Z', // optional
    resolution: 'refund', // optional
    refundMode: OrderReturnRefundMode.Proportional, // optional
    refundTotal: 64.67, // optional
    discountReturned: 5.23, // optional
    externalId: 'RMA-000271', // optional
    sourceSyncedAt: 'gte.2026-10-01T00:00:00Z', // optional
    createdAt: 'gte.2026-10-01T00:00:00Z', // optional
    updatedAt: 'gte.2026-10-01T00:00:00Z', // optional
    organizationId: '', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
