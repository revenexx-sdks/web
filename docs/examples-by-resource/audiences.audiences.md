# audiences.audiences

## audiences-audiences-list

List audiences

```javascript
import { Client, AudiencesAudiences, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    code: '', // optional
    description: '', // optional
    kind: '', // optional
    ruleMatch: '', // optional
    active: '', // optional
    memberCount: '', // optional
    eligibleCount: '', // optional
    rulesSummary: '', // optional
    recomputeState: '', // optional
    recomputeError: '', // optional
    frozenFromId: '' // optional
});

console.log(result);
```

## audiences-audiences-create

Create an audience

```javascript
import { Client, AudiencesAudiences, Kind, RuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesCreate({
    code: '',
    active: true, // optional
    description: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    kind: Kind.Active, // optional
    labels: null, // optional
    metadata: null, // optional
    ruleMatch: RuleMatch.All, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## audiences-audiences-recompute-all

Recompute every active audience under one budget

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesRecomputeAll();

console.log(result);
```

## audiences-audiences-empty-trash

Empty the audience trash, deleting each one for good

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesEmptyTrash();

console.log(result);
```

## audiences-audiences-purge

Delete the audiences that outlived the trash retention

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesPurge();

console.log(result);
```

## audiences-audiences-delete

Move a audience to the trash, or delete it for good from there

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesDelete({
    id: ''
});

console.log(result);
```

## audiences-audiences-get

Read one audience

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesGet({
    id: ''
});

console.log(result);
```

## audiences-audiences-update

Correct an audience

```javascript
import { Client, AudiencesAudiences, Kind, RuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesUpdate({
    id: '',
    active: true, // optional
    code: '', // optional
    description: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    kind: Kind.Active, // optional
    labels: null, // optional
    metadata: null, // optional
    ruleMatch: RuleMatch.All, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## audiences-audiences-freeze

Freeze an active audience into a new static one

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesFreeze({
    id: '',
    code: '', // optional
    description: '', // optional
    labels: {}, // optional
    targetId: '' // optional
});

console.log(result);
```

## audiences-audiences-preview

Count who would be in an audience, writing nothing

```javascript
import { Client, AudiencesAudiences, RuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesPreview({
    id: '',
    ruleMatch: RuleMatch.All, // optional
    rules: [] // optional
});

console.log(result);
```

## audiences-audiences-recompute

Recompute an active audience — chunked, continues where it stopped

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesRecompute({
    id: '',
    restart: true // optional
});

console.log(result);
```

## audiences-audiences-restore

Bring a audience back out of the trash

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesAudiencesRestore({
    id: ''
});

console.log(result);
```

## audiences-vocabularies-list

List the closed lists this app enforces

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesVocabulariesList();

console.log(result);
```

## audiences-vocabularies-get

Read one closed list with its values and labels

```javascript
import { Client, AudiencesAudiences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesAudiences = new AudiencesAudiences(client);

const result = await audiencesAudiences.audiencesVocabulariesGet({
    name: ''
});

console.log(result);
```
