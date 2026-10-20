```javascript
import { Client, MailingsMailings, Starter, TimezoneMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsUpdate({
    id: '',
    audienceId: '', // optional
    campaignRef: '', // optional
    currency: '', // optional
    excludeAudienceIds: [], // optional
    graymail: true, // optional
    graymailSends: 1, // optional
    metadata: null, // optional
    name: '', // optional
    previewText: '', // optional
    replyTo: '', // optional
    sendAt: '2026-01-01T12:00:00Z', // optional
    sender: '', // optional
    senderName: '', // optional
    starter: Starter.Blank, // optional
    subject: '', // optional
    subscriptionType: '', // optional
    templateKey: '', // optional
    timezoneMode: TimezoneMode.Tenant, // optional
    voucherBatchId: '' // optional
});

console.log(result);
```
