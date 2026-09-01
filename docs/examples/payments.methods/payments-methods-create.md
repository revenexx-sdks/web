```javascript
import { Client, PaymentsMethods, PaymentFeeType, PaymentMethodKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsCreate({
    code: 'invoice',
    name: 'Invoice',
    countries: ["DE","AT"], // optional
    description: 'Pay within 14 days of the invoice date.', // optional
    enabled: true, // optional
    feeAmount: 2.5, // optional
    feeCurrency: 'EUR', // optional
    feeType: PaymentFeeType.None, // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    maxOrderValue: 2500, // optional
    metadata: {
        "erp_payment_key": "ZTRM01"
    }, // optional
    minOrderValue: 10, // optional
    position: 0, // optional
    provider: 'stripe', // optional
    providerMethod: 'card' // optional
});

console.log(result);
```
