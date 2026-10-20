import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Destination } from '../enums/destination';

export class AdsFeeds {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * One reference per market and destination. The feed itself is built by the seo service.
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.market - Keep only rows whose `market` equals this.
     * @param {string} params.destination - Keep only rows whose `destination` equals this.
     * @param {string} params.feedId - Keep only rows whose `feed_id` equals this.
     * @param {string} params.feedUrl - Keep only rows whose `feed_url` equals this.
     * @param {string} params.label - Keep only rows whose `label` equals this.
     * @param {string} params.active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    adsFeedsList(params?: { limit?: number, offset?: number, order?: string, id?: string, market?: string, destination?: string, feedId?: string, feedUrl?: string, label?: string, active?: string }): Promise<{}>;
    /**
     * One reference per market and destination. The feed itself is built by the seo service.
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} market - Keep only rows whose `market` equals this.
     * @param {string} destination - Keep only rows whose `destination` equals this.
     * @param {string} feedId - Keep only rows whose `feed_id` equals this.
     * @param {string} feedUrl - Keep only rows whose `feed_url` equals this.
     * @param {string} label - Keep only rows whose `label` equals this.
     * @param {string} active - Keep only rows whose `active` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsFeedsList(limit?: number, offset?: number, order?: string, id?: string, market?: string, destination?: string, feedId?: string, feedUrl?: string, label?: string, active?: string): Promise<{}>;
    adsFeedsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, market?: string, destination?: string, feedId?: string, feedUrl?: string, label?: string, active?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, market?: string, destination?: string, feedId?: string, feedUrl?: string, label?: string, active?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, market?: string, destination?: string, feedId?: string, feedUrl?: string, label?: string, active?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                market: rest[3] as string,
                destination: rest[4] as string,
                feedId: rest[5] as string,
                feedUrl: rest[6] as string,
                label: rest[7] as string,
                active: rest[8] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const market = params.market;
        const destination = params.destination;
        const feedId = params.feedId;
        const feedUrl = params.feedUrl;
        const label = params.label;
        const active = params.active;


        const apiPath = '/v1/ads/feed-refs';
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
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof destination !== 'undefined') {
            apiPayload['destination'] = destination;
        }
        if (typeof feedId !== 'undefined') {
            apiPayload['feed_id'] = feedId;
        }
        if (typeof feedUrl !== 'undefined') {
            apiPayload['feed_url'] = feedUrl;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
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
     * @param {Destination} params.destination - `google_merchant_center`, `meta_catalog`, `linkedin` or `other`.
     * @param {string} params.market - The market code.
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} params.feedId - The feed id in the seo service.
     * @param {string} params.feedUrl - The feed address the platform fetches.
     * @param {string} params.label - A note for the merchant.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FeedRef>}
     */
    adsFeedsCreate(params: { destination: Destination, market: string, active?: boolean, feedId?: string, feedUrl?: string, label?: string, metadata?: any }): Promise<Models.FeedRef>;
    /**
     *
     * @param {Destination} destination - `google_merchant_center`, `meta_catalog`, `linkedin` or `other`.
     * @param {string} market - The market code.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {string} feedId - The feed id in the seo service.
     * @param {string} feedUrl - The feed address the platform fetches.
     * @param {string} label - A note for the merchant.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FeedRef>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsFeedsCreate(destination: Destination, market: string, active?: boolean, feedId?: string, feedUrl?: string, label?: string, metadata?: any): Promise<Models.FeedRef>;
    adsFeedsCreate(
        paramsOrFirst: { destination: Destination, market: string, active?: boolean, feedId?: string, feedUrl?: string, label?: string, metadata?: any } | Destination,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (string)?, (any)?]    
    ): Promise<Models.FeedRef> {
        let params: { destination: Destination, market: string, active?: boolean, feedId?: string, feedUrl?: string, label?: string, metadata?: any };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('destination' in paramsOrFirst || 'market' in paramsOrFirst || 'active' in paramsOrFirst || 'feedId' in paramsOrFirst || 'feedUrl' in paramsOrFirst || 'label' in paramsOrFirst || 'metadata' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { destination: Destination, market: string, active?: boolean, feedId?: string, feedUrl?: string, label?: string, metadata?: any };
        } else {
            params = {
                destination: paramsOrFirst as Destination,
                market: rest[0] as string,
                active: rest[1] as boolean,
                feedId: rest[2] as string,
                feedUrl: rest[3] as string,
                label: rest[4] as string,
                metadata: rest[5] as any            
            };
        }
        
        const destination = params.destination;
        const market = params.market;
        const active = params.active;
        const feedId = params.feedId;
        const feedUrl = params.feedUrl;
        const label = params.label;
        const metadata = params.metadata;

        if (typeof destination === 'undefined') {
            throw new RevenexxException('Missing required parameter: "destination"');
        }
        if (typeof market === 'undefined') {
            throw new RevenexxException('Missing required parameter: "market"');
        }

        const apiPath = '/v1/ads/feed-refs';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof destination !== 'undefined') {
            apiPayload['destination'] = destination;
        }
        if (typeof feedId !== 'undefined') {
            apiPayload['feed_id'] = feedId;
        }
        if (typeof feedUrl !== 'undefined') {
            apiPayload['feed_url'] = feedUrl;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
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
    adsFeedsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsFeedsDelete(id: string): Promise<{}>;
    adsFeedsDelete(
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

        const apiPath = '/v1/ads/feed-refs/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.FeedRef>}
     */
    adsFeedsGet(params: { id: string }): Promise<Models.FeedRef>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FeedRef>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsFeedsGet(id: string): Promise<Models.FeedRef>;
    adsFeedsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.FeedRef> {
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

        const apiPath = '/v1/ads/feed-refs/{id}'.replace('{id}', id);
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
     * @param {boolean} params.active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {Destination} params.destination - `google_merchant_center`, `meta_catalog`, `linkedin` or `other`.
     * @param {string} params.feedId - The feed id in the seo service.
     * @param {string} params.feedUrl - The feed address the platform fetches.
     * @param {string} params.label - A note for the merchant.
     * @param {string} params.market - The market code.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FeedRef>}
     */
    adsFeedsUpdate(params: { id: string, active?: boolean, destination?: Destination, feedId?: string, feedUrl?: string, label?: string, market?: string, metadata?: any }): Promise<Models.FeedRef>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {boolean} active - Switched on. A switched-off row stays for its history and does nothing.
     * @param {Destination} destination - `google_merchant_center`, `meta_catalog`, `linkedin` or `other`.
     * @param {string} feedId - The feed id in the seo service.
     * @param {string} feedUrl - The feed address the platform fetches.
     * @param {string} label - A note for the merchant.
     * @param {string} market - The market code.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @throws {RevenexxException}
     * @returns {Promise<Models.FeedRef>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    adsFeedsUpdate(id: string, active?: boolean, destination?: Destination, feedId?: string, feedUrl?: string, label?: string, market?: string, metadata?: any): Promise<Models.FeedRef>;
    adsFeedsUpdate(
        paramsOrFirst: { id: string, active?: boolean, destination?: Destination, feedId?: string, feedUrl?: string, label?: string, market?: string, metadata?: any } | string,
        ...rest: [(boolean)?, (Destination)?, (string)?, (string)?, (string)?, (string)?, (any)?]    
    ): Promise<Models.FeedRef> {
        let params: { id: string, active?: boolean, destination?: Destination, feedId?: string, feedUrl?: string, label?: string, market?: string, metadata?: any };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, destination?: Destination, feedId?: string, feedUrl?: string, label?: string, market?: string, metadata?: any };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                destination: rest[1] as Destination,
                feedId: rest[2] as string,
                feedUrl: rest[3] as string,
                label: rest[4] as string,
                market: rest[5] as string,
                metadata: rest[6] as any            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const destination = params.destination;
        const feedId = params.feedId;
        const feedUrl = params.feedUrl;
        const label = params.label;
        const market = params.market;
        const metadata = params.metadata;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/ads/feed-refs/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof destination !== 'undefined') {
            apiPayload['destination'] = destination;
        }
        if (typeof feedId !== 'undefined') {
            apiPayload['feed_id'] = feedId;
        }
        if (typeof feedUrl !== 'undefined') {
            apiPayload['feed_url'] = feedUrl;
        }
        if (typeof label !== 'undefined') {
            apiPayload['label'] = label;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
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
