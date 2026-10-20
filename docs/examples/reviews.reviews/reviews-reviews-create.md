```javascript
import { Client, ReviewsReviews, ReviewsReviewsCreateSource, ReviewsReviewsCreateState } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsReviews = new ReviewsReviews(client);

const result = await reviewsReviews.reviewsReviewsCreate({
    productId: '',
    rating: 1,
    authorFirstName: '', // optional
    authorLastName: '', // optional
    body: '', // optional
    contactId: '', // optional
    externalId: '', // optional
    externalRefs: {}, // optional
    locale: '', // optional
    market: '', // optional
    orderId: '', // optional
    productName: '', // optional
    publishedAt: '2026-01-01T12:00:00Z', // optional
    sku: '', // optional
    source: ReviewsReviewsCreateSource.Admin, // optional
    sourceData: {}, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    state: ReviewsReviewsCreateState.Pending, // optional
    title: '' // optional
});

console.log(result);
```
