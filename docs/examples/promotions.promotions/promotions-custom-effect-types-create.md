```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsCustomEffectTypesCreate({
    name: '',
    carriesAmount: true, // optional
    description: {}, // optional
    metadata: {}, // optional
    payloadShape: {}, // optional
    title: {} // optional
});

console.log(result);
```
