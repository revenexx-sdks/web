```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutFieldMappingsCreate({
    protocol: '',
    source: '',
    target: '',
    targetKind: '',
    accountId: '', // optional
    document: '', // optional
    emit: '', // optional
    enabled: true, // optional
    mutators: {}, // optional
    position: 1, // optional
    scope: '', // optional
    sourceConfig: {} // optional
});

console.log(result);
```
