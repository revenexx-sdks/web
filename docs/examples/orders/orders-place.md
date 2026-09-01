```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersPlace({
    items: [],
    billingAddress: {
        "city": "Berlin",
        "company": "Beispiel Industrietechnik GmbH",
        "country": "DE",
        "name": "Anna Berger",
        "street": "Musterstra\u00dfe 12",
        "zip": "10115"
    }, // optional
    buyer: {
        "company": "Beispiel Industrietechnik GmbH",
        "customer_number": "K-10042",
        "email": "anna.berger@example.com",
        "name": "Anna Berger"
    }, // optional
    cartId: '', // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: 'EUR', // optional
    customerOrderNumber: 'PO-2026-0042', // optional
    grandTotal: 243.9, // optional
    metadata: {
        "erp_batch": "2026-W32"
    }, // optional
    organizationId: '', // optional
    payment: {
        "method": "invoice",
        "status": "open"
    }, // optional
    shipping: {
        "method": "standard",
        "price": 5.9,
        "tax_rate": 19
    }, // optional
    shippingAddress: {
        "city": "Berlin",
        "company": "Beispiel Industrietechnik GmbH",
        "country": "DE",
        "name": "Anna Berger",
        "street": "Musterstra\u00dfe 12",
        "zip": "10115"
    }, // optional
    shippingTotal: 5.9, // optional
    userData: {
        "campaign": "spring-catalogue",
        "source": "webshop"
    } // optional
});

console.log(result);
```
