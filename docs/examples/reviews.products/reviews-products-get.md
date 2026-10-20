```javascript
import { Client, ReviewsProducts, Sort } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const reviewsProducts = new ReviewsProducts(client);

const result = await reviewsProducts.reviewsProductsGet({
    productId: '',
    market: '', // optional
    sort: Sort.Newest, // optional
    limit: 1, // optional
    offset: 1 // optional
});

console.log(result);
```
