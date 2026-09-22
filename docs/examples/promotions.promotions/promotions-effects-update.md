```javascript
import { Client, PromotionsPromotions, PromotionsEffectsCreateKind, TargetScope, UnitChoice, ValueType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsEffectsUpdate({
    id: '',
    promotionId: '',
    amount: 9.99, // optional
    appliesTo: {}, // optional
    bundleId: '', // optional
    customPayload: {}, // optional
    customShapeVersion: 1, // optional
    customTypeId: '', // optional
    freeItemQuantity: 1, // optional
    freeItems: {}, // optional
    kind: PromotionsEffectsCreateKind.Discount, // optional
    maxDiscount: 9.99, // optional
    message: {}, // optional
    metadata: {}, // optional
    position: 1, // optional
    requiresChoice: true, // optional
    spread: true, // optional
    targetScope: TargetScope.UnitPrice, // optional
    unitChoice: UnitChoice.Cheapest, // optional
    unitPosition: 1, // optional
    valueType: ValueType.Percentage // optional
});

console.log(result);
```
