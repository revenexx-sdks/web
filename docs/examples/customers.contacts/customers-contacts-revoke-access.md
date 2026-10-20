```javascript
import { Client, CustomersContacts, Reason } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsRevokeAccess({
    contactId: '',
    reason: Reason.LeftCompany,
    actor: '', // optional
    note: '' // optional
});

console.log(result);
```
