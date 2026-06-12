```javascript
import { Client, Payments, PaymentFeeType, PaymentMethodKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const payments = new Payments(client);

const result = await payments.paymentsMethodsCreate({
    code: '',
    name: '',
    countries: [], // optional
    description: '', // optional
    enabled: null, // optional
    feeAmount: null, // optional
    feeCurrency: '', // optional
    feeType: PaymentFeeType.None, // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    labels: {}, // optional
    maxOrderValue: null, // optional
    metadata: {}, // optional
    minOrderValue: null, // optional
    position: null, // optional
    provider: '', // optional
    providerMethod: '' // optional
});

console.log(result);
```
