```javascript
import { Client, CustomersSegments, SegmentRuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsCreate({
    code: 'key_accounts',
    labels: {
        "de": "Gro\u00dfkunden",
        "en": "Key accounts"
    }, // optional
    position: 1, // optional
    ruleMatch: SegmentRuleMatch.All, // optional
    rules: {} // optional
});

console.log(result);
```
