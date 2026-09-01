```javascript
import { Client, Products, ProductsKind } from "@revenexx/sdk";

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
                "de_DE": {
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
            "de_DE": {
                "description": "B\u00fcrstenloser Motor, 2 Akkus im Set.",
                "name": "Akku-Bohrschrauber 18V"
            },
            "en_GB": {
                "name": "18V cordless drill"
            }
        }
    }, // optional
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
    enabled: true, // optional
    familyId: '', // optional
    familyVariantId: '', // optional
    kind: ProductsKind.Simple, // optional
    parentId: '', // optional
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
    taxClass: 'standard' // optional
});

console.log(result);
```
