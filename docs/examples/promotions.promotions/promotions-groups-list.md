```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsGroupsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    mode: '', // optional
    parentId: '', // optional
    position: '' // optional
});

console.log(result);
```
