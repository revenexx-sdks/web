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
    commands: 'npm install', // optional
    enabled: true, // optional
    entrypoint: 'src/main.js', // optional
    events: [], // optional
    execute: ["any"], // optional
    installationId: '', // optional
    logging: true, // optional
    providerBranch: 'main', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    runtime: Runtime.Node180, // optional
    schedule: '0 3 * * *', // optional
    scopes: [Scopes.SessionsWrite], // optional
    specification: 's-1vcpu-512mb', // optional
    timeout: 1 // optional
});

console.log(result);
```
