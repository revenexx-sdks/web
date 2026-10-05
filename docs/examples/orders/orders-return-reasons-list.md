```javascript
import { Client, Orders, OrderVocabularyTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnReasonsList({
    id: '', // optional
    code: 'damaged', // optional
    title: 'Damaged in transit', // optional
    description: 'The goods arrived broken. A carrier claim usually follows.', // optional
    isDefault: true, // optional
    tone: OrderVocabularyTone.Neutral, // optional
    position: 3, // optional
    isSystem: true, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
