# reviews.requests

## reviews-requests-list

List issued review links, without their tokens

```javascript
import { Client, ReviewsRequests } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsRequests = new ReviewsRequests(client);

const result = await reviewsRequests.reviewsRequestsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    orderId: '', // optional
    orderNumber: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    state: '', // optional
    journeyRef: '', // optional
    market: '', // optional
    locale: '', // optional
    reviewedCount: '', // optional
    issuedCount: '' // optional
});

console.log(result);
```

## reviews-requests-issue

Issue the review link for one completed order and its contact

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

## reviews-requests-form

Read what the review form shows for a link

```javascript
import { Client, ReviewsRequests } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsRequests = new ReviewsRequests(client);

const result = await reviewsRequests.reviewsRequestsForm({
    token: ''
});

console.log(result);
```

## reviews-requests-submit

Submit reviews through a link

```javascript
import { Client, ReviewsRequests } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsRequests = new ReviewsRequests(client);

const result = await reviewsRequests.reviewsRequestsSubmit({
    token: '',
    locale: '', // optional
    reviews: [] // optional
});

console.log(result);
```
