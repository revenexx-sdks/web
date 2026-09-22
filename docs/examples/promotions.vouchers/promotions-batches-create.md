```javascript
import { Client, PromotionsVouchers, PromotionsBatchesCreateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsVouchers = new PromotionsVouchers(client);

const result = await promotionsVouchers.promotionsBatchesCreate({
    name: '',
    promotionId: '',
    alphabet: '', // optional
    metadata: {}, // optional
    pattern: '', // optional
    requestRef: '', // optional
    requested: 1, // optional
    status: PromotionsBatchesCreateStatus.Active // optional
});

console.log(result);
```
