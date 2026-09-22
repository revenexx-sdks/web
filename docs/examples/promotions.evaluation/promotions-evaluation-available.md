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
