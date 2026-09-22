import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { QuotesTrailAttachDirection } from '../enums/quotes-trail-attach-direction';
import { Visibility } from '../enums/visibility';

export class QuotesTrail {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Records a drawing, a datasheet or a signed document against the quote. This app stores the reference and serves no bytes — the file itself lives in whatever storage the tenant uses.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.fileRef - Where the file lives.
     * @param {string} params.filename - What to call it.
     * @param {number} params.byteSize - How large it is, in bytes.
     * @param {string} params.contentType - The media type.
     * @param {QuotesTrailAttachDirection} params.direction - Who put it there.
     * @param {Visibility} params.visibility - Who sees it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteAttachment>}
     */
    quotesTrailAttach(params: { id: string, fileRef: string, filename: string, byteSize?: number, contentType?: string, direction?: QuotesTrailAttachDirection, visibility?: Visibility }): Promise<Models.QuoteAttachment>;
    /**
     * Records a drawing, a datasheet or a signed document against the quote. This app stores the reference and serves no bytes — the file itself lives in whatever storage the tenant uses.
     *
     * @param {string} id - The quote.
     * @param {string} fileRef - Where the file lives.
     * @param {string} filename - What to call it.
     * @param {number} byteSize - How large it is, in bytes.
     * @param {string} contentType - The media type.
     * @param {QuotesTrailAttachDirection} direction - Who put it there.
     * @param {Visibility} visibility - Who sees it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteAttachment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesTrailAttach(id: string, fileRef: string, filename: string, byteSize?: number, contentType?: string, direction?: QuotesTrailAttachDirection, visibility?: Visibility): Promise<Models.QuoteAttachment>;
    quotesTrailAttach(
        paramsOrFirst: { id: string, fileRef: string, filename: string, byteSize?: number, contentType?: string, direction?: QuotesTrailAttachDirection, visibility?: Visibility } | string,
        ...rest: [(string)?, (string)?, (number)?, (string)?, (QuotesTrailAttachDirection)?, (Visibility)?]    
    ): Promise<Models.QuoteAttachment> {
        let params: { id: string, fileRef: string, filename: string, byteSize?: number, contentType?: string, direction?: QuotesTrailAttachDirection, visibility?: Visibility };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, fileRef: string, filename: string, byteSize?: number, contentType?: string, direction?: QuotesTrailAttachDirection, visibility?: Visibility };
        } else {
            params = {
                id: paramsOrFirst as string,
                fileRef: rest[0] as string,
                filename: rest[1] as string,
                byteSize: rest[2] as number,
                contentType: rest[3] as string,
                direction: rest[4] as QuotesTrailAttachDirection,
                visibility: rest[5] as Visibility            
            };
        }
        
        const id = params.id;
        const fileRef = params.fileRef;
        const filename = params.filename;
        const byteSize = params.byteSize;
        const contentType = params.contentType;
        const direction = params.direction;
        const visibility = params.visibility;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof fileRef === 'undefined') {
            throw new RevenexxException('Missing required parameter: "fileRef"');
        }
        if (typeof filename === 'undefined') {
            throw new RevenexxException('Missing required parameter: "filename"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/attachments'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof byteSize !== 'undefined') {
            apiPayload['byte_size'] = byteSize;
        }
        if (typeof contentType !== 'undefined') {
            apiPayload['content_type'] = contentType;
        }
        if (typeof direction !== 'undefined') {
            apiPayload['direction'] = direction;
        }
        if (typeof fileRef !== 'undefined') {
            apiPayload['file_ref'] = fileRef;
        }
        if (typeof filename !== 'undefined') {
            apiPayload['filename'] = filename;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * Adds an entry to the trail. `internal` is the merchant's own note and the customer never sees it; `customer` is what appears on the quote the buyer reads.
     *
     * @param {string} params.id - The quote.
     * @param {string} params.body - What to write.
     * @param {string} params.actor - Which side wrote it.
     * @param {Visibility} params.visibility - Who sees it. Internal when left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteEvent>}
     */
    quotesTrailNote(params: { id: string, body: string, actor?: string, visibility?: Visibility }): Promise<Models.QuoteEvent>;
    /**
     * Adds an entry to the trail. `internal` is the merchant's own note and the customer never sees it; `customer` is what appears on the quote the buyer reads.
     *
     * @param {string} id - The quote.
     * @param {string} body - What to write.
     * @param {string} actor - Which side wrote it.
     * @param {Visibility} visibility - Who sees it. Internal when left out.
     * @throws {RevenexxException}
     * @returns {Promise<Models.QuoteEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    quotesTrailNote(id: string, body: string, actor?: string, visibility?: Visibility): Promise<Models.QuoteEvent>;
    quotesTrailNote(
        paramsOrFirst: { id: string, body: string, actor?: string, visibility?: Visibility } | string,
        ...rest: [(string)?, (string)?, (Visibility)?]    
    ): Promise<Models.QuoteEvent> {
        let params: { id: string, body: string, actor?: string, visibility?: Visibility };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, body: string, actor?: string, visibility?: Visibility };
        } else {
            params = {
                id: paramsOrFirst as string,
                body: rest[0] as string,
                actor: rest[1] as string,
                visibility: rest[2] as Visibility            
            };
        }
        
        const id = params.id;
        const body = params.body;
        const actor = params.actor;
        const visibility = params.visibility;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof body === 'undefined') {
            throw new RevenexxException('Missing required parameter: "body"');
        }

        const apiPath = '/v1/quotes/quotes/{id}/events'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof body !== 'undefined') {
            apiPayload['body'] = body;
        }
        if (typeof visibility !== 'undefined') {
            apiPayload['visibility'] = visibility;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
