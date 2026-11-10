# customers.segments

## customers-segment-members-list

Browse segment memberships

```javascript
import { Client, CustomersSegments, Source } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentMembersList({
    id: '', // optional
    segmentId: '', // optional
    organizationId: '', // optional
    contactId: '', // optional
    source: Source.Manual, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## customers-segment-members-create

Put a company into a segment by hand

```javascript
import { Client, CustomersSegments, SegmentMemberSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentMembersCreate({
    organizationId: '',
    segmentId: '',
    createdAt: '2026-01-01T12:00:00Z', // optional
    source: SegmentMemberSource.Manual // optional
});

console.log(result);
```

## customers-segment-members-delete

Take a company out of a segment

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentMembersDelete({
    id: ''
});

console.log(result);
```

## customers-segment-members-get

Read one membership

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentMembersGet({
    id: ''
});

console.log(result);
```

## customers-segment-members-update

Update a membership

```javascript
import { Client, CustomersSegments, SegmentMemberSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentMembersUpdate({
    id: '',
    organizationId: '', // optional
    segmentId: '', // optional
    source: SegmentMemberSource.Manual // optional
});

console.log(result);
```

## customers-segments-list

Browse the customer segments

```javascript
import { Client, CustomersSegments, RuleMatch, MemberType, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsList({
    id: '', // optional
    code: 'key_accounts', // optional
    position: 1, // optional
    active: true, // optional
    ruleMatch: RuleMatch.All, // optional
    memberType: MemberType.Organization, // optional
    rulesComputedAt: '2026-01-01T12:00:00Z', // optional
    externalId: 'PREISGRUPPE-03', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'vertrieb@example.com', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    trashed: Trashed.Exclude, // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## customers-segments-create

Create a segment

```javascript
import { Client, CustomersSegments, SegmentRuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsCreate({
    active: true, // optional
    code: 'key_accounts', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    labels: {
        "de": "Gro\u00dfkunden",
        "en": "Key accounts"
    }, // optional
    position: 1, // optional
    ruleMatch: SegmentRuleMatch.All, // optional
    rules: {} // optional
});

console.log(result);
```

## customers-segments-rules-recompute-all

Recompute every ruled segment

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsRulesRecomputeAll({
    data: {}
});

console.log(result);
```

## customers-segments-trash-empty

Empty the segment trash

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsTrashEmpty();

console.log(result);
```

## customers-segments-delete

Delete a segment

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsDelete({
    id: ''
});

console.log(result);
```

## customers-segments-get

Read one segment

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsGet({
    id: ''
});

console.log(result);
```

## customers-segments-update

Update a segment

```javascript
import { Client, CustomersSegments, SegmentRuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsUpdate({
    id: '',
    active: true, // optional
    code: 'key_accounts', // optional
    labels: {
        "de": "Gro\u00dfkunden",
        "en": "Key accounts"
    }, // optional
    position: 1, // optional
    ruleMatch: SegmentRuleMatch.All, // optional
    rules: {} // optional
});

console.log(result);
```

## customers-segments-restore

Restore a segment from the trash

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsRestore({
    id: ''
});

console.log(result);
```

## customers-segments-rules-preview

Preview a segment rule

```javascript
import { Client, CustomersSegments, RuleMatch, Target } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsRulesPreview({
    segmentId: '',
    conditions: [],
    ruleMatch: RuleMatch.All, // optional
    target: Target.Organizations // optional
});

console.log(result);
```

## customers-segments-rules-recompute

Recompute one segment's rule memberships

```javascript
import { Client, CustomersSegments } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsRulesRecompute({
    segmentId: '',
    cursor: '' // optional
});

console.log(result);
```
