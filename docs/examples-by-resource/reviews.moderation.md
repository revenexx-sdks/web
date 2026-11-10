# reviews.moderation

## reviews-moderation-publish

Publish a review

```javascript
import { Client, ReviewsModeration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsModeration = new ReviewsModeration(client);

const result = await reviewsModeration.reviewsModerationPublish({
    id: '',
    data: {}
});

console.log(result);
```

## reviews-moderation-reject

Reject a review, or take a published one down

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

## reviews-moderation-reply

Answer a review publicly, or remove the answer

```javascript
import { Client, ReviewsModeration } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsModeration = new ReviewsModeration(client);

const result = await reviewsModeration.reviewsModerationReply({
    id: '',
    reply: '' // optional
});

console.log(result);
```
