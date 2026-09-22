```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsEffectsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    promotionId: '', // optional
    position: '', // optional
    kind: '', // optional
    valueType: '', // optional
    targetScope: '', // optional
    bundleId: '', // optional
    unitChoice: '', // optional
    unitPosition: '', // optional
    spread: '', // optional
    freeItemQuantity: '', // optional
    requiresChoice: '' // optional
});

console.log(result);
```
