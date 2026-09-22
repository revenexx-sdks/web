```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementSubmit({
    cartId: '',
    items: [],
    billingAddress: {}, // optional
    buyer: {}, // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    customerOrderNumber: '', // optional
    externalRef: '', // optional
    metadata: {}, // optional
    organizationId: '', // optional
    payment: {}, // optional
    shipping: {}, // optional
    shippingAddress: {}, // optional
    userData: {} // optional
});

console.log(result);
```
