```javascript
import { Client, Tokens } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tokens = new Tokens(client);

const result = await tokens.tokensUpdate({
    tokenId: '',
    expire: '' // optional
});

console.log(result);
```
