import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { CartItemType } from '../enums/cart-item-type';

export class CartsItems {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The array is still called 'items'; the response also carries 'page' and 'filter' like every other list, and an unknown cart_id answers 404 instead of an empty page. A cart with more lines than the page size is not silently truncated — 'page.hasMore' says so. Lines come back in position order unless 'order' says otherwise.
     *
     * @param {string} params.cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} params.id - One line, in list form.
     * @param {CartItemType} params.type - Product lines, configured lines or custom lines.
     * @param {string} params.productId - Lines for one catalogue product.
     * @param {string} params.sku - Exact article number — the join every ERP integration makes. Not a search: no prefix, no wildcard.
     * @param {string} params.name - Exact line name. Not a search.
     * @param {number} params.quantity - Exact quantity — equality, so it matches a line of exactly this many, never 'at least'.
     * @param {string} params.unit - Lines counted in one unit ('pcs', 'm').
     * @param {number} params.unitPrice - Exact unit price — the lines still sitting at one particular number after a repricing run.
     * @param {string} params.currency - Lines priced in one currency — normally the cart's, so this earns its place only where a cart mixes them.
     * @param {number} params.taxRate - Lines at one VAT rate.
     * @param {number} params.lineTotal - Exact line total. Equality only — there is no range form, so this finds `0` and little else.
     * @param {number} params.position - The line at one position.
     * @param {string} params.createdAt - Exact instant, not a range.
     * @param {string} params.updatedAt - Exact instant, not a range.
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsItemsList(params: { cartId: string, id?: string, type?: CartItemType, productId?: string, sku?: string, name?: string, quantity?: number, unit?: string, unitPrice?: number, currency?: string, taxRate?: number, lineTotal?: number, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string }): Promise<Models.Error>;
    /**
     * The array is still called 'items'; the response also carries 'page' and 'filter' like every other list, and an unknown cart_id answers 404 instead of an empty page. A cart with more lines than the page size is not silently truncated — 'page.hasMore' says so. Lines come back in position order unless 'order' says otherwise.
     *
     * @param {string} cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} id - One line, in list form.
     * @param {CartItemType} type - Product lines, configured lines or custom lines.
     * @param {string} productId - Lines for one catalogue product.
     * @param {string} sku - Exact article number — the join every ERP integration makes. Not a search: no prefix, no wildcard.
     * @param {string} name - Exact line name. Not a search.
     * @param {number} quantity - Exact quantity — equality, so it matches a line of exactly this many, never 'at least'.
     * @param {string} unit - Lines counted in one unit ('pcs', 'm').
     * @param {number} unitPrice - Exact unit price — the lines still sitting at one particular number after a repricing run.
     * @param {string} currency - Lines priced in one currency — normally the cart's, so this earns its place only where a cart mixes them.
     * @param {number} taxRate - Lines at one VAT rate.
     * @param {number} lineTotal - Exact line total. Equality only — there is no range form, so this finds `0` and little else.
     * @param {number} position - The line at one position.
     * @param {string} createdAt - Exact instant, not a range.
     * @param {string} updatedAt - Exact instant, not a range.
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. A bare column sorts ascending. Anything else is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsList(cartId: string, id?: string, type?: CartItemType, productId?: string, sku?: string, name?: string, quantity?: number, unit?: string, unitPrice?: number, currency?: string, taxRate?: number, lineTotal?: number, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string): Promise<Models.Error>;
    cartsItemsList(
        paramsOrFirst: { cartId: string, id?: string, type?: CartItemType, productId?: string, sku?: string, name?: string, quantity?: number, unit?: string, unitPrice?: number, currency?: string, taxRate?: number, lineTotal?: number, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string } | string,
        ...rest: [(string)?, (CartItemType)?, (string)?, (string)?, (string)?, (number)?, (string)?, (number)?, (string)?, (number)?, (number)?, (number)?, (string)?, (string)?, (number)?, (number)?, (string)?]    
    ): Promise<Models.Error> {
        let params: { cartId: string, id?: string, type?: CartItemType, productId?: string, sku?: string, name?: string, quantity?: number, unit?: string, unitPrice?: number, currency?: string, taxRate?: number, lineTotal?: number, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id?: string, type?: CartItemType, productId?: string, sku?: string, name?: string, quantity?: number, unit?: string, unitPrice?: number, currency?: string, taxRate?: number, lineTotal?: number, position?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, order?: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string,
                type: rest[1] as CartItemType,
                productId: rest[2] as string,
                sku: rest[3] as string,
                name: rest[4] as string,
                quantity: rest[5] as number,
                unit: rest[6] as string,
                unitPrice: rest[7] as number,
                currency: rest[8] as string,
                taxRate: rest[9] as number,
                lineTotal: rest[10] as number,
                position: rest[11] as number,
                createdAt: rest[12] as string,
                updatedAt: rest[13] as string,
                limit: rest[14] as number,
                offset: rest[15] as number,
                order: rest[16] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;
        const type = params.type;
        const productId = params.productId;
        const sku = params.sku;
        const name = params.name;
        const quantity = params.quantity;
        const unit = params.unit;
        const unitPrice = params.unitPrice;
        const currency = params.currency;
        const taxRate = params.taxRate;
        const lineTotal = params.lineTotal;
        const position = params.position;
        const createdAt = params.createdAt;
        const updatedAt = params.updatedAt;
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cart_id}', cartId);
        const apiPayload: Payload = {};
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof lineTotal !== 'undefined') {
            apiPayload['line_total'] = lineTotal;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof createdAt !== 'undefined') {
            apiPayload['created_at'] = createdAt;
        }
        if (typeof updatedAt !== 'undefined') {
            apiPayload['updated_at'] = updatedAt;
        }
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            apiPayload['offset'] = offset;
        }
        if (typeof order !== 'undefined') {
            apiPayload['order'] = order;
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
     * Adds one line to an ACTIVE cart — the add-to-basket call. `name` or `sku` is required (a line sent with only a SKU takes the SKU as its name, so a line always has something to show) and `quantity` must be greater than zero; everything else defaults, including the currency, which falls back to the cart's. The one thing that surprises a caller: a plain product line with the same product/sku AND the same `unit_price` as a line already in the cart does not open a second row — its quantity is added to that line, and the 201 names a row that already existed. Price is part of that identity on purpose, so a changed price never averages into an old line. A configured or custom line always stands alone. The cart's `item_count` (the sum of QUANTITIES) and `subtotal` are recomputed before the answer, and `max_items_per_cart` / `max_quantity_per_line` are checked on the RESULT of the merge (422), so ten calls of one piece cannot walk past a limit one call of ten would hit.
     *
     * @param {string} params.cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {object} params.configuration - What was configured on this line, in the configurator's own vocabulary — this app stores it and reads nothing out of it. Its mere PRESENCE is behaviour: a line that carries a configuration never merges with another, because two differently configured units of the same article are not one line. Keys are the configurator's; the example is one shape, not the shape.
     * @param {string} params.currency - ISO 4217 code. Defaults to the cart's currency.
     * @param {object} params.metadata - Free-form data the storefront hangs on the line. Stored and returned verbatim; no key in here is read by this app.
     * @param {string} params.name - What the line reads as on the cart page. Falls back to 'sku' when omitted, so a line always has something to show.
     * @param {number} params.position - Sort order within the cart, ascending. Default 0 when adding a line; in a bulk replace the payload order fills it in.
     * @param {string} params.productId - The catalogue product, when the line comes from one. Part of the merge identity: same product, same price, one line.
     * @param {number} params.quantity - How much of it — default 1. Fractional is legal (2.5 m of cable); zero and negative are not. On a plain product line that merges into an existing one, this is ADDED to what is already there, and max_quantity_per_line is checked on the result.
     * @param {string} params.sku - The article number, exactly as the merchant knows it. Free text — this app does not resolve it against the catalogue — and part of the merge identity together with product_id and unit_price. The example only shows the shape of a real article number; nothing here enforces one.
     * @param {object} params.snapshot - The product as the buyer was shown it when this line was added — the cart's own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as "free".
     * @param {number} params.taxRate - VAT percent for this line, as a number (19 means 19 %). Stored for the order to use — no total in this app includes tax.
     * @param {CartItemType} params.type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} params.unit - The unit the quantity is counted in. Display and ERP hand-over only — this app converts nothing.
     * @param {number} params.unitPrice - Net price of one unit — line_total is always derived from it, never sent. Part of the merge identity: the same article at a different price opens a new line rather than averaging into the old one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsItemsCreate(params: { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number }): Promise<Models.Error>;
    /**
     * Adds one line to an ACTIVE cart — the add-to-basket call. `name` or `sku` is required (a line sent with only a SKU takes the SKU as its name, so a line always has something to show) and `quantity` must be greater than zero; everything else defaults, including the currency, which falls back to the cart's. The one thing that surprises a caller: a plain product line with the same product/sku AND the same `unit_price` as a line already in the cart does not open a second row — its quantity is added to that line, and the 201 names a row that already existed. Price is part of that identity on purpose, so a changed price never averages into an old line. A configured or custom line always stands alone. The cart's `item_count` (the sum of QUANTITIES) and `subtotal` are recomputed before the answer, and `max_items_per_cart` / `max_quantity_per_line` are checked on the RESULT of the merge (422), so ten calls of one piece cannot walk past a limit one call of ten would hit.
     *
     * @param {string} cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {object} configuration - What was configured on this line, in the configurator's own vocabulary — this app stores it and reads nothing out of it. Its mere PRESENCE is behaviour: a line that carries a configuration never merges with another, because two differently configured units of the same article are not one line. Keys are the configurator's; the example is one shape, not the shape.
     * @param {string} currency - ISO 4217 code. Defaults to the cart's currency.
     * @param {object} metadata - Free-form data the storefront hangs on the line. Stored and returned verbatim; no key in here is read by this app.
     * @param {string} name - What the line reads as on the cart page. Falls back to 'sku' when omitted, so a line always has something to show.
     * @param {number} position - Sort order within the cart, ascending. Default 0 when adding a line; in a bulk replace the payload order fills it in.
     * @param {string} productId - The catalogue product, when the line comes from one. Part of the merge identity: same product, same price, one line.
     * @param {number} quantity - How much of it — default 1. Fractional is legal (2.5 m of cable); zero and negative are not. On a plain product line that merges into an existing one, this is ADDED to what is already there, and max_quantity_per_line is checked on the result.
     * @param {string} sku - The article number, exactly as the merchant knows it. Free text — this app does not resolve it against the catalogue — and part of the merge identity together with product_id and unit_price. The example only shows the shape of a real article number; nothing here enforces one.
     * @param {object} snapshot - The product as the buyer was shown it when this line was added — the cart's own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as "free".
     * @param {number} taxRate - VAT percent for this line, as a number (19 means 19 %). Stored for the order to use — no total in this app includes tax.
     * @param {CartItemType} type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} unit - The unit the quantity is counted in. Display and ERP hand-over only — this app converts nothing.
     * @param {number} unitPrice - Net price of one unit — line_total is always derived from it, never sent. Part of the merge identity: the same article at a different price opens a new line rather than averaging into the old one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsCreate(cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number): Promise<Models.Error>;
    cartsItemsCreate(
        paramsOrFirst: { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number } | string,
        ...rest: [(object)?, (string)?, (object)?, (string)?, (number)?, (string)?, (number)?, (string)?, (object)?, (number)?, (CartItemType)?, (string)?, (number)?]    
    ): Promise<Models.Error> {
        let params: { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                configuration: rest[0] as object,
                currency: rest[1] as string,
                metadata: rest[2] as object,
                name: rest[3] as string,
                position: rest[4] as number,
                productId: rest[5] as string,
                quantity: rest[6] as number,
                sku: rest[7] as string,
                snapshot: rest[8] as object,
                taxRate: rest[9] as number,
                type: rest[10] as CartItemType,
                unit: rest[11] as string,
                unitPrice: rest[12] as number            
            };
        }
        
        const cartId = params.cartId;
        const configuration = params.configuration;
        const currency = params.currency;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const snapshot = params.snapshot;
        const taxRate = params.taxRate;
        const type = params.type;
        const unit = params.unit;
        const unitPrice = params.unitPrice;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cart_id}', cartId);
        const apiPayload: Payload = {};
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
        if (typeof snapshot !== 'undefined') {
            apiPayload['snapshot'] = Client.toWireKeys(snapshot, {"unitPrice":{"wire":"unit_price","children":null}});
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
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
     * Set semantics: the payload IS the cart. Every existing line is dropped and the payload is written in its place, so a line left out of the array is a line removed — this is the storefront sync, not a bulk add, and carts.items.create is what adds. Lines are numbered by their place in the array unless they carry their own `position`, and nothing merges: two identical lines in one payload stay two rows. The limits are checked against the payload BEFORE a single existing line is destroyed, so a sync refused with 422 leaves the cart exactly as it was. The cart must be active, and its totals are recomputed before the answer.
     *
     * @param {string} params.cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {Models.CartItemCreateRequest[]} params.items - The complete new item set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsItemsReplace(params: { cartId: string, items: Models.CartItemCreateRequest[] }): Promise<Models.Error>;
    /**
     * Set semantics: the payload IS the cart. Every existing line is dropped and the payload is written in its place, so a line left out of the array is a line removed — this is the storefront sync, not a bulk add, and carts.items.create is what adds. Lines are numbered by their place in the array unless they carry their own `position`, and nothing merges: two identical lines in one payload stay two rows. The limits are checked against the payload BEFORE a single existing line is destroyed, so a sync refused with 422 leaves the cart exactly as it was. The cart must be active, and its totals are recomputed before the answer.
     *
     * @param {string} cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {Models.CartItemCreateRequest[]} items - The complete new item set (set semantics).
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsReplace(cartId: string, items: Models.CartItemCreateRequest[]): Promise<Models.Error>;
    cartsItemsReplace(
        paramsOrFirst: { cartId: string, items: Models.CartItemCreateRequest[] } | string,
        ...rest: [(Models.CartItemCreateRequest[])?]    
    ): Promise<Models.Error> {
        let params: { cartId: string, items: Models.CartItemCreateRequest[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, items: Models.CartItemCreateRequest[] };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                items: rest[0] as Models.CartItemCreateRequest[]            
            };
        }
        
        const cartId = params.cartId;
        const items = params.items;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/carts/{cart_id}/items'.replace('{cart_id}', cartId);
        const apiPayload: Payload = {};
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"productId":{"wire":"product_id","children":null},"snapshot":{"wire":"snapshot","children":{"unitPrice":{"wire":"unit_price","children":null}}},"taxRate":{"wire":"tax_rate","children":null},"unitPrice":{"wire":"unit_price","children":null}});
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
     * Removes one line from an ACTIVE cart and recomputes the owning cart's `item_count` and `subtotal` before answering. This is how a quantity reaches zero: `quantity` is constrained to be greater than zero, so "none of it" is a DELETE and never an update to 0. The cart in the path is part of the address — a line belonging to a different cart answers 404 and is left where it is. Deleting the last line leaves an empty cart, not a deleted one; the cart itself goes through carts.delete, which takes every line with it in one call.
     *
     * @param {string} params.cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} params.id - The line, by its id. The cart in the path is checked too: a line that belongs to a different cart answers 404, so an id guessed from another cart never resolves here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsItemsDelete(params: { cartId: string, id: string }): Promise<Models.Error>;
    /**
     * Removes one line from an ACTIVE cart and recomputes the owning cart's `item_count` and `subtotal` before answering. This is how a quantity reaches zero: `quantity` is constrained to be greater than zero, so "none of it" is a DELETE and never an update to 0. The cart in the path is part of the address — a line belonging to a different cart answers 404 and is left where it is. Deleting the last line leaves an empty cart, not a deleted one; the cart itself goes through carts.delete, which takes every line with it in one call.
     *
     * @param {string} cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} id - The line, by its id. The cart in the path is checked too: a line that belongs to a different cart answers 404, so an id guessed from another cart never resolves here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsDelete(cartId: string, id: string): Promise<Models.Error>;
    cartsItemsDelete(
        paramsOrFirst: { cartId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { cartId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cart_id}', cartId).replace('{id}', id);
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
     * One line, addressed through the cart that owns it. Both ids are checked, not just the line's: a line that exists but belongs to a different cart answers 404 rather than the row, so an id copied out of another cart never resolves here and a caller can trust that what came back is a line of the cart they asked about. The line carries both of its prices — the working `unit_price`, which a resync or a repricing job may have moved, and the `snapshot` the buyer was shown when the line was added — and its own `line_total`, which is always quantity × unit_price and never what a payload claimed. To read a whole cart's lines, list them: this route is for one known line.
     *
     * @param {string} params.cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} params.id - The line, by its id. The cart in the path is checked too: a line that belongs to a different cart answers 404, so an id guessed from another cart never resolves here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsItemsGet(params: { cartId: string, id: string }): Promise<Models.Error>;
    /**
     * One line, addressed through the cart that owns it. Both ids are checked, not just the line's: a line that exists but belongs to a different cart answers 404 rather than the row, so an id copied out of another cart never resolves here and a caller can trust that what came back is a line of the cart they asked about. The line carries both of its prices — the working `unit_price`, which a resync or a repricing job may have moved, and the `snapshot` the buyer was shown when the line was added — and its own `line_total`, which is always quantity × unit_price and never what a payload claimed. To read a whole cart's lines, list them: this route is for one known line.
     *
     * @param {string} cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} id - The line, by its id. The cart in the path is checked too: a line that belongs to a different cart answers 404, so an id guessed from another cart never resolves here.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsGet(cartId: string, id: string): Promise<Models.Error>;
    cartsItemsGet(
        paramsOrFirst: { cartId: string, id: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.Error> {
        let params: { cartId: string, id: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cart_id}', cartId).replace('{id}', id);
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
     * Changes one line of an ACTIVE cart — the quantity stepper on the cart page, and the route a repricing job writes through. The fields sent are merged onto the stored line and the whole line is validated again, so `quantity` must still be greater than zero and `type` still one of the three. `line_total` is not settable: it is recomputed as quantity × unit_price, and the cart's `item_count` and `subtotal` follow before the answer. What it will NOT do is merge — only carts.items.create folds one line into another, so giving this line the same product and price as a sibling leaves two rows standing, and the next add joins whichever it matches. `max_quantity_per_line` is enforced on the result (422). A quantity of zero is not the way to remove a line; the delete is.
     *
     * @param {string} params.cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} params.id - The line, by its id. The cart in the path is checked too: a line that belongs to a different cart answers 404, so an id guessed from another cart never resolves here.
     * @param {object} params.configuration - What was configured on this line, in the configurator's own vocabulary — this app stores it and reads nothing out of it. Its mere PRESENCE is behaviour: a line that carries a configuration never merges with another, because two differently configured units of the same article are not one line. Keys are the configurator's; the example is one shape, not the shape.
     * @param {string} params.currency - ISO 4217 code. Defaults to the cart's currency.
     * @param {object} params.metadata - Free-form data the storefront hangs on the line. Stored and returned verbatim; no key in here is read by this app.
     * @param {string} params.name - What the line reads as on the cart page. Falls back to 'sku' when omitted, so a line always has something to show.
     * @param {number} params.position - Sort order within the cart, ascending. Default 0 when adding a line; in a bulk replace the payload order fills it in.
     * @param {string} params.productId - The catalogue product, when the line comes from one. Part of the merge identity: same product, same price, one line.
     * @param {number} params.quantity - How much of it — default 1. Fractional is legal (2.5 m of cable); zero and negative are not. On a plain product line that merges into an existing one, this is ADDED to what is already there, and max_quantity_per_line is checked on the result.
     * @param {string} params.sku - The article number, exactly as the merchant knows it. Free text — this app does not resolve it against the catalogue — and part of the merge identity together with product_id and unit_price. The example only shows the shape of a real article number; nothing here enforces one.
     * @param {object} params.snapshot - The product as the buyer was shown it when this line was added — the cart's own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as "free".
     * @param {number} params.taxRate - VAT percent for this line, as a number (19 means 19 %). Stored for the order to use — no total in this app includes tax.
     * @param {CartItemType} params.type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} params.unit - The unit the quantity is counted in. Display and ERP hand-over only — this app converts nothing.
     * @param {number} params.unitPrice - Net price of one unit — line_total is always derived from it, never sent. Part of the merge identity: the same article at a different price opens a new line rather than averaging into the old one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     */
    cartsItemsUpdate(params: { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number }): Promise<Models.Error>;
    /**
     * Changes one line of an ACTIVE cart — the quantity stepper on the cart page, and the route a repricing job writes through. The fields sent are merged onto the stored line and the whole line is validated again, so `quantity` must still be greater than zero and `type` still one of the three. `line_total` is not settable: it is recomputed as quantity × unit_price, and the cart's `item_count` and `subtotal` follow before the answer. What it will NOT do is merge — only carts.items.create folds one line into another, so giving this line the same product and price as a sibling leaves two rows standing, and the next add joins whichever it matches. `max_quantity_per_line` is enforced on the result (422). A quantity of zero is not the way to remove a line; the delete is.
     *
     * @param {string} cartId - The cart the line belongs to, by its id. An id no cart in this tenant has answers 404 rather than an empty list, so a wrong cart is never mistaken for an empty one.
     * @param {string} id - The line, by its id. The cart in the path is checked too: a line that belongs to a different cart answers 404, so an id guessed from another cart never resolves here.
     * @param {object} configuration - What was configured on this line, in the configurator's own vocabulary — this app stores it and reads nothing out of it. Its mere PRESENCE is behaviour: a line that carries a configuration never merges with another, because two differently configured units of the same article are not one line. Keys are the configurator's; the example is one shape, not the shape.
     * @param {string} currency - ISO 4217 code. Defaults to the cart's currency.
     * @param {object} metadata - Free-form data the storefront hangs on the line. Stored and returned verbatim; no key in here is read by this app.
     * @param {string} name - What the line reads as on the cart page. Falls back to 'sku' when omitted, so a line always has something to show.
     * @param {number} position - Sort order within the cart, ascending. Default 0 when adding a line; in a bulk replace the payload order fills it in.
     * @param {string} productId - The catalogue product, when the line comes from one. Part of the merge identity: same product, same price, one line.
     * @param {number} quantity - How much of it — default 1. Fractional is legal (2.5 m of cable); zero and negative are not. On a plain product line that merges into an existing one, this is ADDED to what is already there, and max_quantity_per_line is checked on the result.
     * @param {string} sku - The article number, exactly as the merchant knows it. Free text — this app does not resolve it against the catalogue — and part of the merge identity together with product_id and unit_price. The example only shows the shape of a real article number; nothing here enforces one.
     * @param {object} snapshot - The product as the buyer was shown it when this line was added — the cart's own copy, so it stays honest when the catalogue moves underneath it. Free-form apart from the price: conversion reads `unit_price` (or `price` as a fallback) and nothing else. A snapshot without a readable price leaves the line alone in both price modes, which is deliberate — a missing snapshot must never be read as "free".
     * @param {number} taxRate - VAT percent for this line, as a number (19 means 19 %). Stored for the order to use — no total in this app includes tax.
     * @param {CartItemType} type - Line type (default 'product'). Plain product lines merge by product+price; configurations always stand alone.
     * @param {string} unit - The unit the quantity is counted in. Display and ERP hand-over only — this app converts nothing.
     * @param {number} unitPrice - Net price of one unit — line_total is always derived from it, never sent. Part of the merge identity: the same article at a different price opens a new line rather than averaging into the old one.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Error>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    cartsItemsUpdate(cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number): Promise<Models.Error>;
    cartsItemsUpdate(
        paramsOrFirst: { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number } | string,
        ...rest: [(string)?, (object)?, (string)?, (object)?, (string)?, (number)?, (string)?, (number)?, (string)?, (object)?, (number)?, (CartItemType)?, (string)?, (number)?]    
    ): Promise<Models.Error> {
        let params: { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, id: string, configuration?: object, currency?: string, metadata?: object, name?: string, position?: number, productId?: string, quantity?: number, sku?: string, snapshot?: object, taxRate?: number, type?: CartItemType, unit?: string, unitPrice?: number };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                id: rest[0] as string,
                configuration: rest[1] as object,
                currency: rest[2] as string,
                metadata: rest[3] as object,
                name: rest[4] as string,
                position: rest[5] as number,
                productId: rest[6] as string,
                quantity: rest[7] as number,
                sku: rest[8] as string,
                snapshot: rest[9] as object,
                taxRate: rest[10] as number,
                type: rest[11] as CartItemType,
                unit: rest[12] as string,
                unitPrice: rest[13] as number            
            };
        }
        
        const cartId = params.cartId;
        const id = params.id;
        const configuration = params.configuration;
        const currency = params.currency;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const productId = params.productId;
        const quantity = params.quantity;
        const sku = params.sku;
        const snapshot = params.snapshot;
        const taxRate = params.taxRate;
        const type = params.type;
        const unit = params.unit;
        const unitPrice = params.unitPrice;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/carts/{cart_id}/items/{id}'.replace('{cart_id}', cartId).replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
        if (typeof snapshot !== 'undefined') {
            apiPayload['snapshot'] = Client.toWireKeys(snapshot, {"unitPrice":{"wire":"unit_price","children":null}});
        }
        if (typeof taxRate !== 'undefined') {
            apiPayload['tax_rate'] = taxRate;
        }
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof unit !== 'undefined') {
            apiPayload['unit'] = unit;
        }
        if (typeof unitPrice !== 'undefined') {
            apiPayload['unit_price'] = unitPrice;
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
