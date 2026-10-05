```javascript
import { Client, CustomersSegments, SegmentMemberSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentMembersCreate({
    organizationId: '',
    segmentId: '',
    createdAt: '2026-01-01T12:00:00Z', // optional
    source: SegmentMemberSource.Manual // optional
});

console.log(result);
```
