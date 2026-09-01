```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsAttributesUpdate({
    id: '',
    code: 'net_weight', // optional
    config: {
        "reference_entity": "brand"
    }, // optional
    entityRef: 'brand', // optional
    entityType: 'product', // optional
    groupId: '', // optional
    isFilterable: true, // optional
    isUnique: true, // optional
    labels: {
        "de": "Nettogewicht",
        "en": "Net weight"
    }, // optional
    localizable: true, // optional
    position: 1, // optional
    scopable: true, // optional
    type: 'select', // optional
    usableInGrid: true, // optional
    validation: {
        "max_length": 64,
        "min_length": 3
    } // optional
});

console.log(result);
```
