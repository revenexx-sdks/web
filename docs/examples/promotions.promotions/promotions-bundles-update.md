```javascript
import { Client, PromotionsPromotions, Allocation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsBundlesUpdate({
    id: '',
    name: '',
    promotionId: '',
    allocation: Allocation.BestForBuyer, // optional
    maxPerCart: 1, // optional
    selectors: {}, // optional
    unitsRequired: 1 // optional
});

console.log(result);
```
