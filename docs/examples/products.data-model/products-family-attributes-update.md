```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsFamilyAttributesUpdate({
    id: '',
    attributeId: '', // optional
    familyId: '', // optional
    isRequired: true, // optional
    position: 1, // optional
    requiredChannels: [
        "shop",
        "b2b"
    ] // optional
});

console.log(result);
```
