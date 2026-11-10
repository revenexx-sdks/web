# products.manufacturers

## products-manufacturers-list

List manufacturers

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

## products-manufacturers-create

Create manufacturer

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

## products-manufacturers-migrate

Move free-text manufacturers onto records

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersMigrate({
    cursor: '', // optional
    dryRun: true // optional
});

console.log(result);
```

## products-manufacturers-empty-trash

Empty the trash of manufacturers

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersEmptyTrash();

console.log(result);
```

## products-manufacturers-delete

Move manufacturer to the trash, or delete it for good

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersDelete({
    id: ''
});

console.log(result);
```

## products-manufacturers-get

Get manufacturer

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersGet({
    id: ''
});

console.log(result);
```

## products-manufacturers-update

Update manufacturer

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersUpdate({
    id: '',
    active: true, // optional
    city: 'Tübingen', // optional
    code: 'paul_horn', // optional
    country: 'DE', // optional
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
    name: 'Paul Horn', // optional
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

## products-manufacturers-gpsr

Check a manufacturer's GPSR data

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersGpsr({
    id: ''
});

console.log(result);
```

## products-manufacturers-logo-remove

Remove a manufacturer's logo

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersLogoRemove({
    id: ''
});

console.log(result);
```

## products-manufacturers-logo-set

Set a manufacturer's logo

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersLogoSet({
    id: '',
    assetId: '', // optional
    path: 'manufacturers/paul_horn.svg' // optional
});

console.log(result);
```

## products-manufacturers-products

List the products of a manufacturer

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersProducts({
    id: '',
    limit: 1, // optional
    offset: 1, // optional
    order: 'sku.asc' // optional
});

console.log(result);
```

## products-manufacturers-restore

Restore manufacturer from the trash

```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersRestore({
    id: ''
});

console.log(result);
```
