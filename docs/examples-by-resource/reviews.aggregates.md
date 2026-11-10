# reviews.aggregates

## reviews-aggregates-list

Read the review figures of many products

```javascript
import { Client, ReviewsAggregates } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsAggregates = new ReviewsAggregates(client);

const result = await reviewsAggregates.reviewsAggregatesList({
    productIds: '', // optional
    market: '', // optional
    productId: '', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## reviews-aggregates-rebuild

Recompute review figures from the published reviews

```javascript
import { Client, ReviewsAggregates } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsAggregates = new ReviewsAggregates(client);

const result = await reviewsAggregates.reviewsAggregatesRebuild({
    productIds: [] // optional
});

console.log(result);
```

## reviews-aggregates-review-stars

Read how the review's product is rated, as bar rows

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
