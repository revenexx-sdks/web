```javascript
import { Client, SalesRepsRoster } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsRoster = new SalesRepsRoster(client);

const result = await salesRepsRoster.salesRepsRepsUpdate({
    id: '',
    active: true, // optional
    code: 'VK-04711', // optional
    email: 's.vogt@example.test', // optional
    externalId: 'BC-SALESPERSON-0007', // optional
    externalRefs: {
        "business-central": "BC-SALESPERSON-0007",
        "crm": "CRM-88214"
    }, // optional
    metadata: {
        "cost_center": "VT-NORD"
    }, // optional
    name: 'Sabine Vogt', // optional
    phone: '+49 921 897 214', // optional
    platformUserId: 'usr_7c19f4a2e0', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Salesperson_Code": "VK-04711"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    territory: 'Nordbayern' // optional
});

console.log(result);
```
