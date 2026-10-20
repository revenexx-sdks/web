```javascript
import { Client, LoyaltyBonus, TurnoverSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusUpdate({
    id: '',
    baseTurnover: 9.99, // optional
    documentRef: '', // optional
    metadata: null, // optional
    turnoverSource: TurnoverSource.Orders // optional
});

console.log(result);
```
