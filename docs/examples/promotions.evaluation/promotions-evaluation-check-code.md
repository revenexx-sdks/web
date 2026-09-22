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
