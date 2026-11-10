# loyalty.bonus

## loyalty-bonus-list

List bonus agreements

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    programId: '', // optional
    membershipId: '', // optional
    organizationId: '', // optional
    period: '', // optional
    periodStart: '', // optional
    periodEnd: '', // optional
    baseSource: '', // optional
    turnoverSource: '', // optional
    reachedTierId: '', // optional
    reachedTierCode: '', // optional
    projectedTierCode: '', // optional
    currency: '', // optional
    state: '', // optional
    receivablesCleared: '', // optional
    receivablesCheckedBy: '', // optional
    forfeitReason: '', // optional
    documentRef: '', // optional
    payoutRef: '', // optional
    approvedBy: '', // optional
    externalId: '' // optional
});

console.log(result);
```

## loyalty-bonus-create

Open the bonus agreement of a company for a year

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusCreate({
    organizationId: '',
    programId: '',
    baseTurnover: 9.99, // optional
    contactId: '', // optional
    documentRef: '', // optional
    period: '' // optional
});

console.log(result);
```

## loyalty-bonus-get

Read one bonus agreement

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusGet({
    id: ''
});

console.log(result);
```

## loyalty-bonus-update

Correct the base, the document or the turnover source of an agreement

```javascript
import { Client, LoyaltyBonus, TurnoverSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusUpdate({
    id: '',
    baseTurnover: 9.99, // optional
    documentRef: '', // optional
    metadata: null, // optional
    turnoverSource: TurnoverSource.Orders // optional
});

console.log(result);
```

## loyalty-bonus-approve

Approve a calculated bonus

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusApprove({
    id: '',
    checkedBy: '', // optional
    receivablesCleared: true // optional
});

console.log(result);
```

## loyalty-bonus-calculate

Calculate the bonus after the year has ended

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusCalculate({
    id: '',
    data: {}
});

console.log(result);
```

## loyalty-bonus-forfeit

Forfeit a calculated bonus with a reason

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusForfeit({
    id: '',
    reason: ''
});

console.log(result);
```

## loyalty-bonus-pay

Record that an approved bonus was paid

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusPay({
    id: '',
    payoutRef: '' // optional
});

console.log(result);
```

## loyalty-bonus-progress

Read where a company stands in its bonus year

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusProgress({
    id: ''
});

console.log(result);
```

## loyalty-bonus-rebuild

Read the year completed orders of the company into the agreement again

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusRebuild({
    id: '',
    data: {}
});

console.log(result);
```

## loyalty-bonus-entries-list

List the turnover lines of agreements

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusEntriesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    agreementId: '', // optional
    entryKey: '', // optional
    source: '', // optional
    ref: '', // optional
    orderId: '' // optional
});

console.log(result);
```

## loyalty-bonus-entries-correct

Correct the turnover of an agreement by hand

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusEntriesCorrect({
    agreementId: '',
    amount: 9.99,
    ref: '',
    at: '2026-01-01T12:00:00Z', // optional
    key: '' // optional
});

console.log(result);
```

## loyalty-bonus-entries-get

Read one turnover line

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusEntriesGet({
    id: ''
});

console.log(result);
```

## loyalty-bonus-import

Import turnover figures from the ERP

```javascript
import { Client, LoyaltyBonus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyBonus = new LoyaltyBonus(client);

const result = await loyaltyBonus.loyaltyBonusImport({
    rows: []
});

console.log(result);
```
