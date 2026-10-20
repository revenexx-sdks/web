```javascript
import { Client, ReviewsRequests } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsRequests = new ReviewsRequests(client);

const result = await reviewsRequests.reviewsRequestsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    orderId: '', // optional
    orderNumber: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    state: '', // optional
    journeyRef: '', // optional
    market: '', // optional
    locale: '', // optional
    reviewedCount: '', // optional
    issuedCount: '' // optional
});

console.log(result);
```
