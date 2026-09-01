```javascript
import { Client, PaymentsMethods, PaymentMethodKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    code: 'invoice', // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    enabled: true, // optional
    provider: 'stripe' // optional
});

console.log(result);
```
