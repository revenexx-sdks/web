import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { InventoriesReservationsListStatus } from '../enums/inventories-reservations-list-status';

export class InventoriesReservations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Call this when the goods leave the building, and not before. Reserving only promised them — `reserved` went up and `on_hand` did not move, because the stock was still on the shelf; committing is the moment they are gone, so it lowers BOTH on each stock row and writes one `shipment` booking per hold, with a SIGNED negative quantity, as the ledger's record that they left. It takes the whole `order_ref` and every hold still active on it: there is no partial commit and no per-line id, so a part shipment means reserving the parts separately in the first place. It is also final — 'committed' ends the lifecycle and nothing moves a hold out of it, so goods coming back are POST /inventories/restock (a new receipt), never an undo of this. An order with nothing active is a 422 rather than a quiet zero, because it means the hold was already released or already shipped; /release answers the same situation with a 200 on purpose, since cancelling twice is harmless and shipping twice is not.
     *
     * @param {string} params.orderRef - The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Every ACTIVE hold under this reference ships: `on_hand` and `reserved` both fall and a `shipment` booking is written for each. Unlike release, committing an order that has nothing active is a 422 — it means the hold was already released or already shipped, and shipping twice is worth saying out loud.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesCommit(params: { orderRef: string }): Promise<{}>;
    /**
     * Call this when the goods leave the building, and not before. Reserving only promised them — `reserved` went up and `on_hand` did not move, because the stock was still on the shelf; committing is the moment they are gone, so it lowers BOTH on each stock row and writes one `shipment` booking per hold, with a SIGNED negative quantity, as the ledger's record that they left. It takes the whole `order_ref` and every hold still active on it: there is no partial commit and no per-line id, so a part shipment means reserving the parts separately in the first place. It is also final — 'committed' ends the lifecycle and nothing moves a hold out of it, so goods coming back are POST /inventories/restock (a new receipt), never an undo of this. An order with nothing active is a 422 rather than a quiet zero, because it means the hold was already released or already shipped; /release answers the same situation with a 200 on purpose, since cancelling twice is harmless and shipping twice is not.
     *
     * @param {string} orderRef - The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Every ACTIVE hold under this reference ships: `on_hand` and `reserved` both fall and a `shipment` booking is written for each. Unlike release, committing an order that has nothing active is a 422 — it means the hold was already released or already shipped, and shipping twice is worth saying out loud.
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
     * The cancellation end of the reserve → commit | release lifecycle: it takes an `order_ref`, ends every hold still active on it, gives the stock back and writes a 'release' booking for each one, exactly like the expiry sweeper. Idempotent: an order with nothing active answers released:0 — which is why it is a 200 and not the 422 commit answers.
     *
     * @param {string} params.orderRef - The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Every ACTIVE hold under this reference is given back; ones already committed or released are left alone. A reference no reservation carries releases nothing and answers `released: 0` — not an error, which is what makes a retried cancellation safe.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesRelease(params: { orderRef: string }): Promise<{}>;
    /**
     * The cancellation end of the reserve → commit | release lifecycle: it takes an `order_ref`, ends every hold still active on it, gives the stock back and writes a 'release' booking for each one, exactly like the expiry sweeper. Idempotent: an order with nothing active answers released:0 — which is why it is a 200 and not the 422 commit answers.
     *
     * @param {string} orderRef - The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Every ACTIVE hold under this reference is given back; ones already committed or released are left alone. A reference no reservation carries releases nothing and answers `released: 0` — not an error, which is what makes a retried cancellation safe.
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
     * A reservation is stock promised to an `order_ref`. It is created only by POST /inventories/reserve and moved only by /commit, /release and the expiry sweep — there is no create, update or delete route, because the lifecycle IS the API. Only an 'active' hold counts towards a stock row's `reserved`; 'released' and 'committed' rows stay for the audit trail and hold nothing. This is the answer to "what is this order actually holding" (`?order_ref=…`) and to "what is holding this stock" (`?status=active&location_id=…`) — the second is the only way to see WHY a row's `reserved` is what it is, since a stock row reports the total and never who asked for it. `expires_at` filters on an exact timestamp and not a range, so this cannot answer "what expires today"; the deadline is acted on by POST /inventories/reservations/sweep, not by reading it here.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc' — a bare column sorts ascending. The column has to be one this entity has; anything else is refused with 400.
     * @param {string} params.id - Exact-match filter on `id`. The row's own id, generated by the database.
     * @param {string} params.locationId - Exact-match filter on `location_id`. The holds served by one location.
     * @param {string} params.productId - Exact-match filter on `product_id`. The product being held, copied from the reserve call.
     * @param {string} params.sku - Exact-match filter on `sku`. The article number being held, copied from the reserve call.
     * @param {number} params.quantity - Exact-match filter on `quantity`. How much is being held, ALWAYS POSITIVE — the database CHECK is `quantity > 0`, because a hold of nothing is not a hold.
     * @param {string} params.orderRef - Exact-match filter on `order_ref`. Every hold an order carries. This is the lookup POST /inventories/release and /commit act on.
     * @param {InventoriesReservationsListStatus} params.status - Exact-match filter on `status`. Where the hold stands in the reserve → commit | release lifecycle. Only 'active' counts towards `reserved`, so `?status=active` is the set that is really holding stock.
     * @param {string} params.expiresAt - Exact-match filter on `expires_at`. Exact deadline, not a range — this cannot answer "what expires today". The sweeper is what acts on deadlines (POST /inventories/reservations/sweep).
     * @param {string} params.metadata - Exact-match filter on `metadata`. Free-form, and one key this app writes itself: `backordered` — how much of this hold was not covered by stock on hand when it was taken. The WHOLE jsonb document is compared, serialized as JSON — this is equality, not a key lookup or a containment query, and a value that does not parse is answered 400.
     * @param {string} params.createdAt - Exact-match filter on `created_at`. When the row was created.
     * @param {string} params.updatedAt - Exact-match filter on `updated_at`. When the hold last changed — in practice, when it moved out of `active`..
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesReservationsList(params?: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, quantity?: number, orderRef?: string, status?: InventoriesReservationsListStatus, expiresAt?: string, metadata?: string, createdAt?: string, updatedAt?: string }): Promise<{}>;
    /**
     * A reservation is stock promised to an `order_ref`. It is created only by POST /inventories/reserve and moved only by /commit, /release and the expiry sweep — there is no create, update or delete route, because the lifecycle IS the API. Only an 'active' hold counts towards a stock row's `reserved`; 'released' and 'committed' rows stay for the audit trail and hold nothing. This is the answer to "what is this order actually holding" (`?order_ref=…`) and to "what is holding this stock" (`?status=active&location_id=…`) — the second is the only way to see WHY a row's `reserved` is what it is, since a stock row reports the total and never who asked for it. `expires_at` filters on an exact timestamp and not a range, so this cannot answer "what expires today"; the deadline is acted on by POST /inventories/reservations/sweep, not by reading it here.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc' — a bare column sorts ascending. The column has to be one this entity has; anything else is refused with 400.
     * @param {string} id - Exact-match filter on `id`. The row's own id, generated by the database.
     * @param {string} locationId - Exact-match filter on `location_id`. The holds served by one location.
     * @param {string} productId - Exact-match filter on `product_id`. The product being held, copied from the reserve call.
     * @param {string} sku - Exact-match filter on `sku`. The article number being held, copied from the reserve call.
     * @param {number} quantity - Exact-match filter on `quantity`. How much is being held, ALWAYS POSITIVE — the database CHECK is `quantity > 0`, because a hold of nothing is not a hold.
     * @param {string} orderRef - Exact-match filter on `order_ref`. Every hold an order carries. This is the lookup POST /inventories/release and /commit act on.
     * @param {InventoriesReservationsListStatus} status - Exact-match filter on `status`. Where the hold stands in the reserve → commit | release lifecycle. Only 'active' counts towards `reserved`, so `?status=active` is the set that is really holding stock.
     * @param {string} expiresAt - Exact-match filter on `expires_at`. Exact deadline, not a range — this cannot answer "what expires today". The sweeper is what acts on deadlines (POST /inventories/reservations/sweep).
     * @param {string} metadata - Exact-match filter on `metadata`. Free-form, and one key this app writes itself: `backordered` — how much of this hold was not covered by stock on hand when it was taken. The WHOLE jsonb document is compared, serialized as JSON — this is equality, not a key lookup or a containment query, and a value that does not parse is answered 400.
     * @param {string} createdAt - Exact-match filter on `created_at`. When the row was created.
     * @param {string} updatedAt - Exact-match filter on `updated_at`. When the hold last changed — in practice, when it moved out of `active`..
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReservationsList(limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, quantity?: number, orderRef?: string, status?: InventoriesReservationsListStatus, expiresAt?: string, metadata?: string, createdAt?: string, updatedAt?: string): Promise<{}>;
    inventoriesReservationsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, quantity?: number, orderRef?: string, status?: InventoriesReservationsListStatus, expiresAt?: string, metadata?: string, createdAt?: string, updatedAt?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (string)?, (InventoriesReservationsListStatus)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, quantity?: number, orderRef?: string, status?: InventoriesReservationsListStatus, expiresAt?: string, metadata?: string, createdAt?: string, updatedAt?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, locationId?: string, productId?: string, sku?: string, quantity?: number, orderRef?: string, status?: InventoriesReservationsListStatus, expiresAt?: string, metadata?: string, createdAt?: string, updatedAt?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                locationId: rest[3] as string,
                productId: rest[4] as string,
                sku: rest[5] as string,
                quantity: rest[6] as number,
                orderRef: rest[7] as string,
                status: rest[8] as InventoriesReservationsListStatus,
                expiresAt: rest[9] as string,
                metadata: rest[10] as string,
                createdAt: rest[11] as string,
                updatedAt: rest[12] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const locationId = params.locationId;
        const productId = params.productId;
        const sku = params.sku;
        const quantity = params.quantity;
        const orderRef = params.orderRef;
        const status = params.status;
        const expiresAt = params.expiresAt;
        const metadata = params.metadata;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;


        const apiPath = '/v1/inventories/reservations';
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
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof orderRef !== 'undefined') {
            apiPayload['order_ref'] = orderRef;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
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
     * The expiry sweeper, also run by the 'expire-reservations' schedule every 15 minutes. Releases reservations past their own expires_at and — once reservation_ttl_minutes is above 0 — reservations older than that lifetime which never carried a deadline. Each release gives the stock back and writes a 'release' booking, exactly like a cancellation. Idempotent: a second run finds nothing.
     *
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReservationSweepResult>}
     */
    inventoriesReservationsSweep(params: { data: object }): Promise<Models.ReservationSweepResult>;
    /**
     * The expiry sweeper, also run by the 'expire-reservations' schedule every 15 minutes. Releases reservations past their own expires_at and — once reservation_ttl_minutes is above 0 — reservations older than that lifetime which never carried a deadline. Each release gives the stock back and writes a 'release' booking, exactly like a cancellation. Idempotent: a second run finds nothing.
     *
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReservationSweepResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReservationsSweep(data: object): Promise<Models.ReservationSweepResult>;
    inventoriesReservationsSweep(
        paramsOrFirst: { data: object } | object    
    ): Promise<Models.ReservationSweepResult> {
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

        const apiPath = '/v1/inventories/reservations/sweep';
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
     * A reservation is stock promised to an `order_ref`. It is created only by POST /inventories/reserve and moved only by /commit, /release and the expiry sweep — there is no create, update or delete route, because the lifecycle IS the API. Only an 'active' hold counts towards a stock row's `reserved`; 'released' and 'committed' rows stay for the audit trail and hold nothing. One hold, with the three facts that are not on the order it belongs to: which location it was allocated to, when it expires, and — in `metadata.backordered` — how much of it was never covered by stock, which is how a promise made under a permissive backorder policy stays visible afterwards. The id is for reading only. Every transition acts on the whole `order_ref` (/commit, /release, the sweep), so there is no route that takes this id and no way to release one line of an order on its own.
     *
     * @param {string} params.id - The reservation.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Reservation>}
     */
    inventoriesReservationsGet(params: { id: string }): Promise<Models.Reservation>;
    /**
     * A reservation is stock promised to an `order_ref`. It is created only by POST /inventories/reserve and moved only by /commit, /release and the expiry sweep — there is no create, update or delete route, because the lifecycle IS the API. Only an 'active' hold counts towards a stock row's `reserved`; 'released' and 'committed' rows stay for the audit trail and hold nothing. One hold, with the three facts that are not on the order it belongs to: which location it was allocated to, when it expires, and — in `metadata.backordered` — how much of it was never covered by stock, which is how a promise made under a permissive backorder policy stays visible afterwards. The id is for reading only. Every transition acts on the whole `order_ref` (/commit, /release, the sweep), so there is no route that takes this id and no way to release one line of an order on its own.
     *
     * @param {string} id - The reservation.
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
     * Takes a hold against an `order_ref`, and plans the whole call before writing anything, so a reservation that cannot be satisfied changes nothing. WHICH location serves an item is not the caller's to choose: the tenant's allocation_strategy decides it ('priority', walking the enabled locations by their priority; 'nearest', matching ship_to against a location's country; or 'single_location' for the whole order); backorder_policy decides what happens when none can — refuse (422), or reserve anyway and let availability go negative. expires_at defaults from reservation_ttl_minutes and the sweeper enforces it. A second call under the same `order_ref` ADDS holds beside the ones already there — it never replaces them — and commit and release then act on every active hold of the reference.
     *
     * @param {string} params.orderRef - The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Reserving twice under the same reference ADDS holds rather than replacing them — release first if you mean to replace.
     * @param {string} params.expiresAt - When this hold lapses. The sweeper — POST /inventories/reservations/sweep, and the 'expire-reservations' schedule that runs it every 15 minutes — releases everything past this moment exactly as a cancellation would, so an abandoned checkout stops holding stock on its own. Null means the row named no deadline: it is swept on its AGE instead once `reservation_ttl_minutes` is above 0, which is what makes turning that setting on retroactive. Omit it to let the `reservation_ttl_minutes` setting stamp one (0 — its default — means no deadline at all); send one to hold this order for a window of its own, e.g. a quote that stands until Friday.
     * @param {Models.InventoryStockItem[]} params.items - The items to hold, at most 200 in one call — a whole cart in one request. The call is planned before anything is written, so either every item is placed or nothing is.
     * @param {string} params.locationCode - Where a BACKORDERED item is booked when no location holds a stock row for it at all — the last fallback, not the allocator: which location serves an item that IS in stock comes from `allocation_strategy`. Omitted, the `default_location_code` setting decides.
     * @param {string} params.productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} params.quantity - Inline single-item form: how many to hold. Positive — the hold is expressed as a positive reservation, while the ledger booking it writes carries the negative.
     * @param {object} params.shipTo - Where the order is going. Read ONLY when the tenant's `allocation_strategy` is 'nearest' — under 'priority' or 'single_location' it is accepted and ignored, so sending it is never wrong, it is just not always heard.
     * @param {string} params.sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    inventoriesReserve(params: { orderRef: string, expiresAt?: string, items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, shipTo?: object, sku?: string }): Promise<{}>;
    /**
     * Takes a hold against an `order_ref`, and plans the whole call before writing anything, so a reservation that cannot be satisfied changes nothing. WHICH location serves an item is not the caller's to choose: the tenant's allocation_strategy decides it ('priority', walking the enabled locations by their priority; 'nearest', matching ship_to against a location's country; or 'single_location' for the whole order); backorder_policy decides what happens when none can — refuse (422), or reserve anyway and let availability go negative. expires_at defaults from reservation_ttl_minutes and the sweeper enforces it. A second call under the same `order_ref` ADDS holds beside the ones already there — it never replaces them — and commit and release then act on every active hold of the reference.
     *
     * @param {string} orderRef - The order this hold belongs to. The caller supplies it — this app mints nothing — and it is the handle POST /inventories/release and POST /inventories/commit act on, so it has to be the same string the order carries elsewhere. At least one character (CHECK `length(order_ref) > 0`). Not unique: an order holds one reservation per item, and they are released or committed together. Reserving twice under the same reference ADDS holds rather than replacing them — release first if you mean to replace.
     * @param {string} expiresAt - When this hold lapses. The sweeper — POST /inventories/reservations/sweep, and the 'expire-reservations' schedule that runs it every 15 minutes — releases everything past this moment exactly as a cancellation would, so an abandoned checkout stops holding stock on its own. Null means the row named no deadline: it is swept on its AGE instead once `reservation_ttl_minutes` is above 0, which is what makes turning that setting on retroactive. Omit it to let the `reservation_ttl_minutes` setting stamp one (0 — its default — means no deadline at all); send one to hold this order for a window of its own, e.g. a quote that stands until Friday.
     * @param {Models.InventoryStockItem[]} items - The items to hold, at most 200 in one call — a whole cart in one request. The call is planned before anything is written, so either every item is placed or nothing is.
     * @param {string} locationCode - Where a BACKORDERED item is booked when no location holds a stock row for it at all — the last fallback, not the allocator: which location serves an item that IS in stock comes from `allocation_strategy`. Omitted, the `default_location_code` setting decides.
     * @param {string} productId - Inline single-item form: the product to move, instead of a one-entry `items` array. The two forms are equivalent — nothing downstream knows which arrived.
     * @param {number} quantity - Inline single-item form: how many to hold. Positive — the hold is expressed as a positive reservation, while the ledger booking it writes carries the negative.
     * @param {object} shipTo - Where the order is going. Read ONLY when the tenant's `allocation_strategy` is 'nearest' — under 'priority' or 'single_location' it is accepted and ignored, so sending it is never wrong, it is just not always heard.
     * @param {string} sku - Inline single-item form: the article number to move (instead of `product_id`).
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    inventoriesReserve(orderRef: string, expiresAt?: string, items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, shipTo?: object, sku?: string): Promise<{}>;
    inventoriesReserve(
        paramsOrFirst: { orderRef: string, expiresAt?: string, items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, shipTo?: object, sku?: string } | string,
        ...rest: [(string)?, (Models.InventoryStockItem[])?, (string)?, (string)?, (number)?, (object)?, (string)?]    
    ): Promise<{}> {
        let params: { orderRef: string, expiresAt?: string, items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, shipTo?: object, sku?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { orderRef: string, expiresAt?: string, items?: Models.InventoryStockItem[], locationCode?: string, productId?: string, quantity?: number, shipTo?: object, sku?: string };
        } else {
            params = {
                orderRef: paramsOrFirst as string,
                expiresAt: rest[0] as string,
                items: rest[1] as Models.InventoryStockItem[],
                locationCode: rest[2] as string,
                productId: rest[3] as string,
                quantity: rest[4] as number,
                shipTo: rest[5] as object,
                sku: rest[6] as string            
            };
        }
        
        const orderRef = params.orderRef;
        const expiresAt = params.expiresAt;
        const items = params.items;
        const locationCode = params.locationCode;
        const productId = params.productId;
        const quantity = params.quantity;
        const shipTo = params.shipTo;
        const sku = params.sku;

        if (typeof orderRef === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderRef"');
        }

        const apiPath = '/v1/inventories/reserve';
        const apiPayload: Payload = {};
        if (typeof expiresAt !== 'undefined') {
            apiPayload['expires_at'] = expiresAt;
        }
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
        if (typeof shipTo !== 'undefined') {
            apiPayload['ship_to'] = Client.toWireKeys(shipTo, {"locationCode":{"wire":"location_code","children":null}});
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
}
