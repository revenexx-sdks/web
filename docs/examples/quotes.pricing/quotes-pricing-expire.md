```javascript
import { Client, QuotesPricing } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingExpire({
    data: {}
});

console.log(result);
```
