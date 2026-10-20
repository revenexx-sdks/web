```javascript
import { Client, Carts, CartStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsList({
    id: '', // optional
    name: 'Weekly order', // optional
    status: CartStatus.Active, // optional
    contactId: '', // optional
    organizationId: '', // optional
    sessionKey: 'a1b2c3d4e5f6', // optional
    isGuest: true, // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    isCurrent: true, // optional
    itemCount: 100, // optional
    subtotal: 12, // optional
    discountTotal: 1.2, // optional
    shippingTotal: 4.9, // optional
    taxTotal: 2.983, // optional
    grandTotal: 18.683, // optional
    shippingMethod: 'Standard', // optional
    totalsComputedAt: '2026-10-15T09:30:00.000Z', // optional
    abandonedAt: '2026-01-01T12:00:00Z', // optional
    orderedAt: '2026-01-01T12:00:00Z', // optional
    orderRef: 'SO-10042', // optional
    mergedIntoCartId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
