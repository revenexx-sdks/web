```javascript
import { Client, ProductsManufacturers, ProductsListTrashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    trashed: ProductsListTrashed.Only, // optional
    id: '', // optional
    code: 'paul_horn', // optional
    name: 'Paul Horn', // optional
    descriptions: '{}', // optional
    logo: 'paul_horn_logo', // optional
    website: 'https://www.phorn.de', // optional
    legalName: 'Paul Horn GmbH', // optional
    street: 'Unter dem Holz 33-35', // optional
    postalCode: '72072', // optional
    city: 'Tübingen', // optional
    country: 'DE', // optional
    email: 'info@phorn.de', // optional
    eeaResponsibleName: 'Acme Europe B.V.', // optional
    eeaResponsibleStreet: 'Keizersgracht 1', // optional
    eeaResponsiblePostalCode: '1015 CJ', // optional
    eeaResponsibleCity: 'Amsterdam', // optional
    eeaResponsibleCountry: 'NL', // optional
    eeaResponsibleEmail: 'safety@acme.eu', // optional
    postalAddress: '{}', // optional
    eeaResponsibleAddress: '{}', // optional
    gpsrComplete: true, // optional
    active: true, // optional
    externalId: 'MFR-0815', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    metadata: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'merchant@example.com', // optional
    deletedById: '283746592837465012', // optional
    trashBatch: '', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: ''S1230020C1TI25' still has stock at 2 location(s)' // optional
});

console.log(result);
```
