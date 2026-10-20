```javascript
import { Client, CustomersOrganizations, CustomersOrganizationsChangeCreditReason, CreditLimitMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsChangeCredit({
    id: '',
    reason: CustomersOrganizationsChangeCreditReason.RatingChanged,
    creditLimit: 9.99, // optional
    creditLimitMode: CreditLimitMode.Unset, // optional
    note: '' // optional
});

console.log(result);
```
