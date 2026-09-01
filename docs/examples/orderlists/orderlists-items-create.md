```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsCreate({
    listId: '',
    name: 'Copy paper A4, 80 g/m², white',
    categorySlug: 'office-supplies', // optional
    costCenterId: 'CC-100', // optional
    customSku: 'CUST-4711', // optional
    image: 'https://cdn.example.com/catalog/acme-4711-blk.jpg', // optional
    metadata: {
        "erp_line_ref": "4711-01"
    }, // optional
    position: 0, // optional
    positionTexts: ["Deliver to bay 3","Engraving: Team A"], // optional
    price: 3.49, // optional
    productId: '', // optional
    quantity: 12, // optional
    sku: 'ACME-4711-BLK', // optional
    subcategorySlug: 'paper', // optional
    taxRate: 19, // optional
    unit: 'piece' // optional
});

console.log(result);
```
