```javascript
import { Client, CustomersOrganizations, CreditLimitMode, ShippingAdvice, OrganizationStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsCreate({
    name: 'Beispiel Industrietechnik GmbH',
    balance: 12450.75, // optional
    balanceDue: 320, // optional
    branche: 'Maschinenbau', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    creditLimit: 5000, // optional
    creditLimitMode: CreditLimitMode.Limited, // optional
    customerNumber: 'K-10042', // optional
    deliveryBlock: true, // optional
    lifecycleStage: 'customer', // optional
    locationCode: 'DE-NORD', // optional
    paymentTerms: 'net_30', // optional
    priceList: 'standard', // optional
    settings: {
        "account_manager": "sales-north",
        "delivery_tour": "tuesday",
        "self_pickup": true
    }, // optional
    shippingAdvice: ShippingAdvice.Partial, // optional
    status: OrganizationStatus.Active, // optional
    vatId: 'DE123456789' // optional
});

console.log(result);
```
