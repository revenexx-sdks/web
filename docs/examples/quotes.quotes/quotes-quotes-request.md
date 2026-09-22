```javascript
import { Client, QuotesQuotes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesRequest({
    currency: 'EUR',
    items: [],
    billingAddress: {}, // optional
    buyer: {}, // optional
    buyerNote: '', // optional
    cartId: '', // optional
    contactId: '', // optional
    metadata: {}, // optional
    organizationId: '', // optional
    reason: '', // optional
    shippingAddress: {} // optional
});

console.log(result);
```
