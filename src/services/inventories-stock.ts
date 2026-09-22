import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { InventoriesMovementsListType } from '../enums/inventories-movements-list-type';
import { InventoriesVocabulariesGetName } from '../enums/inventories-vocabularies-get-name';

export class InventoriesStock {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The batch correction route — a stocktake, breakage, shrinkage — and the manual way `on_hand` is ever put right. Quantities are SIGNED: a positive one adds to the balance, a negative one takes it away, and neither is written onto the row directly. Each item is booked into the movements ledger as an `adjustment` and the balance follows, so a correction leaves a record of who changed what and why instead of a number that silently differs from yesterday's. A reason is mandatory unless movement_reason_required is 'none'.
     *
     * @param {Models.InventoryAdjustItem[]} params.items - The corrections, at most 200 in one call — a stocktake, breakage, shrinkage. Quantities are SIGNED deltas, not new balances.
     * @param {string} params.locationCode - Which location is being corrected. Omitted, the `default_location_code` setting decides. A correction is per location: the same SKU in two warehouses is two corrections.
     * @param {string} params.productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} params.quantity - Inline single-item form: the SIGNED correction (negative writes stock off, positive finds it). Non-zero.
     * @param {string} params.reason - Why the stock is being corrected — this is the audit trail a stocktake leaves behind. Owed unless `movement_reason_required` is 'none' (its default, 'adjustments', asks for one exactly here); missing where it is owed, the call is 400.
     * @param {string} params.sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesAdjust(params?: { items?: Models.InventoryAdjustItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string }): Promise<{}>;
    /**
     * The batch correction route — a stocktake, breakage, shrinkage — and the manual way `on_hand` is ever put right. Quantities are SIGNED: a positive one adds to the balance, a negative one takes it away, and neither is written onto the row directly. Each item is booked into the movements ledger as an `adjustment` and the balance follows, so a correction leaves a record of who changed what and why instead of a number that silently differs from yesterday's. A reason is mandatory unless movement_reason_required is 'none'.
     *
     * @param {Models.InventoryAdjustItem[]} items - The corrections, at most 200 in one call — a stocktake, breakage, shrinkage. Quantities are SIGNED deltas, not new balances.
     * @param {string} locationCode - Which location is being corrected. Omitted, the `default_location_code` setting decides. A correction is per location: the same SKU in two warehouses is two corrections.
     * @param {string} productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} quantity - Inline single-item form: the SIGNED correction (negative writes stock off, positive finds it). Non-zero.
     * @param {string} reason - Why the stock is being corrected — this is the audit trail a stocktake leaves behind. Owed unless `movement_reason_required` is 'none' (its default, 'adjustments', asks for one exactly here); missing where it is owed, the call is 400.
     * @param {string} sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesAdjust(items?: Models.InventoryAdjustItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string): Promise<{}>;
    inventoriesAdjust(
        paramsOrFirst?: { items?: Models.InventoryAdjustItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string } | Models.InventoryAdjustItem[],
        ...rest: [(string)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { items?: Models.InventoryAdjustItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'locationCode' in paramsOrFirst || 'productId' in paramsOrFirst || 'quantity' in paramsOrFirst || 'reason' in paramsOrFirst || 'sku' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items?: Models.InventoryAdjustItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryAdjustItem[],
                locationCode: rest[0] as string,
                productId: rest[1] as string,
                quantity: rest[2] as number,
                reason: rest[3] as string,
                sku: rest[4] as string            
            };
        }
        
        const items = params.items;
        const locationCode = params.locationCode;
        const productId = params.productId;
        const quantity = params.quantity;
        const reason = params.reason;
        const sku = params.sku;


        const apiPath = '/v1/inventories/adjust';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"productId":{"wire":"product_id","children":null}});
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * THE stock call of this app, and a batch one: name any number of items and each comes back with `on_hand`, `reserved` and the derived `available` (their difference, computed on read and stored nowhere), summed across the locations in scope and broken down per location, plus `orderable` — whether this much of it can be promised at this moment. An item this app has never seen is NOT an error: it comes back tracked:false, and the storefront decides whether an untracked item sells freely. It is also the most customised surface this product has in the field. A tenant whose stock really lives in an ERP — SAP live stock is the ordinary case, not the exotic one — replaces exactly this one capability, 1:1, with a custom app through the gateway's capability override, while every other route here keeps doing the stock-keeping CRUD unchanged. That is why the request and response shapes below read as a contract to be implemented rather than as an implementation detail: whatever ends up answering this path has to answer in these terms.
     *
     * @param {Models.InventoryAvailabilityItem[]} params.items - The items to check, at most 200 in one call. A cart, a category page, a feed row — one call answers them all, which is why this route is the batch one.
     * @param {string} params.locationCode - Restrict the check to ONE location, by its code — the stock a click-and-collect store can promise today. Omitted, every ENABLED location is summed; a disabled one is never counted either way.
     * @param {string} params.productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} params.quantity - Inline single-item form: how many are wanted (default 1). It decides `orderable` and nothing else.
     * @param {string} params.sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesAvailability(params?: { items?: Models.InventoryAvailabilityItem[], locationCode?: string, productId?: string, quantity?: number, sku?: string }): Promise<{}>;
    /**
     * THE stock call of this app, and a batch one: name any number of items and each comes back with `on_hand`, `reserved` and the derived `available` (their difference, computed on read and stored nowhere), summed across the locations in scope and broken down per location, plus `orderable` — whether this much of it can be promised at this moment. An item this app has never seen is NOT an error: it comes back tracked:false, and the storefront decides whether an untracked item sells freely. It is also the most customised surface this product has in the field. A tenant whose stock really lives in an ERP — SAP live stock is the ordinary case, not the exotic one — replaces exactly this one capability, 1:1, with a custom app through the gateway's capability override, while every other route here keeps doing the stock-keeping CRUD unchanged. That is why the request and response shapes below read as a contract to be implemented rather than as an implementation detail: whatever ends up answering this path has to answer in these terms.
     *
     * @param {Models.InventoryAvailabilityItem[]} items - The items to check, at most 200 in one call. A cart, a category page, a feed row — one call answers them all, which is why this route is the batch one.
     * @param {string} locationCode - Restrict the check to ONE location, by its code — the stock a click-and-collect store can promise today. Omitted, every ENABLED location is summed; a disabled one is never counted either way.
     * @param {string} productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} quantity - Inline single-item form: how many are wanted (default 1). It decides `orderable` and nothing else.
     * @param {string} sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesAvailability(items?: Models.InventoryAvailabilityItem[], locationCode?: string, productId?: string, quantity?: number, sku?: string): Promise<{}>;
    inventoriesAvailability(
        paramsOrFirst?: { items?: Models.InventoryAvailabilityItem[], locationCode?: string, productId?: string, quantity?: number, sku?: string } | Models.InventoryAvailabilityItem[],
        ...rest: [(string)?, (string)?, (number)?, (string)?]    
    ): Promise<{}> {
        let params: { items?: Models.InventoryAvailabilityItem[], locationCode?: string, productId?: string, quantity?: number, sku?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'locationCode' in paramsOrFirst || 'productId' in paramsOrFirst || 'quantity' in paramsOrFirst || 'sku' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items?: Models.InventoryAvailabilityItem[], locationCode?: string, productId?: string, quantity?: number, sku?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryAvailabilityItem[],
                locationCode: rest[0] as string,
                productId: rest[1] as string,
                quantity: rest[2] as number,
                sku: rest[3] as string            
            };
        }
        
        const items = params.items;
        const locationCode = params.locationCode;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;


        const apiPath = '/v1/inventories/availability';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"productId":{"wire":"product_id","children":null}});
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
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
     * The movements ledger, read end to end. Every stock change this app has ever made is a booking row in it — a receipt, a correction, a hold, a release, a shipment, a return — which is what lets one list be an audit trail and an event feed at the same time: these are the rows the `stock_movement.created` event carries, so a consumer that missed an event catches up by paging here. Append-only: the ledger has no update and no delete, because a correction is another booking. `order=created_at.desc` is the feed order.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc' — a bare column sorts ascending. The column has to be one this entity has; anything else is refused with 400.
     * @param {string} params.id - Exact-match filter on `id`. The row's own id, generated by the database.
     * @param {string} params.locationId - Exact-match filter on `location_id`. Every booking at one location.
     * @param {string} params.productId - Exact-match filter on `product_id`. The product this booking is for, copied from the call.
     * @param {string} params.sku - Exact-match filter on `sku`. Every booking for one SKU.
     * @param {InventoriesMovementsListType} params.type - Exact-match filter on `type`. What the booking records. The permitted set is the CHECK constraint — GET /inventories/vocabularies/movement-types has the words for it.
     * @param {number} params.quantity - Exact-match filter on `quantity`. Exact signed quantity, which is a needle-in-a-haystack filter rather than a range: `?quantity=-5` finds the bookings that moved exactly five out.
     * @param {string} params.orderRef - Exact-match filter on `order_ref`. One order's whole stock history: its reserve, release, shipment and restock bookings.
     * @param {string} params.reason - Exact-match filter on `reason`. Why the booking happened, in a person's words — a delivery note number, 'stocktake 2026-03', 'damaged in transit'.
     * @param {string} params.metadata - Exact-match filter on `metadata`. Free-form, and two keys this app writes itself: `backordered` — on a `reserve` booking, how much of the hold was not covered by stock on hand; `shortfall` — on a `shipment` booking, how much was committed that was not physically there (`on_hand` floors at 0, so the difference is recorded here instead of vanishing). The WHOLE jsonb document is compared, serialized as JSON — this is equality, not a key lookup or a containment query, and a value that does not parse is answered 400.
     * @param {string} params.createdAt - Exact-match filter on `created_at`. Exact timestamp. There is no range filter on the ledger — page it with `?order=created_at.desc` instead.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesMovementsList(params?: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, type?: InventoriesMovementsListType, quantity?: number, orderRef?: string, reason?: string, metadata?: string, createdAt?: string }): Promise<{}>;
    /**
     * The movements ledger, read end to end. Every stock change this app has ever made is a booking row in it — a receipt, a correction, a hold, a release, a shipment, a return — which is what lets one list be an audit trail and an event feed at the same time: these are the rows the `stock_movement.created` event carries, so a consumer that missed an event catches up by paging here. Append-only: the ledger has no update and no delete, because a correction is another booking. `order=created_at.desc` is the feed order.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc' — a bare column sorts ascending. The column has to be one this entity has; anything else is refused with 400.
     * @param {string} id - Exact-match filter on `id`. The row's own id, generated by the database.
     * @param {string} locationId - Exact-match filter on `location_id`. Every booking at one location.
     * @param {string} productId - Exact-match filter on `product_id`. The product this booking is for, copied from the call.
     * @param {string} sku - Exact-match filter on `sku`. Every booking for one SKU.
     * @param {InventoriesMovementsListType} type - Exact-match filter on `type`. What the booking records. The permitted set is the CHECK constraint — GET /inventories/vocabularies/movement-types has the words for it.
     * @param {number} quantity - Exact-match filter on `quantity`. Exact signed quantity, which is a needle-in-a-haystack filter rather than a range: `?quantity=-5` finds the bookings that moved exactly five out.
     * @param {string} orderRef - Exact-match filter on `order_ref`. One order's whole stock history: its reserve, release, shipment and restock bookings.
     * @param {string} reason - Exact-match filter on `reason`. Why the booking happened, in a person's words — a delivery note number, 'stocktake 2026-03', 'damaged in transit'.
     * @param {string} metadata - Exact-match filter on `metadata`. Free-form, and two keys this app writes itself: `backordered` — on a `reserve` booking, how much of the hold was not covered by stock on hand; `shortfall` — on a `shipment` booking, how much was committed that was not physically there (`on_hand` floors at 0, so the difference is recorded here instead of vanishing). The WHOLE jsonb document is compared, serialized as JSON — this is equality, not a key lookup or a containment query, and a value that does not parse is answered 400.
     * @param {string} createdAt - Exact-match filter on `created_at`. Exact timestamp. There is no range filter on the ledger — page it with `?order=created_at.desc` instead.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesMovementsList(limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, type?: InventoriesMovementsListType, quantity?: number, orderRef?: string, reason?: string, metadata?: string, createdAt?: string): Promise<{}>;
    inventoriesMovementsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, type?: InventoriesMovementsListType, quantity?: number, orderRef?: string, reason?: string, metadata?: string, createdAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (InventoriesMovementsListType)?, (number)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, type?: InventoriesMovementsListType, quantity?: number, orderRef?: string, reason?: string, metadata?: string, createdAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, type?: InventoriesMovementsListType, quantity?: number, orderRef?: string, reason?: string, metadata?: string, createdAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                locationId: rest[3] as string,
                productId: rest[4] as string,
                sku: rest[5] as string,
                type: rest[6] as InventoriesMovementsListType,
                quantity: rest[7] as number,
                orderRef: rest[8] as string,
                reason: rest[9] as string,
                metadata: rest[10] as string,
                createdAt: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const locationId = params.locationId;
        const productId = params.productId;
        const sku = params.sku;
        const type = params.type;
        const quantity = params.quantity;
        const orderRef = params.orderRef;
        const reason = params.reason;
        const metadata = params.metadata;
        const createdAt = params.createdAt;


        const apiPath = '/v1/inventories/movements';
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
        if (typeof locationId !== 'undefined') {
            apiPayload['location_id'] = locationId;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
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
     * A movement is one booking row in the ledger, and the ledger is append-only: there is no update and no delete, because a correction is another booking. `quantity` is SIGNED and its sign follows the `type` — a receipt books +5 and the reserve that promises those goods books −5, even though the reservation it created carries +5 as a positive hold. GET /inventories/vocabularies/movement-types is the list of types with the words for them. A booking says what changed, not what the balance became: it carries no running total, so the row's story is read by listing the ledger for that location and item rather than by fetching one id. `location_id` is a plain uuid and not a foreign key, so a booking outlives the location it was made at and this route will happily hand back one whose location no longer resolves — that is the audit trail doing its job, not a broken row. Fixing a wrong booking is another booking (POST /inventories/adjust); nothing here can be edited or removed.
     *
     * @param {string} params.id - The ledger booking.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockMovement>}
     */
    inventoriesMovementsGet(params: { id: string }): Promise<Models.StockMovement>;
    /**
     * A movement is one booking row in the ledger, and the ledger is append-only: there is no update and no delete, because a correction is another booking. `quantity` is SIGNED and its sign follows the `type` — a receipt books +5 and the reserve that promises those goods books −5, even though the reservation it created carries +5 as a positive hold. GET /inventories/vocabularies/movement-types is the list of types with the words for them. A booking says what changed, not what the balance became: it carries no running total, so the row's story is read by listing the ledger for that location and item rather than by fetching one id. `location_id` is a plain uuid and not a foreign key, so a booking outlives the location it was made at and this route will happily hand back one whose location no longer resolves — that is the audit trail doing its job, not a broken row. Fixing a wrong booking is another booking (POST /inventories/adjust); nothing here can be edited or removed.
     *
     * @param {string} id - The ledger booking.
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
     * Books a delivery into the receiving location (the caller's location_code, else the default_location_code setting), creating the stock row if the item is new. A reason is optional unless movement_reason_required is 'all'. Takes a batch or one item inline.
     *
     * @param {Models.InventoryStockItem[]} params.items - The goods that arrived, at most 200 in one call — a delivery, a production batch, an opening balance.
     * @param {string} params.locationCode - Which location took the delivery. Omitted, the `default_location_code` setting decides; a code no location carries is answered 400 rather than booked somewhere else.
     * @param {string} params.productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} params.quantity - Inline single-item form: how many arrived. Positive.
     * @param {string} params.reason - What the ledger should record about this receipt — a delivery note number, a production order. Owed only when `movement_reason_required` is 'all'; the contract does not require it, because whether it is owed is the tenant's setting and not this route's rule.
     * @param {string} params.sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesReceive(params?: { items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string }): Promise<{}>;
    /**
     * Books a delivery into the receiving location (the caller's location_code, else the default_location_code setting), creating the stock row if the item is new. A reason is optional unless movement_reason_required is 'all'. Takes a batch or one item inline.
     *
     * @param {Models.InventoryStockItem[]} items - The goods that arrived, at most 200 in one call — a delivery, a production batch, an opening balance.
     * @param {string} locationCode - Which location took the delivery. Omitted, the `default_location_code` setting decides; a code no location carries is answered 400 rather than booked somewhere else.
     * @param {string} productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} quantity - Inline single-item form: how many arrived. Positive.
     * @param {string} reason - What the ledger should record about this receipt — a delivery note number, a production order. Owed only when `movement_reason_required` is 'all'; the contract does not require it, because whether it is owed is the tenant's setting and not this route's rule.
     * @param {string} sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReceive(items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string): Promise<{}>;
    inventoriesReceive(
        paramsOrFirst?: { items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string } | Models.InventoryStockItem[],
        ...rest: [(string)?, (string)?, (number)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'locationCode' in paramsOrFirst || 'productId' in paramsOrFirst || 'quantity' in paramsOrFirst || 'reason' in paramsOrFirst || 'sku' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, reason?: string, sku?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryStockItem[],
                locationCode: rest[0] as string,
                productId: rest[1] as string,
                quantity: rest[2] as number,
                reason: rest[3] as string,
                sku: rest[4] as string            
            };
        }
        
        const items = params.items;
        const locationCode = params.locationCode;
        const productId = params.productId;
        const quantity = params.quantity;
        const reason = params.reason;
        const sku = params.sku;


        const apiPath = '/v1/inventories/receive';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"productId":{"wire":"product_id","children":null}});
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
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
     * The replenishment worklist: the stock rows that have run down far enough that somebody has to order more, in one list rather than as a query a caller has to build. Computed on read, so it is never stale: a row alerts when available (on_hand − reserved) has fallen to or below its own reorder_point, or the reorder_point_default setting when it carries none. A point of 0 never alerts. Answers enabled:false with an empty list when reorder_alert_enabled is off — a tenant replenishing from an ERP should not be told twice.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReorderAlerts>}
     */
    inventoriesReorderAlerts(): Promise<Models.ReorderAlerts> {

        const apiPath = '/v1/inventories/reorder-alerts';
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
     * Publishes `stock_level.low` on the event bus for every row GET /inventories/reorder-alerts currently lists, so replenishment can be driven by a subscriber instead of by somebody refreshing that page. Also runs hourly as the `reorder-scan` schedule; this route is for driving it on demand. The event id is derived from the stock row and the day, so a re-run — a second click, a retried cron tick — publishes nothing new and returns the ids the first run produced. Nothing is written to the app's own data: this reads the same figures the alerts list computes and hands them to the bus. Answers enabled:false without publishing when reorder_alert_enabled is off.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReorderScan>}
     */
    inventoriesReorderScan(params: { data: object }): Promise<Models.ReorderScan>;
    /**
     * Publishes `stock_level.low` on the event bus for every row GET /inventories/reorder-alerts currently lists, so replenishment can be driven by a subscriber instead of by somebody refreshing that page. Also runs hourly as the `reorder-scan` schedule; this route is for driving it on demand. The event id is derived from the stock row and the day, so a re-run — a second click, a retried cron tick — publishes nothing new and returns the ids the first run produced. Nothing is written to the app's own data: this reads the same figures the alerts list computes and hands them to the bus. Answers enabled:false without publishing when reorder_alert_enabled is off.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReorderScan>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReorderScan(data: object): Promise<Models.ReorderScan>;
    inventoriesReorderScan(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.ReorderScan> {
        let params: { data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('data' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { data: object };
        } else {
            params = {
                data: paramsOrFirst as object            
            };
        }
        
        const data = params.data;

        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/inventories/reorder-alerts/scan';
        const apiPayload: Payload = {};
        if (typeof data !== 'undefined') {
            Object.assign(apiPayload, data);
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
     * Whether a return rejoins sellable stock follows restock_on_return_default, overridable per call with 'restock'. When the answer is no the response says restocked:false and nothing moves — there is no movement to book, because no stock moved. That branch is why this route answers 200 and its sibling `receive` answers 201: a restock may legitimately create nothing.
     *
     * @param {Models.InventoryStockItem[]} params.items - The goods that came back, at most 200 in one call. Whether they rejoin sellable stock is `restock`, not this list.
     * @param {string} params.locationCode - Where the goods came back to — a returns warehouse is a location like any other. Omitted, the `default_location_code` setting decides.
     * @param {string} params.orderRef - The order the goods came back from. It is written onto the ledger booking, so the return shows up in that order's stock history next to its reserve and shipment — no reservation is touched by it.
     * @param {string} params.productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} params.quantity - Inline single-item form: how many came back. Positive.
     * @param {string} params.reason - Why the goods came back — 'wrong size', 'damaged on arrival'. Owed only when `movement_reason_required` is 'all'.
     * @param {boolean} params.restock - Do these goods rejoin SELLABLE stock? A merchant decision, not a fact: apparel usually restocks, hygiene articles never do, many merchants inspect first. Omit it to follow the `restock_on_return_default` setting. `false` answers `restocked: false`, moves nothing and books NOTHING — there is no movement to write, because no stock moved, and that is the branch that makes this route a 200 while its sibling `receive` is a 201.
     * @param {string} params.sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesRestock(params?: { items?: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, productId?: string, quantity?: number, reason?: string, restock?: boolean, sku?: string }): Promise<{}>;
    /**
     * Whether a return rejoins sellable stock follows restock_on_return_default, overridable per call with 'restock'. When the answer is no the response says restocked:false and nothing moves — there is no movement to book, because no stock moved. That branch is why this route answers 200 and its sibling `receive` answers 201: a restock may legitimately create nothing.
     *
     * @param {Models.InventoryStockItem[]} items - The goods that came back, at most 200 in one call. Whether they rejoin sellable stock is `restock`, not this list.
     * @param {string} locationCode - Where the goods came back to — a returns warehouse is a location like any other. Omitted, the `default_location_code` setting decides.
     * @param {string} orderRef - The order the goods came back from. It is written onto the ledger booking, so the return shows up in that order's stock history next to its reserve and shipment — no reservation is touched by it.
     * @param {string} productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} quantity - Inline single-item form: how many came back. Positive.
     * @param {string} reason - Why the goods came back — 'wrong size', 'damaged on arrival'. Owed only when `movement_reason_required` is 'all'.
     * @param {boolean} restock - Do these goods rejoin SELLABLE stock? A merchant decision, not a fact: apparel usually restocks, hygiene articles never do, many merchants inspect first. Omit it to follow the `restock_on_return_default` setting. `false` answers `restocked: false`, moves nothing and books NOTHING — there is no movement to write, because no stock moved, and that is the branch that makes this route a 200 while its sibling `receive` is a 201.
     * @param {string} sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesRestock(items?: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, productId?: string, quantity?: number, reason?: string, restock?: boolean, sku?: string): Promise<{}>;
    inventoriesRestock(
        paramsOrFirst?: { items?: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, productId?: string, quantity?: number, reason?: string, restock?: boolean, sku?: string } | Models.InventoryStockItem[],
        ...rest: [(string)?, (string)?, (string)?, (number)?, (string)?, (boolean)?, (string)?]    
    ): Promise<{}> {
        let params: { items?: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, productId?: string, quantity?: number, reason?: string, restock?: boolean, sku?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('items' in paramsOrFirst || 'locationCode' in paramsOrFirst || 'orderRef' in paramsOrFirst || 'productId' in paramsOrFirst || 'quantity' in paramsOrFirst || 'reason' in paramsOrFirst || 'restock' in paramsOrFirst || 'sku' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { items?: Models.InventoryStockItem[], locationCode?: string, orderRef?: string, productId?: string, quantity?: number, reason?: string, restock?: boolean, sku?: string };
        } else {
            params = {
                items: paramsOrFirst as Models.InventoryStockItem[],
                locationCode: rest[0] as string,
                orderRef: rest[1] as string,
                productId: rest[2] as string,
                quantity: rest[3] as number,
                reason: rest[4] as string,
                restock: rest[5] as boolean,
                sku: rest[6] as string            
            };
        }
        
        const items = params.items;
        const locationCode = params.locationCode;
        const orderRef = params.orderRef;
        const productId = params.productId;
        const quantity = params.quantity;
        const reason = params.reason;
        const restock = params.restock;
        const sku = params.sku;


        const apiPath = '/v1/inventories/restock';
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"productId":{"wire":"product_id","children":null}});
        }
        if (typeof locationCode !== 'undefined') {
            apiPayload['location_code'] = locationCode;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof restock !== 'undefined') {
            apiPayload['restock'] = restock;
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
     * A stock level is ONE item at ONE location, and it carries two numbers, neither of which is the sellable one: `on_hand` is what is physically there INCLUDING everything already promised, and `reserved` is what has been promised — it never reduces `on_hand`. What may still be sold is their difference, and it is derived on read and never stored, so there is no `available` column to read, filter or order by. This is the operator's view — the whole book, filtered by location or by item — not the shop's: a storefront asking "can I sell five of this" wants POST /inventories/availability, which sums an item across locations and answers `orderable` instead of leaving the caller to subtract. Two things this list will not do: it has no range filters, so "everything running low" is GET /inventories/reorder-alerts and not a query here; and it does not promise one row per item per location — no unique index enforces that. POST /inventories/stock refuses a duplicate with a 409, but that is a check and not a constraint, so a row written past it, or one that predates the guard, still splits an item's balance in two, and the write routes find and update whichever of them the database returns first.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc' — a bare column sorts ascending. The column has to be one this entity has; anything else is refused with 400.
     * @param {string} params.id - Exact-match filter on `id`. The row's own id, generated by the database.
     * @param {string} params.locationId - Exact-match filter on `location_id`. The rows held at one location. An id no location carries is an empty page, not an error.
     * @param {string} params.productId - Exact-match filter on `product_id`. The rows tracking one product, across every location.
     * @param {string} params.sku - Exact-match filter on `sku`. The rows tracking one SKU — the identity used when an item has no product id.
     * @param {number} params.onHand - Exact-match filter on `on_hand`. Exact balance, which is rarely what a reader wants: `?on_hand=0` finds the rows that are empty. There is no range filter here — GET /inventories/reorder-alerts is the "running low" question.
     * @param {number} params.reserved - Exact-match filter on `reserved`. Exact reserved quantity. `?reserved=0` finds the rows nothing is holding.
     * @param {number} params.reorderPoint - Exact-match filter on `reorder_point`. The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts).
     * @param {string} params.metadata - Exact-match filter on `metadata`. Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. The WHOLE jsonb document is compared, serialized as JSON — this is equality, not a key lookup or a containment query, and a value that does not parse is answered 400.
     * @param {string} params.createdAt - Exact-match filter on `created_at`. When the row was created.
     * @param {string} params.updatedAt - Exact-match filter on `updated_at`. When this row was last written.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesStockList(params?: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, onHand?: number, reserved?: number, reorderPoint?: number, metadata?: string, createdAt?: string, updatedAt?: string }): Promise<{}>;
    /**
     * A stock level is ONE item at ONE location, and it carries two numbers, neither of which is the sellable one: `on_hand` is what is physically there INCLUDING everything already promised, and `reserved` is what has been promised — it never reduces `on_hand`. What may still be sold is their difference, and it is derived on read and never stored, so there is no `available` column to read, filter or order by. This is the operator's view — the whole book, filtered by location or by item — not the shop's: a storefront asking "can I sell five of this" wants POST /inventories/availability, which sums an item across locations and answers `orderable` instead of leaving the caller to subtract. Two things this list will not do: it has no range filters, so "everything running low" is GET /inventories/reorder-alerts and not a query here; and it does not promise one row per item per location — no unique index enforces that. POST /inventories/stock refuses a duplicate with a 409, but that is a check and not a constraint, so a row written past it, or one that predates the guard, still splits an item's balance in two, and the write routes find and update whichever of them the database returns first.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc' — a bare column sorts ascending. The column has to be one this entity has; anything else is refused with 400.
     * @param {string} id - Exact-match filter on `id`. The row's own id, generated by the database.
     * @param {string} locationId - Exact-match filter on `location_id`. The rows held at one location. An id no location carries is an empty page, not an error.
     * @param {string} productId - Exact-match filter on `product_id`. The rows tracking one product, across every location.
     * @param {string} sku - Exact-match filter on `sku`. The rows tracking one SKU — the identity used when an item has no product id.
     * @param {number} onHand - Exact-match filter on `on_hand`. Exact balance, which is rarely what a reader wants: `?on_hand=0` finds the rows that are empty. There is no range filter here — GET /inventories/reorder-alerts is the "running low" question.
     * @param {number} reserved - Exact-match filter on `reserved`. Exact reserved quantity. `?reserved=0` finds the rows nothing is holding.
     * @param {number} reorderPoint - Exact-match filter on `reorder_point`. The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts).
     * @param {string} metadata - Exact-match filter on `metadata`. Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. The WHOLE jsonb document is compared, serialized as JSON — this is equality, not a key lookup or a containment query, and a value that does not parse is answered 400.
     * @param {string} createdAt - Exact-match filter on `created_at`. When the row was created.
     * @param {string} updatedAt - Exact-match filter on `updated_at`. When this row was last written.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockList(limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, onHand?: number, reserved?: number, reorderPoint?: number, metadata?: string, createdAt?: string, updatedAt?: string): Promise<{}>;
    inventoriesStockList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, onHand?: number, reserved?: number, reorderPoint?: number, metadata?: string, createdAt?: string, updatedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, onHand?: number, reserved?: number, reorderPoint?: number, metadata?: string, createdAt?: string, updatedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, onHand?: number, reserved?: number, reorderPoint?: number, metadata?: string, createdAt?: string, updatedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                locationId: rest[3] as string,
                productId: rest[4] as string,
                sku: rest[5] as string,
                onHand: rest[6] as number,
                reserved: rest[7] as number,
                reorderPoint: rest[8] as number,
                metadata: rest[9] as string,
                createdAt: rest[10] as string,
                updatedAt: rest[11] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const locationId = params.locationId;
        const productId = params.productId;
        const sku = params.sku;
        const onHand = params.onHand;
        const reserved = params.reserved;
        const reorderPoint = params.reorderPoint;
        const metadata = params.metadata;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;


        const apiPath = '/v1/inventories/stock';
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
        if (typeof locationId !== 'undefined') {
            apiPayload['location_id'] = locationId;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof onHand !== 'undefined') {
            apiPayload['on_hand'] = onHand;
        }
        if (typeof reserved !== 'undefined') {
            apiPayload['reserved'] = reserved;
        }
        if (typeof reorderPoint !== 'undefined') {
            apiPayload['reorder_point'] = reorderPoint;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
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
     * Registers an item at a location. The row is born at ZERO and never gets a balance from this call: `on_hand` and `reserved` are NOT accepted, because they are the running total of the movements ledger, so an opening balance is a receipt (POST /inventories/receive) rather than a field here, and the only thing that ever moves either number afterwards is another booking. What this row carries is its identity (location + `product_id`/`sku`), its `reorder_point` and its metadata. `location_id` is the only field a create cannot omit; every other column is optional or defaulted by the database. The one rule that is a CHECK rather than a column is that a row has to identify its item, so `product_id` or `sku` has to be there as well. Mostly you do not need this route at all — every stock call creates the row it is missing — and a second row for an item this location already tracks is answered 409: no unique index enforces one row per item per location, so that row would split the item's balance across two rows the write routes cannot tell apart, each of them updating whichever the database returns first. That guard is a check before the insert and not a constraint, so it closes a double click or a re-run import and does not claim to close a race between two simultaneous creates.
     *
     * @param {string} params.locationId - The location this balance is held at — a `locations` row of this tenant (GET /inventories/locations). There is ONE stock row per (location, item): the same SKU in three warehouses is three rows, and what a storefront shows is their sum (POST /inventories/availability). Deleting the location deletes its stock rows with it. It has to exist already (GET /inventories/locations); an id no location carries is answered 400 by the foreign key, not 404.
     * @param {object} params.metadata - Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. A literal boolean `true` there opts this item into backorders while `backorder_policy` is 'allow_per_sku' — anything else, including the string "true", does not, and the reservation is refused with 422. That is how a merchant backorders the supplier-stocked half of a catalogue without promising the rest.
     * @param {string} params.productId - The product this row tracks, as the products app knows it. A row tracks a `product_id` or a `sku` — the database insists on at least one (CHECK `product_id is not null or sku is not null`) — and matching is exact: a row keyed by SKU is not found by product id.
     * @param {number} params.reorderPoint - The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts). Null falls back to the `reorder_point_default` setting, so replenishment works without a threshold per SKU; 0 never alerts, which is how one row opts out.
     * @param {string} params.sku - The article number this row tracks when there is no product id, which is the normal case for an ERP-stocked catalogue. Exact match, and the identity every stock call may use instead of a uuid.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     */
    inventoriesStockCreate(params: { locationId: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string }): Promise<Models.StockLevel>;
    /**
     * Registers an item at a location. The row is born at ZERO and never gets a balance from this call: `on_hand` and `reserved` are NOT accepted, because they are the running total of the movements ledger, so an opening balance is a receipt (POST /inventories/receive) rather than a field here, and the only thing that ever moves either number afterwards is another booking. What this row carries is its identity (location + `product_id`/`sku`), its `reorder_point` and its metadata. `location_id` is the only field a create cannot omit; every other column is optional or defaulted by the database. The one rule that is a CHECK rather than a column is that a row has to identify its item, so `product_id` or `sku` has to be there as well. Mostly you do not need this route at all — every stock call creates the row it is missing — and a second row for an item this location already tracks is answered 409: no unique index enforces one row per item per location, so that row would split the item's balance across two rows the write routes cannot tell apart, each of them updating whichever the database returns first. That guard is a check before the insert and not a constraint, so it closes a double click or a re-run import and does not claim to close a race between two simultaneous creates.
     *
     * @param {string} locationId - The location this balance is held at — a `locations` row of this tenant (GET /inventories/locations). There is ONE stock row per (location, item): the same SKU in three warehouses is three rows, and what a storefront shows is their sum (POST /inventories/availability). Deleting the location deletes its stock rows with it. It has to exist already (GET /inventories/locations); an id no location carries is answered 400 by the foreign key, not 404.
     * @param {object} metadata - Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. A literal boolean `true` there opts this item into backorders while `backorder_policy` is 'allow_per_sku' — anything else, including the string "true", does not, and the reservation is refused with 422. That is how a merchant backorders the supplier-stocked half of a catalogue without promising the rest.
     * @param {string} productId - The product this row tracks, as the products app knows it. A row tracks a `product_id` or a `sku` — the database insists on at least one (CHECK `product_id is not null or sku is not null`) — and matching is exact: a row keyed by SKU is not found by product id.
     * @param {number} reorderPoint - The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts). Null falls back to the `reorder_point_default` setting, so replenishment works without a threshold per SKU; 0 never alerts, which is how one row opts out.
     * @param {string} sku - The article number this row tracks when there is no product id, which is the normal case for an ERP-stocked catalogue. Exact match, and the identity every stock call may use instead of a uuid.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockCreate(locationId: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string): Promise<Models.StockLevel>;
    inventoriesStockCreate(
        paramsOrFirst: { locationId: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string } | string,
        ...rest: [(object)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.StockLevel> {
        let params: { locationId: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { locationId: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string };
        } else {
            params = {
                locationId: paramsOrFirst as string,
                metadata: rest[0] as object,
                productId: rest[1] as string,
                reorderPoint: rest[2] as number,
                sku: rest[3] as string            
            };
        }
        
        const locationId = params.locationId;
        const metadata = params.metadata;
        const productId = params.productId;
        const reorderPoint = params.reorderPoint;
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
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof reorderPoint !== 'undefined') {
            apiPayload['reorder_point'] = reorderPoint;
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
     * Stops tracking one item at one location. A stock level is ONE item at ONE location, and it carries two numbers, neither of which is the sellable one: `on_hand` is what is physically there INCLUDING everything already promised, and `reserved` is what has been promised — it never reduces `on_hand`. What may still be sold is their difference, and it is derived on read and never stored, so there is no `available` column to read, filter or order by. A deleted balance is not recoverable: the ledger is the audit trail, not the source of truth, and nothing in this app ever replays it to rebuild a number — so the next receipt for the same item here creates a FRESH row at zero, standing next to movements that say otherwise. That used to be a trap a caller discovered afterwards. It is a stated property now, because the route REFUSES while the row still holds anything, and answers 409 with what it holds. The two things that block are the location delete's two, asked of one row. A reservation still `active` against this item at this location is the sharper one: /release and /commit look their stock row up by (location, item) on the very next call and would find nothing, so the hold would lower no `reserved` and /commit would book the whole quantity as a shortfall — orphaned immediately rather than eventually. `on_hand` above zero is the stronger one: deleting a LOCATION at least meant "close this warehouse" and took the balances as a side effect of the cascade, while this row IS the balance, so the delete can only ever mean "no longer tracked here" — true once the number is zero and a lie while it is not. POST /inventories/stock/{id}/adjust to zero is the operation that makes it true, and it BOOKS the movement, so the stock leaves through the ledger instead of vanishing with the row. Nothing points at it by foreign key, so the database takes nothing else with it. History therefore never blocks and is never deleted — the ledger is keyed on (location, item) and never on this id, so its bookings survive a row that is gone, BY DESIGN, exactly as they survive a location that is gone.
     *
     * @param {string} params.id - The stock row.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesStockDelete(params: { id: string }): Promise<{}>;
    /**
     * Stops tracking one item at one location. A stock level is ONE item at ONE location, and it carries two numbers, neither of which is the sellable one: `on_hand` is what is physically there INCLUDING everything already promised, and `reserved` is what has been promised — it never reduces `on_hand`. What may still be sold is their difference, and it is derived on read and never stored, so there is no `available` column to read, filter or order by. A deleted balance is not recoverable: the ledger is the audit trail, not the source of truth, and nothing in this app ever replays it to rebuild a number — so the next receipt for the same item here creates a FRESH row at zero, standing next to movements that say otherwise. That used to be a trap a caller discovered afterwards. It is a stated property now, because the route REFUSES while the row still holds anything, and answers 409 with what it holds. The two things that block are the location delete's two, asked of one row. A reservation still `active` against this item at this location is the sharper one: /release and /commit look their stock row up by (location, item) on the very next call and would find nothing, so the hold would lower no `reserved` and /commit would book the whole quantity as a shortfall — orphaned immediately rather than eventually. `on_hand` above zero is the stronger one: deleting a LOCATION at least meant "close this warehouse" and took the balances as a side effect of the cascade, while this row IS the balance, so the delete can only ever mean "no longer tracked here" — true once the number is zero and a lie while it is not. POST /inventories/stock/{id}/adjust to zero is the operation that makes it true, and it BOOKS the movement, so the stock leaves through the ledger instead of vanishing with the row. Nothing points at it by foreign key, so the database takes nothing else with it. History therefore never blocks and is never deleted — the ledger is keyed on (location, item) and never on this id, so its bookings survive a row that is gone, BY DESIGN, exactly as they survive a location that is gone.
     *
     * @param {string} id - The stock row.
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
     * A stock level is ONE item at ONE location, and it carries two numbers, neither of which is the sellable one: `on_hand` is what is physically there INCLUDING everything already promised, and `reserved` is what has been promised — it never reduces `on_hand`. What may still be sold is their difference, and it is derived on read and never stored, so there is no `available` column to read, filter or order by. Read it to see one item's position at one place, and to get the id the two row-scoped routes take: POST /inventories/stock/{id}/adjust corrects this balance, and GET /inventories/reorder-alerts reports it by this id. What it does not answer is how the balance got here — that is GET /inventories/movements filtered by the location and item on this row, because a movement points at (location, item) and never at a stock row id.
     *
     * @param {string} params.id - The stock row.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     */
    inventoriesStockGet(params: { id: string }): Promise<Models.StockLevel>;
    /**
     * A stock level is ONE item at ONE location, and it carries two numbers, neither of which is the sellable one: `on_hand` is what is physically there INCLUDING everything already promised, and `reserved` is what has been promised — it never reduces `on_hand`. What may still be sold is their difference, and it is derived on read and never stored, so there is no `available` column to read, filter or order by. Read it to see one item's position at one place, and to get the id the two row-scoped routes take: POST /inventories/stock/{id}/adjust corrects this balance, and GET /inventories/reorder-alerts reports it by this id. What it does not answer is how the balance got here — that is GET /inventories/movements filtered by the location and item on this row, because a movement points at (location, item) and never at a stock row id.
     *
     * @param {string} id - The stock row.
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
     * Partial update of everything on the row EXCEPT its balance: reorder_point, metadata, identity. on_hand and reserved are dropped from the body — every stock change is a movement, and a body carrying nothing else is answered 422 with the route that was meant (POST /inventories/stock/{id}/adjust).
     *
     * @param {string} params.id - The stock row.
     * @param {string} params.locationId - The location this balance is held at — a `locations` row of this tenant (GET /inventories/locations). There is ONE stock row per (location, item): the same SKU in three warehouses is three rows, and what a storefront shows is their sum (POST /inventories/availability). Deleting the location deletes its stock rows with it. It has to exist already (GET /inventories/locations); an id no location carries is answered 400 by the foreign key, not 404.
     * @param {object} params.metadata - Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. A literal boolean `true` there opts this item into backorders while `backorder_policy` is 'allow_per_sku' — anything else, including the string "true", does not, and the reservation is refused with 422. That is how a merchant backorders the supplier-stocked half of a catalogue without promising the rest.
     * @param {string} params.productId - The product this row tracks, as the products app knows it. A row tracks a `product_id` or a `sku` — the database insists on at least one (CHECK `product_id is not null or sku is not null`) — and matching is exact: a row keyed by SKU is not found by product id.
     * @param {number} params.reorderPoint - The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts). Null falls back to the `reorder_point_default` setting, so replenishment works without a threshold per SKU; 0 never alerts, which is how one row opts out.
     * @param {string} params.sku - The article number this row tracks when there is no product id, which is the normal case for an ERP-stocked catalogue. Exact match, and the identity every stock call may use instead of a uuid.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     */
    inventoriesStockUpdate(params: { id: string, locationId?: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string }): Promise<Models.StockLevel>;
    /**
     * Partial update of everything on the row EXCEPT its balance: reorder_point, metadata, identity. on_hand and reserved are dropped from the body — every stock change is a movement, and a body carrying nothing else is answered 422 with the route that was meant (POST /inventories/stock/{id}/adjust).
     *
     * @param {string} id - The stock row.
     * @param {string} locationId - The location this balance is held at — a `locations` row of this tenant (GET /inventories/locations). There is ONE stock row per (location, item): the same SKU in three warehouses is three rows, and what a storefront shows is their sum (POST /inventories/availability). Deleting the location deletes its stock rows with it. It has to exist already (GET /inventories/locations); an id no location carries is answered 400 by the foreign key, not 404.
     * @param {object} metadata - Free-form data the tenant keeps on this stock row, and ONE key this app reads: `backorder`. A literal boolean `true` there opts this item into backorders while `backorder_policy` is 'allow_per_sku' — anything else, including the string "true", does not, and the reservation is refused with 422. That is how a merchant backorders the supplier-stocked half of a catalogue without promising the rest.
     * @param {string} productId - The product this row tracks, as the products app knows it. A row tracks a `product_id` or a `sku` — the database insists on at least one (CHECK `product_id is not null or sku is not null`) — and matching is exact: a row keyed by SKU is not found by product id.
     * @param {number} reorderPoint - The available quantity at or below which this row belongs on the replenishment worklist (GET /inventories/reorder-alerts). Null falls back to the `reorder_point_default` setting, so replenishment works without a threshold per SKU; 0 never alerts, which is how one row opts out.
     * @param {string} sku - The article number this row tracks when there is no product id, which is the normal case for an ERP-stocked catalogue. Exact match, and the identity every stock call may use instead of a uuid.
     * @throws {RevenexxException}
     * @returns {Promise<Models.StockLevel>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockUpdate(id: string, locationId?: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string): Promise<Models.StockLevel>;
    inventoriesStockUpdate(
        paramsOrFirst: { id: string, locationId?: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string } | string,
        ...rest: [(string)?, (object)?, (string)?, (number)?, (string)?]    
    ): Promise<Models.StockLevel> {
        let params: { id: string, locationId?: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, locationId?: string, metadata?: object, productId?: string, reorderPoint?: number, sku?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                locationId: rest[0] as string,
                metadata: rest[1] as object,
                productId: rest[2] as string,
                reorderPoint: rest[3] as number,
                sku: rest[4] as string            
            };
        }
        
        const id = params.id;
        const locationId = params.locationId;
        const metadata = params.metadata;
        const productId = params.productId;
        const reorderPoint = params.reorderPoint;
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
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof reorderPoint !== 'undefined') {
            apiPayload['reorder_point'] = reorderPoint;
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

    /**
     * Corrects the balance of ONE stock row, and only that one. It is the row-scoped twin of POST /inventories/adjust: the row already knows its location and item, so a caller owes nothing but a SIGNED delta on `on_hand` — positive to add, negative to take away — and a reason for it. The delta is not written onto the balance either; it is booked into the movements ledger as an `adjustment` and the balance follows, which is why the answer hands back the row at its new value instead of an acknowledgement. This is the route that replaced the Cockpit's editable on_hand field.
     *
     * @param {string} params.id - The stock row to correct.
     * @param {number} params.quantity - The SIGNED correction to this row's `on_hand`: −3 writes off three, +3 finds three. A delta, not the new balance. Zero is refused (400). A correction that would take `on_hand` below zero is a 422 the database insists on; one that would take it below this row's own `reserved` is a 422 the `allow_negative_stock` setting can permit.
     * @param {string} params.reason - Why this row is being corrected, written onto the ledger booking. Owed unless `movement_reason_required` is 'none'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesStockAdjust(params: { id: string, quantity: number, reason?: string }): Promise<{}>;
    /**
     * Corrects the balance of ONE stock row, and only that one. It is the row-scoped twin of POST /inventories/adjust: the row already knows its location and item, so a caller owes nothing but a SIGNED delta on `on_hand` — positive to add, negative to take away — and a reason for it. The delta is not written onto the balance either; it is booked into the movements ledger as an `adjustment` and the balance follows, which is why the answer hands back the row at its new value instead of an acknowledgement. This is the route that replaced the Cockpit's editable on_hand field.
     *
     * @param {string} id - The stock row to correct.
     * @param {number} quantity - The SIGNED correction to this row's `on_hand`: −3 writes off three, +3 finds three. A delta, not the new balance. Zero is refused (400). A correction that would take `on_hand` below zero is a 422 the database insists on; one that would take it below this row's own `reserved` is a 422 the `allow_negative_stock` setting can permit.
     * @param {string} reason - Why this row is being corrected, written onto the ledger booking. Owed unless `movement_reason_required` is 'none'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesStockAdjust(id: string, quantity: number, reason?: string): Promise<{}>;
    inventoriesStockAdjust(
        paramsOrFirst: { id: string, quantity: number, reason?: string } | string,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, quantity: number, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, quantity: number, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                quantity: rest[0] as number,
                reason: rest[1] as string            
            };
        }
        
        const id = params.id;
        const quantity = params.quantity;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof quantity === 'undefined') {
            throw new RevenexxException('Missing required parameter: "quantity"');
        }

        const apiPath = '/v1/inventories/stock/{id}/adjust'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
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
     * Discovery for the vocabulary routes: the enums this app publishes, each with its name, its title and its description and deliberately WITHOUT its values, so finding out what exists costs one small call and not one per vocabulary. Names: location-types, movement-types, reservation-statuses. Fetch one with GET /inventories/vocabularies/{name}; a client holding the qualified pair 'inventories.<name>' builds that URL from the pair alone.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.InventoryVocabularyIndex>}
     */
    inventoriesVocabulariesList(): Promise<Models.InventoryVocabularyIndex> {

        const apiPath = '/v1/inventories/vocabularies';
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
     * One vocabulary in full: every permitted value, each carrying the title and description a person reads for it and the badge tone a UI colours it with, so a client renders a status or a movement type without a hard-coded table of its own. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is lifecycle order for a status. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Names: location-types, movement-types, reservation-statuses.
     *
     * @param {InventoriesVocabulariesGetName} params.name - The vocabulary name — the part after the dot in the qualified id. One of: location-types, movement-types, reservation-statuses. Anything else is a 404, so the enum is the complete set and not a suggestion.
     * @throws {RevenexxException}
     * @returns {Promise<Models.InventoryVocabulary>}
     */
    inventoriesVocabulariesGet(params: { name: InventoriesVocabulariesGetName }): Promise<Models.InventoryVocabulary>;
    /**
     * One vocabulary in full: every permitted value, each carrying the title and description a person reads for it and the badge tone a UI colours it with, so a client renders a status or a movement type without a hard-coded table of its own. The values are read out of the column's CHECK constraint, so the served set IS the enforced set and the two cannot drift — a value added to the constraint appears here even before anyone labels it, titled from its own key. Values come back in constraint order, which is lifecycle order for a status. 'closed' says the set is exhaustive, so a value outside it is stale data rather than a missing label. Names: location-types, movement-types, reservation-statuses.
     *
     * @param {InventoriesVocabulariesGetName} name - The vocabulary name — the part after the dot in the qualified id. One of: location-types, movement-types, reservation-statuses. Anything else is a 404, so the enum is the complete set and not a suggestion.
     * @throws {RevenexxException}
     * @returns {Promise<Models.InventoryVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesVocabulariesGet(name: InventoriesVocabulariesGetName): Promise<Models.InventoryVocabulary>;
    inventoriesVocabulariesGet(
        paramsOrFirst: { name: InventoriesVocabulariesGetName } | InventoriesVocabulariesGetName    
    ): Promise<Models.InventoryVocabulary> {
        let params: { name: InventoriesVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: InventoriesVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as InventoriesVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/inventories/vocabularies/{name}'.replace('{name}', name);
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
