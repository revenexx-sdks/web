# quotes.acceptance

## quotes-acceptance-accept

Accept a quote, whole or line by line

```javascript
import { Client, QuotesAcceptance } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesAcceptance = new QuotesAcceptance(client);

const result = await quotesAcceptance.quotesAcceptanceAccept({
    id: '',
    items: [] // optional
});

console.log(result);
```

## quotes-acceptance-decline

Decline a quote

```javascript
import { Client, QuotesAcceptance } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesAcceptance = new QuotesAcceptance(client);

const result = await quotesAcceptance.quotesAcceptanceDecline({
    id: '',
    reason: '' // optional
});

console.log(result);
```

## quotes-acceptance-ordered

Record the order a quote produced

```javascript
import { Client, QuotesAcceptance } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesAcceptance = new QuotesAcceptance(client);

const result = await quotesAcceptance.quotesAcceptanceOrdered({
    id: '',
    orderId: '',
    itemIds: [] // optional
});

console.log(result);
```

## quotes-acceptance-reject

Refuse to quote

```javascript
import { Client, QuotesAcceptance } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesAcceptance = new QuotesAcceptance(client);

const result = await quotesAcceptance.quotesAcceptanceReject({
    id: '',
    reason: ''
});

console.log(result);
```
