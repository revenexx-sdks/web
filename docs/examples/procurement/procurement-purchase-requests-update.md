```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestsUpdate({
    id: '',
    billingAddress: {}, // optional
    buyer: {}, // optional
    cartId: '', // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    customerOrderNumber: '', // optional
    externalRef: '', // optional
    grandTotal: 9.99, // optional
    itemCount: 1, // optional
    metadata: {}, // optional
    number: '', // optional
    organizationId: '', // optional
    payment: {}, // optional
    shipping: {}, // optional
    shippingAddress: {}, // optional
    shippingTotal: 9.99, // optional
    subtotal: 9.99, // optional
    taxTotal: 9.99, // optional
    userData: {} // optional
});

console.log(result);
```
