```javascript
import { Client, Payments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const payments = new Payments(client);

const result = await payments.paymentsCreate({
    amount: null,
    methodCode: '',
    cartId: '', // optional
    contactId: '', // optional
    country: '', // optional
    currency: '', // optional
    idempotencyKey: '', // optional
    metadata: {}, // optional
    orderRef: '', // optional
    returnUrl: '' // optional
});

console.log(result);
```
