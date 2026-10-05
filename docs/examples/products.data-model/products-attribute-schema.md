```javascript
import { Client, ProductsDataModel, EntityType, ProductsListKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsAttributeSchema({
    familyId: '', // optional
    familyCode: '', // optional
    entityType: EntityType.Product, // optional
    entityRef: 'brand', // optional
    locale: 'de_DE', // optional
    channel: 'b2b', // optional
    kind: ProductsListKind.Simple // optional
});

console.log(result);
```
