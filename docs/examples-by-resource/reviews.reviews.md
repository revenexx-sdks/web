# reviews.reviews

## reviews-reviews-list

List reviews

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

## reviews-reviews-create

Record a review by hand or from an import

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

## reviews-reviews-empty-trash

Empty the review trash, deleting each one for good

```javascript
import { Client, ReviewsReviews } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsReviews = new ReviewsReviews(client);

const result = await reviewsReviews.reviewsReviewsEmptyTrash();

console.log(result);
```

## reviews-reviews-purge

Delete the reviews that outlived the trash retention

```javascript
import { Client, ReviewsReviews } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsReviews = new ReviewsReviews(client);

const result = await reviewsReviews.reviewsReviewsPurge();

console.log(result);
```

## reviews-reviews-delete

Move a review to the trash, or delete it for good from there

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

## reviews-reviews-get

Read one review

```javascript
import { Client, ReviewsReviews } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsReviews = new ReviewsReviews(client);

const result = await reviewsReviews.reviewsReviewsGet({
    id: ''
});

console.log(result);
```

## reviews-reviews-restore

Bring a review back out of the trash

```javascript
import { Client, ReviewsReviews } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsReviews = new ReviewsReviews(client);

const result = await reviewsReviews.reviewsReviewsRestore({
    id: ''
});

console.log(result);
```
