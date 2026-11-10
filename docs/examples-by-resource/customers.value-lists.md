# customers.value-lists

## customers-address-types-list

The address types this tenant keeps

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersAddressTypesList({
    active: true // optional
});

console.log(result);
```

## customers-address-types-create

Add an address type

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersAddressTypesCreate({
    code: '',
    title: 'Shipping address',
    active: true, // optional
    description: 'Where the goods go.', // optional
    descriptions: {
        "de": "Wohin die Ware geliefert wird.",
        "en": "Where the goods go."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Lieferadresse",
        "en": "Shipping address"
    }, // optional
    position: 1, // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-address-types-delete

Remove an address type nothing uses

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersAddressTypesDelete({
    id: ''
});

console.log(result);
```

## customers-address-types-get

Read one address type

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersAddressTypesGet({
    id: ''
});

console.log(result);
```

## customers-address-types-update

Rename an address type or move it in the order

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersAddressTypesUpdate({
    id: '',
    active: true, // optional
    description: 'Where the goods go.', // optional
    descriptions: {
        "de": "Wohin die Ware geliefert wird.",
        "en": "Where the goods go."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Lieferadresse",
        "en": "Shipping address"
    }, // optional
    position: 1, // optional
    title: 'Shipping address', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-contact-event-kinds-list

The activity types this tenant keeps

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactEventKindsList({
    active: true // optional
});

console.log(result);
```

## customers-contact-event-kinds-create

Add an activity type

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactEventKindsCreate({
    code: '',
    title: 'Phone call',
    active: true, // optional
    description: 'Somebody spoke to this person on the phone.', // optional
    descriptions: {
        "de": "Es wurde mit dieser Person telefoniert.",
        "en": "Somebody spoke to this person on the phone."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Telefonat",
        "en": "Phone call"
    }, // optional
    position: 1, // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-contact-event-kinds-delete

Remove an activity type nothing uses

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactEventKindsDelete({
    id: ''
});

console.log(result);
```

## customers-contact-event-kinds-get

Read one activity type

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactEventKindsGet({
    id: ''
});

console.log(result);
```

## customers-contact-event-kinds-update

Rename an activity type or move it in the order

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactEventKindsUpdate({
    id: '',
    active: true, // optional
    description: 'Somebody spoke to this person on the phone.', // optional
    descriptions: {
        "de": "Es wurde mit dieser Person telefoniert.",
        "en": "Somebody spoke to this person on the phone."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Telefonat",
        "en": "Phone call"
    }, // optional
    position: 1, // optional
    title: 'Phone call', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-contact-lifecycle-stages-list

The contact stages this tenant keeps

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactLifecycleStagesList({
    active: true // optional
});

console.log(result);
```

## customers-contact-lifecycle-stages-create

Add a contact stage

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactLifecycleStagesCreate({
    code: '',
    title: 'Lead',
    active: true, // optional
    description: 'Showed an interest of their own — a form, a fair, a call.', // optional
    descriptions: {
        "de": "Hat selbst Interesse gezeigt.",
        "en": "Showed an interest of their own."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Lead",
        "en": "Lead"
    }, // optional
    position: 1, // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-contact-lifecycle-stages-delete

Remove a contact stage nothing uses

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactLifecycleStagesDelete({
    id: ''
});

console.log(result);
```

## customers-contact-lifecycle-stages-get

Read one contact stage

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactLifecycleStagesGet({
    id: ''
});

console.log(result);
```

## customers-contact-lifecycle-stages-update

Rename a contact stage or move it in the order

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactLifecycleStagesUpdate({
    id: '',
    active: true, // optional
    description: 'Showed an interest of their own — a form, a fair, a call.', // optional
    descriptions: {
        "de": "Hat selbst Interesse gezeigt.",
        "en": "Showed an interest of their own."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Lead",
        "en": "Lead"
    }, // optional
    position: 1, // optional
    title: 'Lead', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-contact-point-kinds-list

The recipient types this tenant keeps

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactPointKindsList({
    active: true // optional
});

console.log(result);
```

## customers-contact-point-kinds-create

Add a recipient type

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactPointKindsCreate({
    code: '',
    title: 'Invoice',
    active: true, // optional
    description: 'Where the invoice is sent.', // optional
    descriptions: {
        "de": "Wohin die Rechnung geschickt wird.",
        "en": "Where the invoice is sent."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    position: 1, // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-contact-point-kinds-delete

Remove a recipient type nothing uses

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactPointKindsDelete({
    id: ''
});

console.log(result);
```

## customers-contact-point-kinds-get

Read one recipient type

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactPointKindsGet({
    id: ''
});

console.log(result);
```

## customers-contact-point-kinds-update

Rename a recipient type or move it in the order

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersContactPointKindsUpdate({
    id: '',
    active: true, // optional
    description: 'Where the invoice is sent.', // optional
    descriptions: {
        "de": "Wohin die Rechnung geschickt wird.",
        "en": "Where the invoice is sent."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    position: 1, // optional
    title: 'Invoice', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-defaults

Seed this tenant's value sets

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersDefaults({
    data: {}
});

console.log(result);
```

## customers-lifecycle-stages-list

The lifecycle stages this tenant keeps

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersLifecycleStagesList({
    active: true // optional
});

console.log(result);
```

## customers-lifecycle-stages-create

Add a lifecycle stage

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersLifecycleStagesCreate({
    code: '',
    title: 'Customer',
    active: true, // optional
    description: 'Has ordered at least once and is being served.', // optional
    descriptions: {
        "de": "Hat mindestens einmal bestellt und wird betreut.",
        "en": "Has ordered at least once and is being served."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Kunde",
        "en": "Customer"
    }, // optional
    position: 1, // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-lifecycle-stages-delete

Remove a lifecycle stage nothing uses

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersLifecycleStagesDelete({
    id: ''
});

console.log(result);
```

## customers-lifecycle-stages-get

Read one lifecycle stage

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersLifecycleStagesGet({
    id: ''
});

console.log(result);
```

## customers-lifecycle-stages-update

Rename a lifecycle stage or move it in the order

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersLifecycleStagesUpdate({
    id: '',
    active: true, // optional
    description: 'Has ordered at least once and is being served.', // optional
    descriptions: {
        "de": "Hat mindestens einmal bestellt und wird betreut.",
        "en": "Has ordered at least once and is being served."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Kunde",
        "en": "Customer"
    }, // optional
    position: 1, // optional
    title: 'Customer', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-payment-terms-list

The payment terms this tenant keeps

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersPaymentTermsList({
    active: true // optional
});

console.log(result);
```

## customers-payment-terms-create

Add a payment term

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersPaymentTermsCreate({
    code: '',
    title: 'Net 30 days',
    active: true, // optional
    description: 'Invoice due 30 days after the delivery note.', // optional
    descriptions: {
        "de": "Rechnung 30 Tage nach Lieferschein f\u00e4llig.",
        "en": "Invoice due 30 days after the delivery note."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Zahlbar in 30 Tagen",
        "en": "Net 30 days"
    }, // optional
    position: 1, // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-payment-terms-delete

Remove a payment term nothing uses

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersPaymentTermsDelete({
    id: ''
});

console.log(result);
```

## customers-payment-terms-get

Read one payment term

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersPaymentTermsGet({
    id: ''
});

console.log(result);
```

## customers-payment-terms-update

Rename a payment term or move it in the order

```javascript
import { Client, CustomersValueLists, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersPaymentTermsUpdate({
    id: '',
    active: true, // optional
    description: 'Invoice due 30 days after the delivery note.', // optional
    descriptions: {
        "de": "Rechnung 30 Tage nach Lieferschein f\u00e4llig.",
        "en": "Invoice due 30 days after the delivery note."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Zahlbar in 30 Tagen",
        "en": "Net 30 days"
    }, // optional
    position: 1, // optional
    title: 'Net 30 days', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-vocabularies-list

List the vocabularies

```javascript
import { Client, CustomersValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersVocabulariesList();

console.log(result);
```

## customers-vocabularies-get

Read one vocabulary

```javascript
import { Client, CustomersValueLists, CustomersVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersValueLists = new CustomersValueLists(client);

const result = await customersValueLists.customersVocabulariesGet({
    name: CustomersVocabulariesGetName.Addresstypes
});

console.log(result);
```
