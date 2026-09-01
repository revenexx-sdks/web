```javascript
import { Client, PaymentsMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsEligible({
    amount: 49.9, // optional
    country: 'DE', // optional
    currency: 'EUR' // optional
});

console.log(result);
```
