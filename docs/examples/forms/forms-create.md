```javascript
import { Client, Forms, FormStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const forms = new Forms(client);

const result = await forms.formsCreate({
    name: 'Price request',
    slug: 'price-request',
    definition: [{"$formkit":"text","label":"Company","name":"company","validation":"required"},{"$formkit":"email","label":"Email","name":"email","validation":"required|email"},{"$formkit":"textarea","label":"What do you need a price for?","name":"message","rows":4},{"$el":"p","children":"We answer price requests within one working day."}], // optional
    metadata: {}, // optional
    settings: {}, // optional
    status: FormStatus.Draft // optional
});

console.log(result);
```
