```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsAttributeOptionsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    attributeId: '', // optional
    code: 'stainless_steel', // optional
    position: 1, // optional
    swatch: '{}', // optional
    labels: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
