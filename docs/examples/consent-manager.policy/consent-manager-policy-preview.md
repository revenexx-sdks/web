```javascript
import { Client, ConsentManagerPolicy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerPolicyPreview({
    ttlHours: 72 // optional
});

console.log(result);
```
