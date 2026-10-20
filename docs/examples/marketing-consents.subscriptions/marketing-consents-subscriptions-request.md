```javascript
import { Client, MarketingConsentsSubscriptions, ChannelEnum, MarketingConsentsSubscriptionsRequestSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsSubscriptions = new MarketingConsentsSubscriptions(client);

const result = await marketingConsentsSubscriptions.marketingConsentsSubscriptionsRequest({
    subscriptionType: 'newsletter',
    address: '', // optional
    campaignRef: '7a8b9c0d-0000-4000-8000-000000000000', // optional
    channel: ChannelEnum.Email, // optional
    consentTextId: '', // optional
    contactId: '', // optional
    email: 'anna.berger@example.com', // optional
    firstName: '', // optional
    ip: '203.0.113.7', // optional
    lastName: '', // optional
    locale: 'de', // optional
    pageUrl: 'https://shop.example.com/newsletter', // optional
    phone: '+4915112345678', // optional
    source: MarketingConsentsSubscriptionsRequestSource.Form, // optional
    sourceRef: 'form:5e6f7a8b-0000-4000-8000-000000000000', // optional
    userAgent: '' // optional
});

console.log(result);
```
