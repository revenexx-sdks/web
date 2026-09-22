```javascript
import { Client, PromotionsPromotions, PromotionsGroupsCreateMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsGroupsUpdate({
    id: '',
    code: '',
    name: '',
    labels: {}, // optional
    metadata: {}, // optional
    mode: PromotionsGroupsCreateMode.Stack, // optional
    parentId: '', // optional
    position: 1 // optional
});

console.log(result);
```
