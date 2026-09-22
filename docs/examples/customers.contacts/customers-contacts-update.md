```javascript
import { Client, CustomersContacts, CustomersContactsCreateRegistrationStatus, ContactStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsUpdate({
    id: '',
    email: 'einkauf@example.com', // optional
    externalId: 'ASP000047', // optional
    firstName: 'Anna', // optional
    isPrimary: true, // optional
    jobTitle: 'Einkaufsleitung', // optional
    lastName: 'Berger', // optional
    locale: 'de-DE', // optional
    orderApprovalLimit: 25000, // optional
    organizationId: '', // optional
    phone: '+49 30 5550123', // optional
    registrationStatus: CustomersContactsCreateRegistrationStatus.Pending, // optional
    role: 'buyer', // optional
    status: ContactStatus.Invited // optional
});

console.log(result);
```
