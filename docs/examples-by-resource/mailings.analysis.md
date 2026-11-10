# mailings.analysis

## mailings-analysis-list-clicks

List clicked links of mailings

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisListClicks({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    mailingId: '', // optional
    url: '' // optional
});

console.log(result);
```

## mailings-analysis-get-click

Read one clicked link

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisGetClick({
    id: ''
});

console.log(result);
```

## mailings-analysis-list-engagements

List recorded reactions to mailings

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisListEngagements({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    mailingId: '', // optional
    kind: '', // optional
    email: '', // optional
    contactId: '', // optional
    messageId: '', // optional
    isMachine: '' // optional
});

console.log(result);
```

## mailings-analysis-get-engagement

Read one recorded reaction

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisGetEngagement({
    id: ''
});

console.log(result);
```

## mailings-analysis-clicks

Read the click map of a mailing

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisClicks({
    id: ''
});

console.log(result);
```

## mailings-analysis-stats

Read what a mailing achieved

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisStats({
    id: ''
});

console.log(result);
```

## mailings-analysis-timeline

Read the opens and clicks of a mailing per day

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisTimeline({
    id: ''
});

console.log(result);
```

## mailings-analysis-list-stats

List the figures of mailings

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisListStats({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    mailingId: '' // optional
});

console.log(result);
```

## mailings-analysis-sweep

Bring the figures of the last 30 days up to date

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisSweep({
    data: {}
});

console.log(result);
```

## mailings-analysis-get-stats

Read one figures row

```javascript
import { Client, MailingsAnalysis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsAnalysis = new MailingsAnalysis(client);

const result = await mailingsAnalysis.mailingsAnalysisGetStats({
    id: ''
});

console.log(result);
```
