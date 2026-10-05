```javascript
import { Client, ConsentManagerRecords } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsPrune({
    dryRun: true // optional
});

console.log(result);
```
