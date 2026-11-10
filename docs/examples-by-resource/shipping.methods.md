# shipping.methods

## shipping-methods-list

List shipping method configurations

```javascript
import { Client, ShippingMethods, PricingType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'position.asc', // optional
    code: 'express', // optional
    enabled: true, // optional
    pricingType: PricingType.Matrix, // optional
    carrierId: '8a4d1c7e-2b93-4f61-b0d2-6c5a9e3f1a44', // optional
    carrier: 'acme-parcel', // optional
    externalId: 'VERSANDART-02', // optional
    taxClass: 'reduced' // optional
});

console.log(result);
```

## shipping-methods-create

Create a shipping method

```javascript
import { Client, ShippingMethods, ShippingMethodMatrixBasis, ShippingMethodPricingType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsCreate({
    code: 'express',
    name: 'Express delivery',
    carrier: 'acme-parcel', // optional
    carrierId: '8a4d1c7e-2b93-4f61-b0d2-6c5a9e3f1a44', // optional
    checkoutNotes: {
        "de": "Lieferung nur werktags.",
        "en": "Delivered on working days only."
    }, // optional
    countries: ["DE","AT","CH"], // optional
    currency: 'EUR', // optional
    description: 'Delivered by the next working day when ordered before the cut-off.', // optional
    enabled: true, // optional
    etaDaysMax: 1, // optional
    etaDaysMin: 1, // optional
    externalId: 'VERSANDART-02', // optional
    externalRefs: {
        "business-central": "VERSANDART-02",
        "legacy_shop": "express"
    }, // optional
    freeAbove: 100, // optional
    labels: {
        "de": "Expressversand",
        "en": "Express delivery"
    }, // optional
    matrixAttribute: 'volume_litres', // optional
    matrixBasis: ShippingMethodMatrixBasis.Weight, // optional
    metadata: {
        "erp_key": "SHIP-EXPRESS",
        "printer": "label-2"
    }, // optional
    position: 1, // optional
    price: 9.9, // optional
    pricingType: ShippingMethodPricingType.Fixed, // optional
    quoteAbove: 31.5, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Shipping_Agent_Service": "NEXTDAY"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    taxClass: 'reduced' // optional
});

console.log(result);
```

## shipping-methods-defaults

Seed the standard shipping methods

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsDefaults();

console.log(result);
```

## shipping-methods-delete

Delete a shipping method

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsDelete({
    id: ''
});

console.log(result);
```

## shipping-methods-get

Read one shipping method

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsGet({
    id: ''
});

console.log(result);
```

## shipping-methods-update

Update a shipping method

```javascript
import { Client, ShippingMethods, ShippingMethodMatrixBasis, ShippingMethodPricingType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsUpdate({
    id: '',
    carrier: 'acme-parcel', // optional
    carrierId: '8a4d1c7e-2b93-4f61-b0d2-6c5a9e3f1a44', // optional
    checkoutNotes: {
        "de": "Lieferung nur werktags.",
        "en": "Delivered on working days only."
    }, // optional
    code: 'express', // optional
    countries: ["DE","AT","CH"], // optional
    currency: 'EUR', // optional
    description: 'Delivered by the next working day when ordered before the cut-off.', // optional
    enabled: true, // optional
    etaDaysMax: 1, // optional
    etaDaysMin: 1, // optional
    externalId: 'VERSANDART-02', // optional
    externalRefs: {
        "business-central": "VERSANDART-02",
        "legacy_shop": "express"
    }, // optional
    freeAbove: 100, // optional
    labels: {
        "de": "Expressversand",
        "en": "Express delivery"
    }, // optional
    matrixAttribute: 'volume_litres', // optional
    matrixBasis: ShippingMethodMatrixBasis.Weight, // optional
    metadata: {
        "erp_key": "SHIP-EXPRESS",
        "printer": "label-2"
    }, // optional
    name: 'Express delivery', // optional
    position: 1, // optional
    price: 9.9, // optional
    pricingType: ShippingMethodPricingType.Fixed, // optional
    quoteAbove: 31.5, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Shipping_Agent_Service": "NEXTDAY"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    taxClass: 'reduced' // optional
});

console.log(result);
```

## shipping-tiers-list

List a method's matrix tiers

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersList({
    methodId: '',
    limit: 1, // optional
    offset: 1, // optional
    order: 'position.asc', // optional
    fromValue: 10 // optional
});

console.log(result);
```

## shipping-tiers-create

Add a matrix tier

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersCreate({
    methodId: '',
    fromValue: 10, // optional
    position: 1, // optional
    price: 6.9 // optional
});

console.log(result);
```

## shipping-tiers-replace

Replace a method's matrix tiers

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersReplace({
    methodId: '',
    tiers: []
});

console.log(result);
```

## shipping-tiers-ladder

Generate an evenly-stepped tier table

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersLadder({
    methodId: '',
    basePrice: 4.9,
    step: 5,
    toValue: 30,
    fromValue: 0, // optional
    replace: true, // optional
    stepPrice: 2 // optional
});

console.log(result);
```

## shipping-tiers-delete

Delete a matrix tier

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersDelete({
    methodId: '',
    id: ''
});

console.log(result);
```

## shipping-tiers-get

Read one matrix tier

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersGet({
    methodId: '',
    id: ''
});

console.log(result);
```

## shipping-tiers-update

Update a matrix tier

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersUpdate({
    methodId: '',
    id: '',
    fromValue: 10, // optional
    position: 1, // optional
    price: 6.9 // optional
});

console.log(result);
```

## shipping-rates

Resolve the shipping rates for a basket

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingRates({
    at: '2026-01-01T12:00:00Z', // optional
    attributes: {
        "volume_litres": 48
    }, // optional
    country: 'DE', // optional
    currency: 'EUR', // optional
    marketId: '3f2b6d10-7c41-4c0a-9a35-2f5b8e0d9c11', // optional
    orderValue: 129.9, // optional
    orderValueGross: 129.9, // optional
    orderValueNet: 109.16, // optional
    quantity: 3, // optional
    weight: 12.5, // optional
    weightUnit: 'kg' // optional
});

console.log(result);
```

## shipping-tax-classes-usage

Count the methods using a tax class

```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTaxClassesUsage({
    code: 'reduced'
});

console.log(result);
```
