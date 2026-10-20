```javascript
import { Client, ReviewsVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsVocabularies = new ReviewsVocabularies(client);

const result = await reviewsVocabularies.reviewsVocabulariesGet({
    name: ''
});

console.log(result);
```
