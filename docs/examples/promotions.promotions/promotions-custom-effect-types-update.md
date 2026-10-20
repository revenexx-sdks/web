```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsCustomEffectTypesUpdate({
    id: '',
    active: true, // optional
    carriesAmount: true, // optional
    description: null, // optional
    metadata: null, // optional
    name: '', // optional
    payloadShape: null, // optional
    title: null // optional
});

console.log(result);
```
