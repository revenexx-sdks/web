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
