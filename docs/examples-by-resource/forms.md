# forms

## forms-list

List forms

```javascript
import { Client, Forms, FormStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsList({
    id: '', // optional
    name: 'Contact request', // optional
    slug: 'contact', // optional
    status: FormStatus.Draft, // optional
    campaignRef: '', // optional
    leadStage: 'lead', // optional
    createdAt: '2026-01-31T09:15:00Z', // optional
    updatedAt: '2026-01-31T09:15:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## forms-create

Create a form

```javascript
import { Client, Forms, FormStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsCreate({
    name: 'Price request',
    slug: 'price-request',
    campaignRef: '', // optional
    definition: [{"$formkit":"text","label":"Company","name":"company","validation":"required"},{"$formkit":"email","label":"Email","name":"email","validation":"required|email"},{"$formkit":"textarea","label":"What do you need a price for?","name":"message","rows":4},{"$el":"p","children":"We answer price requests within one working day."}], // optional
    leadStage: 'lead', // optional
    metadata: {}, // optional
    settings: {}, // optional
    status: FormStatus.Draft // optional
});

console.log(result);
```

## forms-defaults

Seed the sample contact form

```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsDefaults();

console.log(result);
```

## forms-submissions-list

List submissions

```javascript
import { Client, Forms, FormSubmissionStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsList({
    id: '', // optional
    formId: '', // optional
    formSlug: 'contact', // optional
    source: '/contact', // optional
    status: FormSubmissionStatus.New, // optional
    contactId: '', // optional
    pageUrl: 'https://example.com/kontakt', // optional
    campaignRef: '', // optional
    leadStage: 'lead', // optional
    createdAt: '2026-01-31T09:15:00Z', // optional
    updatedAt: '2026-01-31T09:15:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## forms-submissions-create

Record a submission

```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsCreate({
    data: {
        "company": "Example GmbH",
        "email": "buyer@example.com",
        "message": "Please quote 200 units of ACME-4711-BLK, delivered to Hamburg."
    },
    formId: '',
    campaignRef: '', // optional
    ip: '203.0.113.10', // optional
    locale: 'de-DE', // optional
    metadata: {}, // optional
    pageUrl: 'https://example.com/kontakt', // optional
    source: '/contact', // optional
    userAgent: 'Mozilla/5.0' // optional
});

console.log(result);
```

## forms-submissions-prune

Prune submissions past retention

```javascript
import { Client, Forms, FormsSubmissionsPruneStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsPrune({
    dryRun: true, // optional
    formSlug: 'contact', // optional
    olderThanDays: 1, // optional
    status: FormsSubmissionsPruneStatus.New // optional
});

console.log(result);
```

## forms-submissions-delete

Delete a submission

```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsDelete({
    id: ''
});

console.log(result);
```

## forms-submissions-get

Read one submission

```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsGet({
    id: ''
});

console.log(result);
```

## forms-submissions-update

Update a submission

```javascript
import { Client, Forms, FormSubmissionStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsSubmissionsUpdate({
    id: '',
    data: {
        "company": "Example GmbH",
        "email": "buyer@example.com",
        "message": "Please quote 200 units of ACME-4711-BLK, delivered to Hamburg."
    }, // optional
    formId: '', // optional
    formSlug: 'contact', // optional
    metadata: {}, // optional
    source: '/contact', // optional
    status: FormSubmissionStatus.New // optional
});

console.log(result);
```

## forms-vocabularies-list

List vocabularies

```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsVocabulariesList();

console.log(result);
```

## forms-vocabularies-get

Read one vocabulary

```javascript
import { Client, Forms, FormsVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsVocabulariesGet({
    name: FormsVocabulariesGetName.Formstatuses
});

console.log(result);
```

## forms-delete

Delete a form

```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsDelete({
    id: ''
});

console.log(result);
```

## forms-get

Read one form

```javascript
import { Client, Forms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsGet({
    id: ''
});

console.log(result);
```

## forms-update

Update a form

```javascript
import { Client, Forms, FormStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsUpdate({
    id: '',
    campaignRef: '', // optional
    definition: [{"$formkit":"text","label":"Company","name":"company","validation":"required"},{"$formkit":"email","label":"Email","name":"email","validation":"required|email"},{"$formkit":"textarea","label":"What do you need a price for?","name":"message","rows":4},{"$el":"p","children":"We answer price requests within one working day."}], // optional
    leadStage: 'lead', // optional
    metadata: {}, // optional
    name: 'Price request', // optional
    settings: {}, // optional
    slug: 'price-request', // optional
    status: FormStatus.Draft // optional
});

console.log(result);
```
