```javascript
import { Client, SalesRepsCoverage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const salesRepsCoverage = new SalesRepsCoverage(client);

const result = await salesRepsCoverage.salesRepsAssignmentsCreate({
    organizationId: '',
    repCode: 'VK-04711',
    role: 'field_sales' // optional
});

console.log(result);
```
