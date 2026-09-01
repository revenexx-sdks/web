```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsAssetFamiliesUpdate({
    id: '',
    code: 'packshots', // optional
    labels: {
        "de": "Packshots",
        "en": "Packshots"
    }, // optional
    namingConvention: {
        "allowed_extensions": [
            "jpg",
            "png"
        ],
        "pattern": "{sku}_{index}",
        "source": "sku"
    } // optional
});

console.log(result);
```
