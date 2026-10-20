```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersCreate({
    code: 'paul_horn',
    country: 'DE',
    name: 'Paul Horn',
    active: true, // optional
    city: 'Tübingen', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'merchant@example.com', // optional
    deletedById: '283746592837465012', // optional
    descriptions: {
        "de": "Pr\u00e4zisionswerkzeuge aus T\u00fcbingen.",
        "en": "Precision tools from T\u00fcbingen."
    }, // optional
    eeaResponsibleAddress: {
        "address_line1": "Keizersgracht 1",
        "country_code": "NL",
        "formatted": [
            "Acme Europe B.V.",
            "Keizersgracht 1",
            "1015 CJ AMSTERDAM",
            "NETHERLANDS"
        ],
        "locality": "Amsterdam",
        "organization_name": "Acme Europe B.V.",
        "postal_code": "1015 CJ"
    }, // optional
    eeaResponsibleCity: 'Amsterdam', // optional
    eeaResponsibleCountry: 'NL', // optional
    eeaResponsibleEmail: 'safety@acme.eu', // optional
    eeaResponsibleName: 'Acme Europe B.V.', // optional
    eeaResponsiblePostalCode: '1015 CJ', // optional
    eeaResponsibleStreet: 'Keizersgracht 1', // optional
    email: 'info@phorn.de', // optional
    externalId: 'MFR-0815', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    legalName: 'Paul Horn GmbH', // optional
    logo: 'paul_horn_logo', // optional
    metadata: {
        "do_not_export": true,
        "sync_owner": "erp-nightly"
    }, // optional
    postalAddress: {
        "address_line1": "Unter dem Holz 33-35",
        "country_code": "DE",
        "formatted": [
            "Paul Horn GmbH",
            "Unter dem Holz 33-35",
            "72072 T\u00dcBINGEN",
            "GERMANY"
        ],
        "locality": "T\u00fcbingen",
        "organization_name": "Paul Horn GmbH",
        "postal_code": "72072"
    }, // optional
    postalCode: '72072', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: ''S1230020C1TI25' still has stock at 2 location(s)', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    street: 'Unter dem Holz 33-35', // optional
    trashBatch: '', // optional
    website: 'https://www.phorn.de' // optional
});

console.log(result);
```
