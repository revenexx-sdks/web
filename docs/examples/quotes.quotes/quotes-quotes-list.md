```javascript
import { Client, QuotesQuotes, Origin } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    status: '', // optional
    origin: Origin.Buyer, // optional
    organizationId: '', // optional
    contactId: '', // optional
    ownerId: '', // optional
    cartId: '', // optional
    number: '' // optional
});

console.log(result);
```
