```javascript
import { Client, QuotesPricing, PriceReason } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingItem({
    id: '',
    itemId: '',
    discountPercent: 8, // optional
    leadTimeDays: 1, // optional
    priceReason: PriceReason.Volume, // optional
    quantity: 12, // optional
    quotedPrice: 980 // optional
});

console.log(result);
```
