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
