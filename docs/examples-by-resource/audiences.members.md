# audiences.members

## audiences-members-composition

Read who is in an audience by market and by source, as bar-list rows

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersComposition({
    id: ''
});

console.log(result);
```

## audiences-audiences-import

Import rows into a static audience, with the reason for every row refused

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesAudiencesImport({
    id: '',
    emails: '', // optional
    filename: '', // optional
    rows: [] // optional
});

console.log(result);
```

## audiences-members-read

Read the members of an audience, keyset-paged and stable

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersRead({
    id: '',
    cursor: '', // optional
    limit: 200 // optional
});

console.log(result);
```

## audiences-members-add

Add contacts to a static audience

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersAdd({
    id: '',
    contactId: '', // optional
    contactIds: [] // optional
});

console.log(result);
```

## audiences-members-remove

Take one contact out of a static audience

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersRemove({
    id: '',
    contactId: ''
});

console.log(result);
```

## audiences-members-timeline

Read the joins and leaves of an audience per day

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersTimeline({
    id: ''
});

console.log(result);
```

## audiences-imports-list

List imports

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesImportsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    audienceId: '', // optional
    filename: '', // optional
    rows: '', // optional
    accepted: '', // optional
    rejected: '', // optional
    state: '' // optional
});

console.log(result);
```

## audiences-imports-get

Read one import

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesImportsGet({
    id: ''
});

console.log(result);
```

## audiences-member-events-list

List joins and leaves

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMemberEventsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    audienceId: '', // optional
    contactId: '', // optional
    kind: '', // optional
    source: '', // optional
    reason: '' // optional
});

console.log(result);
```

## audiences-member-events-get

Read one join or leave

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMemberEventsGet({
    id: ''
});

console.log(result);
```

## audiences-members-list

List membership rows

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    audienceId: '', // optional
    audienceCode: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    email: '', // optional
    locale: '', // optional
    market: '', // optional
    eligible: '', // optional
    source: '' // optional
});

console.log(result);
```

## audiences-members-get

Read one membership row

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersGet({
    id: ''
});

console.log(result);
```

## audiences-members-memberships

Say which audiences one contact is in

```javascript
import { Client, AudiencesMembers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesMembers = new AudiencesMembers(client);

const result = await audiencesMembers.audiencesMembersMemberships({
    contactId: ''
});

console.log(result);
```
