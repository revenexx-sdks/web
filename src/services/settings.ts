import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Settings {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The tenant's effective settings for the app — the declared schema's defaults merged with stored tenant/market values. Sensitive settings are masked (listed in `masked`, omitted from `settings`).
     *
     * @param {string} params.app - App name, e.g. `pages`.
     * @param {string} params.market - Resolve market-scoped settings for this market code; falls back to the tenant value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    settingsGetAppSettings(params: { app: string, market?: string }): Promise<{}>;
    /**
     * The tenant's effective settings for the app — the declared schema's defaults merged with stored tenant/market values. Sensitive settings are masked (listed in `masked`, omitted from `settings`).
     *
     * @param {string} app - App name, e.g. `pages`.
     * @param {string} market - Resolve market-scoped settings for this market code; falls back to the tenant value.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    settingsGetAppSettings(app: string, market?: string): Promise<{}>;
    settingsGetAppSettings(
        paramsOrFirst: { app: string, market?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { app: string, market?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { app: string, market?: string };
        } else {
            params = {
                app: paramsOrFirst as string,
                market: rest[0] as string            
            };
        }
        
        const app = params.app;
        const market = params.market;

        if (typeof app === 'undefined') {
            throw new RevenexxException('Missing required parameter: "app"');
        }

        const apiPath = '/v1/settings/apps/{app}'.replace('{app}', app);
        const apiPayload: Payload = {};
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
