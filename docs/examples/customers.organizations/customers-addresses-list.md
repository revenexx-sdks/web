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
