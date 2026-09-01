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
