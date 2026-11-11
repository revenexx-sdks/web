# cubes

## cubes-list

List Cubes

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesList({
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## cubes-create

Create Cube

```javascript
import { Client, Cubes, VcsTriggerMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesCreate({
    cubeId: '',
    name: '',
    enabled: true, // optional
    installationId: '', // optional
    logging: true, // optional
    providerBranch: '', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    vcsTriggerMode: VcsTriggerMode.Push // optional
});

console.log(result);
```

## cubes-delete

Delete Cube

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesDelete({
    cubeId: ''
});

console.log(result);
```

## cubes-get

Get Cube

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesGet({
    cubeId: ''
});

console.log(result);
```

## cubes-update

Update Cube

```javascript
import { Client, Cubes, VcsTriggerMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesUpdate({
    cubeId: '',
    name: '',
    enabled: true, // optional
    installationId: '', // optional
    logging: true, // optional
    providerBranch: '', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    vcsTriggerMode: VcsTriggerMode.Push // optional
});

console.log(result);
```

## cubes-list-deployments

List deployments

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesListDeployments({
    cubeId: '',
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## cubes-create-deployment

Create deployment

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

## cubes-create-vcs-deployment

Create VCS deployment

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

## cubes-get-deployment

Get deployment

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesGetDeployment({
    cubeId: '',
    deploymentId: ''
});

console.log(result);
```

## cubes-list-releases

List cube releases

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesListReleases({
    cubeId: ''
});

console.log(result);
```

## cubes-accept-release

Accept cube release candidate

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesAcceptRelease({
    cubeId: '',
    rc: 1, // optional
    version: '' // optional
});

console.log(result);
```

## cubes-rebuild-release

Rebuild cube release

```javascript
import { Client, Cubes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cubes = new Cubes(client);

const result = await cubes.cubesRebuildRelease({
    cubeId: '',
    version: '',
    commit: '', // optional
    deploymentId: '' // optional
});

console.log(result);
```
