```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    promotionId: '', // optional
    parentId: '', // optional
    kind: '', // optional
    matchMode: '', // optional
    negate: '', // optional
    subject: '', // optional
    comparison: '', // optional
    rightSubject: '', // optional
    position: '' // optional
});

console.log(result);
```
