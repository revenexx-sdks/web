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
    buildCommand: 'npm run build', // optional
    buildRuntime: BuildRuntime.Node180, // optional
    enabled: true, // optional
    fallbackFile: 'index.html', // optional
    installCommand: 'npm install', // optional
    installationId: '', // optional
    logging: true, // optional
    outputDirectory: '', // optional
    providerBranch: 'main', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    specification: 's-1vcpu-512mb', // optional
    timeout: 1 // optional
});

console.log(result);
```
