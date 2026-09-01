```javascript
import { Client, ProductsCategories, ProductCategoriesSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsCategories = new ProductsCategories(client);

const result = await productsCategories.productsProductCategoriesCreate({
    categoryId: '',
    productId: '',
    position: 1, // optional
    source: ProductCategoriesSource.Manual // optional
});

console.log(result);
```
