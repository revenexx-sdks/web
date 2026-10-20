```javascript
import { Client, ProductsManufacturers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsManufacturers = new ProductsManufacturers(client);

const result = await productsManufacturers.productsManufacturersLogoSet({
    id: '',
    assetId: '', // optional
    path: 'manufacturers/paul_horn.svg' // optional
});

console.log(result);
```
