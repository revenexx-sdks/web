# loyalty.referrals

## loyalty-referrals-codes-list

List referral codes

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsCodesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    membershipId: '', // optional
    contactId: '', // optional
    code: '', // optional
    uses: '', // optional
    active: '' // optional
});

console.log(result);
```

## loyalty-referrals-codes-get

Read one referral code

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsCodesGet({
    id: ''
});

console.log(result);
```

## loyalty-referrals-codes-deactivate

Retire a referral code

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsCodesDeactivate({
    id: '',
    data: {}
});

console.log(result);
```

## loyalty-referrals-list

List referrals

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    referralCodeId: '', // optional
    referrerMembershipId: '', // optional
    referrerContactId: '', // optional
    refereeContactId: '', // optional
    state: '', // optional
    orderId: '', // optional
    reason: '', // optional
    refereeVoucherCode: '', // optional
    referrerVoucherCode: '' // optional
});

console.log(result);
```

## loyalty-referrals-claim

Claim a referral code for a new customer

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsClaim({
    code: '',
    contactId: ''
});

console.log(result);
```

## loyalty-referrals-get

Read one referral

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsGet({
    id: ''
});

console.log(result);
```

## loyalty-referrals-reject

Reject a referral with a reason

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsReject({
    id: '',
    reason: ''
});

console.log(result);
```

## loyalty-referrals-reward

Issue the referrer reward of a qualified referral again

```javascript
import { Client, LoyaltyReferrals } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyReferrals = new LoyaltyReferrals(client);

const result = await loyaltyReferrals.loyaltyReferralsReward({
    id: '',
    data: {}
});

console.log(result);
```
