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
    code: '',
    name: '',
    budgetDiscount: 9.99, // optional
    budgetRedemptions: 1, // optional
    campaignRef: '', // optional
    channelId: '', // optional
    conditionMatch: ConditionMatch.All, // optional
    currency: '', // optional
    description: '', // optional
    endsAt: '2026-01-01T12:00:00Z', // optional
    exclusive: true, // optional
    groupId: '', // optional
    labels: {}, // optional
    limitPerContact: 1, // optional
    limitPerOrganization: 1, // optional
    metadata: {}, // optional
    priority: 1, // optional
    reach: Reach.Automatic, // optional
    recurrenceDays: {}, // optional
    recurrenceFrom: '', // optional
    recurrenceKind: RecurrenceKind.None, // optional
    recurrenceUntil: '', // optional
    recurrenceWeekdays: {}, // optional
    returnBehaviour: ReturnBehaviour.ReverseProportionally, // optional
    searchBestCombination: true, // optional
    startsAt: '2026-01-01T12:00:00Z', // optional
    status: PromotionsPromotionsCreateStatus.Draft, // optional
    tags: {}, // optional
    timezone: '' // optional
});

console.log(result);
```
