```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusCalculate({
    id: '',
    data: {}
});

console.log(result);
```
