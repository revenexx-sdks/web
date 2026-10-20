```javascript
import { Client, ReviewsModeration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsModeration = new ReviewsModeration(client);

const result = await reviewsModeration.reviewsModerationReject({
    id: '',
    reason: ''
});

console.log(result);
```
