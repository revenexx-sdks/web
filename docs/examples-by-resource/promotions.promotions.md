# promotions.promotions

## promotions-bundles-list

List bundles

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsBundlesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    promotionId: '', // optional
    name: '', // optional
    unitsRequired: '', // optional
    maxPerCart: '', // optional
    allocation: '' // optional
});

console.log(result);
```

## promotions-bundles-create

Define a bundle

```javascript
import { Client, PromotionsPromotions, Allocation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsBundlesCreate({
    name: '',
    promotionId: '',
    allocation: Allocation.BestForBuyer, // optional
    maxPerCart: 1, // optional
    selectors: null, // optional
    unitsRequired: 1 // optional
});

console.log(result);
```

## promotions-bundles-delete

Remove a bundle

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsBundlesDelete({
    id: ''
});

console.log(result);
```

## promotions-bundles-get

Read one bundle

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsBundlesGet({
    id: ''
});

console.log(result);
```

## promotions-bundles-update

Correct a bundle

```javascript
import { Client, PromotionsPromotions, Allocation } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsBundlesUpdate({
    id: '',
    allocation: Allocation.BestForBuyer, // optional
    maxPerCart: 1, // optional
    name: '', // optional
    promotionId: '', // optional
    selectors: null, // optional
    unitsRequired: 1 // optional
});

console.log(result);
```

## promotions-conditions-list

List conditions

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    promotionId: '', // optional
    parentId: '', // optional
    kind: '', // optional
    matchMode: '', // optional
    negate: '', // optional
    subject: '', // optional
    comparison: '', // optional
    rightSubject: '', // optional
    summary: '', // optional
    position: '' // optional
});

console.log(result);
```

## promotions-conditions-create

Add a condition

```javascript
import { Client, PromotionsPromotions, AudiencesRulesCreateKind, MatchMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsCreate({
    promotionId: '',
    addend: 9.99, // optional
    compareValue: null, // optional
    compareValueTo: null, // optional
    comparison: '', // optional
    factor: 9.99, // optional
    kind: AudiencesRulesCreateKind.Group, // optional
    matchMode: MatchMode.All, // optional
    negate: true, // optional
    parentId: '', // optional
    position: 1, // optional
    rightSubject: '', // optional
    subject: '' // optional
});

console.log(result);
```

## promotions-conditions-validate

Check one condition without saving it

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsValidate();

console.log(result);
```

## promotions-conditions-delete

Remove a condition

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsDelete({
    id: ''
});

console.log(result);
```

## promotions-conditions-get

Read one condition

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsGet({
    id: ''
});

console.log(result);
```

## promotions-conditions-update

Correct a condition

```javascript
import { Client, PromotionsPromotions, AudiencesRulesCreateKind, MatchMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsConditionsUpdate({
    id: '',
    addend: 9.99, // optional
    compareValue: null, // optional
    compareValueTo: null, // optional
    comparison: '', // optional
    factor: 9.99, // optional
    kind: AudiencesRulesCreateKind.Group, // optional
    matchMode: MatchMode.All, // optional
    negate: true, // optional
    parentId: '', // optional
    position: 1, // optional
    promotionId: '', // optional
    rightSubject: '', // optional
    subject: '' // optional
});

console.log(result);
```

## promotions-custom-effect-types-list

List registered effect types

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsCustomEffectTypesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    name: '', // optional
    shapeVersion: '', // optional
    carriesAmount: '', // optional
    active: '' // optional
});

console.log(result);
```

## promotions-custom-effect-types-create

Register an effect type

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsCustomEffectTypesCreate({
    name: '',
    active: true, // optional
    carriesAmount: true, // optional
    description: null, // optional
    metadata: null, // optional
    payloadShape: null, // optional
    title: null // optional
});

console.log(result);
```

## promotions-custom-effect-types-delete

Delete an effect type nothing uses

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsCustomEffectTypesDelete({
    id: ''
});

console.log(result);
```

## promotions-custom-effect-types-get

Read one effect type

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsCustomEffectTypesGet({
    id: ''
});

console.log(result);
```

## promotions-custom-effect-types-update

Change an effect type

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsCustomEffectTypesUpdate({
    id: '',
    active: true, // optional
    carriesAmount: true, // optional
    description: null, // optional
    metadata: null, // optional
    name: '', // optional
    payloadShape: null, // optional
    title: null // optional
});

console.log(result);
```

## promotions-effects-list

List effects

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsEffectsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    promotionId: '', // optional
    position: '', // optional
    kind: '', // optional
    valueType: '', // optional
    targetScope: '', // optional
    bundleId: '', // optional
    unitChoice: '', // optional
    unitPosition: '', // optional
    spread: '', // optional
    freeItemQuantity: '', // optional
    requiresChoice: '' // optional
});

console.log(result);
```

## promotions-effects-create

Add an effect

```javascript
import { Client, PromotionsPromotions, PromotionsEffectsCreateKind, TargetScope, UnitChoice, ValueType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsEffectsCreate({
    promotionId: '',
    amount: 9.99, // optional
    appliesTo: null, // optional
    bundleId: '', // optional
    customPayload: null, // optional
    customShapeVersion: 1, // optional
    customTypeId: '', // optional
    freeItemQuantity: 1, // optional
    freeItems: null, // optional
    kind: PromotionsEffectsCreateKind.Discount, // optional
    maxDiscount: 9.99, // optional
    message: null, // optional
    metadata: null, // optional
    position: 1, // optional
    requiresChoice: true, // optional
    spread: true, // optional
    targetScope: TargetScope.UnitPrice, // optional
    unitChoice: UnitChoice.Cheapest, // optional
    unitPosition: 1, // optional
    valueType: ValueType.Percentage // optional
});

console.log(result);
```

## promotions-effects-delete

Remove an effect

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsEffectsDelete({
    id: ''
});

console.log(result);
```

## promotions-effects-get

Read one effect

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsEffectsGet({
    id: ''
});

console.log(result);
```

## promotions-effects-update

Correct an effect

```javascript
import { Client, PromotionsPromotions, PromotionsEffectsCreateKind, TargetScope, UnitChoice, ValueType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsEffectsUpdate({
    id: '',
    amount: 9.99, // optional
    appliesTo: null, // optional
    bundleId: '', // optional
    customPayload: null, // optional
    customShapeVersion: 1, // optional
    customTypeId: '', // optional
    freeItemQuantity: 1, // optional
    freeItems: null, // optional
    kind: PromotionsEffectsCreateKind.Discount, // optional
    maxDiscount: 9.99, // optional
    message: null, // optional
    metadata: null, // optional
    position: 1, // optional
    promotionId: '', // optional
    requiresChoice: true, // optional
    spread: true, // optional
    targetScope: TargetScope.UnitPrice, // optional
    unitChoice: UnitChoice.Cheapest, // optional
    unitPosition: 1, // optional
    valueType: ValueType.Percentage // optional
});

console.log(result);
```

## promotions-groups-list

List stacking groups

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsGroupsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    mode: '', // optional
    parentId: '', // optional
    position: '', // optional
    active: '' // optional
});

console.log(result);
```

## promotions-groups-create

Create a stacking group

```javascript
import { Client, PromotionsPromotions, PromotionsGroupsCreateMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsGroupsCreate({
    code: '',
    name: '',
    active: true, // optional
    labels: null, // optional
    metadata: null, // optional
    mode: PromotionsGroupsCreateMode.Stack, // optional
    parentId: '', // optional
    position: 1 // optional
});

console.log(result);
```

## promotions-groups-delete

Delete a stacking group

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsGroupsDelete({
    id: ''
});

console.log(result);
```

## promotions-groups-get

Read one stacking group

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsGroupsGet({
    id: ''
});

console.log(result);
```

## promotions-groups-update

Correct a stacking group

```javascript
import { Client, PromotionsPromotions, PromotionsGroupsCreateMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsGroupsUpdate({
    id: '',
    active: true, // optional
    code: '', // optional
    labels: null, // optional
    metadata: null, // optional
    mode: PromotionsGroupsCreateMode.Stack, // optional
    name: '', // optional
    parentId: '', // optional
    position: 1 // optional
});

console.log(result);
```

## promotions-promotions-list

List promotions

```javascript
import { Client, PromotionsPromotions, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    description: '', // optional
    reach: '', // optional
    status: '', // optional
    effectiveState: '', // optional
    priority: '', // optional
    exclusive: '', // optional
    groupId: '', // optional
    searchBestCombination: '', // optional
    conditionMatch: '', // optional
    campaignRef: '' // optional
});

console.log(result);
```

## promotions-promotions-create

Write a promotion down

```javascript
import { Client, PromotionsPromotions, ConditionMatch, Reach, RecurrenceKind, ReturnBehaviour, PromotionsPromotionsCreateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsCreate({
    code: '',
    name: '',
    audienceChannels: null, // optional
    audienceRoles: null, // optional
    audienceSegments: null, // optional
    budgetDiscount: 9.99, // optional
    budgetRedemptions: 1, // optional
    campaignRef: '', // optional
    channelId: '', // optional
    conditionMatch: ConditionMatch.All, // optional
    currency: '', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    description: '', // optional
    endsAt: '2026-01-01T12:00:00Z', // optional
    exclusive: true, // optional
    groupId: '', // optional
    labels: null, // optional
    limitPerContact: 1, // optional
    limitPerOrganization: 1, // optional
    metadata: null, // optional
    priority: 1, // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: '', // optional
    reach: Reach.Automatic, // optional
    recurrenceDays: null, // optional
    recurrenceFrom: '', // optional
    recurrenceKind: RecurrenceKind.None, // optional
    recurrenceUntil: '', // optional
    recurrenceWeekdays: null, // optional
    returnBehaviour: ReturnBehaviour.ReverseProportionally, // optional
    searchBestCombination: true, // optional
    startsAt: '2026-01-01T12:00:00Z', // optional
    status: PromotionsPromotionsCreateStatus.Draft, // optional
    tags: null, // optional
    template: '', // optional
    timezone: '', // optional
    trashBatch: '' // optional
});

console.log(result);
```

## promotions-promotions-overlap-check

Say whether a promotion is running that a new one would meet

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsOverlapCheck();

console.log(result);
```

## promotions-promotions-empty-trash

Empty the promotion trash, deleting each one for good

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsEmptyTrash();

console.log(result);
```

## promotions-promotions-purge

Delete the promotions that outlived the trash retention

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsPurge();

console.log(result);
```

## promotions-promotions-delete

Move a promotion to the trash, or delete one in the trash for good

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsDelete({
    id: ''
});

console.log(result);
```

## promotions-promotions-get

Read one promotion

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsGet({
    id: ''
});

console.log(result);
```

## promotions-promotions-update

Correct a promotion

```javascript
import { Client, PromotionsPromotions, ConditionMatch, Reach, RecurrenceKind, ReturnBehaviour, PromotionsPromotionsCreateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsUpdate({
    id: '',
    audienceChannels: null, // optional
    audienceRoles: null, // optional
    audienceSegments: null, // optional
    budgetDiscount: 9.99, // optional
    budgetRedemptions: 1, // optional
    campaignRef: '', // optional
    channelId: '', // optional
    code: '', // optional
    conditionMatch: ConditionMatch.All, // optional
    currency: '', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    description: '', // optional
    endsAt: '2026-01-01T12:00:00Z', // optional
    exclusive: true, // optional
    groupId: '', // optional
    labels: null, // optional
    limitPerContact: 1, // optional
    limitPerOrganization: 1, // optional
    metadata: null, // optional
    name: '', // optional
    priority: 1, // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: '', // optional
    reach: Reach.Automatic, // optional
    recurrenceDays: null, // optional
    recurrenceFrom: '', // optional
    recurrenceKind: RecurrenceKind.None, // optional
    recurrenceUntil: '', // optional
    recurrenceWeekdays: null, // optional
    returnBehaviour: ReturnBehaviour.ReverseProportionally, // optional
    searchBestCombination: true, // optional
    startsAt: '2026-01-01T12:00:00Z', // optional
    status: PromotionsPromotionsCreateStatus.Draft, // optional
    tags: null, // optional
    template: '', // optional
    timezone: '', // optional
    trashBatch: '' // optional
});

console.log(result);
```

## promotions-promotions-conditions

Read a promotion condition tree, assembled

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsConditions({
    id: ''
});

console.log(result);
```

## promotions-promotions-conditions-check

Check a promotion condition tree before it is relied on

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsConditionsCheck({
    id: ''
});

console.log(result);
```

## promotions-promotions-copy

Copy a promotion as a draft under a new code

```javascript
import { Client, PromotionsPromotions, PromotionsPromotionsCopyParts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsCopy({
    id: '',
    code: '',
    parts: [PromotionsPromotionsCopyParts.Conditions] // optional
});

console.log(result);
```

## promotions-promotions-end

End a promotion now or at a date

```javascript
import { Client, PromotionsPromotions, When } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsEnd({
    id: '',
    at: '2026-01-01T12:00:00Z', // optional
    honourReservations: true, // optional
    when: When.Now // optional
});

console.log(result);
```

## promotions-promotions-overlaps

List the live promotions this one can meet in one cart

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsOverlaps({
    id: ''
});

console.log(result);
```

## promotions-promotions-overview

Say what a promotion does and how it stands

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsOverview({
    id: ''
});

console.log(result);
```

## promotions-promotions-restore

Bring a promotion back out of the trash

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsRestore({
    id: ''
});

console.log(result);
```

## promotions-promotions-state

Report what a promotion is right now

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsState({
    id: ''
});

console.log(result);
```

## promotions-promotions-timeline

Read the redemptions of a promotion per day

```javascript
import { Client, PromotionsPromotions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsPromotions = new PromotionsPromotions(client);

const result = await promotionsPromotions.promotionsPromotionsTimeline({
    id: ''
});

console.log(result);
```
