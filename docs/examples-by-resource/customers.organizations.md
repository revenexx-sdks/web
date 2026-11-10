# customers.organizations

## customers-address-format-list

Read the address type and its countries

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressFormatList();

console.log(result);
```

## customers-address-format-get

Read the address rules of one country

```javascript
import { Client, CustomersOrganizations, Country } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressFormatGet({
    country: Country.AC
});

console.log(result);
```

## customers-addresses-list

Browse the stored postal addresses

```javascript
import { Client, CustomersOrganizations, DeliveryPointType, ValidationStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressesList({
    id: '', // optional
    organizationId: '', // optional
    contactId: '', // optional
    type: 'shipping', // optional
    company: 'Beispiel Industrietechnik GmbH', // optional
    name: 'Anna Berger', // optional
    name2: 'Abteilung Einkauf', // optional
    street: 'Musterstraße 12', // optional
    street2: 'Gebäude C, 2. OG', // optional
    zip: '10115', // optional
    city: 'Berlin', // optional
    region: 'Berlin', // optional
    country: 'DE', // optional
    phone: '+49 30 5550123', // optional
    email: 'wareneingang@example.com', // optional
    addressLine3: 'Building 4', // optional
    dependentLocality: 'Copacabana', // optional
    administrativeAreaCode: 'US-CA', // optional
    sortingCode: 'CEDEX 01', // optional
    streetName: 'Musterstraße', // optional
    houseNumber: '12', // optional
    houseNumberAddition: 'a', // optional
    deliveryPointType: DeliveryPointType.Street, // optional
    deliveryPointId: '123', // optional
    languageCode: 'ja', // optional
    script: 'Jpan', // optional
    validationStatus: ValidationStatus.Unchecked, // optional
    validatedAt: '2026-01-01T12:00:00Z', // optional
    validationSource: 'endereco', // optional
    isDefault: true, // optional
    externalId: 'R_ADD000005', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## customers-addresses-create

Add a postal address

```javascript
import { Client, CustomersOrganizations, DeliveryPointType, ValidationStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressesCreate({
    addressLine1: '', // optional
    addressLine2: '', // optional
    addressLine3: 'Building 4', // optional
    administrativeAreaCode: 'US-CA', // optional
    administrativeAreaName: '', // optional
    careOf: '', // optional
    city: 'Berlin', // optional
    company: 'Beispiel Industrietechnik GmbH', // optional
    contactId: '', // optional
    country: 'DE', // optional
    countryCode: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    deliveryPointId: '123', // optional
    deliveryPointType: DeliveryPointType.Packstation, // optional
    dependentLocality: 'Copacabana', // optional
    email: 'wareneingang@example.com', // optional
    externalId: 'R_ADD000005', // optional
    houseNumber: '12', // optional
    houseNumberAddition: 'a', // optional
    isDefault: true, // optional
    languageCode: 'ja', // optional
    latin: {
        "locality": "Tokyo"
    }, // optional
    locality: '', // optional
    name: 'Anna Berger', // optional
    name2: 'Abteilung Einkauf', // optional
    organizationId: '', // optional
    organizationName: '', // optional
    phone: '+49 30 5550123', // optional
    postalCode: '', // optional
    recipientName: '', // optional
    region: 'Berlin', // optional
    script: 'Jpan', // optional
    sortingCode: 'CEDEX 01', // optional
    street: 'Musterstraße 12', // optional
    street2: 'Gebäude C, 2. OG', // optional
    streetName: 'Musterstraße', // optional
    type: 'shipping', // optional
    validatedAt: '2026-01-01T12:00:00Z', // optional
    validationSource: 'endereco', // optional
    validationStatus: ValidationStatus.Unchecked, // optional
    zip: '10115' // optional
});

console.log(result);
```

## customers-addresses-delete

Delete an address

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressesDelete({
    id: ''
});

console.log(result);
```

## customers-addresses-get

Read one address

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressesGet({
    id: ''
});

console.log(result);
```

## customers-addresses-update

Update an address

```javascript
import { Client, CustomersOrganizations, DeliveryPointType, ValidationStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersAddressesUpdate({
    id: '',
    addressLine1: '', // optional
    addressLine2: '', // optional
    addressLine3: 'Building 4', // optional
    administrativeAreaCode: 'US-CA', // optional
    administrativeAreaName: '', // optional
    careOf: '', // optional
    city: 'Berlin', // optional
    company: 'Beispiel Industrietechnik GmbH', // optional
    contactId: '', // optional
    country: 'DE', // optional
    countryCode: '', // optional
    deliveryPointId: '123', // optional
    deliveryPointType: DeliveryPointType.Packstation, // optional
    dependentLocality: 'Copacabana', // optional
    email: 'wareneingang@example.com', // optional
    externalId: 'R_ADD000005', // optional
    houseNumber: '12', // optional
    houseNumberAddition: 'a', // optional
    isDefault: true, // optional
    languageCode: 'ja', // optional
    latin: {
        "locality": "Tokyo"
    }, // optional
    locality: '', // optional
    name: 'Anna Berger', // optional
    name2: 'Abteilung Einkauf', // optional
    organizationId: '', // optional
    organizationName: '', // optional
    phone: '+49 30 5550123', // optional
    postalCode: '', // optional
    recipientName: '', // optional
    region: 'Berlin', // optional
    script: 'Jpan', // optional
    sortingCode: 'CEDEX 01', // optional
    street: 'Musterstraße 12', // optional
    street2: 'Gebäude C, 2. OG', // optional
    streetName: 'Musterstraße', // optional
    type: 'shipping', // optional
    validatedAt: '2026-01-01T12:00:00Z', // optional
    validationSource: 'endereco', // optional
    validationStatus: ValidationStatus.Unchecked, // optional
    zip: '10115' // optional
});

console.log(result);
```

## customers-contact-points-list

Browse where the documents go

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersContactPointsList({
    id: '', // optional
    organizationId: '', // optional
    addressId: '', // optional
    kind: 'invoice', // optional
    email: 'rechnungen@example.com', // optional
    phone: '+49 30 5550123', // optional
    isPrimary: true, // optional
    position: 1, // optional
    externalId: 'DSP-000047', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## customers-contact-points-create

Add a document recipient

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersContactPointsCreate({
    kind: 'invoice',
    organizationId: '',
    addressId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    email: 'rechnungen@example.com', // optional
    externalId: 'DSP-000047', // optional
    isPrimary: true, // optional
    phone: '+49 30 5550123', // optional
    position: 1 // optional
});

console.log(result);
```

## customers-contact-points-delete

Remove a contact point

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersContactPointsDelete({
    id: ''
});

console.log(result);
```

## customers-contact-points-get

Read one contact point

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersContactPointsGet({
    id: ''
});

console.log(result);
```

## customers-contact-points-update

Update a contact point

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersContactPointsUpdate({
    id: '',
    addressId: '', // optional
    email: 'rechnungen@example.com', // optional
    externalId: 'DSP-000047', // optional
    isPrimary: true, // optional
    kind: 'invoice', // optional
    organizationId: '', // optional
    phone: '+49 30 5550123', // optional
    position: 1 // optional
});

console.log(result);
```

## customers-derived-refresh

Recompute the derived columns

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersDerivedRefresh();

console.log(result);
```

## customers-organization-metrics-list

Browse what each company has bought

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationMetricsList({
    id: '', // optional
    organizationId: '', // optional
    orderCount: 1, // optional
    orderCount30d: 1, // optional
    orderCount90d: 1, // optional
    orderCount365d: 1, // optional
    revenueTotal: 9.99, // optional
    revenue30d: 9.99, // optional
    revenue90d: 9.99, // optional
    revenue365d: 9.99, // optional
    avgOrderValue: 9.99, // optional
    avgOrderValue365d: 9.99, // optional
    firstOrderAt: '2026-01-01T12:00:00Z', // optional
    lastOrderAt: '2026-01-01T12:00:00Z', // optional
    currency: 'EUR', // optional
    currencyMixed: true, // optional
    ordersAsOf: '2026-01-01T12:00:00Z', // optional
    computedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## customers-organization-metrics-freshness

Check how stale the buying metrics are

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationMetricsFreshness();

console.log(result);
```

## customers-organization-metrics-refresh

Refresh the buying metrics from orders

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationMetricsRefresh({
    asOf: '2026-01-01T12:00:00Z', // optional
    cursor: '', // optional
    organizationIds: [] // optional
});

console.log(result);
```

## customers-organization-metrics-get

Read one company's buying metrics

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationMetricsGet({
    id: ''
});

console.log(result);
```

## customers-organizations-list

Browse the buying companies

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

## customers-organizations-create

Create an organization

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

## customers-organizations-onboard

Onboard a business customer in one call

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

## customers-organizations-trash-empty

Empty the organization trash

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsTrashEmpty();

console.log(result);
```

## customers-organizations-delete

Delete an organization

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsDelete({
    id: ''
});

console.log(result);
```

## customers-organizations-get

Read one organization

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsGet({
    id: ''
});

console.log(result);
```

## customers-organizations-update

Update an organization

```javascript
import { Client, CustomersOrganizations, CreditLimitMode, ShippingAdvice, OrganizationStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsUpdate({
    id: '',
    balance: 12450.75, // optional
    balanceDue: 320, // optional
    branche: 'Maschinenbau', // optional
    creditLimit: 5000, // optional
    creditLimitMode: CreditLimitMode.Limited, // optional
    customerNumber: 'K-10042', // optional
    deliveryBlock: true, // optional
    lifecycleStage: 'customer', // optional
    locationCode: 'DE-NORD', // optional
    name: 'Beispiel Industrietechnik GmbH', // optional
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

## customers-organizations-block

Block a company from ordering or from delivery

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

## customers-organizations-care

Read who looks after a company

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsCare({
    id: ''
});

console.log(result);
```

## customers-organizations-change-credit

Change a company's credit, with a reason

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

## customers-organizations-restore

Restore an organization from the trash

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsRestore({
    id: ''
});

console.log(result);
```

## customers-organizations-set-account-manager

Name a company's responsible sales rep

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsSetAccountManager({
    id: '',
    repCode: ''
});

console.log(result);
```

## customers-organizations-set-primary-contact

Make a person the company's main contact

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsSetPrimaryContact({
    id: '',
    contactId: ''
});

console.log(result);
```

## customers-organizations-unblock-delivery

Lift the delivery block

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsUnblockDelivery({
    id: '',
    note: ''
});

console.log(result);
```

## customers-organizations-unblock-order

Lift the order block

```javascript
import { Client, CustomersOrganizations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersOrganizations = new CustomersOrganizations(client);

const result = await customersOrganizations.customersOrganizationsUnblockOrder({
    id: '',
    note: ''
});

console.log(result);
```
