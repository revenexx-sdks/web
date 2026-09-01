```javascript
import { Client, PaymentsLedger, PaymentStatus, PaymentMethodKind, PaymentDunningStage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    cartId: '', // optional
    contactId: '', // optional
    status: PaymentStatus.Created, // optional
    orderRef: 'ORD-10042', // optional
    methodCode: 'invoice', // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    provider: 'stripe', // optional
    dunningStage: PaymentDunningStage.None, // optional
    idempotencyKey: 'checkout-2f9c41' // optional
});

console.log(result);
```
