```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersUpdate({
    id: '',
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
    customerOrderNumber: 'PO-2026-0042', // optional
    externalId: 'SO-004711', // optional
    externalRefs: {
        "legacy_shop": "88231",
        "procurement_platform": "PO-2026-0042"
    }, // optional
    metadata: {
        "erp_batch": "2026-W32"
    }, // optional
    requestedDeliveryDate: '2026-03-17', // optional
    shippingAddress: {
        "city": "Berlin",
        "company": "Beispiel Industrietechnik GmbH",
        "country": "DE",
        "name": "Anna Berger",
        "street": "Musterstra\u00dfe 12",
        "zip": "10115"
    }, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Document_Type": "Order",
            "Payment_Terms_Code": "14 TAGE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    userData: {
        "campaign": "spring-catalogue",
        "requested_date": "2026-03-17",
        "source": "webshop"
    } // optional
});

console.log(result);
```
