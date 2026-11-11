## v0.9.0
- Breaking: Apps.appsCreateDeployment, Cubes.cubesCreateDeployment, Sites.sitesCreateDeployment take a new releaseMode argument where onProgress was
- Breaking: Models.Deployment has new required fields buildDigest, gateResultsJson, releaseMode
- Breaking: Models.Function, Models.Site have new required fields vcsPreviewsEnabled, vcsTriggerMode
- Breaking: Models.MfaChallenge has new required field code
- Breaking: parameter params type changed on Apps.appsCreate, Apps.appsCreateDeployment, Apps.appsUpdate, Cubes.cubesCreateDeployment, Sites.sitesCreate, Sites.sitesCreateDeployment, Sites.sitesUpdate
- New methods: Apps.appsAcceptRelease, Apps.appsAcceptThemeRelease, Apps.appsListReleases, Apps.appsListThemeReleases, Apps.appsPublishTheme, Apps.appsRebuildRelease, Apps.appsUnpublishTheme, Cubes.cubesAcceptRelease, Cubes.cubesListReleases, Cubes.cubesRebuildRelease
- New options vcsPreviewsEnabled, vcsTriggerMode on Apps.appsCreate, Apps.appsUpdate, Sites.sitesCreate, Sites.sitesUpdate
- New types: Integrations, Models.Installation, Models.Integration, Models.IntegrationList, ReleaseMode
- New enum values: Scopes.CubesRead, Scopes.CubesWrite, Scopes.IntegrationsRead, Scopes.IntegrationsWrite
- and 1 more addition

## v0.8.0
- New: DELETE /v1/cubes/{cubeId}, GET /v1/cubes, GET /v1/cubes/{cubeId}, GET /v1/cubes/{cubeId}/deployments and 5 more. Regenerated from the latest API specification.

## v0.7.0
- Regenerated from the latest API specification

## v0.6.2
- CI checks on every pull request, publish behind the checks, Dependabot security updates and a committed branch ruleset

## v0.6.1
- CI checks on every pull request, publish behind the checks, Dependabot security updates and a committed branch ruleset

## v0.6.0
- Breaking: costCentersCostCentersCreate now requires organizationId, and it moved ahead of the optional parameters (positional callers must update); Search and model signatures changed; the Collection enum was removed. Regenerated from the latest API specification.

## v0.5.0
- Required + nullable parameters are now required and typed T | null (fixes the 0.4.0 build); includes ordersApprove / ordersReject.

## v0.4.0
- Regenerated from the latest API specification

## v0.3.0
-  Parameter types and positions changed across many services and some enums were removed (Collection, ContactUpdateRequestRegistrationStatus), following the current API spec; err.message now carries an app's refusal reason.

## v0.2.0
- Regenerated from the latest API specification (adds cost-centers, procurement, promotions, quotes and punchout; response models replace the previous error-typed returns)

## v0.1.0
- Regenerated from the latest API specification

## v0.1.0
- Regenerated from the latest API specification

## v0.0.15
- Regenerated from the latest API specification

## v0.0.14
- Regenerated from the latest API specification

## v0.0.13
- Regenerated from the latest API specification

## v0.0.12
- Regenerated from the latest API specification

## v0.0.11
- Regenerated from the latest API specification

## v0.0.10
- Regenerated from the latest API specification

## v0.0.9
- Regenerated from the latest API specification

## v0.0.8
- Regenerated from the latest API specification

## v0.0.7
- Regenerated from the latest API specification

## v0.0.6
- Regenerated from the latest API specification

## v0.0.5
- Regenerated from the latest API specification

## v0.0.4
- Regenerated from the latest API specification

## v0.0.3
- Regenerated from the latest API specification

## v0.0.2
- Regenerated from the latest API specification

## v0.0.1
- Initial release
