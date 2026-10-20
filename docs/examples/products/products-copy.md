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
