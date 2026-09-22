```javascript
import { Client, CustomersContacts, Status, RegistrationStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsList({
    id: '', // optional
    organizationId: '', // optional
    email: 'einkauf@example.com', // optional
    firstName: 'Anna', // optional
    lastName: 'Berger', // optional
    phone: '+49 30 5550123', // optional
    jobTitle: 'Einkaufsleitung', // optional
    role: 'buyer', // optional
    status: Status.Invited, // optional
    orderApprovalLimit: 9.99, // optional
    registrationStatus: RegistrationStatus.Pending, // optional
    registrationDecidedAt: '2026-01-01T12:00:00Z', // optional
    registrationDecidedBy: 'vertrieb@example.com', // optional
    registrationReason: 'Could not be verified as a commercial buyer.', // optional
    locale: 'de-DE', // optional
    isPrimary: true, // optional
    externalUserId: '', // optional
    externalId: 'ASP000047', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
