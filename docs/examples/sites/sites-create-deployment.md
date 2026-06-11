```javascript
import { Client, Sites } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreateDeployment({
    siteId: '',
    activate: null,
    code: '',
    buildCommand: '', // optional
    installCommand: '', // optional
    outputDirectory: '' // optional
});

console.log(result);
```
