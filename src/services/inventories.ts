import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { LocationType } from '../enums/location-type';

export class Inventories {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {Models.InventoryAdjustItem[]} params.items - The corrections — quantities are SIGNED deltas (at most 200).
     * @param {string} params.reason - Mandatory audit reason — every adjustment is a ledger row.
     * @param {string} params.locationCode - Adjusted location (default 'main').
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesAdjust(params: { items: Models.InventoryAdjustItem[], reason: string, locationCode?: string }): Promise<{}>;
    /**
     *
     * @param {Models.InventoryAdjustItem[]} items - The corrections — quantities are SIGNED deltas (at most 200).
     * @param {string} reason - Mandatory audit reason — every adjustment is a ledger row.
     * @param {string} locationCode - Adjusted location (default 'main').
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesAdjust(items: Models.InventoryAdjustItem[], reason: string, locationCode?: string): Promise<{}>;
    inventoriesAdjust(
        paramsOrFirst: { items: Models.InventoryAdjustItem[], reason: string, locationCode?: string } | Models.InventoryAdjustItem[],
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { items: Models.InventoryAdjustItem[], reason: string, locationCode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'reason' in paramsOrFirst || 'locationCode' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.InventoryAdjustItem[], reason: string, locationCode?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryAdjustItem[],
                reason: rest[0] as string,
                locationCode: rest[1] as string            
            };
        }
        
        const items = params.items;
        const reason = params.reason;
        const locationCode = params.locationCode;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }
        if (typeof reason === 'undefined') {
            throw new RevenexxException('Missing required parameter: "reason"');
        }

        const apiPath = '/v1/inventories/adjust';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @param {Models.InventoryAvailabilityItem[]} params.items - The items to check (batch, at most 200).
     * @param {string} params.locationCode - Restrict the check to one location (default: all enabled locations).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesAvailability(params: { items: Models.InventoryAvailabilityItem[], locationCode?: string }): Promise<{}>;
    /**
     *
     * @param {Models.InventoryAvailabilityItem[]} items - The items to check (batch, at most 200).
     * @param {string} locationCode - Restrict the check to one location (default: all enabled locations).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesAvailability(items: Models.InventoryAvailabilityItem[], locationCode?: string): Promise<{}>;
    inventoriesAvailability(
        paramsOrFirst: { items: Models.InventoryAvailabilityItem[], locationCode?: string } | Models.InventoryAvailabilityItem[],
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { items: Models.InventoryAvailabilityItem[], locationCode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'locationCode' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.InventoryAvailabilityItem[], locationCode?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryAvailabilityItem[],
                locationCode: rest[0] as string            
            };
        }
        
        const items = params.items;
        const locationCode = params.locationCode;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/inventories/availability';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
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
     * @param {string} params.orderRef - The order whose active reservations are committed (shipment).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesCommit(params: { orderRef: string }): Promise<{}>;
    /**
     *
     * @param {string} orderRef - The order whose active reservations are committed (shipment).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesCommit(orderRef: string): Promise<{}>;
    inventoriesCommit(
        paramsOrFirst: { orderRef: string } | string    
    ): Promise<{}> {
        let params: { orderRef: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { orderRef: string };
        } else {
            params = {
                orderRef: paramsOrFirst as string            
            };
        }
        
        const orderRef = params.orderRef;

        if (typeof orderRef === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderRef"');
        }

        const apiPath = '/v1/inventories/commit';
        const apiPayload: Payload = {};
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesLocationsList(): Promise<{}> {

        const apiPath = '/v1/inventories/locations';
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
     * @param {string} params.code - Unique location code (per tenant).
     * @param {string} params.name - 
     * @param {object} params.address - 
     * @param {boolean} params.enabled - Disabled locations are skipped by availability and reserve (default true).
     * @param {object} params.labels - Localised display names ({de, en, …}).
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.priority - Sourcing order — lower wins (default 0).
     * @param {LocationType} params.type - Default 'warehouse'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Location>}
     */
    inventoriesLocationsCreate(params: { code: string, name: string, address?: object, enabled?: boolean, labels?: object, metadata?: object, priority?: number, type?: LocationType }): Promise<Models.Location>;
    /**
     *
     * @param {string} code - Unique location code (per tenant).
     * @param {string} name - 
     * @param {object} address - 
     * @param {boolean} enabled - Disabled locations are skipped by availability and reserve (default true).
     * @param {object} labels - Localised display names ({de, en, …}).
     * @param {object} metadata - Free-form metadata.
     * @param {number} priority - Sourcing order — lower wins (default 0).
     * @param {LocationType} type - Default 'warehouse'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Location>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesLocationsCreate(code: string, name: string, address?: object, enabled?: boolean, labels?: object, metadata?: object, priority?: number, type?: LocationType): Promise<Models.Location>;
    inventoriesLocationsCreate(
        paramsOrFirst: { code: string, name: string, address?: object, enabled?: boolean, labels?: object, metadata?: object, priority?: number, type?: LocationType } | string,
        ...rest: [(string)?, (object)?, (boolean)?, (object)?, (object)?, (number)?, (LocationType)?]    
    ): Promise<Models.Location> {
        let params: { code: string, name: string, address?: object, enabled?: boolean, labels?: object, metadata?: object, priority?: number, type?: LocationType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, address?: object, enabled?: boolean, labels?: object, metadata?: object, priority?: number, type?: LocationType };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                address: rest[1] as object,
                enabled: rest[2] as boolean,
                labels: rest[3] as object,
                metadata: rest[4] as object,
                priority: rest[5] as number,
                type: rest[6] as LocationType            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const address = params.address;
        const enabled = params.enabled;
        const labels = params.labels;
        const metadata = params.metadata;
        const priority = params.priority;
        const type = params.type;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/inventories/locations';
        const apiPayload: Payload = {};
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesLocationsDefaults(): Promise<{}> {

        const apiPath = '/v1/inventories/locations/defaults';
        const apiPayload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesLocationsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesLocationsDelete(id: string): Promise<{}>;
    inventoriesLocationsDelete(
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

        const apiPath = '/v1/inventories/locations/{id}'.replace('{id}', id);
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Location>}
     */
    inventoriesLocationsGet(params: { id: string }): Promise<Models.Location>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Location>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesLocationsGet(id: string): Promise<Models.Location>;
    inventoriesLocationsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Location> {
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

        const apiPath = '/v1/inventories/locations/{id}'.replace('{id}', id);
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
     * @param {string} params.id - 
     * @param {object} params.address - 
     * @param {string} params.code - Unique location code (per tenant).
     * @param {boolean} params.enabled - Disabled locations are skipped by availability and reserve (default true).
     * @param {object} params.labels - Localised display names ({de, en, …}).
     * @param {object} params.metadata - Free-form metadata.
     * @param {string} params.name - 
     * @param {number} params.priority - Sourcing order — lower wins (default 0).
     * @param {LocationType} params.type - Default 'warehouse'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Location>}
     */
    inventoriesLocationsUpdate(params: { id: string, address?: object, code?: string, enabled?: boolean, labels?: object, metadata?: object, name?: string, priority?: number, type?: LocationType }): Promise<Models.Location>;
    /**
     *
     * @param {string} id - 
     * @param {object} address - 
     * @param {string} code - Unique location code (per tenant).
     * @param {boolean} enabled - Disabled locations are skipped by availability and reserve (default true).
     * @param {object} labels - Localised display names ({de, en, …}).
     * @param {object} metadata - Free-form metadata.
     * @param {string} name - 
     * @param {number} priority - Sourcing order — lower wins (default 0).
     * @param {LocationType} type - Default 'warehouse'.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Location>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesLocationsUpdate(id: string, address?: object, code?: string, enabled?: boolean, labels?: object, metadata?: object, name?: string, priority?: number, type?: LocationType): Promise<Models.Location>;
    inventoriesLocationsUpdate(
        paramsOrFirst: { id: string, address?: object, code?: string, enabled?: boolean, labels?: object, metadata?: object, name?: string, priority?: number, type?: LocationType } | string,
        ...rest: [(object)?, (string)?, (boolean)?, (object)?, (object)?, (string)?, (number)?, (LocationType)?]    
    ): Promise<Models.Location> {
        let params: { id: string, address?: object, code?: string, enabled?: boolean, labels?: object, metadata?: object, name?: string, priority?: number, type?: LocationType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, address?: object, code?: string, enabled?: boolean, labels?: object, metadata?: object, name?: string, priority?: number, type?: LocationType };
        } else {
            params = {
                id: paramsOrFirst as string,
                address: rest[0] as object,
                code: rest[1] as string,
                enabled: rest[2] as boolean,
                labels: rest[3] as object,
                metadata: rest[4] as object,
                name: rest[5] as string,
                priority: rest[6] as number,
                type: rest[7] as LocationType            
            };
        }
        
        const id = params.id;
        const address = params.address;
        const code = params.code;
        const enabled = params.enabled;
        const labels = params.labels;
        const metadata = params.metadata;
        const name = params.name;
        const priority = params.priority;
        const type = params.type;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/inventories/locations/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof address !== 'undefined') {
            apiPayload['address'] = address;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
        }
        if (typeof enabled !== 'undefined') {
            apiPayload['enabled'] = enabled;
        }
        if (typeof labels !== 'undefined') {
            apiPayload['labels'] = labels;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof priority !== 'undefined') {
            apiPayload['priority'] = priority;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
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
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesMovementsList(): Promise<{}> {

        const apiPath = '/v1/inventories/movements';
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockMovement>}
     */
    inventoriesMovementsGet(params: { id: string }): Promise<Models.StockMovement>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockMovement>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesMovementsGet(id: string): Promise<Models.StockMovement>;
    inventoriesMovementsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.StockMovement> {
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

        const apiPath = '/v1/inventories/movements/{id}'.replace('{id}', id);
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
     * @param {Models.InventoryStockItem[]} params.items - The inbound items (at most 200).
     * @param {string} params.locationCode - Receiving location (default 'main').
     * @param {string} params.reason - Ledger note (e.g. delivery note number).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesReceive(params: { items: Models.InventoryStockItem[], locationCode?: string, reason?: string }): Promise<{}>;
    /**
     *
     * @param {Models.InventoryStockItem[]} items - The inbound items (at most 200).
     * @param {string} locationCode - Receiving location (default 'main').
     * @param {string} reason - Ledger note (e.g. delivery note number).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReceive(items: Models.InventoryStockItem[], locationCode?: string, reason?: string): Promise<{}>;
    inventoriesReceive(
        paramsOrFirst: { items: Models.InventoryStockItem[], locationCode?: string, reason?: string } | Models.InventoryStockItem[],
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { items: Models.InventoryStockItem[], locationCode?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'locationCode' in paramsOrFirst || 'reason' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.InventoryStockItem[], locationCode?: string, reason?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryStockItem[],
                locationCode: rest[0] as string,
                reason: rest[1] as string            
            };
        }
        
        const items = params.items;
        const locationCode = params.locationCode;
        const reason = params.reason;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/inventories/receive';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @param {string} params.orderRef - The order whose active reservations are released.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesRelease(params: { orderRef: string }): Promise<{}>;
    /**
     *
     * @param {string} orderRef - The order whose active reservations are released.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesRelease(orderRef: string): Promise<{}>;
    inventoriesRelease(
        paramsOrFirst: { orderRef: string } | string    
    ): Promise<{}> {
        let params: { orderRef: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { orderRef: string };
        } else {
            params = {
                orderRef: paramsOrFirst as string            
            };
        }
        
        const orderRef = params.orderRef;

        if (typeof orderRef === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderRef"');
        }

        const apiPath = '/v1/inventories/release';
        const apiPayload: Payload = {};
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesReservationsList(): Promise<{}> {

        const apiPath = '/v1/inventories/reservations';
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Reservation>}
     */
    inventoriesReservationsGet(params: { id: string }): Promise<Models.Reservation>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Reservation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReservationsGet(id: string): Promise<Models.Reservation>;
    inventoriesReservationsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Reservation> {
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

        const apiPath = '/v1/inventories/reservations/{id}'.replace('{id}', id);
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
     * @param {Models.InventoryStockItem[]} params.items - The items to reserve — all-or-nothing (at most 200).
     * @param {string} params.orderRef - The order this reservation belongs to.
     * @param {string} params.expiresAt - Optional reservation expiry.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesReserve(params: { items: Models.InventoryStockItem[], orderRef: string, expiresAt?: string }): Promise<{}>;
    /**
     *
     * @param {Models.InventoryStockItem[]} items - The items to reserve — all-or-nothing (at most 200).
     * @param {string} orderRef - The order this reservation belongs to.
     * @param {string} expiresAt - Optional reservation expiry.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReserve(items: Models.InventoryStockItem[], orderRef: string, expiresAt?: string): Promise<{}>;
    inventoriesReserve(
        paramsOrFirst: { items: Models.InventoryStockItem[], orderRef: string, expiresAt?: string } | Models.InventoryStockItem[],
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { items: Models.InventoryStockItem[], orderRef: string, expiresAt?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'orderRef' in paramsOrFirst || 'expiresAt' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.InventoryStockItem[], orderRef: string, expiresAt?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryStockItem[],
                orderRef: rest[0] as string,
                expiresAt: rest[1] as string            
            };
        }
        
        const items = params.items;
        const orderRef = params.orderRef;
        const expiresAt = params.expiresAt;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }
        if (typeof orderRef === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderRef"');
        }

        const apiPath = '/v1/inventories/reserve';
        const apiPayload: Payload = {};
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
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
     * @param {Models.InventoryStockItem[]} params.items - The returned items (at most 200).
     * @param {string} params.locationCode - Restocking location (default 'main').
     * @param {string} params.orderRef - Originating order (ledger reference).
     * @param {string} params.reason - Ledger note (e.g. return reason).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesRestock(params: { items: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, reason?: string }): Promise<{}>;
    /**
     *
     * @param {Models.InventoryStockItem[]} items - The returned items (at most 200).
     * @param {string} locationCode - Restocking location (default 'main').
     * @param {string} orderRef - Originating order (ledger reference).
     * @param {string} reason - Ledger note (e.g. return reason).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesRestock(items: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, reason?: string): Promise<{}>;
    inventoriesRestock(
        paramsOrFirst: { items: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, reason?: string } | Models.InventoryStockItem[],
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { items: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'locationCode' in paramsOrFirst || 'orderRef' in paramsOrFirst || 'reason' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, reason?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryStockItem[],
                locationCode: rest[0] as string,
                orderRef: rest[1] as string,
                reason: rest[2] as string            
            };
        }
        
        const items = params.items;
        const locationCode = params.locationCode;
        const orderRef = params.orderRef;
        const reason = params.reason;

        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/inventories/restock';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = items;
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesStockList(): Promise<{}> {

        const apiPath = '/v1/inventories/stock';
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
     * @param {string} params.locationId - Owning location.
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.onHand - Physical stock (default 0).
     * @param {string} params.productId - Tracked product.
     * @param {number} params.reorderPoint - 
     * @param {number} params.reserved - Reserved stock (default 0) — normally managed by reserve/release/commit.
     * @param {string} params.sku - Tracked SKU (alternative to product_id).
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     */
    inventoriesStockCreate(params: { locationId: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string }): Promise<Models.StockLevel>;
    /**
     *
     * @param {string} locationId - Owning location.
     * @param {object} metadata - Free-form metadata.
     * @param {number} onHand - Physical stock (default 0).
     * @param {string} productId - Tracked product.
     * @param {number} reorderPoint - 
     * @param {number} reserved - Reserved stock (default 0) — normally managed by reserve/release/commit.
     * @param {string} sku - Tracked SKU (alternative to product_id).
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockCreate(locationId: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string): Promise<Models.StockLevel>;
    inventoriesStockCreate(
        paramsOrFirst: { locationId: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string } | string,
        ...rest: [(object)?, (number)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.StockLevel> {
        let params: { locationId: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { locationId: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string };
        } else {
            params = {
                locationId: paramsOrFirst as string,
                metadata: rest[0] as object,
                onHand: rest[1] as number,
                productId: rest[2] as string,
                reorderPoint: rest[3] as number,
                reserved: rest[4] as number,
                sku: rest[5] as string            
            };
        }
        
        const locationId = params.locationId;
        const metadata = params.metadata;
        const onHand = params.onHand;
        const productId = params.productId;
        const reorderPoint = params.reorderPoint;
        const reserved = params.reserved;
        const sku = params.sku;

        if (typeof locationId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "locationId"');
        }

        const apiPath = '/v1/inventories/stock';
        const apiPayload: Payload = {};
        if (typeof locationId !== 'undefined') {
            apiPayload['location_id'] = locationId;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof onHand !== 'undefined') {
            apiPayload['on_hand'] = onHand;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof reorderPoint !== 'undefined') {
            apiPayload['reorder_point'] = reorderPoint;
        }
        if (typeof reserved !== 'undefined') {
            apiPayload['reserved'] = reserved;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesStockDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockDelete(id: string): Promise<{}>;
    inventoriesStockDelete(
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

        const apiPath = '/v1/inventories/stock/{id}'.replace('{id}', id);
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     */
    inventoriesStockGet(params: { id: string }): Promise<Models.StockLevel>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockGet(id: string): Promise<Models.StockLevel>;
    inventoriesStockGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.StockLevel> {
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

        const apiPath = '/v1/inventories/stock/{id}'.replace('{id}', id);
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
     * @param {string} params.id - 
     * @param {string} params.locationId - Owning location.
     * @param {object} params.metadata - Free-form metadata.
     * @param {number} params.onHand - Physical stock (default 0).
     * @param {string} params.productId - Tracked product.
     * @param {number} params.reorderPoint - 
     * @param {number} params.reserved - Reserved stock (default 0) — normally managed by reserve/release/commit.
     * @param {string} params.sku - Tracked SKU (alternative to product_id).
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     */
    inventoriesStockUpdate(params: { id: string, locationId?: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string }): Promise<Models.StockLevel>;
    /**
     *
     * @param {string} id - 
     * @param {string} locationId - Owning location.
     * @param {object} metadata - Free-form metadata.
     * @param {number} onHand - Physical stock (default 0).
     * @param {string} productId - Tracked product.
     * @param {number} reorderPoint - 
     * @param {number} reserved - Reserved stock (default 0) — normally managed by reserve/release/commit.
     * @param {string} sku - Tracked SKU (alternative to product_id).
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockUpdate(id: string, locationId?: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string): Promise<Models.StockLevel>;
    inventoriesStockUpdate(
        paramsOrFirst: { id: string, locationId?: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string } | string,
        ...rest: [(string)?, (object)?, (number)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.StockLevel> {
        let params: { id: string, locationId?: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, locationId?: string, metadata?: object, onHand?: number, productId?: string, reorderPoint?: number, reserved?: number, sku?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                locationId: rest[0] as string,
                metadata: rest[1] as object,
                onHand: rest[2] as number,
                productId: rest[3] as string,
                reorderPoint: rest[4] as number,
                reserved: rest[5] as number,
                sku: rest[6] as string            
            };
        }
        
        const id = params.id;
        const locationId = params.locationId;
        const metadata = params.metadata;
        const onHand = params.onHand;
        const productId = params.productId;
        const reorderPoint = params.reorderPoint;
        const reserved = params.reserved;
        const sku = params.sku;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/inventories/stock/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof locationId !== 'undefined') {
            apiPayload['location_id'] = locationId;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof onHand !== 'undefined') {
            apiPayload['on_hand'] = onHand;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof reorderPoint !== 'undefined') {
            apiPayload['reorder_point'] = reorderPoint;
        }
        if (typeof reserved !== 'undefined') {
            apiPayload['reserved'] = reserved;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
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
