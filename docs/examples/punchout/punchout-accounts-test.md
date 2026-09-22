```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutAccountsTest({
    id: '',
    data: {}
});

console.log(result);
```
