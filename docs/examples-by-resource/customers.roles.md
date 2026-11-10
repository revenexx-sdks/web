# customers.roles

## customers-permissions-ledger

Read the permission ledger

```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersPermissionsLedger();

console.log(result);
```

## customers-roles-list

List the customer role catalogue

```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesList();

console.log(result);
```

## customers-roles-create

Create a customer role with its permissions

```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesCreate({
    title: 'Einkauf Zentrale',
    active: true, // optional
    description: '', // optional
    descriptions: {}, // optional
    isDefault: true, // optional
    key: 'einkauf-zentrale', // optional
    labels: {}, // optional
    permissions: [], // optional
    position: 1 // optional
});

console.log(result);
```

## customers-roles-defaults

Seed the built-in customer roles

```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesDefaults({
    data: {}
});

console.log(result);
```

## customers-roles-update

Edit a customer role

```javascript
import { Client, CustomersRoles, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesUpdate({
    key: 'einkauf-zentrale',
    active: true, // optional
    description: '', // optional
    descriptions: {}, // optional
    isDefault: true, // optional
    labels: {}, // optional
    position: 1, // optional
    title: 'Einkauf Zentrale', // optional
    tone: Tone.Neutral // optional
});

console.log(result);
```

## customers-roles-copy

Start a new role from an existing one

```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesCopy({
    key: 'buyer',
    title: 'Einkäufer Werk 2',
    description: '', // optional
    keyBody: '' // optional
});

console.log(result);
```

## customers-roles-permissions-replace

Replace a role's permission set

```javascript
import { Client, CustomersRoles } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersRoles = new CustomersRoles(client);

const result = await customersRoles.customersRolesPermissionsReplace({
    key: 'buyer',
    permissions: []
});

console.log(result);
```
