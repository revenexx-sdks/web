```javascript
import { Client, Sites, Framework, Adapter, BuildRuntime } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const sites = new Sites(client);

const result = await sites.sitesUpdate({
    siteId: '',
    framework: Framework.Analog,
    name: '',
    adapter: Adapter.Static, // optional
    buildCommand: '', // optional
    buildRuntime: BuildRuntime.Node180, // optional
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
