```javascript
import { Client, QuotesPricing } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingPrice({
    id: '',
    items: [], // optional
    sellerNote: '', // optional
    shippingAmount: 9.99, // optional
    shippingTaxRate: 9.99, // optional
    validUntil: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
