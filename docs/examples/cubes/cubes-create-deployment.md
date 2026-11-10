```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesCreateDeployment({
    cubeId: '',
    code: document.getElementById('uploader').files[0],
    activate: true // optional
});

console.log(result);
```
