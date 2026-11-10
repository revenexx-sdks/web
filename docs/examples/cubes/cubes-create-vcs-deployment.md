```javascript
import { Client, Cubes, CubesCreateVcsDeploymentType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesCreateVcsDeployment({
    cubeId: '',
    reference: '',
    type: CubesCreateVcsDeploymentType.Branch,
    activate: true // optional
});

console.log(result);
```
