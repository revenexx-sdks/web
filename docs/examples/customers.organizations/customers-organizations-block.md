```javascript
import { Client, CustomersOrganizations, CustomersOrganizationsBlockReason, CustomersOrganizationsBlockKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsBlock({
    id: '',
    reason: CustomersOrganizationsBlockReason.PaymentOverdue,
    actor: '', // optional
    kind: CustomersOrganizationsBlockKind.Order, // optional
    note: '' // optional
});

console.log(result);
```
