```javascript
import { Client, Integrations, CubesCreateVcsDeploymentType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsCreateVcsDeployment({
    integrationId: '',
    reference: '',
    type: CubesCreateVcsDeploymentType.Branch,
    activate: true // optional
});

console.log(result);
```
