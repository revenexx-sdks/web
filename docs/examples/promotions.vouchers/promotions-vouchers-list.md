```javascript
import { Client, PromotionsVouchers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsVouchers = new PromotionsVouchers(client);

const result = await promotionsVouchers.promotionsVouchersList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    promotionId: '', // optional
    batchId: '', // optional
    code: '', // optional
    codeKey: '', // optional
    status: '', // optional
    usageLimit: '', // optional
    usageCount: '', // optional
    currency: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    reservationRequired: '' // optional
});

console.log(result);
```
