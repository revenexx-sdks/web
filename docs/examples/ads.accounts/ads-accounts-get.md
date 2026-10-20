```javascript
import { Client, AdsAccounts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsGet({
    id: ''
});

console.log(result);
```
