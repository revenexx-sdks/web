```javascript
import { Client, ReviewsAggregates } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsAggregates = new ReviewsAggregates(client);

const result = await reviewsAggregates.reviewsAggregatesReviewStars({
    id: ''
});

console.log(result);
```
