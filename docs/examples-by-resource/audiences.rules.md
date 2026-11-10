# audiences.rules

## audiences-rules-list

List audience rules

```javascript
import { Client, AudiencesRules } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesRules = new AudiencesRules(client);

const result = await audiencesRules.audiencesRulesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    audienceId: '', // optional
    parentId: '', // optional
    kind: '', // optional
    matchMode: '', // optional
    negate: '', // optional
    subject: '', // optional
    field: '', // optional
    operator: '', // optional
    windowDays: '', // optional
    channel: '', // optional
    position: '' // optional
});

console.log(result);
```

## audiences-rules-create

Add a rule or a group to an audience

```javascript
import { Client, AudiencesRules, ChannelEnum, AudiencesRulesCreateKind, MatchMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesRules = new AudiencesRules(client);

const result = await audiencesRules.audiencesRulesCreate({
    audienceId: '',
    channel: ChannelEnum.Email, // optional
    field: '', // optional
    kind: AudiencesRulesCreateKind.Group, // optional
    matchMode: MatchMode.All, // optional
    negate: true, // optional
    operator: '', // optional
    parentId: '', // optional
    position: 1, // optional
    subject: '', // optional
    value: null, // optional
    valueTo: null, // optional
    windowDays: 1 // optional
});

console.log(result);
```

## audiences-rules-delete

Remove a rule (and, for a group, what it holds)

```javascript
import { Client, AudiencesRules } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesRules = new AudiencesRules(client);

const result = await audiencesRules.audiencesRulesDelete({
    id: ''
});

console.log(result);
```

## audiences-rules-get

Read one rule

```javascript
import { Client, AudiencesRules } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesRules = new AudiencesRules(client);

const result = await audiencesRules.audiencesRulesGet({
    id: ''
});

console.log(result);
```

## audiences-rules-update

Correct a rule

```javascript
import { Client, AudiencesRules, ChannelEnum, AudiencesRulesCreateKind, MatchMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const audiencesRules = new AudiencesRules(client);

const result = await audiencesRules.audiencesRulesUpdate({
    id: '',
    audienceId: '', // optional
    channel: ChannelEnum.Email, // optional
    field: '', // optional
    kind: AudiencesRulesCreateKind.Group, // optional
    matchMode: MatchMode.All, // optional
    negate: true, // optional
    operator: '', // optional
    parentId: '', // optional
    position: 1, // optional
    subject: '', // optional
    value: null, // optional
    valueTo: null, // optional
    windowDays: 1 // optional
});

console.log(result);
```
