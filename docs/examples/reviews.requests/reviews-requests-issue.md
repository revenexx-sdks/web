```javascript
import { Client, ReviewsRequests } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsRequests = new ReviewsRequests(client);

const result = await reviewsRequests.reviewsRequestsIssue({
    contactId: '',
    orderId: '',
    journeyRef: '', // optional
    locale: '', // optional
    market: '', // optional
    productIds: [] // optional
});

console.log(result);
```
