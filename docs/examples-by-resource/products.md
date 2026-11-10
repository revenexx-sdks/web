# products

## products-list

List products

```javascript
import { Client, Products, ProductsListTrashed, ProductsListKind, ProductsListStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    trashed: ProductsListTrashed.Only, // optional
    id: '', // optional
    sku: 'ACME-4711-BLK', // optional
    kind: ProductsListKind.Simple, // optional
    parentId: '', // optional
    familyId: '', // optional
    familyVariantId: '', // optional
    manufacturerId: '', // optional
    enabled: true, // optional
    status: ProductsListStatus.Draft, // optional
    statusChangedAt: '2026-01-01T12:00:00Z', // optional
    channelRelease: '{}', // optional
    channels: '{webshop-de,punchout}', // optional
    taxClass: 'standard', // optional
    baseValues: '{}', // optional
    attributeValues: '{}', // optional
    label: 'Akku-Bohrschrauber 18V', // optional
    quantifiedAssociations: '{}', // optional
    completeness: '{}', // optional
    manufacturerGpsrComplete: true, // optional
    externalId: 'ART-4711', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
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

## products-create

Create product

```javascript
import { Client, Products, ProductsKind, ProductsStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsCreate({
    sku: 'ACME-4711-BLK',
    attributeValues: {
        "channel_locale_specific": {
            "b2b": {
                "de": {
                    "description": "Staffelpreise auf Anfrage."
                }
            }
        },
        "channel_specific": {
            "b2b": {
                "minimum_order_quantity": 6
            }
        },
        "common": {
            "colour": "black",
            "manufacturer_aid": "4711-BLK",
            "net_weight": 2.4
        },
        "locale_specific": {
            "de": {
                "description": "B\u00fcrstenloser Motor, 2 Akkus im Set.",
                "name": "Akku-Bohrschrauber 18V"
            },
            "en": {
                "name": "18V cordless drill"
            }
        }
    }, // optional
    baseValues: {
        "country_of_origin": "DE",
        "customs_tariff_number": "82055980",
        "gtin": "4012345000009",
        "min_order_quantity": 10,
        "order_interval": 5,
        "unit": "piece"
    }, // optional
    categoryId: '', // optional
    channelRelease: {
        "marketplace": "in_review",
        "webshop-de": "released"
    }, // optional
    channels: ["webshop-de","punchout"], // optional
    completeness: {
        "computed_at": "2026-01-01T12:00:00Z",
        "filled": 9,
        "missing": [
            "net_weight",
            "packaging_unit",
            "safety_datasheet"
        ],
        "ratio": 0.75,
        "required": 12
    }, // optional
    copyFrom: '', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'merchant@example.com', // optional
    deletedById: '283746592837465012', // optional
    enabled: true, // optional
    externalId: 'ART-4711', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    familyId: '', // optional
    familyVariantId: '', // optional
    kind: ProductsKind.Simple, // optional
    manufacturerId: '', // optional
    name: 'Akku-Bohrschrauber 18V', // optional
    parentId: '', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: ''S1230020C1TI25' still has stock at 2 location(s)', // optional
    quantifiedAssociations: {
        "PRODUCT_SET": {
            "product_models": [],
            "products": [
                {
                    "identifier": "ACME-4711-CASTER",
                    "quantity": 4
                }
            ]
        }
    }, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    status: ProductsStatus.Draft, // optional
    taxClass: 'standard', // optional
    trashBatch: '' // optional
});

console.log(result);
```

## products-batch

Resolve many products at once

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsBatch({
    full: true, // optional
    ids: [], // optional
    skus: [] // optional
});

console.log(result);
```

## products-grid

Browse the product grid

```javascript
import { Client, Products, ProductsListKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsGrid({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    q: 'cordless drill', // optional
    kind: ProductsListKind.Simple, // optional
    enabled: true, // optional
    familyId: '' // optional
});

console.log(result);
```

## products-labels

Resolve product display names

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsLabels({
    ids: [], // optional
    skus: [] // optional
});

console.log(result);
```

## products-product-associations-list

List product associations

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsProductAssociationsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    productId: '', // optional
    associationTypeId: '', // optional
    targetProductId: '', // optional
    quantity: 9.99, // optional
    position: 1, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## products-product-associations-create

Create product association

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsProductAssociationsCreate({
    associationTypeId: '',
    productId: '',
    targetProductId: '',
    position: 1, // optional
    quantity: 4 // optional
});

console.log(result);
```

## products-product-associations-delete

Delete product association

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsProductAssociationsDelete({
    id: ''
});

console.log(result);
```

## products-product-associations-get

Get product association

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsProductAssociationsGet({
    id: ''
});

console.log(result);
```

## products-product-associations-update

Update product association

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsProductAssociationsUpdate({
    id: '',
    associationTypeId: '', // optional
    position: 1, // optional
    productId: '', // optional
    quantity: 4, // optional
    targetProductId: '' // optional
});

console.log(result);
```

## products-setup

Read the setup checklist

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsSetup();

console.log(result);
```

## products-tax-classes-usage

Count the products using a tax class

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsTaxClassesUsage({
    code: 'reduced'
});

console.log(result);
```

## products-empty-trash

Empty the trash of products

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsEmptyTrash();

console.log(result);
```

## products-vocabularies-list

List vocabularies

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsVocabulariesList();

console.log(result);
```

## products-vocabularies-get

Get vocabulary

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsVocabulariesGet({
    name: 'product-kinds'
});

console.log(result);
```

## products-delete

Move product to the trash, or delete it for good

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsDelete({
    id: ''
});

console.log(result);
```

## products-get

Get product

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsGet({
    id: ''
});

console.log(result);
```

## products-update

Update product

```javascript
import { Client, Products, ProductsKind, ProductsStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsUpdate({
    id: '',
    attributeValues: {
        "channel_locale_specific": {
            "b2b": {
                "de": {
                    "description": "Staffelpreise auf Anfrage."
                }
            }
        },
        "channel_specific": {
            "b2b": {
                "minimum_order_quantity": 6
            }
        },
        "common": {
            "colour": "black",
            "manufacturer_aid": "4711-BLK",
            "net_weight": 2.4
        },
        "locale_specific": {
            "de": {
                "description": "B\u00fcrstenloser Motor, 2 Akkus im Set.",
                "name": "Akku-Bohrschrauber 18V"
            },
            "en": {
                "name": "18V cordless drill"
            }
        }
    }, // optional
    baseValues: {
        "country_of_origin": "DE",
        "customs_tariff_number": "82055980",
        "gtin": "4012345000009",
        "min_order_quantity": 10,
        "order_interval": 5,
        "unit": "piece"
    }, // optional
    channelRelease: {
        "marketplace": "in_review",
        "webshop-de": "released"
    }, // optional
    channels: ["webshop-de","punchout"], // optional
    completeness: {
        "computed_at": "2026-01-01T12:00:00Z",
        "filled": 9,
        "missing": [
            "net_weight",
            "packaging_unit",
            "safety_datasheet"
        ],
        "ratio": 0.75,
        "required": 12
    }, // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'merchant@example.com', // optional
    deletedById: '283746592837465012', // optional
    enabled: true, // optional
    externalId: 'ART-4711', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    familyId: '', // optional
    familyVariantId: '', // optional
    kind: ProductsKind.Simple, // optional
    manufacturerId: '', // optional
    parentId: '', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: ''S1230020C1TI25' still has stock at 2 location(s)', // optional
    quantifiedAssociations: {
        "PRODUCT_SET": {
            "product_models": [],
            "products": [
                {
                    "identifier": "ACME-4711-CASTER",
                    "quantity": 4
                }
            ]
        }
    }, // optional
    sku: 'ACME-4711-BLK', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    status: ProductsStatus.Draft, // optional
    taxClass: 'standard', // optional
    trashBatch: '' // optional
});

console.log(result);
```

## products-attribute-set

Set one attribute value on a product

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsAttributeSet({
    id: '',
    attribute: 'material',
    value: 'Edelstahl',
    locale: 'de' // optional
});

console.log(result);
```

## products-channels-assign

Assign sales channels to a product

```javascript
import { Client, Products, ProductsChannelsAssignMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsChannelsAssign({
    id: '',
    channels: ["webshop-de","punchout"],
    mode: ProductsChannelsAssignMode.Add // optional
});

console.log(result);
```

## products-completeness

Compute product completeness

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsCompleteness({
    id: '',
    data: {}
});

console.log(result);
```

## products-copy

Copy a product

```javascript
import { Client, Products, ProductsCopyParts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsCopy({
    id: '',
    sku: 'ACME-4712-BLK',
    parts: [ProductsCopyParts.Attributes, ProductsCopyParts.Images] // optional
});

console.log(result);
```

## products-family-assign

Assign a family to a product

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsFamilyAssign({
    id: '',
    familyCode: '', // optional
    familyId: '' // optional
});

console.log(result);
```

## products-manufacturer-assign

Link a product to a manufacturer

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsManufacturerAssign({
    id: '',
    manufacturerId: ''
});

console.log(result);
```

## products-restore

Restore product from the trash

```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsRestore({
    id: ''
});

console.log(result);
```
