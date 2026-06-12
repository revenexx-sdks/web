```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsAttributesCreate({
    code: '',
    type: '',
    config: {}, // optional
    entityRef: '', // optional
    entityType: '', // optional
    groupId: '', // optional
    isFilterable: null, // optional
    isUnique: null, // optional
    labels: {}, // optional
    localizable: null, // optional
    position: null, // optional
    scopable: null, // optional
    usableInGrid: null, // optional
    validation: {} // optional
});

console.log(result);
```
