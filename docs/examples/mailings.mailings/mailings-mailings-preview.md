```javascript
import { Client, MailingsMailings, Device } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsMailings = new MailingsMailings(client);

const result = await mailingsMailings.mailingsMailingsPreview({
    id: '',
    contactId: '', // optional
    device: Device.Desktop, // optional
    email: '', // optional
    firstName: '', // optional
    lastName: '', // optional
    locale: '', // optional
    market: '' // optional
});

console.log(result);
```
