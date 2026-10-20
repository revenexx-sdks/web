```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsOnboard({
    name: '',
    accountManager: '', // optional
    billingCity: '', // optional
    billingCountry: '', // optional
    billingStreet: '', // optional
    billingZip: '', // optional
    branche: '', // optional
    contactEmail: '', // optional
    contactFirstName: '', // optional
    contactJobTitle: '', // optional
    contactLastName: '', // optional
    contactPhone: '', // optional
    contactRole: '', // optional
    customerNumber: '', // optional
    lifecycleStage: '', // optional
    paymentTerms: '', // optional
    sendInvite: true, // optional
    vatId: '' // optional
});

console.log(result);
```
