```javascript
import { Client, ReviewsReviews, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsReviews = new ReviewsReviews(client);

const result = await reviewsReviews.reviewsReviewsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    productId: '', // optional
    sku: '', // optional
    productName: '', // optional
    orderId: '', // optional
    orderNumber: '', // optional
    requestId: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    authorFirstName: '', // optional
    authorLastName: '', // optional
    rating: '', // optional
    title: '', // optional
    body: '', // optional
    locale: '', // optional
    market: '', // optional
    verifiedPurchase: '', // optional
    source: '', // optional
    state: '', // optional
    rejectionReason: '', // optional
    moderatedBy: '', // optional
    merchantReply: '', // optional
    repliedBy: '', // optional
    externalId: '' // optional
});

console.log(result);
```
