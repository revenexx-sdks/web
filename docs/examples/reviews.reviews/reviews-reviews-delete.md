```javascript
import { Client, ReviewsReviews } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsReviews = new ReviewsReviews(client);

const result = await reviewsReviews.reviewsReviewsDelete({
    id: ''
});

console.log(result);
```
