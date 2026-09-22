```javascript
import { Client, Orders, OrderStatus, OrderPaymentStatus, OrderFulfillmentStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersList({
    id: '', // optional
    number: 'ORD-000123', // optional
    customerOrderNumber: 'PO-2026-0042', // optional
    externalRef: 'ERP-4711', // optional
    acknowledgedAt: '2026-01-01T12:00:00Z', // optional
    cartId: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    status: OrderStatus.Pending, // optional
    paymentStatus: OrderPaymentStatus.Open, // optional
    fulfillmentStatus: OrderFulfillmentStatus.Unfulfilled, // optional
    onHold: true, // optional
    holdReason: 'Credit check pending', // optional
    itemCount: 3, // optional
    subtotal: 149.7, // optional
    discountTotal: 7.85, // optional
    shippingTotal: 5.9, // optional
    shippingTaxRate: 19, // optional
    shippingTaxAmount: 1.12, // optional
    taxTotal: 29.56, // optional
    grandTotal: 185.16, // optional
    placedAt: '2026-01-01T12:00:00Z', // optional
    completedAt: '2026-01-01T12:00:00Z', // optional
    cancelledAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
