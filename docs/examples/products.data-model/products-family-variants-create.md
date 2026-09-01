```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsFamilyVariantsCreate({
    code: 'clothing_by_colour_size',
    familyId: '',
    axes: [
        "colour",
        "size"
    ], // optional
    labels: {
        "de": "Nach Farbe und Gr\u00f6\u00dfe",
        "en": "By colour and size"
    } // optional
});

console.log(result);
```
