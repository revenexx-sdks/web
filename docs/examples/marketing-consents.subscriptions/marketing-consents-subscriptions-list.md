```javascript
import { Client, MarketingConsentsSubscriptions, ChannelEnum, MarketingConsentsSubscriptionsListState, MarketingConsentsConsentEventsListLegalBasis, MarketingConsentsSubscriptionsListSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsSubscriptions = new MarketingConsentsSubscriptions(client);

const result = await marketingConsentsSubscriptions.marketingConsentsSubscriptionsList({
    id: '', // optional
    contactId: '', // optional
    channel: ChannelEnum.Email, // optional
    address: '', // optional
    addressHash: '', // optional
    subscriptionTypeId: '', // optional
    state: MarketingConsentsSubscriptionsListState.Pending, // optional
    legalBasis: MarketingConsentsConsentEventsListLegalBasis.ConsentDoi, // optional
    consentTextId: '', // optional
    locale: '', // optional
    market: '', // optional
    campaignRef: '', // optional
    source: MarketingConsentsSubscriptionsListSource.Form, // optional
    sourceRef: '', // optional
    requestedAt: '2026-01-01T12:00:00Z', // optional
    confirmationSentAt: '2026-01-01T12:00:00Z', // optional
    confirmedAt: '2026-01-01T12:00:00Z', // optional
    withdrawnAt: '2026-01-01T12:00:00Z', // optional
    lapseAt: '2026-01-01T12:00:00Z', // optional
    erasedAt: '2026-01-01T12:00:00Z', // optional
    suppressionWrittenAt: '2026-01-01T12:00:00Z', // optional
    suppressionRef: '', // optional
    externalId: '', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
