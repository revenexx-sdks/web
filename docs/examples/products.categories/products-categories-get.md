```javascript
import { Client, ProductsCategories } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsCategories = new ProductsCategories(client);

const result = await productsCategories.productsCategoriesGet({
    id: ''
});

console.log(result);
```
