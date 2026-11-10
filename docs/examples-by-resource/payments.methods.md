# payments.methods

## payments-methods-list

List payment method configurations

```javascript
import { Client, PaymentsMethods, PaymentMethodKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    code: 'invoice', // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    enabled: true, // optional
    provider: 'stripe' // optional
});

console.log(result);
```

## payments-methods-create

Create a payment method configuration

```javascript
import { Client, PaymentsMethods, PaymentFeeType, PaymentMethodKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsCreate({
    code: 'invoice',
    name: 'Invoice',
    countries: ["DE","AT"], // optional
    description: 'Pay within 14 days of the invoice date.', // optional
    enabled: true, // optional
    feeAmount: 2.5, // optional
    feeCurrency: 'EUR', // optional
    feeType: PaymentFeeType.None, // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    maxOrderValue: 2500, // optional
    metadata: {
        "erp_payment_key": "ZTRM01"
    }, // optional
    minOrderValue: 10, // optional
    position: 0, // optional
    provider: 'stripe', // optional
    providerMethod: 'card' // optional
});

console.log(result);
```

## payments-methods-defaults

Seed the default methods and providers

```javascript
import { Client, PaymentsMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsDefaults();

console.log(result);
```

## payments-methods-eligible

Resolve the methods eligible for a buyer

```javascript
import { Client, PaymentsMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsEligible({
    amount: 49.9, // optional
    country: 'DE', // optional
    currency: 'EUR' // optional
});

console.log(result);
```

## payments-methods-delete

Delete a payment method configuration

```javascript
import { Client, PaymentsMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsDelete({
    id: ''
});

console.log(result);
```

## payments-methods-get

Read one payment method configuration

```javascript
import { Client, PaymentsMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsGet({
    id: ''
});

console.log(result);
```

## payments-methods-update

Update a payment method configuration

```javascript
import { Client, PaymentsMethods, PaymentFeeType, PaymentMethodKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsMethodsUpdate({
    id: '',
    code: 'invoice', // optional
    countries: ["DE","AT"], // optional
    description: 'Pay within 14 days of the invoice date.', // optional
    enabled: true, // optional
    feeAmount: 2.5, // optional
    feeCurrency: 'EUR', // optional
    feeType: PaymentFeeType.None, // optional
    kind: PaymentMethodKind.SelfManaged, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    maxOrderValue: 2500, // optional
    metadata: {
        "erp_payment_key": "ZTRM01"
    }, // optional
    minOrderValue: 10, // optional
    name: 'Invoice', // optional
    position: 0, // optional
    provider: 'stripe', // optional
    providerMethod: 'card' // optional
});

console.log(result);
```

## payments-tax-classes-usage

Count the methods using a tax class

```javascript
import { Client, PaymentsMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsMethods = new PaymentsMethods(client);

const result = await paymentsMethods.paymentsTaxClassesUsage({
    code: 'reduced'
});

console.log(result);
```
