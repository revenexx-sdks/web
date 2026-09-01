```javascript
import { Client, CustomersOrganizations, OrganizationStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsUpdate({
    id: '',
    branche: 'Maschinenbau', // optional
    creditLimit: 5000, // optional
    customerNumber: 'K-10042', // optional
    deliveryBlock: true, // optional
    lifecycleStage: 'customer', // optional
    name: 'Beispiel Industrietechnik GmbH', // optional
    paymentTerms: 'net_30', // optional
    priceList: 'standard', // optional
    settings: {
        "account_manager": "sales-north",
        "delivery_tour": "tuesday",
        "self_pickup": true
    }, // optional
    status: OrganizationStatus.Active, // optional
    vatId: 'DE123456789' // optional
});

console.log(result);
```
