```javascript
import { Client, ProductsReferences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsReferences = new ProductsReferences(client);

const result = await productsReferences.productsReferenceEntitiesCreate({
    code: 'brand',
    image: 'reference-entities/brand.svg', // optional
    labels: {
        "de": "Marke",
        "en": "Brand"
    } // optional
});

console.log(result);
```
