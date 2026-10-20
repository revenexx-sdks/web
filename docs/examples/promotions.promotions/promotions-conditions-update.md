```javascript
import { Client, PromotionsPromotions, AudiencesRulesCreateKind, MatchMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsUpdate({
    id: '',
    addend: 9.99, // optional
    compareValue: null, // optional
    compareValueTo: null, // optional
    comparison: '', // optional
    factor: 9.99, // optional
    kind: AudiencesRulesCreateKind.Group, // optional
    matchMode: MatchMode.All, // optional
    negate: true, // optional
    parentId: '', // optional
    position: 1, // optional
    promotionId: '', // optional
    rightSubject: '', // optional
    subject: '' // optional
});

console.log(result);
```
