import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { PromotionsBatchesCreateStatus } from '../enums/promotions-batches-create-status';

export class PromotionsVouchers {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The unit a mailing is accounted for by. "How many of the spring codes have been used" is a question about a batch, not about fifty thousand rows.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.pattern - Keep only rows whose `pattern` equals this.
     * @param {string} params.alphabet - Keep only rows whose `alphabet` equals this.
     * @param {string} params.requested - Keep only rows whose `requested` equals this.
     * @param {string} params.createdCount - Keep only rows whose `created_count` equals this.
     * @param {string} params.redeemedCount - Keep only rows whose `redeemed_count` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.requestRef - Keep only rows whose `request_ref` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBatchesList(params?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, pattern?: string, alphabet?: string, requested?: string, createdCount?: string, redeemedCount?: string, status?: string, requestRef?: string }): Promise<{}>;
    /**
     * The unit a mailing is accounted for by. "How many of the spring codes have been used" is a question about a batch, not about fifty thousand rows.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} pattern - Keep only rows whose `pattern` equals this.
     * @param {string} alphabet - Keep only rows whose `alphabet` equals this.
     * @param {string} requested - Keep only rows whose `requested` equals this.
     * @param {string} createdCount - Keep only rows whose `created_count` equals this.
     * @param {string} redeemedCount - Keep only rows whose `redeemed_count` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} requestRef - Keep only rows whose `request_ref` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesList(limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, pattern?: string, alphabet?: string, requested?: string, createdCount?: string, redeemedCount?: string, status?: string, requestRef?: string): Promise<{}>;
    promotionsBatchesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, pattern?: string, alphabet?: string, requested?: string, createdCount?: string, redeemedCount?: string, status?: string, requestRef?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, pattern?: string, alphabet?: string, requested?: string, createdCount?: string, redeemedCount?: string, status?: string, requestRef?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, name?: string, pattern?: string, alphabet?: string, requested?: string, createdCount?: string, redeemedCount?: string, status?: string, requestRef?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                promotionId: rest[3] as string,
                name: rest[4] as string,
                pattern: rest[5] as string,
                alphabet: rest[6] as string,
                requested: rest[7] as string,
                createdCount: rest[8] as string,
                redeemedCount: rest[9] as string,
                status: rest[10] as string,
                requestRef: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const promotionId = params.promotionId;
        const name = params.name;
        const pattern = params.pattern;
        const alphabet = params.alphabet;
        const requested = params.requested;
        const createdCount = params.createdCount;
        const redeemedCount = params.redeemedCount;
        const status = params.status;
        const requestRef = params.requestRef;


        const apiPath = '/v1/promotions/batches';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof pattern !== 'undefined') {
            apiPayload['pattern'] = pattern;
        }
        if (typeof alphabet !== 'undefined') {
            apiPayload['alphabet'] = alphabet;
        }
        if (typeof requested !== 'undefined') {
            apiPayload['requested'] = requested;
        }
        if (typeof createdCount !== 'undefined') {
            apiPayload['created_count'] = createdCount;
        }
        if (typeof redeemedCount !== 'undefined') {
            apiPayload['redeemed_count'] = redeemedCount;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof requestRef !== 'undefined') {
            apiPayload['request_ref'] = requestRef;
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

    /**
     *
     * @param {string} params.name - What the batch is called — the unit a mailing is accounted for by afterwards.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} params.alphabet - The characters generated codes may use. The default omits the ones people confuse reading a code off paper.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.pattern - The shape generated codes take. `#` draws a character from the alphabet; every other character is kept.
     * @param {string} params.requestRef - A reference the caller chose, so a retried generation makes no second batch. A timed-out call is retried by whoever sent it, and a retry that doubled a mailing is discovered when the codes are in the post.
     * @param {number} params.requested - How many codes have been asked for.
     * @param {PromotionsBatchesCreateStatus} params.status - A leaked batch is `disabled`, which refuses every code in it at once — a leak is discovered as a batch and has to be stopped as one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherBatch>}
     */
    promotionsBatchesCreate(params: { name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus }): Promise<Models.VoucherBatch>;
    /**
     *
     * @param {string} name - What the batch is called — the unit a mailing is accounted for by afterwards.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} alphabet - The characters generated codes may use. The default omits the ones people confuse reading a code off paper.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} pattern - The shape generated codes take. `#` draws a character from the alphabet; every other character is kept.
     * @param {string} requestRef - A reference the caller chose, so a retried generation makes no second batch. A timed-out call is retried by whoever sent it, and a retry that doubled a mailing is discovered when the codes are in the post.
     * @param {number} requested - How many codes have been asked for.
     * @param {PromotionsBatchesCreateStatus} status - A leaked batch is `disabled`, which refuses every code in it at once — a leak is discovered as a batch and has to be stopped as one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherBatch>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesCreate(name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus): Promise<Models.VoucherBatch>;
    promotionsBatchesCreate(
        paramsOrFirst: { name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus } | string,
        ...rest: [(string)?, (string)?, (object)?, (string)?, (string)?, (number)?, (PromotionsBatchesCreateStatus)?]    
    ): Promise<Models.VoucherBatch> {
        let params: { name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus };
        } else {
            params = {
                name: paramsOrFirst as string,
                promotionId: rest[0] as string,
                alphabet: rest[1] as string,
                metadata: rest[2] as object,
                pattern: rest[3] as string,
                requestRef: rest[4] as string,
                requested: rest[5] as number,
                status: rest[6] as PromotionsBatchesCreateStatus            
            };
        }
        
        const name = params.name;
        const promotionId = params.promotionId;
        const alphabet = params.alphabet;
        const metadata = params.metadata;
        const pattern = params.pattern;
        const requestRef = params.requestRef;
        const requested = params.requested;
        const status = params.status;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/batches';
        const apiPayload: Payload = {};
        if (typeof alphabet !== 'undefined') {
            apiPayload['alphabet'] = alphabet;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof pattern !== 'undefined') {
            apiPayload['pattern'] = pattern;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof requestRef !== 'undefined') {
            apiPayload['request_ref'] = requestRef;
        }
        if (typeof requested !== 'undefined') {
            apiPayload['requested'] = requested;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
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
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBatchesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesDelete(id: string): Promise<{}>;
    promotionsBatchesDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/batches/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherBatch>}
     */
    promotionsBatchesGet(params: { id: string }): Promise<Models.VoucherBatch>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherBatch>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesGet(id: string): Promise<Models.VoucherBatch>;
    promotionsBatchesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.VoucherBatch> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/batches/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.name - What the batch is called — the unit a mailing is accounted for by afterwards.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} params.alphabet - The characters generated codes may use. The default omits the ones people confuse reading a code off paper.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.pattern - The shape generated codes take. `#` draws a character from the alphabet; every other character is kept.
     * @param {string} params.requestRef - A reference the caller chose, so a retried generation makes no second batch. A timed-out call is retried by whoever sent it, and a retry that doubled a mailing is discovered when the codes are in the post.
     * @param {number} params.requested - How many codes have been asked for.
     * @param {PromotionsBatchesCreateStatus} params.status - A leaked batch is `disabled`, which refuses every code in it at once — a leak is discovered as a batch and has to be stopped as one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherBatch>}
     */
    promotionsBatchesUpdate(params: { id: string, name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus }): Promise<Models.VoucherBatch>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} name - What the batch is called — the unit a mailing is accounted for by afterwards.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} alphabet - The characters generated codes may use. The default omits the ones people confuse reading a code off paper.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} pattern - The shape generated codes take. `#` draws a character from the alphabet; every other character is kept.
     * @param {string} requestRef - A reference the caller chose, so a retried generation makes no second batch. A timed-out call is retried by whoever sent it, and a retry that doubled a mailing is discovered when the codes are in the post.
     * @param {number} requested - How many codes have been asked for.
     * @param {PromotionsBatchesCreateStatus} status - A leaked batch is `disabled`, which refuses every code in it at once — a leak is discovered as a batch and has to be stopped as one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherBatch>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesUpdate(id: string, name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus): Promise<Models.VoucherBatch>;
    promotionsBatchesUpdate(
        paramsOrFirst: { id: string, name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus } | string,
        ...rest: [(string)?, (string)?, (string)?, (object)?, (string)?, (string)?, (number)?, (PromotionsBatchesCreateStatus)?]    
    ): Promise<Models.VoucherBatch> {
        let params: { id: string, name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, name: string, promotionId: string, alphabet?: string, metadata?: object, pattern?: string, requestRef?: string, requested?: number, status?: PromotionsBatchesCreateStatus };
        } else {
            params = {
                id: paramsOrFirst as string,
                name: rest[0] as string,
                promotionId: rest[1] as string,
                alphabet: rest[2] as string,
                metadata: rest[3] as object,
                pattern: rest[4] as string,
                requestRef: rest[5] as string,
                requested: rest[6] as number,
                status: rest[7] as PromotionsBatchesCreateStatus            
            };
        }
        
        const id = params.id;
        const name = params.name;
        const promotionId = params.promotionId;
        const alphabet = params.alphabet;
        const metadata = params.metadata;
        const pattern = params.pattern;
        const requestRef = params.requestRef;
        const requested = params.requested;
        const status = params.status;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/batches/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof alphabet !== 'undefined') {
            apiPayload['alphabet'] = alphabet;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof pattern !== 'undefined') {
            apiPayload['pattern'] = pattern;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof requestRef !== 'undefined') {
            apiPayload['request_ref'] = requestRef;
        }
        if (typeof requested !== 'undefined') {
            apiPayload['requested'] = requested;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The codes are only useful once they are out of this system and in a mailing tool, so a batch that cannot leave was made for nobody.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBatchesExport(params: { id: string }): Promise<{}>;
    /**
     * The codes are only useful once they are out of this system and in a mailing tool, so a batch that cannot leave was made for nobody.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesExport(id: string): Promise<{}>;
    promotionsBatchesExport(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/batches/{id}/export'.replace('{id}', id);
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
     * Fifty thousand codes from one pattern, in one call, accounted for as one batch. The alphabet omits the characters people confuse reading a code off paper. A request carrying a reference makes no second batch when it is retried — a retry that doubled a mailing is discovered when the codes are in the post.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {number} params.count - How many codes to make. Bounded by the tenant setting.
     * @param {string} params.alphabet - The characters they may use.
     * @param {string} params.pattern - The shape they take. Defaults to the batch pattern, then the tenant default.
     * @param {string} params.requestRef - A reference the caller chose, so a retry makes nothing further.
     * @param {number} params.usageLimit - How often each code may be redeemed. Zero is unlimited.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBatchesGenerate(params: { id: string, count: number, alphabet?: string, pattern?: string, requestRef?: string, usageLimit?: number }): Promise<{}>;
    /**
     * Fifty thousand codes from one pattern, in one call, accounted for as one batch. The alphabet omits the characters people confuse reading a code off paper. A request carrying a reference makes no second batch when it is retried — a retry that doubled a mailing is discovered when the codes are in the post.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {number} count - How many codes to make. Bounded by the tenant setting.
     * @param {string} alphabet - The characters they may use.
     * @param {string} pattern - The shape they take. Defaults to the batch pattern, then the tenant default.
     * @param {string} requestRef - A reference the caller chose, so a retry makes nothing further.
     * @param {number} usageLimit - How often each code may be redeemed. Zero is unlimited.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesGenerate(id: string, count: number, alphabet?: string, pattern?: string, requestRef?: string, usageLimit?: number): Promise<{}>;
    promotionsBatchesGenerate(
        paramsOrFirst: { id: string, count: number, alphabet?: string, pattern?: string, requestRef?: string, usageLimit?: number } | string,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (number)?]    
    ): Promise<{}> {
        let params: { id: string, count: number, alphabet?: string, pattern?: string, requestRef?: string, usageLimit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, count: number, alphabet?: string, pattern?: string, requestRef?: string, usageLimit?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                count: rest[0] as number,
                alphabet: rest[1] as string,
                pattern: rest[2] as string,
                requestRef: rest[3] as string,
                usageLimit: rest[4] as number            
            };
        }
        
        const id = params.id;
        const count = params.count;
        const alphabet = params.alphabet;
        const pattern = params.pattern;
        const requestRef = params.requestRef;
        const usageLimit = params.usageLimit;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof count === 'undefined') {
            throw new RevenexxException('Missing required parameter: "count"');
        }

        const apiPath = '/v1/promotions/batches/{id}/generate'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof alphabet !== 'undefined') {
            apiPayload['alphabet'] = alphabet;
        }
        if (typeof count !== 'undefined') {
            apiPayload['count'] = count;
        }
        if (typeof pattern !== 'undefined') {
            apiPayload['pattern'] = pattern;
        }
        if (typeof requestRef !== 'undefined') {
            apiPayload['request_ref'] = requestRef;
        }
        if (typeof usageLimit !== 'undefined') {
            apiPayload['usage_limit'] = usageLimit;
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
     * A personalised mailing needs one code per recipient, issued to them alone. Generating them separately would turn one campaign into ten thousand calls.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string[]} params.recipients - The contacts to issue a code to, one each.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBatchesGenerateFor(params: { id: string, recipients: string[] }): Promise<{}>;
    /**
     * A personalised mailing needs one code per recipient, issued to them alone. Generating them separately would turn one campaign into ten thousand calls.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string[]} recipients - The contacts to issue a code to, one each.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesGenerateFor(id: string, recipients: string[]): Promise<{}>;
    promotionsBatchesGenerateFor(
        paramsOrFirst: { id: string, recipients: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<{}> {
        let params: { id: string, recipients: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, recipients: string[] };
        } else {
            params = {
                id: paramsOrFirst as string,
                recipients: rest[0] as string[]            
            };
        }
        
        const id = params.id;
        const recipients = params.recipients;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof recipients === 'undefined') {
            throw new RevenexxException('Missing required parameter: "recipients"');
        }

        const apiPath = '/v1/promotions/batches/{id}/generate-for'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof recipients !== 'undefined') {
            apiPayload['recipients'] = recipients;
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
     * A migrated shop has codes already printed on cards, and a code the new system rewrote is a card in somebody wallet that no longer works. Every collision is named rather than silently skipped — an import that quietly dropped duplicates leaves a merchant believing they issued codes they did not.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string[]} params.codes - The codes to take, exactly as they are.
     * @param {number} params.usageLimit - How often each may be redeemed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsBatchesImport(params: { id: string, codes: string[], usageLimit?: number }): Promise<{}>;
    /**
     * A migrated shop has codes already printed on cards, and a code the new system rewrote is a card in somebody wallet that no longer works. Every collision is named rather than silently skipped — an import that quietly dropped duplicates leaves a merchant believing they issued codes they did not.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string[]} codes - The codes to take, exactly as they are.
     * @param {number} usageLimit - How often each may be redeemed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsBatchesImport(id: string, codes: string[], usageLimit?: number): Promise<{}>;
    promotionsBatchesImport(
        paramsOrFirst: { id: string, codes: string[], usageLimit?: number } | string,
        ...rest: [(string[])?, (number)?]    
    ): Promise<{}> {
        let params: { id: string, codes: string[], usageLimit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, codes: string[], usageLimit?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                codes: rest[0] as string[],
                usageLimit: rest[1] as number            
            };
        }
        
        const id = params.id;
        const codes = params.codes;
        const usageLimit = params.usageLimit;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof codes === 'undefined') {
            throw new RevenexxException('Missing required parameter: "codes"');
        }

        const apiPath = '/v1/promotions/batches/{id}/import'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof codes !== 'undefined') {
            apiPayload['codes'] = codes;
        }
        if (typeof usageLimit !== 'undefined') {
            apiPayload['usage_limit'] = usageLimit;
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
     * A code held FOR a buyer without being given to them — which is what a shop handing a limited code to the first hundred who ask actually needs. An expired reservation stops counting when the code is next looked at.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.voucherId - Keep only rows whose `voucher_id` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsVoucherReservationsList(params?: { limit?: number, offset?: number, order?: string, id?: string, voucherId?: string, contactId?: string, organizationId?: string }): Promise<{}>;
    /**
     * A code held FOR a buyer without being given to them — which is what a shop handing a limited code to the first hundred who ask actually needs. An expired reservation stops counting when the code is next looked at.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} voucherId - Keep only rows whose `voucher_id` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVoucherReservationsList(limit?: number, offset?: number, order?: string, id?: string, voucherId?: string, contactId?: string, organizationId?: string): Promise<{}>;
    promotionsVoucherReservationsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, voucherId?: string, contactId?: string, organizationId?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, voucherId?: string, contactId?: string, organizationId?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, voucherId?: string, contactId?: string, organizationId?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                voucherId: rest[3] as string,
                contactId: rest[4] as string,
                organizationId: rest[5] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const voucherId = params.voucherId;
        const contactId = params.contactId;
        const organizationId = params.organizationId;


        const apiPath = '/v1/promotions/voucher-reservations';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof voucherId !== 'undefined') {
            apiPayload['voucher_id'] = voucherId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
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

    /**
     *
     * @param {string} params.voucherId - The code being held.
     * @param {string} params.contactId - Who it is held for.
     * @param {string} params.expiresAt - When the hold stops counting. Empty is held until it is used or deleted.
     * @param {string} params.organizationId - Which company it is held for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherReservation>}
     */
    promotionsVoucherReservationsCreate(params: { voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string }): Promise<Models.VoucherReservation>;
    /**
     *
     * @param {string} voucherId - The code being held.
     * @param {string} contactId - Who it is held for.
     * @param {string} expiresAt - When the hold stops counting. Empty is held until it is used or deleted.
     * @param {string} organizationId - Which company it is held for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherReservation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVoucherReservationsCreate(voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string): Promise<Models.VoucherReservation>;
    promotionsVoucherReservationsCreate(
        paramsOrFirst: { voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.VoucherReservation> {
        let params: { voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string };
        } else {
            params = {
                voucherId: paramsOrFirst as string,
                contactId: rest[0] as string,
                expiresAt: rest[1] as string,
                organizationId: rest[2] as string            
            };
        }
        
        const voucherId = params.voucherId;
        const contactId = params.contactId;
        const expiresAt = params.expiresAt;
        const organizationId = params.organizationId;

        if (typeof voucherId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "voucherId"');
        }

        const apiPath = '/v1/promotions/voucher-reservations';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof voucherId !== 'undefined') {
            apiPayload['voucher_id'] = voucherId;
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
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsVoucherReservationsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVoucherReservationsDelete(id: string): Promise<{}>;
    promotionsVoucherReservationsDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/voucher-reservations/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherReservation>}
     */
    promotionsVoucherReservationsGet(params: { id: string }): Promise<Models.VoucherReservation>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherReservation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVoucherReservationsGet(id: string): Promise<Models.VoucherReservation>;
    promotionsVoucherReservationsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.VoucherReservation> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/voucher-reservations/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.voucherId - The code being held.
     * @param {string} params.contactId - Who it is held for.
     * @param {string} params.expiresAt - When the hold stops counting. Empty is held until it is used or deleted.
     * @param {string} params.organizationId - Which company it is held for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherReservation>}
     */
    promotionsVoucherReservationsUpdate(params: { id: string, voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string }): Promise<Models.VoucherReservation>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} voucherId - The code being held.
     * @param {string} contactId - Who it is held for.
     * @param {string} expiresAt - When the hold stops counting. Empty is held until it is used or deleted.
     * @param {string} organizationId - Which company it is held for.
     * @throws {RevenexxException}
     * @returns {Promise<Models.VoucherReservation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVoucherReservationsUpdate(id: string, voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string): Promise<Models.VoucherReservation>;
    promotionsVoucherReservationsUpdate(
        paramsOrFirst: { id: string, voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.VoucherReservation> {
        let params: { id: string, voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, voucherId: string, contactId?: string, expiresAt?: string, organizationId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                voucherId: rest[0] as string,
                contactId: rest[1] as string,
                expiresAt: rest[2] as string,
                organizationId: rest[3] as string            
            };
        }
        
        const id = params.id;
        const voucherId = params.voucherId;
        const contactId = params.contactId;
        const expiresAt = params.expiresAt;
        const organizationId = params.organizationId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof voucherId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "voucherId"');
        }

        const apiPath = '/v1/promotions/voucher-reservations/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof voucherId !== 'undefined') {
            apiPayload['voucher_id'] = voucherId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     * The codes buyers type. A voucher belongs to exactly one promotion and carries four independent limits — how often it may be redeemed, an amount spent down rather than used up, the buyer it was issued to, and its own validity window.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} params.batchId - Keep only rows whose `batch_id` equals this.
     * @param {string} params.code - Keep only rows whose `code` equals this.
     * @param {string} params.codeKey - Keep only rows whose `code_key` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.usageLimit - Keep only rows whose `usage_limit` equals this.
     * @param {string} params.usageCount - Keep only rows whose `usage_count` equals this.
     * @param {string} params.currency - Keep only rows whose `currency` equals this.
     * @param {string} params.contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} params.organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} params.reservationRequired - Keep only rows whose `reservation_required` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsVouchersList(params?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, batchId?: string, code?: string, codeKey?: string, status?: string, usageLimit?: string, usageCount?: string, currency?: string, contactId?: string, organizationId?: string, reservationRequired?: string }): Promise<{}>;
    /**
     * The codes buyers type. A voucher belongs to exactly one promotion and carries four independent limits — how often it may be redeemed, an amount spent down rather than used up, the buyer it was issued to, and its own validity window.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} promotionId - Keep only rows whose `promotion_id` equals this.
     * @param {string} batchId - Keep only rows whose `batch_id` equals this.
     * @param {string} code - Keep only rows whose `code` equals this.
     * @param {string} codeKey - Keep only rows whose `code_key` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} usageLimit - Keep only rows whose `usage_limit` equals this.
     * @param {string} usageCount - Keep only rows whose `usage_count` equals this.
     * @param {string} currency - Keep only rows whose `currency` equals this.
     * @param {string} contactId - Keep only rows whose `contact_id` equals this.
     * @param {string} organizationId - Keep only rows whose `organization_id` equals this.
     * @param {string} reservationRequired - Keep only rows whose `reservation_required` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVouchersList(limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, batchId?: string, code?: string, codeKey?: string, status?: string, usageLimit?: string, usageCount?: string, currency?: string, contactId?: string, organizationId?: string, reservationRequired?: string): Promise<{}>;
    promotionsVouchersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, batchId?: string, code?: string, codeKey?: string, status?: string, usageLimit?: string, usageCount?: string, currency?: string, contactId?: string, organizationId?: string, reservationRequired?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, batchId?: string, code?: string, codeKey?: string, status?: string, usageLimit?: string, usageCount?: string, currency?: string, contactId?: string, organizationId?: string, reservationRequired?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, promotionId?: string, batchId?: string, code?: string, codeKey?: string, status?: string, usageLimit?: string, usageCount?: string, currency?: string, contactId?: string, organizationId?: string, reservationRequired?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                promotionId: rest[3] as string,
                batchId: rest[4] as string,
                code: rest[5] as string,
                codeKey: rest[6] as string,
                status: rest[7] as string,
                usageLimit: rest[8] as string,
                usageCount: rest[9] as string,
                currency: rest[10] as string,
                contactId: rest[11] as string,
                organizationId: rest[12] as string,
                reservationRequired: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const promotionId = params.promotionId;
        const batchId = params.batchId;
        const code = params.code;
        const codeKey = params.codeKey;
        const status = params.status;
        const usageLimit = params.usageLimit;
        const usageCount = params.usageCount;
        const currency = params.currency;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const reservationRequired = params.reservationRequired;


        const apiPath = '/v1/promotions/vouchers';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof batchId !== 'undefined') {
            apiPayload['batch_id'] = batchId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof codeKey !== 'undefined') {
            apiPayload['code_key'] = codeKey;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof usageLimit !== 'undefined') {
            apiPayload['usage_limit'] = usageLimit;
        }
        if (typeof usageCount !== 'undefined') {
            apiPayload['usage_count'] = usageCount;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof reservationRequired !== 'undefined') {
            apiPayload['reservation_required'] = reservationRequired;
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

    /**
     *
     * @param {string} params.code - The code as it is printed and as a buyer types it.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} params.batchId - The batch this code was made in, when it was made in one.
     * @param {string} params.contactId - The person the code was issued to. Anybody else is refused — a personal apology code is worthless if it can be forwarded.
     * @param {string} params.currency - The currency a residual value is stated in.
     * @param {string} params.endsAt - When it expires. A merchant runs one promotion for a quarter and hands out codes that expire in a fortnight.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.organizationId - The company it was issued to. Any of its contacts may redeem it.
     * @param {number} params.reservationLimit - How many reservations may be held at once. A reservation that never ran out would promise a limited code to everybody who asked.
     * @param {boolean} params.reservationRequired - When true the code works only for a buyer who has reserved it — which is what makes a code printed in a public place usable at all.
     * @param {number} params.residualValue - An amount the code is worth, spent down rather than used up — how a goodwill amount survives a smaller first purchase.
     * @param {string} params.startsAt - When the code becomes valid. Empty is bounded only by the promotion.
     * @param {PromotionsBatchesCreateStatus} params.status - A leaked code is `disabled`, not deleted: it has to stop working within the minute, and deleting it would take the evidence with it.
     * @param {number} params.usageLimit - How often the code may be redeemed. Zero is unlimited, though the promotion own limits still apply.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Voucher>}
     */
    promotionsVouchersCreate(params: { code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number }): Promise<Models.Voucher>;
    /**
     *
     * @param {string} code - The code as it is printed and as a buyer types it.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} batchId - The batch this code was made in, when it was made in one.
     * @param {string} contactId - The person the code was issued to. Anybody else is refused — a personal apology code is worthless if it can be forwarded.
     * @param {string} currency - The currency a residual value is stated in.
     * @param {string} endsAt - When it expires. A merchant runs one promotion for a quarter and hands out codes that expire in a fortnight.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} organizationId - The company it was issued to. Any of its contacts may redeem it.
     * @param {number} reservationLimit - How many reservations may be held at once. A reservation that never ran out would promise a limited code to everybody who asked.
     * @param {boolean} reservationRequired - When true the code works only for a buyer who has reserved it — which is what makes a code printed in a public place usable at all.
     * @param {number} residualValue - An amount the code is worth, spent down rather than used up — how a goodwill amount survives a smaller first purchase.
     * @param {string} startsAt - When the code becomes valid. Empty is bounded only by the promotion.
     * @param {PromotionsBatchesCreateStatus} status - A leaked code is `disabled`, not deleted: it has to stop working within the minute, and deleting it would take the evidence with it.
     * @param {number} usageLimit - How often the code may be redeemed. Zero is unlimited, though the promotion own limits still apply.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Voucher>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVouchersCreate(code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number): Promise<Models.Voucher>;
    promotionsVouchersCreate(
        paramsOrFirst: { code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (number)?, (boolean)?, (number)?, (string)?, (PromotionsBatchesCreateStatus)?, (number)?]    
    ): Promise<Models.Voucher> {
        let params: { code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number };
        } else {
            params = {
                code: paramsOrFirst as string,
                promotionId: rest[0] as string,
                batchId: rest[1] as string,
                contactId: rest[2] as string,
                currency: rest[3] as string,
                endsAt: rest[4] as string,
                metadata: rest[5] as object,
                organizationId: rest[6] as string,
                reservationLimit: rest[7] as number,
                reservationRequired: rest[8] as boolean,
                residualValue: rest[9] as number,
                startsAt: rest[10] as string,
                status: rest[11] as PromotionsBatchesCreateStatus,
                usageLimit: rest[12] as number            
            };
        }
        
        const code = params.code;
        const promotionId = params.promotionId;
        const batchId = params.batchId;
        const contactId = params.contactId;
        const currency = params.currency;
        const endsAt = params.endsAt;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const reservationLimit = params.reservationLimit;
        const reservationRequired = params.reservationRequired;
        const residualValue = params.residualValue;
        const startsAt = params.startsAt;
        const status = params.status;
        const usageLimit = params.usageLimit;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/vouchers';
        const apiPayload: Payload = {};
        if (typeof batchId !== 'undefined') {
            apiPayload['batch_id'] = batchId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof endsAt !== 'undefined') {
            apiPayload['ends_at'] = endsAt;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof reservationLimit !== 'undefined') {
            apiPayload['reservation_limit'] = reservationLimit;
        }
        if (typeof reservationRequired !== 'undefined') {
            apiPayload['reservation_required'] = reservationRequired;
        }
        if (typeof residualValue !== 'undefined') {
            apiPayload['residual_value'] = residualValue;
        }
        if (typeof startsAt !== 'undefined') {
            apiPayload['starts_at'] = startsAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof usageLimit !== 'undefined') {
            apiPayload['usage_limit'] = usageLimit;
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
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    promotionsVouchersDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVouchersDelete(id: string): Promise<{}>;
    promotionsVouchersDelete(
        paramsOrFirst: { id: string } | string    
    ): Promise<{}> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/vouchers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            apiPayload
        );
    }

    /**
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Voucher>}
     */
    promotionsVouchersGet(params: { id: string }): Promise<Models.Voucher>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Voucher>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVouchersGet(id: string): Promise<Models.Voucher>;
    promotionsVouchersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Voucher> {
        let params: { id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string };
        } else {
            params = {
                id: paramsOrFirst as string            
            };
        }
        
        const id = params.id;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/promotions/vouchers/{id}'.replace('{id}', id);
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
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.code - The code as it is printed and as a buyer types it.
     * @param {string} params.promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} params.batchId - The batch this code was made in, when it was made in one.
     * @param {string} params.contactId - The person the code was issued to. Anybody else is refused — a personal apology code is worthless if it can be forwarded.
     * @param {string} params.currency - The currency a residual value is stated in.
     * @param {string} params.endsAt - When it expires. A merchant runs one promotion for a quarter and hands out codes that expire in a fortnight.
     * @param {object} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.organizationId - The company it was issued to. Any of its contacts may redeem it.
     * @param {number} params.reservationLimit - How many reservations may be held at once. A reservation that never ran out would promise a limited code to everybody who asked.
     * @param {boolean} params.reservationRequired - When true the code works only for a buyer who has reserved it — which is what makes a code printed in a public place usable at all.
     * @param {number} params.residualValue - An amount the code is worth, spent down rather than used up — how a goodwill amount survives a smaller first purchase.
     * @param {string} params.startsAt - When the code becomes valid. Empty is bounded only by the promotion.
     * @param {PromotionsBatchesCreateStatus} params.status - A leaked code is `disabled`, not deleted: it has to stop working within the minute, and deleting it would take the evidence with it.
     * @param {number} params.usageLimit - How often the code may be redeemed. Zero is unlimited, though the promotion own limits still apply.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Voucher>}
     */
    promotionsVouchersUpdate(params: { id: string, code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number }): Promise<Models.Voucher>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} code - The code as it is printed and as a buyer types it.
     * @param {string} promotionId - The promotion this row belongs to. Deleting the promotion deletes it.
     * @param {string} batchId - The batch this code was made in, when it was made in one.
     * @param {string} contactId - The person the code was issued to. Anybody else is refused — a personal apology code is worthless if it can be forwarded.
     * @param {string} currency - The currency a residual value is stated in.
     * @param {string} endsAt - When it expires. A merchant runs one promotion for a quarter and hands out codes that expire in a fortnight.
     * @param {object} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} organizationId - The company it was issued to. Any of its contacts may redeem it.
     * @param {number} reservationLimit - How many reservations may be held at once. A reservation that never ran out would promise a limited code to everybody who asked.
     * @param {boolean} reservationRequired - When true the code works only for a buyer who has reserved it — which is what makes a code printed in a public place usable at all.
     * @param {number} residualValue - An amount the code is worth, spent down rather than used up — how a goodwill amount survives a smaller first purchase.
     * @param {string} startsAt - When the code becomes valid. Empty is bounded only by the promotion.
     * @param {PromotionsBatchesCreateStatus} status - A leaked code is `disabled`, not deleted: it has to stop working within the minute, and deleting it would take the evidence with it.
     * @param {number} usageLimit - How often the code may be redeemed. Zero is unlimited, though the promotion own limits still apply.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Voucher>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    promotionsVouchersUpdate(id: string, code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number): Promise<Models.Voucher>;
    promotionsVouchersUpdate(
        paramsOrFirst: { id: string, code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (number)?, (boolean)?, (number)?, (string)?, (PromotionsBatchesCreateStatus)?, (number)?]    
    ): Promise<Models.Voucher> {
        let params: { id: string, code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, code: string, promotionId: string, batchId?: string, contactId?: string, currency?: string, endsAt?: string, metadata?: object, organizationId?: string, reservationLimit?: number, reservationRequired?: boolean, residualValue?: number, startsAt?: string, status?: PromotionsBatchesCreateStatus, usageLimit?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                code: rest[0] as string,
                promotionId: rest[1] as string,
                batchId: rest[2] as string,
                contactId: rest[3] as string,
                currency: rest[4] as string,
                endsAt: rest[5] as string,
                metadata: rest[6] as object,
                organizationId: rest[7] as string,
                reservationLimit: rest[8] as number,
                reservationRequired: rest[9] as boolean,
                residualValue: rest[10] as number,
                startsAt: rest[11] as string,
                status: rest[12] as PromotionsBatchesCreateStatus,
                usageLimit: rest[13] as number            
            };
        }
        
        const id = params.id;
        const code = params.code;
        const promotionId = params.promotionId;
        const batchId = params.batchId;
        const contactId = params.contactId;
        const currency = params.currency;
        const endsAt = params.endsAt;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const reservationLimit = params.reservationLimit;
        const reservationRequired = params.reservationRequired;
        const residualValue = params.residualValue;
        const startsAt = params.startsAt;
        const status = params.status;
        const usageLimit = params.usageLimit;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof promotionId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "promotionId"');
        }

        const apiPath = '/v1/promotions/vouchers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof batchId !== 'undefined') {
            apiPayload['batch_id'] = batchId;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof endsAt !== 'undefined') {
            apiPayload['ends_at'] = endsAt;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof promotionId !== 'undefined') {
            apiPayload['promotion_id'] = promotionId;
        }
        if (typeof reservationLimit !== 'undefined') {
            apiPayload['reservation_limit'] = reservationLimit;
        }
        if (typeof reservationRequired !== 'undefined') {
            apiPayload['reservation_required'] = reservationRequired;
        }
        if (typeof residualValue !== 'undefined') {
            apiPayload['residual_value'] = residualValue;
        }
        if (typeof startsAt !== 'undefined') {
            apiPayload['starts_at'] = startsAt;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof usageLimit !== 'undefined') {
            apiPayload['usage_limit'] = usageLimit;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            apiPayload
        );
    }
}
