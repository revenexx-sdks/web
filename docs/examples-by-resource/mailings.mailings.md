# mailings.mailings

## mailings-mailings-list

List mailings

```javascript
import { Client, MailingsMailings, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    state: '', // optional
    folder: '', // optional
    campaignRef: '', // optional
    audienceId: '', // optional
    subscriptionType: '', // optional
    templateKey: '', // optional
    starter: '', // optional
    timezoneMode: '', // optional
    duplicatedFromId: '' // optional
});

console.log(result);
```

## mailings-mailings-create

Write a mailing down as a draft

```javascript
import { Client, MailingsMailings, Starter, TimezoneMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsCreate({
    name: '',
    audienceId: '', // optional
    campaignRef: '', // optional
    currency: '', // optional
    excludeAudienceIds: [], // optional
    graymail: true, // optional
    graymailSends: 1, // optional
    metadata: null, // optional
    previewText: '', // optional
    replyTo: '', // optional
    sendAt: '2026-01-01T12:00:00Z', // optional
    sender: '', // optional
    senderName: '', // optional
    starter: Starter.Blank, // optional
    subject: '', // optional
    subscriptionType: '', // optional
    templateKey: '', // optional
    timezoneMode: TimezoneMode.Tenant, // optional
    voucherBatchId: '' // optional
});

console.log(result);
```

## mailings-mailings-empty-trash

Empty the mailing trash, deleting each one for good

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsEmptyTrash();

console.log(result);
```

## mailings-mailings-purge

Delete the mailings that outlived the trash retention

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsPurge();

console.log(result);
```

## mailings-mailings-delete

Move a mailing to the trash, or delete it for good from there

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsDelete({
    id: ''
});

console.log(result);
```

## mailings-mailings-get

Read one mailing

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsGet({
    id: ''
});

console.log(result);
```

## mailings-mailings-update

Change a mailing

```javascript
import { Client, MailingsMailings, Starter, TimezoneMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsUpdate({
    id: '',
    audienceId: '', // optional
    campaignRef: '', // optional
    currency: '', // optional
    excludeAudienceIds: [], // optional
    graymail: true, // optional
    graymailSends: 1, // optional
    metadata: null, // optional
    name: '', // optional
    previewText: '', // optional
    replyTo: '', // optional
    sendAt: '2026-01-01T12:00:00Z', // optional
    sender: '', // optional
    senderName: '', // optional
    starter: Starter.Blank, // optional
    subject: '', // optional
    subscriptionType: '', // optional
    templateKey: '', // optional
    timezoneMode: TimezoneMode.Tenant, // optional
    voucherBatchId: '' // optional
});

console.log(result);
```

## mailings-mailings-archive

Archive a mailing

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsArchive({
    id: '',
    data: {}
});

console.log(result);
```

## mailings-mailings-cancel

Cancel a scheduled or sending mailing

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsCancel({
    id: '',
    data: {}
});

console.log(result);
```

## mailings-mailings-checklist

Read what must be true before a mailing may be scheduled

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsChecklist({
    id: ''
});

console.log(result);
```

## mailings-mailings-duplicate

Copy a mailing as a new draft

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsDuplicate({
    id: '',
    data: {}
});

console.log(result);
```

## mailings-mailings-preview

Render a mailing as one recipient sees it

```javascript
import { Client, MailingsMailings, Device } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsPreview({
    id: '',
    contactId: '', // optional
    device: Device.Desktop, // optional
    email: '', // optional
    firstName: '', // optional
    lastName: '', // optional
    locale: '', // optional
    market: '' // optional
});

console.log(result);
```

## mailings-mailings-reach

Read how many a mailing would reach

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsReach({
    id: ''
});

console.log(result);
```

## mailings-mailings-restore

Bring a mailing back out of the trash

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsRestore({
    id: ''
});

console.log(result);
```

## mailings-mailings-schedule

Schedule a mailing, now or at a time

```javascript
import { Client, MailingsMailings, TimezoneMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsSchedule({
    id: '',
    sendAt: '', // optional
    start: true, // optional
    timezoneMode: TimezoneMode.Tenant // optional
});

console.log(result);
```

## mailings-mailings-test

Send a mailing to colleagues as a test

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsTest({
    id: '',
    locale: '', // optional
    market: '', // optional
    recipients: [] // optional
});

console.log(result);
```

## mailings-mailings-unarchive

Take a mailing out of the archive

```javascript
import { Client, MailingsMailings } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsUnarchive({
    id: '',
    data: {}
});

console.log(result);
```
