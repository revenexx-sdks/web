```javascript
import { Client, Apps, Runtime, Scopes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsUpdate({
    functionId: '',
    name: '',
    commands: '', // optional
    enabled: null, // optional
    entrypoint: '', // optional
    events: [], // optional
    execute: [], // optional
    installationId: '', // optional
    logging: null, // optional
    providerBranch: '', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: null, // optional
    runtime: Runtime.Node180, // optional
    schedule: '', // optional
    scopes: [Scopes.SessionsWrite], // optional
    specification: '', // optional
    timeout: null // optional
});

console.log(result);
```
