```javascript
import { Client, QuotesPricing, QuotesPricingReviewState } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingReview({
    id: '',
    contactId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    expiresAt: '2026-01-01T12:00:00Z', // optional
    idBody: '', // optional
    issuedCount: 1, // optional
    items: null, // optional
    journeyRef: '', // optional
    locale: '', // optional
    market: '', // optional
    metadata: null, // optional
    orderId: '', // optional
    orderNumber: '', // optional
    organizationId: '', // optional
    productIds: null, // optional
    reviewedCount: 1, // optional
    state: QuotesPricingReviewState.Issued, // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    usedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
