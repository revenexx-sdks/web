```javascript
import { Client, CustomersRoles, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesUpdate({
    key: 'einkauf-zentrale',
    active: true, // optional
    description: '', // optional
    descriptions: {}, // optional
    isDefault: true, // optional
    labels: {}, // optional
    position: 1, // optional
    title: 'Einkauf Zentrale', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```
