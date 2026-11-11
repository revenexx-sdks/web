```javascript
import { Client, Cubes, ReleaseMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesCreateDeployment({
    cubeId: '',
    code: document.getElementById('uploader').files[0],
    activate: true, // optional
    releaseMode: ReleaseMode.Deploy // optional
});

console.log(result);
```
