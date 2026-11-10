# promotions.evaluation

## promotions-evaluation-available

List the promotions this buyer could still reach

```javascript
import { Client, PromotionsEvaluation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsEvaluation = new PromotionsEvaluation(client);

const result = await promotionsEvaluation.promotionsEvaluationAvailable({
    currency: '',
    channel: '', // optional
    contactId: '', // optional
    itemCount: 1, // optional
    lines: [], // optional
    market: '', // optional
    organizationId: '', // optional
    paymentFee: 9.99, // optional
    precision: 1, // optional
    rounding: '', // optional
    shipping: 9.99, // optional
    subtotal: 9.99, // optional
    taxIncluded: true // optional
});

console.log(result);
```

## promotions-evaluation-check-code

Say whether one code is live, without a cart

```javascript
import { Client, PromotionsEvaluation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsEvaluation = new PromotionsEvaluation(client);

const result = await promotionsEvaluation.promotionsEvaluationCheckCode({
    code: '',
    contactId: '' // optional
});

console.log(result);
```

## promotions-evaluation-evaluate

Answer what a priced cart is owed, writing nothing

```javascript
import { Client, PromotionsEvaluation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsEvaluation = new PromotionsEvaluation(client);

const result = await promotionsEvaluation.promotionsEvaluationEvaluate({
    currency: '',
    channel: '', // optional
    codes: [], // optional
    contactId: '', // optional
    itemCount: 1, // optional
    lines: [], // optional
    market: '', // optional
    organizationId: '', // optional
    paymentFee: 9.99, // optional
    precision: 1, // optional
    previewPromotionIds: [], // optional
    rounding: '', // optional
    shipping: 9.99, // optional
    subtotal: 9.99, // optional
    taxIncluded: true // optional
});

console.log(result);
```

## promotions-evaluation-vocabularies

List the closed vocabularies this app enforces

```javascript
import { Client, PromotionsEvaluation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsEvaluation = new PromotionsEvaluation(client);

const result = await promotionsEvaluation.promotionsEvaluationVocabularies();

console.log(result);
```

## promotions-evaluation-vocabulary

Read one vocabulary

```javascript
import { Client, PromotionsEvaluation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsEvaluation = new PromotionsEvaluation(client);

const result = await promotionsEvaluation.promotionsEvaluationVocabulary({
    name: ''
});

console.log(result);
```
