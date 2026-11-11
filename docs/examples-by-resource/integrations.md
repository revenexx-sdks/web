# integrations

## integrations-list

List integrations

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsList({
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## integrations-create

Create integration

```javascript
import { Client, Integrations, VcsTriggerMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsCreate({
    integrationId: '',
    name: '',
    enabled: true, // optional
    installationId: '', // optional
    logging: true, // optional
    providerBranch: '', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    vcsPreviewsEnabled: true, // optional
    vcsTriggerMode: VcsTriggerMode.Push // optional
});

console.log(result);
```

## integrations-delete

Delete integration

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsDelete({
    integrationId: ''
});

console.log(result);
```

## integrations-get

Get integration

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsGet({
    integrationId: ''
});

console.log(result);
```

## integrations-update

Update integration

```javascript
import { Client, Integrations, VcsTriggerMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsUpdate({
    integrationId: '',
    name: '',
    enabled: true, // optional
    installationId: '', // optional
    logging: true, // optional
    providerBranch: '', // optional
    providerRepositoryId: '', // optional
    providerRootDirectory: '', // optional
    providerSilentMode: true, // optional
    vcsPreviewsEnabled: true, // optional
    vcsTriggerMode: VcsTriggerMode.Push // optional
});

console.log(result);
```

## integrations-list-deployments

List deployments

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsListDeployments({
    integrationId: '',
    queries: [], // optional
    search: '', // optional
    total: true // optional
});

console.log(result);
```

## integrations-create-deployment

Create deployment

```javascript
import { Client, Integrations, ReleaseMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsCreateDeployment({
    integrationId: '',
    code: document.getElementById('uploader').files[0],
    activate: true, // optional
    releaseMode: ReleaseMode.Deploy // optional
});

console.log(result);
```

## integrations-create-vcs-deployment

Create VCS deployment

```javascript
import { Client, Integrations, CubesCreateVcsDeploymentType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsCreateVcsDeployment({
    integrationId: '',
    reference: '',
    type: CubesCreateVcsDeploymentType.Branch,
    activate: true // optional
});

console.log(result);
```

## integrations-get-deployment

Get deployment

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsGetDeployment({
    integrationId: '',
    deploymentId: ''
});

console.log(result);
```

## integrations-list-releases

List integration releases

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsListReleases({
    integrationId: ''
});

console.log(result);
```

## integrations-accept-release

Accept integration release candidate

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsAcceptRelease({
    integrationId: '',
    rc: 1, // optional
    version: '' // optional
});

console.log(result);
```

## integrations-rebuild-release

Rebuild integration release

```javascript
import { Client, Integrations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const integrations = new Integrations(client);

const result = await integrations.integrationsRebuildRelease({
    integrationId: '',
    version: '',
    commit: '' // optional
});

console.log(result);
```
