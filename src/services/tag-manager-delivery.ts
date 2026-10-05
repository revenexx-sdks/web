import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class TagManagerDelivery {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The latest published container for the requested market (its own, else the one for every market), with active marketing tags only and the market's tag settings. Answers an empty container when nothing is published. Gateway-cached per tenant and market; a publish invalidates it.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainer>}
     */
    tagManagerDeliveryContainer(): Promise<Models.TagManagerContainer> {

        const apiPath = '/v1/tag-manager/delivery/container';
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
     * The unpublished draft, built now, for a valid preview token. Never cached. An unknown and an expired token are answered alike, with 404.
     *
     * @param {string} params.token - The preview token.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainer>}
     */
    tagManagerDeliveryPreview(params: { token: string }): Promise<Models.TagManagerContainer>;
    /**
     * The unpublished draft, built now, for a valid preview token. Never cached. An unknown and an expired token are answered alike, with 404.
     *
     * @param {string} token - The preview token.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TagManagerContainer>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    tagManagerDeliveryPreview(token: string): Promise<Models.TagManagerContainer>;
    tagManagerDeliveryPreview(
        paramsOrFirst: { token: string } | string    
    ): Promise<Models.TagManagerContainer> {
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

        const apiPath = '/v1/tag-manager/delivery/preview/{token}'.replace('{token}', token);
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
