```javascript
import { Client, Sites, BuildRuntime, Framework, Adapter } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesCreate({
    buildRuntime: BuildRuntime.Node180,
    framework: Framework.Analog,
    name: '',
    siteId: '',
    adapter: Adapter.Static, // optional
    buildCommand: '', // optional
    enabled: null, // optional
    fallbackFile: '', // optional
    installCommand: '', // optional
    installationId: '', // optional
    logging: null, // optional
    outputDirectory: '', // optional
    providerBranch: '', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: null, // optional
    specification: '', // optional
    timeout: null // optional
});

console.log(result);
```
