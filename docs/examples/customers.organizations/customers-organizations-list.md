```javascript
import { Client, CustomersOrganizations, CustomersOrganizationsListStatus, CreditLimitMode, ShippingAdvice, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsList({
    id: '', // optional
    name: 'Beispiel Industrietechnik GmbH', // optional
    vatId: 'DE123456789', // optional
    branche: 'Maschinenbau', // optional
    customerNumber: 'K-10042', // optional
    status: CustomersOrganizationsListStatus.Active, // optional
    blockReason: 'Zahlungsverzug', // optional
    blockNote: '', // optional
    blockedAt: '2026-01-01T12:00:00Z', // optional
    blockedBy: '', // optional
    lifecycleStage: 'customer', // optional
    paymentTerms: 'net_30', // optional
    creditLimitMode: CreditLimitMode.Unset, // optional
    creditLimit: 9.99, // optional
    balance: 9.99, // optional
    balanceDue: 9.99, // optional
    creditAvailable: 9.99, // optional
    creditUtilisation: 1, // optional
    priceList: 'standard', // optional
    shippingAdvice: ShippingAdvice.Complete, // optional
    locationCode: 'DE-NORD', // optional
    deliveryBlock: true, // optional
    deliveryBlockReason: 'Offene Reklamation', // optional
    deliveryBlockedAt: '2026-01-01T12:00:00Z', // optional
    deliveryBlockedBy: '', // optional
    primaryContactId: '', // optional
    parentOrganizationId: '', // optional
    city: 'München', // optional
    accountManagerName: '', // optional
    revenue365d: 9.99, // optional
    lastOrderAt: '2026-01-01T12:00:00Z', // optional
    externalTeamId: '', // optional
    externalId: 'KND-10042', // optional
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
