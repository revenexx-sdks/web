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
