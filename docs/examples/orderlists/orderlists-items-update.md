```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsUpdate({
    listId: '',
    id: '',
    categorySlug: '', // optional
    costCenterId: '', // optional
    customSku: '', // optional
    image: '', // optional
    metadata: {}, // optional
    name: '', // optional
    position: null, // optional
    positionTexts: [], // optional
    price: null, // optional
    productId: '', // optional
    quantity: null, // optional
    sku: '', // optional
    subcategorySlug: '', // optional
    taxRate: null, // optional
    unit: '' // optional
});

console.log(result);
```
