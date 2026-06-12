```javascript
import { Client, Products } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsAttributeOptionsCreate({
    attributeId: '',
    code: '',
    labels: {}, // optional
    position: null, // optional
    swatch: {} // optional
});

console.log(result);
```
