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
