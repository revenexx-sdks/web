# procurement

## procurement-approval-rules-list

List ApprovalRule

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementApprovalRulesList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## procurement-approval-rules-create

Create a approval rule

```javascript
import { Client, Procurement, ConditionEnum, Effect, ApproverType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementApprovalRulesCreate({
    condition: ConditionEnum.Always,
    effect: Effect.PendingOrder,
    name: '',
    active: true, // optional
    approverContactId: '', // optional
    approverRole: '', // optional
    approverType: ApproverType.Contact, // optional
    conditionParameters: {}, // optional
    costCenterId: '', // optional
    effectParameters: {}, // optional
    metadata: {}, // optional
    sequence: 1, // optional
    showCondition: true // optional
});

console.log(result);
```

## procurement-approval-rules-delete

Delete a approval rule

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementApprovalRulesDelete({
    id: ''
});

console.log(result);
```

## procurement-approval-rules-get

Read one approval rule

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementApprovalRulesGet({
    id: ''
});

console.log(result);
```

## procurement-approval-rules-update

Update a approval rule

```javascript
import { Client, Procurement, ApproverType, ConditionEnum, Effect } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementApprovalRulesUpdate({
    id: '',
    active: true, // optional
    approverContactId: '', // optional
    approverRole: '', // optional
    approverType: ApproverType.Contact, // optional
    condition: ConditionEnum.Always, // optional
    conditionParameters: {}, // optional
    costCenterId: '', // optional
    effect: Effect.PendingOrder, // optional
    effectParameters: {}, // optional
    metadata: {}, // optional
    name: '', // optional
    sequence: 1, // optional
    showCondition: true // optional
});

console.log(result);
```

## procurement-budget-releases-list

List BudgetRelease

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementBudgetReleasesList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## procurement-budget-releases-get

Read one budget release

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementBudgetReleasesGet({
    id: ''
});

console.log(result);
```

## procurement-budget-releases-retry

Retry giving back a cancelled order's budget — from pending or refused (409 otherwise)

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementBudgetReleasesRetry({
    id: ''
});

console.log(result);
```

## procurement-budget-releases-settle

Settle a refused budget release by hand, with a note — the budget then stays booked for that order (administrator; 409 unless refused)

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementBudgetReleasesSettle({
    id: '',
    note: ''
});

console.log(result);
```

## procurement-direct-orders-list

List DirectOrder

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementDirectOrdersList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## procurement-direct-orders-get

Read one direct order

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementDirectOrdersGet({
    id: ''
});

console.log(result);
```

## procurement-direct-orders-commit

Retry a direct order's budget commit from the movement recorded at submit — from commit_pending or commit_refused (409 otherwise)

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementDirectOrdersCommit({
    id: ''
});

console.log(result);
```

## procurement-direct-orders-settle

Settle a refused budget commit by hand, with a note — the budget is then never booked for that order (administrator; 409 unless commit_refused)

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementDirectOrdersSettle({
    id: '',
    note: ''
});

console.log(result);
```

## procurement-purchase-request-items-open

List the lines of open purchase requests that name a product

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsOpen({
    productId: '',
    status: 'pending,approved', // optional
    limit: 1, // optional
    offset: 1 // optional
});

console.log(result);
```

## procurement-pending-approvals-list

List PendingApproval

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPendingApprovalsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## procurement-pending-approvals-get

Read one pending approval

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPendingApprovalsGet({
    id: ''
});

console.log(result);
```

## procurement-pending-approvals-approve

Approve one pending approval layer; unlocks the next, or approves the PR when all chains clear

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPendingApprovalsApprove({
    id: '',
    reason: '' // optional
});

console.log(result);
```

## procurement-pending-approvals-decline

Decline one pending approval — terminates the whole purchase request and withdraws its budget

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPendingApprovalsDecline({
    id: '',
    reason: '' // optional
});

console.log(result);
```

## procurement-purchase-request-events-list

List PurchaseRequestEvent

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestEventsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## procurement-purchase-request-events-get

Read one purchase request outcome event

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestEventsGet({
    id: ''
});

console.log(result);
```

## procurement-purchase-request-items-list

List PurchaseRequestItem

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## procurement-purchase-request-items-create

Create a purchase request item

```javascript
import { Client, Procurement, ProcurementPurchaseRequestItemsCreateType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsCreate({
    name: '',
    purchaseRequestId: '',
    quantity: 9.99,
    configuration: {}, // optional
    costCenter: '', // optional
    lineTotal: 9.99, // optional
    metadata: {}, // optional
    position: 1, // optional
    positionText: '', // optional
    product: {}, // optional
    productId: '', // optional
    sku: '', // optional
    taxAmount: 9.99, // optional
    taxRate: 9.99, // optional
    type: ProcurementPurchaseRequestItemsCreateType.Product, // optional
    unit: '', // optional
    unitPrice: 9.99, // optional
    userData: {} // optional
});

console.log(result);
```

## procurement-purchase-request-items-delete

Delete a purchase request item

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsDelete({
    id: ''
});

console.log(result);
```

## procurement-purchase-request-items-get

Read one purchase request item

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsGet({
    id: ''
});

console.log(result);
```

## procurement-purchase-request-items-update

Update a purchase request item

```javascript
import { Client, Procurement, ProcurementPurchaseRequestItemsCreateType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestItemsUpdate({
    id: '',
    configuration: {}, // optional
    costCenter: '', // optional
    lineTotal: 9.99, // optional
    metadata: {}, // optional
    name: '', // optional
    position: 1, // optional
    positionText: '', // optional
    product: {}, // optional
    productId: '', // optional
    purchaseRequestId: '', // optional
    quantity: 9.99, // optional
    sku: '', // optional
    taxAmount: 9.99, // optional
    taxRate: 9.99, // optional
    type: ProcurementPurchaseRequestItemsCreateType.Product, // optional
    unit: '', // optional
    unitPrice: 9.99, // optional
    userData: {} // optional
});

console.log(result);
```

## procurement-purchase-requests-list

List PurchaseRequest

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '' // optional
});

console.log(result);
```

## procurement-purchase-requests-get

Read one purchase request

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestsGet({
    id: ''
});

console.log(result);
```

## procurement-purchase-requests-update

Update a purchase request

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestsUpdate({
    id: '',
    billingAddress: {}, // optional
    buyer: {}, // optional
    cartId: '', // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    customerOrderNumber: '', // optional
    externalRef: '', // optional
    grandTotal: 9.99, // optional
    itemCount: 1, // optional
    metadata: {}, // optional
    number: '', // optional
    organizationId: '', // optional
    payment: {}, // optional
    senderCountry: 'DE', // optional
    shipping: {}, // optional
    shippingAddress: {}, // optional
    shippingTotal: 9.99, // optional
    subtotal: 9.99, // optional
    taxTotal: 9.99, // optional
    userData: {} // optional
});

console.log(result);
```

## procurement-purchase-requests-approve

Super-approve — clear all outstanding approval layers at once and drive the PR to ordered

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestsApprove({
    id: '',
    reason: '' // optional
});

console.log(result);
```

## procurement-purchase-requests-cancel

Cancel a pending purchase request (admin) and withdraw its budget

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestsCancel({
    id: '',
    reason: '' // optional
});

console.log(result);
```

## procurement-purchase-requests-order

Retry-safe approved→ordered: idempotently place the Order and confirm the budget

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementPurchaseRequestsOrder({
    id: ''
});

console.log(result);
```

## procurement-reconcile

Reconciliation sweep — complete stuck approved→ordered promotions, release orphaned budget reservations, record any outcome whose write failed, finish direct orders whose budget commit is owed, and retry budget releases of cancelled orders

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementReconcile({
    limit: 1 // optional
});

console.log(result);
```

## procurement-submit

Authoritative checkout submit — evaluate approval rules and create a direct Order, a Purchase Request, or block (409)

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementSubmit({
    cartId: '',
    items: [],
    billingAddress: {}, // optional
    buyer: {}, // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    customerOrderNumber: '', // optional
    externalRef: '', // optional
    metadata: {}, // optional
    organizationId: '', // optional
    payment: {}, // optional
    senderCountry: 'DE', // optional
    shipping: {}, // optional
    shippingAddress: {}, // optional
    userData: {} // optional
});

console.log(result);
```

## procurement-submit-cart

Check out a stored cart by id — read it from carts and submit it as /procurement/submit does, then mark the cart ordered once an Order exists

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementSubmitCart({
    cartId: '',
    costCenterId: '', // optional
    customerOrderNumber: '' // optional
});

console.log(result);
```

## procurement-vocabularies-list

List the enums this app publishes, by name and title, without their values

```javascript
import { Client, Procurement } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementVocabulariesList();

console.log(result);
```

## procurement-vocabularies-get

Read one vocabulary — every permitted value in constraint order, with its title and badge tone; 404 for a name that is not one

```javascript
import { Client, Procurement, ProcurementVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const procurement = new Procurement(client);

const result = await procurement.procurementVocabulariesGet({
    name: ProcurementVocabulariesGetName.Approvalstatuses
});

console.log(result);
```
