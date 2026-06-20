```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsCreate({
    sku: '',
    attributeValues: {}, // optional
    completeness: {}, // optional
    deletedAt: '', // optional
    enabled: null, // optional
    familyId: '', // optional
    familyVariantId: '', // optional
    kind: '', // optional
    parentId: '', // optional
    quantifiedAssociations: {}, // optional
    taxClass: '' // optional
});

console.log(result);
```
