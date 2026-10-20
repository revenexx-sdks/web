```javascript
import { Client, PromotionsPromotions, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    description: '', // optional
    reach: '', // optional
    status: '', // optional
    effectiveState: '', // optional
    priority: '', // optional
    exclusive: '', // optional
    groupId: '', // optional
    searchBestCombination: '', // optional
    conditionMatch: '', // optional
    campaignRef: '' // optional
});

console.log(result);
```
