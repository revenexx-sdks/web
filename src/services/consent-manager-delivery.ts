import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class ConsentManagerDelivery {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The latest version published for the market in `x-revenexx-market`, else the shop's. Cached at the gateway for the whole tenant per market and dropped on every publish. With nothing published it answers 404 `no_policy_published` with `details.reason: nothing_published`, which the storefront treats as everything denied: no banner, nothing optional loads.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveredPolicy>}
     */
    consentManagerDeliveryPolicy(): Promise<Models.DeliveredPolicy> {

        const apiPath = '/v1/consent-manager/delivery/policy';
        const apiPayload: Payload = {};
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

    /**
     * A rendered draft, shaped like the delivered policy, with `version.preview: true` and no version id. Not cached.
     *
     * @param {string} params.token - The preview token.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveredPolicy>}
     */
    consentManagerDeliveryPreview(params: { token: string }): Promise<Models.DeliveredPolicy>;
    /**
     * A rendered draft, shaped like the delivered policy, with `version.preview: true` and no version id. Not cached.
     *
     * @param {string} token - The preview token.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DeliveredPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    consentManagerDeliveryPreview(token: string): Promise<Models.DeliveredPolicy>;
    consentManagerDeliveryPreview(
        paramsOrFirst: { token: string } | string    
    ): Promise<Models.DeliveredPolicy> {
        let params: { token: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { token: string };
        } else {
            params = {
                token: paramsOrFirst as string            
            };
        }
        
        const token = params.token;

        if (typeof token === 'undefined') {
            throw new RevenexxException('Missing required parameter: "token"');
        }

        const apiPath = '/v1/consent-manager/delivery/preview/{token}'.replace('{token}', token);
        const apiPayload: Payload = {};
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
