```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsUpdate({
    id: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    attribution: {}, // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    discountLines: [{"amount":1.2,"detail":"Gutschein FRUEHJAHR25 · 10 %","label":"Frühjahrsaktion","voucher_code":"FRUEHJAHR25"}], // optional
    metadata: {
        "campaign": "spring-catalogue",
        "locale": "de-DE",
        "source": "storefront"
    }, // optional
    name: 'Weekly order', // optional
    organizationId: '', // optional
    shippingMethod: 'Standard', // optional
    shippingTotal: 4.9, // optional
    voucherCodes: ["FRUEHJAHR25","B2B-10"] // optional
});

console.log(result);
```
