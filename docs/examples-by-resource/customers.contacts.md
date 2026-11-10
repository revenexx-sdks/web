# customers.contacts

## customers-contact-events-list

Browse the customer activity timeline

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactEventsList({
    id: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    kind: 'call', // optional
    name: 'activity.call', // optional
    subject: 'Called about the annual requirement', // optional
    actor: 'vertrieb@example.com', // optional
    occurredAt: '2026-01-01T12:00:00Z', // optional
    dueAt: '2026-01-01T12:00:00Z', // optional
    assignee: '', // optional
    doneAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## customers-contact-events-get

Read one timeline entry

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactEventsGet({
    id: ''
});

console.log(result);
```

## customers-contacts-list

Browse the people at the buying companies

```javascript
import { Client, CustomersContacts, CustomersContactsListStatus, ShopAccess, OrderApprovalMode, RegistrationStatus, LeadSource, Trashed } from "@revenexx/sdk";

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
    username: '10024-berger', // optional
    firstName: 'Anna', // optional
    lastName: 'Berger', // optional
    phone: '+49 30 5550123', // optional
    jobTitle: 'Einkaufsleitung', // optional
    role: 'buyer', // optional
    status: CustomersContactsListStatus.Invited, // optional
    shopAccess: ShopAccess.CanOrder, // optional
    invitedAt: '2026-01-01T12:00:00Z', // optional
    accessBlockedReason: '', // optional
    orderApprovalMode: OrderApprovalMode.None, // optional
    orderApprovalLimit: 9.99, // optional
    registrationStatus: RegistrationStatus.Pending, // optional
    registrationDecidedAt: '2026-01-01T12:00:00Z', // optional
    registrationDecidedBy: 'vertrieb@example.com', // optional
    registrationReason: 'Could not be verified as a commercial buyer.', // optional
    locale: 'de-DE', // optional
    consentMarketing: true, // optional
    lifecycleStage: 'lead', // optional
    lifecycleChangedAt: '2026-01-01T12:00:00Z', // optional
    leadSource: LeadSource.Form, // optional
    leadSourceRef: 'form:6f1c2d3e-4a5b-4c6d-8e7f-9a0b1c2d3e4f:81b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d', // optional
    ownerId: 'AD-07', // optional
    leadScore: 1, // optional
    consentMarketingSyncedAt: '2026-01-01T12:00:00Z', // optional
    isPrimary: true, // optional
    externalUserId: '', // optional
    externalId: 'ASP000047', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'vertrieb@example.com', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    trashed: Trashed.Exclude, // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## customers-contacts-create

Create a contact

```javascript
import { Client, CustomersContacts, OrderApprovalMode, CustomersContactsCreateRegistrationStatus, ContactStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsCreate({
    email: 'einkauf@example.com',
    createdAt: '2026-01-01T12:00:00Z', // optional
    externalId: 'ASP000047', // optional
    firstName: 'Anna', // optional
    isPrimary: true, // optional
    jobTitle: 'Einkaufsleitung', // optional
    lastName: 'Berger', // optional
    locale: 'de-DE', // optional
    orderApprovalLimit: 25000, // optional
    orderApprovalMode: OrderApprovalMode.Limited, // optional
    organizationId: '', // optional
    phone: '+49 30 5550123', // optional
    registrationStatus: CustomersContactsCreateRegistrationStatus.Pending, // optional
    role: 'buyer', // optional
    status: ContactStatus.Invited // optional
});

console.log(result);
```

## customers-contacts-trash-empty

Empty the contact trash

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsTrashEmpty();

console.log(result);
```

## customers-contacts-events-create

Log an activity on a contact

```javascript
import { Client, CustomersContacts, ContactActivityKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsEventsCreate({
    contactId: '',
    subject: 'Called about the annual requirement',
    actor: 'vertrieb@example.com', // optional
    kind: ContactActivityKind.Note, // optional
    note: 'Asked for a quote on the annual bolt requirement; call back in week 34.', // optional
    occurredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## customers-contacts-identity

Give a contact the login it has none of

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsIdentity({
    contactId: '',
    createdBy: '' // optional
});

console.log(result);
```

## customers-contacts-invite

Invite a contact into their company

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsInvite({
    contactId: '',
    invitedBy: '', // optional
    url: 'https://shop.example.com/anmelden' // optional
});

console.log(result);
```

## customers-contacts-permissions

Read a contact's effective permissions

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsPermissions({
    contactId: ''
});

console.log(result);
```

## customers-registrations-approve

Approve a pending registration

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersRegistrationsApprove({
    contactId: '',
    decidedBy: 'vertrieb@example.com' // optional
});

console.log(result);
```

## customers-registrations-reject

Reject a pending registration

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersRegistrationsReject({
    contactId: '',
    reason: 'Could not be verified as a commercial buyer.',
    decidedBy: 'vertrieb@example.com' // optional
});

console.log(result);
```

## customers-contacts-reinvite

Send a shop invitation again

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsReinvite({
    contactId: '',
    url: 'https://example.com' // optional
});

console.log(result);
```

## customers-contacts-restore-access

Give a person's shop access back

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsRestoreAccess({
    contactId: '',
    actor: '' // optional
});

console.log(result);
```

## customers-contacts-revoke-access

Revoke a person's shop access

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

## customers-contacts-delete

Delete a contact

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsDelete({
    id: ''
});

console.log(result);
```

## customers-contacts-get

Read one contact

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsGet({
    id: ''
});

console.log(result);
```

## customers-contacts-update

Update a contact

```javascript
import { Client, CustomersContacts, OrderApprovalMode, ContactStatus } from "@revenexx/sdk";

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
    orderApprovalMode: OrderApprovalMode.Limited, // optional
    organizationId: '', // optional
    phone: '+49 30 5550123', // optional
    role: 'buyer', // optional
    status: ContactStatus.Invited // optional
});

console.log(result);
```

## customers-contacts-erase

Erase personal data

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsErase({
    id: ''
});

console.log(result);
```

## customers-contacts-restore

Restore a contact from the trash

```javascript
import { Client, CustomersContacts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersContactsRestore({
    id: ''
});

console.log(result);
```

## customers-organizations-events-create

Log an activity from the company page

```javascript
import { Client, CustomersContacts, ContactActivityKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersContacts = new CustomersContacts(client);

const result = await customersContacts.customersOrganizationsEventsCreate({
    organizationId: '',
    contactId: '',
    subject: 'Called about the annual requirement',
    actor: 'vertrieb@example.com', // optional
    kind: ContactActivityKind.Note, // optional
    note: 'Asked for a quote on the annual bolt requirement; call back in week 34.', // optional
    occurredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
