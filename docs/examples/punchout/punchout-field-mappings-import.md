```javascript
import { Client, Punchout, Protocol } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsImport({
    accountId: '',
    configuration: {},
    protocol: Protocol.Oci // optional
});

console.log(result);
```
