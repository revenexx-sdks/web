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
