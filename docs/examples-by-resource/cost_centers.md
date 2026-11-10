# cost_centers

## cost-centers-budget-changes-list

List BudgetChange

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetChangesList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## cost-centers-budget-changes-get

Read one budget change

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetChangesGet({
    id: ''
});

console.log(result);
```

## cost-centers-budgets-list

List Budget

```javascript
import { Client, CostCenters, Discarded } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    discarded: Discarded.Include // optional
});

console.log(result);
```

## cost-centers-budgets-create

Create a budget

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsCreate({
    costCenterId: '',
    name: '',
    active: true, // optional
    initialValue: 9.99, // optional
    metadata: {}, // optional
    periodLength: 1, // optional
    periodStart: '2026-01-01', // optional
    recurring: true, // optional
    sequence: 1, // optional
    takeover: {} // optional
});

console.log(result);
```

## cost-centers-budgets-rollover

Run one budget period rollover pass (idempotent; a rolled period is skipped)

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsRollover({
    today: '' // optional
});

console.log(result);
```

## cost-centers-budgets-get

Read one budget

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsGet({
    id: ''
});

console.log(result);
```

## cost-centers-budgets-update

Update a budget

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsUpdate({
    id: '',
    active: true, // optional
    costCenterId: '', // optional
    initialValue: 9.99, // optional
    metadata: {}, // optional
    name: '', // optional
    periodLength: 1, // optional
    periodStart: '2026-01-01', // optional
    recurring: true, // optional
    sequence: 1, // optional
    takeover: {} // optional
});

console.log(result);
```

## cost-centers-budgets-adjust

Manually adjust a budget; appends a manual ledger row with an actor

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsAdjust({
    id: '',
    actor: '',
    amount: 9.99, // optional
    currency: '', // optional
    note: '', // optional
    target: 9.99 // optional
});

console.log(result);
```

## cost-centers-budgets-discard

Discard a draft budget (only its initialized ledger entry, no rollover chain): writes it to zero, stamps it and sets it inactive, and budget.discarded announces it; 409 budget_in_use once anything moved, 409 budget_discarded if already discarded

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsDiscard({
    id: '',
    actor: '', // optional
    note: '' // optional
});

console.log(result);
```

## cost-centers-commit

Commit a direct order against budgets, no reservation (idempotent on order_id); tracking-only centres are skipped; dry_run answers without writing

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCommit({
    allocations: [],
    contactId: '', // optional
    currency: '', // optional
    dryRun: true, // optional
    note: '', // optional
    orderId: '' // optional
});

console.log(result);
```

## cost-centers-confirm

Confirm a purchase request reservation as an order (idempotent)

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersConfirm({
    purchaseRequestId: '',
    allocations: [], // optional
    currency: '', // optional
    note: '', // optional
    orderId: '' // optional
});

console.log(result);
```

## cost-centers-contact-limits-list

List ContactLimit

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersContactLimitsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## cost-centers-contact-limits-create

Create a contact limit

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersContactLimitsCreate({
    contactId: '',
    currency: '', // optional
    metadata: {}, // optional
    monetaryLimit: 9.99 // optional
});

console.log(result);
```

## cost-centers-contact-limits-delete

Delete a contact limit

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersContactLimitsDelete({
    id: ''
});

console.log(result);
```

## cost-centers-contact-limits-get

Read one contact limit

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersContactLimitsGet({
    id: ''
});

console.log(result);
```

## cost-centers-contact-limits-update

Update a contact limit

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersContactLimitsUpdate({
    id: '',
    contactId: '', // optional
    currency: '', // optional
    metadata: {}, // optional
    monetaryLimit: 9.99 // optional
});

console.log(result);
```

## cost-centers-cost-centers-list

List CostCenter

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    punchoutAccountCode: '', // optional
    externalId: 'KOSTENSTELLE-4711' // optional
});

console.log(result);
```

## cost-centers-cost-centers-create

Create a cost centre

```javascript
import { Client, CostCenters, BudgetType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersCreate({
    code: '',
    name: '',
    organizationId: '',
    accountableContactId: '', // optional
    active: true, // optional
    budgetType: BudgetType.Monetary, // optional
    currency: '', // optional
    externalId: 'KOSTENSTELLE-4711', // optional
    externalRefs: {
        "business-central": "KOSTENSTELLE-4711",
        "legacy_shop": "kst-4711"
    }, // optional
    metadata: {}, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Blocked": false,
            "Dimension_Code": "KOSTENSTELLE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## cost-centers-cost-centers-delete

Delete a cost centre

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersDelete({
    id: ''
});

console.log(result);
```

## cost-centers-cost-centers-get

Read one cost centre

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersGet({
    id: ''
});

console.log(result);
```

## cost-centers-cost-centers-update

Update a cost centre

```javascript
import { Client, CostCenters, BudgetType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersUpdate({
    id: '',
    accountableContactId: '', // optional
    active: true, // optional
    budgetType: BudgetType.Monetary, // optional
    code: '', // optional
    currency: '', // optional
    externalId: 'KOSTENSTELLE-4711', // optional
    externalRefs: {
        "business-central": "KOSTENSTELLE-4711",
        "legacy_shop": "kst-4711"
    }, // optional
    metadata: {}, // optional
    name: '', // optional
    organizationId: '', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Blocked": false,
            "Dimension_Code": "KOSTENSTELLE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## cost-centers-cost-centers-archive

Archive a cost centre: set it inactive so nothing books to it (idempotent). The way out for a centre that ever held a budget, which the store does not let go

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersArchive({
    id: ''
});

console.log(result);
```

## cost-centers-cost-centers-consume

Spend across a cost centre budget stack in sequence (last may go negative)

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersConsume({
    id: '',
    amount: 9.99,
    actor: '', // optional
    currency: '', // optional
    note: '', // optional
    orderId: '', // optional
    purchaseRequestId: '' // optional
});

console.log(result);
```

## cost-centers-evaluate

Evaluate budget-aware conditions (availableBudget, personalLimit) for a spend; refuses a cost centre this punchout session may not book to

```javascript
import { Client, CostCenters, Conditions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersEvaluate({
    amount: 9.99,
    conditions: [Conditions.AvailableBudget], // optional
    contactId: '', // optional
    costCenterId: '', // optional
    currency: '', // optional
    punchoutAccountCode: '' // optional
});

console.log(result);
```

## cost-centers-release

Give back the budget booked for a cancelled order (idempotent on key); a closed period is skipped with a zero entry, tracking-only centres are skipped

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersRelease({
    key: '',
    orderId: '',
    allocations: [], // optional
    contactId: '', // optional
    currency: '', // optional
    note: '' // optional
});

console.log(result);
```

## cost-centers-reserve

Reserve budget for a purchase request (idempotent on purchase_request_id); tracking-only centres are skipped; dry_run answers without writing

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersReserve({
    allocations: [],
    contactId: '', // optional
    currency: '', // optional
    dryRun: true, // optional
    note: '', // optional
    purchaseRequestId: '' // optional
});

console.log(result);
```

## cost-centers-reserve-adjust

Move a held reservation to a new amount; the allocations are its new shape in full (idempotent)

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersReserveAdjust({
    allocations: [],
    purchaseRequestId: '',
    contactId: '', // optional
    currency: '', // optional
    note: '' // optional
});

console.log(result);
```

## cost-centers-restrictions-list

List CostCenterRestriction

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersRestrictionsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## cost-centers-restrictions-create

Create a restriction

```javascript
import { Client, CostCenters, CostCentersRestrictionsCreateType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersRestrictionsCreate({
    costCenterId: '',
    parameters: {},
    type: CostCentersRestrictionsCreateType.Contact,
    active: true // optional
});

console.log(result);
```

## cost-centers-restrictions-delete

Delete a restriction

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersRestrictionsDelete({
    id: ''
});

console.log(result);
```

## cost-centers-restrictions-get

Read one restriction

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersRestrictionsGet({
    id: ''
});

console.log(result);
```

## cost-centers-restrictions-update

Update a restriction

```javascript
import { Client, CostCenters, CostCentersRestrictionsCreateType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersRestrictionsUpdate({
    id: '',
    active: true, // optional
    costCenterId: '', // optional
    parameters: {}, // optional
    type: CostCentersRestrictionsCreateType.Contact // optional
});

console.log(result);
```

## cost-centers-usable

Usable cost centres per line for a buyer (restriction eval incl. punchout + auto-select)

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersUsable({
    lines: [],
    organizationId: '',
    contactId: '', // optional
    punchoutAccountCode: '', // optional
    roles: [] // optional
});

console.log(result);
```

## cost-centers-vocabularies

List the value sets this app enforces, without their values

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersVocabularies();

console.log(result);
```

## cost-centers-vocabulary

Read one value set with its values, parsed from the constraint the store enforces

```javascript
import { Client, CostCenters, CostCentersVocabularyName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersVocabulary({
    name: CostCentersVocabularyName.Budgetchangereasons
});

console.log(result);
```

## cost-centers-withdraw

Withdraw a purchase request reservation, crediting budgets back (idempotent)

```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersWithdraw({
    purchaseRequestId: '',
    allocations: [], // optional
    currency: '', // optional
    note: '' // optional
});

console.log(result);
```
