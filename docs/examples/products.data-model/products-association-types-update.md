```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsAssociationTypesUpdate({
    id: '',
    code: 'cross_sell', // optional
    isQuantified: true, // optional
    isTwoWay: true, // optional
    labels: {
        "de": "Querverkauf",
        "en": "Cross-sell"
    } // optional
});

console.log(result);
```
