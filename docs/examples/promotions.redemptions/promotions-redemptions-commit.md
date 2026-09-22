```javascript
import { Client, PromotionsRedemptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsCommit({
    orderId: '',
    cartId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    market: '', // optional
    organizationId: '', // optional
    promotions: [], // optional
    terms: {} // optional
});

console.log(result);
```
