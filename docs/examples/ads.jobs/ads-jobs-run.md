```javascript
import { Client, AdsJobs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsJobs = new AdsJobs(client);

const result = await adsJobs.adsJobsRun({
    data: {}
});

console.log(result);
```
