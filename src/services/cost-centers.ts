import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Conditions } from '../enums/conditions';
import { CostCentersRestrictionsCreateType } from '../enums/cost-centers-restrictions-create-type';

export class CostCenters {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    costCentersBudgetChangesList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetChangesList(limit?: number, offset?: number, order?: string): Promise<{}>;
    costCentersBudgetChangesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/cost-centers/budget-changes';
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
     * @returns {Promise<Models.BudgetChange>}
     */
    costCentersBudgetChangesGet(params: { id: string }): Promise<Models.BudgetChange>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetChange>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetChangesGet(id: string): Promise<Models.BudgetChange>;
    costCentersBudgetChangesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.BudgetChange> {
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

        const apiPath = '/v1/cost-centers/budget-changes/{id}'.replace('{id}', id);
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    costCentersBudgetsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    costCentersBudgetsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/cost-centers/budgets';
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
     * @param {string} params.costCenterId - 
     * @param {string} params.name - 
     * @param {boolean} params.active - 
     * @param {number} params.initialValue - 
     * @param {object} params.metadata - 
     * @param {number} params.periodLength - 
     * @param {string} params.periodStart - 
     * @param {boolean} params.recurring - 
     * @param {number} params.sequence - 
     * @param {object} params.takeover - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Budget>}
     */
    costCentersBudgetsCreate(params: { costCenterId: string, name: string, active?: boolean, initialValue?: number, metadata?: object, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object }): Promise<Models.Budget>;
    /**
     *
     * @param {string} costCenterId - 
     * @param {string} name - 
     * @param {boolean} active - 
     * @param {number} initialValue - 
     * @param {object} metadata - 
     * @param {number} periodLength - 
     * @param {string} periodStart - 
     * @param {boolean} recurring - 
     * @param {number} sequence - 
     * @param {object} takeover - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Budget>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetsCreate(costCenterId: string, name: string, active?: boolean, initialValue?: number, metadata?: object, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object): Promise<Models.Budget>;
    costCentersBudgetsCreate(
        paramsOrFirst: { costCenterId: string, name: string, active?: boolean, initialValue?: number, metadata?: object, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object } | string,
        ...rest: [(string)?, (boolean)?, (number)?, (object)?, (number)?, (string)?, (boolean)?, (number)?, (object)?]    
    ): Promise<Models.Budget> {
        let params: { costCenterId: string, name: string, active?: boolean, initialValue?: number, metadata?: object, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { costCenterId: string, name: string, active?: boolean, initialValue?: number, metadata?: object, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object };
        } else {
            params = {
                costCenterId: paramsOrFirst as string,
                name: rest[0] as string,
                active: rest[1] as boolean,
                initialValue: rest[2] as number,
                metadata: rest[3] as object,
                periodLength: rest[4] as number,
                periodStart: rest[5] as string,
                recurring: rest[6] as boolean,
                sequence: rest[7] as number,
                takeover: rest[8] as object            
            };
        }
        
        const costCenterId = params.costCenterId;
        const name = params.name;
        const active = params.active;
        const initialValue = params.initialValue;
        const metadata = params.metadata;
        const periodLength = params.periodLength;
        const periodStart = params.periodStart;
        const recurring = params.recurring;
        const sequence = params.sequence;
        const takeover = params.takeover;

        if (typeof costCenterId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "costCenterId"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/cost-centers/budgets';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof initialValue !== 'undefined') {
            apiPayload['initial_value'] = initialValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof periodLength !== 'undefined') {
            apiPayload['period_length'] = periodLength;
        }
        if (typeof periodStart !== 'undefined') {
            apiPayload['period_start'] = periodStart;
        }
        if (typeof recurring !== 'undefined') {
            apiPayload['recurring'] = recurring;
        }
        if (typeof sequence !== 'undefined') {
            apiPayload['sequence'] = sequence;
        }
        if (typeof takeover !== 'undefined') {
            apiPayload['takeover'] = takeover;
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
     * @param {string} params.today - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetRolloverResult>}
     */
    costCentersBudgetsRollover(params?: { today?: string }): Promise<Models.BudgetRolloverResult>;
    /**
     *
     * @param {string} today - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetRolloverResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetsRollover(today?: string): Promise<Models.BudgetRolloverResult>;
    costCentersBudgetsRollover(
        paramsOrFirst?: { today?: string } | string    
    ): Promise<Models.BudgetRolloverResult> {
        let params: { today?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { today?: string };
        } else {
            params = {
                today: paramsOrFirst as string            
            };
        }
        
        const today = params.today;


        const apiPath = '/v1/cost-centers/budgets/rollover/run';
        const apiPayload: Payload = {};
        if (typeof today !== 'undefined') {
            apiPayload['today'] = today;
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
     * @returns {Promise<Models.Budget>}
     */
    costCentersBudgetsGet(params: { id: string }): Promise<Models.Budget>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Budget>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetsGet(id: string): Promise<Models.Budget>;
    costCentersBudgetsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Budget> {
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

        const apiPath = '/v1/cost-centers/budgets/{id}'.replace('{id}', id);
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
     * @param {boolean} params.active - 
     * @param {string} params.costCenterId - 
     * @param {number} params.initialValue - 
     * @param {object} params.metadata - 
     * @param {string} params.name - 
     * @param {number} params.periodLength - 
     * @param {string} params.periodStart - 
     * @param {boolean} params.recurring - 
     * @param {number} params.sequence - 
     * @param {object} params.takeover - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Budget>}
     */
    costCentersBudgetsUpdate(params: { id: string, active?: boolean, costCenterId?: string, initialValue?: number, metadata?: object, name?: string, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object }): Promise<Models.Budget>;
    /**
     *
     * @param {string} id - 
     * @param {boolean} active - 
     * @param {string} costCenterId - 
     * @param {number} initialValue - 
     * @param {object} metadata - 
     * @param {string} name - 
     * @param {number} periodLength - 
     * @param {string} periodStart - 
     * @param {boolean} recurring - 
     * @param {number} sequence - 
     * @param {object} takeover - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Budget>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetsUpdate(id: string, active?: boolean, costCenterId?: string, initialValue?: number, metadata?: object, name?: string, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object): Promise<Models.Budget>;
    costCentersBudgetsUpdate(
        paramsOrFirst: { id: string, active?: boolean, costCenterId?: string, initialValue?: number, metadata?: object, name?: string, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object } | string,
        ...rest: [(boolean)?, (string)?, (number)?, (object)?, (string)?, (number)?, (string)?, (boolean)?, (number)?, (object)?]    
    ): Promise<Models.Budget> {
        let params: { id: string, active?: boolean, costCenterId?: string, initialValue?: number, metadata?: object, name?: string, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, costCenterId?: string, initialValue?: number, metadata?: object, name?: string, periodLength?: number, periodStart?: string, recurring?: boolean, sequence?: number, takeover?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                costCenterId: rest[1] as string,
                initialValue: rest[2] as number,
                metadata: rest[3] as object,
                name: rest[4] as string,
                periodLength: rest[5] as number,
                periodStart: rest[6] as string,
                recurring: rest[7] as boolean,
                sequence: rest[8] as number,
                takeover: rest[9] as object            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const costCenterId = params.costCenterId;
        const initialValue = params.initialValue;
        const metadata = params.metadata;
        const name = params.name;
        const periodLength = params.periodLength;
        const periodStart = params.periodStart;
        const recurring = params.recurring;
        const sequence = params.sequence;
        const takeover = params.takeover;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/cost-centers/budgets/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof initialValue !== 'undefined') {
            apiPayload['initial_value'] = initialValue;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof periodLength !== 'undefined') {
            apiPayload['period_length'] = periodLength;
        }
        if (typeof periodStart !== 'undefined') {
            apiPayload['period_start'] = periodStart;
        }
        if (typeof recurring !== 'undefined') {
            apiPayload['recurring'] = recurring;
        }
        if (typeof sequence !== 'undefined') {
            apiPayload['sequence'] = sequence;
        }
        if (typeof takeover !== 'undefined') {
            apiPayload['takeover'] = takeover;
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
     * @param {string} params.id - 
     * @param {string} params.actor - 
     * @param {number} params.amount - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @param {number} params.target - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetAdjustResult>}
     */
    costCentersBudgetsAdjust(params: { id: string, actor: string, amount?: number, currency?: string, note?: string, target?: number }): Promise<Models.BudgetAdjustResult>;
    /**
     *
     * @param {string} id - 
     * @param {string} actor - 
     * @param {number} amount - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @param {number} target - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetAdjustResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersBudgetsAdjust(id: string, actor: string, amount?: number, currency?: string, note?: string, target?: number): Promise<Models.BudgetAdjustResult>;
    costCentersBudgetsAdjust(
        paramsOrFirst: { id: string, actor: string, amount?: number, currency?: string, note?: string, target?: number } | string,
        ...rest: [(string)?, (number)?, (string)?, (string)?, (number)?]    
    ): Promise<Models.BudgetAdjustResult> {
        let params: { id: string, actor: string, amount?: number, currency?: string, note?: string, target?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, actor: string, amount?: number, currency?: string, note?: string, target?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                actor: rest[0] as string,
                amount: rest[1] as number,
                currency: rest[2] as string,
                note: rest[3] as string,
                target: rest[4] as number            
            };
        }
        
        const id = params.id;
        const actor = params.actor;
        const amount = params.amount;
        const currency = params.currency;
        const note = params.note;
        const target = params.target;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof actor === 'undefined') {
            throw new RevenexxException('Missing required parameter: "actor"');
        }

        const apiPath = '/v1/cost-centers/budgets/{id}/adjust'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof target !== 'undefined') {
            apiPayload['target'] = target;
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
     * @param {object[]} params.allocations - 
     * @param {string} params.orderId - 
     * @param {string} params.contactId - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     */
    costCentersCommit(params: { allocations: object[], orderId: string, contactId?: string, currency?: string, note?: string }): Promise<Models.BudgetMovementResult>;
    /**
     *
     * @param {object[]} allocations - 
     * @param {string} orderId - 
     * @param {string} contactId - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersCommit(allocations: object[], orderId: string, contactId?: string, currency?: string, note?: string): Promise<Models.BudgetMovementResult>;
    costCentersCommit(
        paramsOrFirst: { allocations: object[], orderId: string, contactId?: string, currency?: string, note?: string } | object[],
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.BudgetMovementResult> {
        let params: { allocations: object[], orderId: string, contactId?: string, currency?: string, note?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('allocations' in paramsOrFirst || 'orderId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'note' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { allocations: object[], orderId: string, contactId?: string, currency?: string, note?: string };
        } else {
            params = {
                allocations: paramsOrFirst as object[],
                orderId: rest[0] as string,
                contactId: rest[1] as string,
                currency: rest[2] as string,
                note: rest[3] as string            
            };
        }
        
        const allocations = params.allocations;
        const orderId = params.orderId;
        const contactId = params.contactId;
        const currency = params.currency;
        const note = params.note;

        if (typeof allocations === 'undefined') {
            throw new RevenexxException('Missing required parameter: "allocations"');
        }
        if (typeof orderId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "orderId"');
        }

        const apiPath = '/v1/cost-centers/commit';
        const apiPayload: Payload = {};
        if (typeof allocations !== 'undefined') {
            apiPayload['allocations'] = Client.toWireKeys(allocations, {"costCenterId":{"wire":"cost_center_id","children":null}});
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
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
     * @param {string} params.purchaseRequestId - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @param {string} params.orderId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     */
    costCentersConfirm(params: { purchaseRequestId: string, currency?: string, note?: string, orderId?: string }): Promise<Models.BudgetMovementResult>;
    /**
     *
     * @param {string} purchaseRequestId - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @param {string} orderId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersConfirm(purchaseRequestId: string, currency?: string, note?: string, orderId?: string): Promise<Models.BudgetMovementResult>;
    costCentersConfirm(
        paramsOrFirst: { purchaseRequestId: string, currency?: string, note?: string, orderId?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.BudgetMovementResult> {
        let params: { purchaseRequestId: string, currency?: string, note?: string, orderId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { purchaseRequestId: string, currency?: string, note?: string, orderId?: string };
        } else {
            params = {
                purchaseRequestId: paramsOrFirst as string,
                currency: rest[0] as string,
                note: rest[1] as string,
                orderId: rest[2] as string            
            };
        }
        
        const purchaseRequestId = params.purchaseRequestId;
        const currency = params.currency;
        const note = params.note;
        const orderId = params.orderId;

        if (typeof purchaseRequestId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "purchaseRequestId"');
        }

        const apiPath = '/v1/cost-centers/confirm';
        const apiPayload: Payload = {};
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    costCentersContactLimitsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersContactLimitsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    costCentersContactLimitsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/cost-centers/contact-limits';
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
     * @param {string} params.contactId - 
     * @param {string} params.currency - 
     * @param {object} params.metadata - 
     * @param {number} params.monetaryLimit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactLimit>}
     */
    costCentersContactLimitsCreate(params: { contactId: string, currency?: string, metadata?: object, monetaryLimit?: number }): Promise<Models.ContactLimit>;
    /**
     *
     * @param {string} contactId - 
     * @param {string} currency - 
     * @param {object} metadata - 
     * @param {number} monetaryLimit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactLimit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersContactLimitsCreate(contactId: string, currency?: string, metadata?: object, monetaryLimit?: number): Promise<Models.ContactLimit>;
    costCentersContactLimitsCreate(
        paramsOrFirst: { contactId: string, currency?: string, metadata?: object, monetaryLimit?: number } | string,
        ...rest: [(string)?, (object)?, (number)?]    
    ): Promise<Models.ContactLimit> {
        let params: { contactId: string, currency?: string, metadata?: object, monetaryLimit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, currency?: string, metadata?: object, monetaryLimit?: number };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                currency: rest[0] as string,
                metadata: rest[1] as object,
                monetaryLimit: rest[2] as number            
            };
        }
        
        const contactId = params.contactId;
        const currency = params.currency;
        const metadata = params.metadata;
        const monetaryLimit = params.monetaryLimit;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }

        const apiPath = '/v1/cost-centers/contact-limits';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof monetaryLimit !== 'undefined') {
            apiPayload['monetary_limit'] = monetaryLimit;
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
    costCentersContactLimitsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersContactLimitsDelete(id: string): Promise<{}>;
    costCentersContactLimitsDelete(
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

        const apiPath = '/v1/cost-centers/contact-limits/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.ContactLimit>}
     */
    costCentersContactLimitsGet(params: { id: string }): Promise<Models.ContactLimit>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactLimit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersContactLimitsGet(id: string): Promise<Models.ContactLimit>;
    costCentersContactLimitsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ContactLimit> {
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

        const apiPath = '/v1/cost-centers/contact-limits/{id}'.replace('{id}', id);
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
     * @param {string} params.contactId - 
     * @param {string} params.currency - 
     * @param {object} params.metadata - 
     * @param {number} params.monetaryLimit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactLimit>}
     */
    costCentersContactLimitsUpdate(params: { id: string, contactId?: string, currency?: string, metadata?: object, monetaryLimit?: number }): Promise<Models.ContactLimit>;
    /**
     *
     * @param {string} id - 
     * @param {string} contactId - 
     * @param {string} currency - 
     * @param {object} metadata - 
     * @param {number} monetaryLimit - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactLimit>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersContactLimitsUpdate(id: string, contactId?: string, currency?: string, metadata?: object, monetaryLimit?: number): Promise<Models.ContactLimit>;
    costCentersContactLimitsUpdate(
        paramsOrFirst: { id: string, contactId?: string, currency?: string, metadata?: object, monetaryLimit?: number } | string,
        ...rest: [(string)?, (string)?, (object)?, (number)?]    
    ): Promise<Models.ContactLimit> {
        let params: { id: string, contactId?: string, currency?: string, metadata?: object, monetaryLimit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string, currency?: string, metadata?: object, monetaryLimit?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                currency: rest[1] as string,
                metadata: rest[2] as object,
                monetaryLimit: rest[3] as number            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const currency = params.currency;
        const metadata = params.metadata;
        const monetaryLimit = params.monetaryLimit;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/cost-centers/contact-limits/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof monetaryLimit !== 'undefined') {
            apiPayload['monetary_limit'] = monetaryLimit;
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} params.punchoutAccountCode - Code of the punchout account the list is read for. Centres a punchout restriction keeps out of reach of that account are left out (and the total counts only what is returned). Omit for the administrative list, which holds nothing back. A value that is not a non-empty string is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    costCentersCostCentersList(params?: { limit?: number, offset?: number, order?: string, punchoutAccountCode?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @param {string} punchoutAccountCode - Code of the punchout account the list is read for. Centres a punchout restriction keeps out of reach of that account are left out (and the total counts only what is returned). Omit for the administrative list, which holds nothing back. A value that is not a non-empty string is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersCostCentersList(limit?: number, offset?: number, order?: string, punchoutAccountCode?: string): Promise<{}>;
    costCentersCostCentersList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, punchoutAccountCode?: string } | number,
        ...rest: [(number)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, punchoutAccountCode?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, punchoutAccountCode?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                punchoutAccountCode: rest[2] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const punchoutAccountCode = params.punchoutAccountCode;


        const apiPath = '/v1/cost-centers/cost-centers';
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
        if (typeof punchoutAccountCode !== 'undefined') {
            apiPayload['punchout_account_code'] = punchoutAccountCode;
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
     * @param {string} params.code - 
     * @param {string} params.name - 
     * @param {string} params.accountableContactId - 
     * @param {boolean} params.active - 
     * @param {string} params.currency - 
     * @param {object} params.metadata - 
     * @param {string} params.organizationId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenter>}
     */
    costCentersCostCentersCreate(params: { code: string, name: string, accountableContactId?: string, active?: boolean, currency?: string, metadata?: object, organizationId?: string }): Promise<Models.CostCenter>;
    /**
     *
     * @param {string} code - 
     * @param {string} name - 
     * @param {string} accountableContactId - 
     * @param {boolean} active - 
     * @param {string} currency - 
     * @param {object} metadata - 
     * @param {string} organizationId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenter>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersCostCentersCreate(code: string, name: string, accountableContactId?: string, active?: boolean, currency?: string, metadata?: object, organizationId?: string): Promise<Models.CostCenter>;
    costCentersCostCentersCreate(
        paramsOrFirst: { code: string, name: string, accountableContactId?: string, active?: boolean, currency?: string, metadata?: object, organizationId?: string } | string,
        ...rest: [(string)?, (string)?, (boolean)?, (string)?, (object)?, (string)?]    
    ): Promise<Models.CostCenter> {
        let params: { code: string, name: string, accountableContactId?: string, active?: boolean, currency?: string, metadata?: object, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { code: string, name: string, accountableContactId?: string, active?: boolean, currency?: string, metadata?: object, organizationId?: string };
        } else {
            params = {
                code: paramsOrFirst as string,
                name: rest[0] as string,
                accountableContactId: rest[1] as string,
                active: rest[2] as boolean,
                currency: rest[3] as string,
                metadata: rest[4] as object,
                organizationId: rest[5] as string            
            };
        }
        
        const code = params.code;
        const name = params.name;
        const accountableContactId = params.accountableContactId;
        const active = params.active;
        const currency = params.currency;
        const metadata = params.metadata;
        const organizationId = params.organizationId;

        if (typeof code === 'undefined') {
            throw new RevenexxException('Missing required parameter: "code"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/cost-centers/cost-centers';
        const apiPayload: Payload = {};
        if (typeof accountableContactId !== 'undefined') {
            apiPayload['accountable_contact_id'] = accountableContactId;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
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
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
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
    costCentersCostCentersDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersCostCentersDelete(id: string): Promise<{}>;
    costCentersCostCentersDelete(
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

        const apiPath = '/v1/cost-centers/cost-centers/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.CostCenter>}
     */
    costCentersCostCentersGet(params: { id: string }): Promise<Models.CostCenter>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenter>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersCostCentersGet(id: string): Promise<Models.CostCenter>;
    costCentersCostCentersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CostCenter> {
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

        const apiPath = '/v1/cost-centers/cost-centers/{id}'.replace('{id}', id);
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
     * @param {string} params.accountableContactId - 
     * @param {boolean} params.active - 
     * @param {string} params.code - 
     * @param {string} params.currency - 
     * @param {object} params.metadata - 
     * @param {string} params.name - 
     * @param {string} params.organizationId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenter>}
     */
    costCentersCostCentersUpdate(params: { id: string, accountableContactId?: string, active?: boolean, code?: string, currency?: string, metadata?: object, name?: string, organizationId?: string }): Promise<Models.CostCenter>;
    /**
     *
     * @param {string} id - 
     * @param {string} accountableContactId - 
     * @param {boolean} active - 
     * @param {string} code - 
     * @param {string} currency - 
     * @param {object} metadata - 
     * @param {string} name - 
     * @param {string} organizationId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenter>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersCostCentersUpdate(id: string, accountableContactId?: string, active?: boolean, code?: string, currency?: string, metadata?: object, name?: string, organizationId?: string): Promise<Models.CostCenter>;
    costCentersCostCentersUpdate(
        paramsOrFirst: { id: string, accountableContactId?: string, active?: boolean, code?: string, currency?: string, metadata?: object, name?: string, organizationId?: string } | string,
        ...rest: [(string)?, (boolean)?, (string)?, (string)?, (object)?, (string)?, (string)?]    
    ): Promise<Models.CostCenter> {
        let params: { id: string, accountableContactId?: string, active?: boolean, code?: string, currency?: string, metadata?: object, name?: string, organizationId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, accountableContactId?: string, active?: boolean, code?: string, currency?: string, metadata?: object, name?: string, organizationId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                accountableContactId: rest[0] as string,
                active: rest[1] as boolean,
                code: rest[2] as string,
                currency: rest[3] as string,
                metadata: rest[4] as object,
                name: rest[5] as string,
                organizationId: rest[6] as string            
            };
        }
        
        const id = params.id;
        const accountableContactId = params.accountableContactId;
        const active = params.active;
        const code = params.code;
        const currency = params.currency;
        const metadata = params.metadata;
        const name = params.name;
        const organizationId = params.organizationId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/cost-centers/cost-centers/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof accountableContactId !== 'undefined') {
            apiPayload['accountable_contact_id'] = accountableContactId;
        }
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof code !== 'undefined') {
            apiPayload['code'] = code;
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
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
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
     * @param {string} params.id - 
     * @param {number} params.amount - 
     * @param {string} params.actor - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @param {string} params.orderId - 
     * @param {string} params.purchaseRequestId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenterConsumeResult>}
     */
    costCentersCostCentersConsume(params: { id: string, amount: number, actor?: string, currency?: string, note?: string, orderId?: string, purchaseRequestId?: string }): Promise<Models.CostCenterConsumeResult>;
    /**
     *
     * @param {string} id - 
     * @param {number} amount - 
     * @param {string} actor - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @param {string} orderId - 
     * @param {string} purchaseRequestId - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenterConsumeResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersCostCentersConsume(id: string, amount: number, actor?: string, currency?: string, note?: string, orderId?: string, purchaseRequestId?: string): Promise<Models.CostCenterConsumeResult>;
    costCentersCostCentersConsume(
        paramsOrFirst: { id: string, amount: number, actor?: string, currency?: string, note?: string, orderId?: string, purchaseRequestId?: string } | string,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.CostCenterConsumeResult> {
        let params: { id: string, amount: number, actor?: string, currency?: string, note?: string, orderId?: string, purchaseRequestId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, amount: number, actor?: string, currency?: string, note?: string, orderId?: string, purchaseRequestId?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                amount: rest[0] as number,
                actor: rest[1] as string,
                currency: rest[2] as string,
                note: rest[3] as string,
                orderId: rest[4] as string,
                purchaseRequestId: rest[5] as string            
            };
        }
        
        const id = params.id;
        const amount = params.amount;
        const actor = params.actor;
        const currency = params.currency;
        const note = params.note;
        const orderId = params.orderId;
        const purchaseRequestId = params.purchaseRequestId;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof amount === 'undefined') {
            throw new RevenexxException('Missing required parameter: "amount"');
        }

        const apiPath = '/v1/cost-centers/cost-centers/{id}/consume'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof orderId !== 'undefined') {
            apiPayload['order_id'] = orderId;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
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
     * @param {number} params.amount - 
     * @param {Conditions[]} params.conditions - 
     * @param {string} params.contactId - 
     * @param {string} params.costCenterId - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.punchoutAccountCode - Code of the punchout account the request is made in. Omit outside a punchout session: a cost centre restricted with mode 'only' is then out of reach, and one restricted with 'except' is offered. A value that is not a non-empty string is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.EvaluateResult>}
     */
    costCentersEvaluate(params: { amount: number, conditions?: Conditions[], contactId?: string, costCenterId?: string, currency?: string, punchoutAccountCode?: string }): Promise<Models.EvaluateResult>;
    /**
     *
     * @param {number} amount - 
     * @param {Conditions[]} conditions - 
     * @param {string} contactId - 
     * @param {string} costCenterId - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} punchoutAccountCode - Code of the punchout account the request is made in. Omit outside a punchout session: a cost centre restricted with mode 'only' is then out of reach, and one restricted with 'except' is offered. A value that is not a non-empty string is refused with 400.
     * @throws {RevenexxException}
     * @returns {Promise<Models.EvaluateResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersEvaluate(amount: number, conditions?: Conditions[], contactId?: string, costCenterId?: string, currency?: string, punchoutAccountCode?: string): Promise<Models.EvaluateResult>;
    costCentersEvaluate(
        paramsOrFirst: { amount: number, conditions?: Conditions[], contactId?: string, costCenterId?: string, currency?: string, punchoutAccountCode?: string } | number,
        ...rest: [(Conditions[])?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.EvaluateResult> {
        let params: { amount: number, conditions?: Conditions[], contactId?: string, costCenterId?: string, currency?: string, punchoutAccountCode?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { amount: number, conditions?: Conditions[], contactId?: string, costCenterId?: string, currency?: string, punchoutAccountCode?: string };
        } else {
            params = {
                amount: paramsOrFirst as number,
                conditions: rest[0] as Conditions[],
                contactId: rest[1] as string,
                costCenterId: rest[2] as string,
                currency: rest[3] as string,
                punchoutAccountCode: rest[4] as string            
            };
        }
        
        const amount = params.amount;
        const conditions = params.conditions;
        const contactId = params.contactId;
        const costCenterId = params.costCenterId;
        const currency = params.currency;
        const punchoutAccountCode = params.punchoutAccountCode;

        if (typeof amount === 'undefined') {
            throw new RevenexxException('Missing required parameter: "amount"');
        }

        const apiPath = '/v1/cost-centers/evaluate';
        const apiPayload: Payload = {};
        if (typeof amount !== 'undefined') {
            apiPayload['amount'] = amount;
        }
        if (typeof conditions !== 'undefined') {
            apiPayload['conditions'] = conditions;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof punchoutAccountCode !== 'undefined') {
            apiPayload['punchout_account_code'] = punchoutAccountCode;
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
     * @param {object[]} params.allocations - 
     * @param {string} params.purchaseRequestId - 
     * @param {string} params.contactId - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     */
    costCentersReserve(params: { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string }): Promise<Models.BudgetMovementResult>;
    /**
     *
     * @param {object[]} allocations - 
     * @param {string} purchaseRequestId - 
     * @param {string} contactId - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersReserve(allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string): Promise<Models.BudgetMovementResult>;
    costCentersReserve(
        paramsOrFirst: { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string } | object[],
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.BudgetMovementResult> {
        let params: { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('allocations' in paramsOrFirst || 'purchaseRequestId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'note' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string };
        } else {
            params = {
                allocations: paramsOrFirst as object[],
                purchaseRequestId: rest[0] as string,
                contactId: rest[1] as string,
                currency: rest[2] as string,
                note: rest[3] as string            
            };
        }
        
        const allocations = params.allocations;
        const purchaseRequestId = params.purchaseRequestId;
        const contactId = params.contactId;
        const currency = params.currency;
        const note = params.note;

        if (typeof allocations === 'undefined') {
            throw new RevenexxException('Missing required parameter: "allocations"');
        }
        if (typeof purchaseRequestId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "purchaseRequestId"');
        }

        const apiPath = '/v1/cost-centers/reserve';
        const apiPayload: Payload = {};
        if (typeof allocations !== 'undefined') {
            apiPayload['allocations'] = Client.toWireKeys(allocations, {"costCenterId":{"wire":"cost_center_id","children":null}});
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
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
     * @param {object[]} params.allocations - 
     * @param {string} params.purchaseRequestId - 
     * @param {string} params.contactId - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     */
    costCentersReserveAdjust(params: { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string }): Promise<Models.BudgetMovementResult>;
    /**
     *
     * @param {object[]} allocations - 
     * @param {string} purchaseRequestId - 
     * @param {string} contactId - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersReserveAdjust(allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string): Promise<Models.BudgetMovementResult>;
    costCentersReserveAdjust(
        paramsOrFirst: { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string } | object[],
        ...rest: [(string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.BudgetMovementResult> {
        let params: { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('allocations' in paramsOrFirst || 'purchaseRequestId' in paramsOrFirst || 'contactId' in paramsOrFirst || 'currency' in paramsOrFirst || 'note' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { allocations: object[], purchaseRequestId: string, contactId?: string, currency?: string, note?: string };
        } else {
            params = {
                allocations: paramsOrFirst as object[],
                purchaseRequestId: rest[0] as string,
                contactId: rest[1] as string,
                currency: rest[2] as string,
                note: rest[3] as string            
            };
        }
        
        const allocations = params.allocations;
        const purchaseRequestId = params.purchaseRequestId;
        const contactId = params.contactId;
        const currency = params.currency;
        const note = params.note;

        if (typeof allocations === 'undefined') {
            throw new RevenexxException('Missing required parameter: "allocations"');
        }
        if (typeof purchaseRequestId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "purchaseRequestId"');
        }

        const apiPath = '/v1/cost-centers/reserve/adjust';
        const apiPayload: Payload = {};
        if (typeof allocations !== 'undefined') {
            apiPayload['allocations'] = Client.toWireKeys(allocations, {"costCenterId":{"wire":"cost_center_id","children":null}});
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    costCentersRestrictionsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersRestrictionsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    costCentersRestrictionsList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string } | number,
        ...rest: [(number)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;


        const apiPath = '/v1/cost-centers/restrictions';
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
     * @param {string} params.costCenterId - 
     * @param {object} params.parameters - 
     * @param {CostCentersRestrictionsCreateType} params.type - 
     * @param {boolean} params.active - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenterRestriction>}
     */
    costCentersRestrictionsCreate(params: { costCenterId: string, parameters: object, type: CostCentersRestrictionsCreateType, active?: boolean }): Promise<Models.CostCenterRestriction>;
    /**
     *
     * @param {string} costCenterId - 
     * @param {object} parameters - 
     * @param {CostCentersRestrictionsCreateType} type - 
     * @param {boolean} active - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenterRestriction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersRestrictionsCreate(costCenterId: string, parameters: object, type: CostCentersRestrictionsCreateType, active?: boolean): Promise<Models.CostCenterRestriction>;
    costCentersRestrictionsCreate(
        paramsOrFirst: { costCenterId: string, parameters: object, type: CostCentersRestrictionsCreateType, active?: boolean } | string,
        ...rest: [(object)?, (CostCentersRestrictionsCreateType)?, (boolean)?]    
    ): Promise<Models.CostCenterRestriction> {
        let params: { costCenterId: string, parameters: object, type: CostCentersRestrictionsCreateType, active?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { costCenterId: string, parameters: object, type: CostCentersRestrictionsCreateType, active?: boolean };
        } else {
            params = {
                costCenterId: paramsOrFirst as string,
                parameters: rest[0] as object,
                type: rest[1] as CostCentersRestrictionsCreateType,
                active: rest[2] as boolean            
            };
        }
        
        const costCenterId = params.costCenterId;
        const parameters = params.parameters;
        const type = params.type;
        const active = params.active;

        if (typeof costCenterId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "costCenterId"');
        }
        if (typeof parameters === 'undefined') {
            throw new RevenexxException('Missing required parameter: "parameters"');
        }
        if (typeof type === 'undefined') {
            throw new RevenexxException('Missing required parameter: "type"');
        }

        const apiPath = '/v1/cost-centers/restrictions';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof parameters !== 'undefined') {
            apiPayload['parameters'] = parameters;
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    costCentersRestrictionsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersRestrictionsDelete(id: string): Promise<{}>;
    costCentersRestrictionsDelete(
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

        const apiPath = '/v1/cost-centers/restrictions/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.CostCenterRestriction>}
     */
    costCentersRestrictionsGet(params: { id: string }): Promise<Models.CostCenterRestriction>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenterRestriction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersRestrictionsGet(id: string): Promise<Models.CostCenterRestriction>;
    costCentersRestrictionsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.CostCenterRestriction> {
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

        const apiPath = '/v1/cost-centers/restrictions/{id}'.replace('{id}', id);
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
     * @param {boolean} params.active - 
     * @param {string} params.costCenterId - 
     * @param {object} params.parameters - 
     * @param {CostCentersRestrictionsCreateType} params.type - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenterRestriction>}
     */
    costCentersRestrictionsUpdate(params: { id: string, active?: boolean, costCenterId?: string, parameters?: object, type?: CostCentersRestrictionsCreateType }): Promise<Models.CostCenterRestriction>;
    /**
     *
     * @param {string} id - 
     * @param {boolean} active - 
     * @param {string} costCenterId - 
     * @param {object} parameters - 
     * @param {CostCentersRestrictionsCreateType} type - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.CostCenterRestriction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersRestrictionsUpdate(id: string, active?: boolean, costCenterId?: string, parameters?: object, type?: CostCentersRestrictionsCreateType): Promise<Models.CostCenterRestriction>;
    costCentersRestrictionsUpdate(
        paramsOrFirst: { id: string, active?: boolean, costCenterId?: string, parameters?: object, type?: CostCentersRestrictionsCreateType } | string,
        ...rest: [(boolean)?, (string)?, (object)?, (CostCentersRestrictionsCreateType)?]    
    ): Promise<Models.CostCenterRestriction> {
        let params: { id: string, active?: boolean, costCenterId?: string, parameters?: object, type?: CostCentersRestrictionsCreateType };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, costCenterId?: string, parameters?: object, type?: CostCentersRestrictionsCreateType };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                costCenterId: rest[1] as string,
                parameters: rest[2] as object,
                type: rest[3] as CostCentersRestrictionsCreateType            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const costCenterId = params.costCenterId;
        const parameters = params.parameters;
        const type = params.type;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/cost-centers/restrictions/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof parameters !== 'undefined') {
            apiPayload['parameters'] = parameters;
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
     * @param {object[]} params.lines - 
     * @param {string} params.contactId - 
     * @param {string} params.organizationId - 
     * @param {string} params.punchoutAccountCode - Code of the punchout account the request is made in. Omit outside a punchout session: a cost centre restricted with mode 'only' is then out of reach, and one restricted with 'except' is offered. A value that is not a non-empty string is refused with 400.
     * @param {string[]} params.roles - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.UsableResult>}
     */
    costCentersUsable(params: { lines: object[], contactId?: string, organizationId?: string, punchoutAccountCode?: string, roles?: string[] }): Promise<Models.UsableResult>;
    /**
     *
     * @param {object[]} lines - 
     * @param {string} contactId - 
     * @param {string} organizationId - 
     * @param {string} punchoutAccountCode - Code of the punchout account the request is made in. Omit outside a punchout session: a cost centre restricted with mode 'only' is then out of reach, and one restricted with 'except' is offered. A value that is not a non-empty string is refused with 400.
     * @param {string[]} roles - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.UsableResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersUsable(lines: object[], contactId?: string, organizationId?: string, punchoutAccountCode?: string, roles?: string[]): Promise<Models.UsableResult>;
    costCentersUsable(
        paramsOrFirst: { lines: object[], contactId?: string, organizationId?: string, punchoutAccountCode?: string, roles?: string[] } | object[],
        ...rest: [(string)?, (string)?, (string)?, (string[])?]    
    ): Promise<Models.UsableResult> {
        let params: { lines: object[], contactId?: string, organizationId?: string, punchoutAccountCode?: string, roles?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('lines' in paramsOrFirst || 'contactId' in paramsOrFirst || 'organizationId' in paramsOrFirst || 'punchoutAccountCode' in paramsOrFirst || 'roles' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { lines: object[], contactId?: string, organizationId?: string, punchoutAccountCode?: string, roles?: string[] };
        } else {
            params = {
                lines: paramsOrFirst as object[],
                contactId: rest[0] as string,
                organizationId: rest[1] as string,
                punchoutAccountCode: rest[2] as string,
                roles: rest[3] as string[]            
            };
        }
        
        const lines = params.lines;
        const contactId = params.contactId;
        const organizationId = params.organizationId;
        const punchoutAccountCode = params.punchoutAccountCode;
        const roles = params.roles;

        if (typeof lines === 'undefined') {
            throw new RevenexxException('Missing required parameter: "lines"');
        }

        const apiPath = '/v1/cost-centers/usable';
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof lines !== 'undefined') {
            apiPayload['lines'] = Client.toWireKeys(lines, {"catalogId":{"wire":"catalog_id","children":null},"categoryId":{"wire":"category_id","children":null},"productId":{"wire":"product_id","children":null}});
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof punchoutAccountCode !== 'undefined') {
            apiPayload['punchout_account_code'] = punchoutAccountCode;
        }
        if (typeof roles !== 'undefined') {
            apiPayload['roles'] = roles;
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
     * @param {string} params.purchaseRequestId - 
     * @param {string} params.currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} params.note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     */
    costCentersWithdraw(params: { purchaseRequestId: string, currency?: string, note?: string }): Promise<Models.BudgetMovementResult>;
    /**
     *
     * @param {string} purchaseRequestId - 
     * @param {string} currency - ISO 4217 code the amount is stated in. Omit to be read in the cost centre's (or the personal limit's) own currency; a code that differs from it is refused with 409 currency_mismatch.
     * @param {string} note - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetMovementResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    costCentersWithdraw(purchaseRequestId: string, currency?: string, note?: string): Promise<Models.BudgetMovementResult>;
    costCentersWithdraw(
        paramsOrFirst: { purchaseRequestId: string, currency?: string, note?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.BudgetMovementResult> {
        let params: { purchaseRequestId: string, currency?: string, note?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { purchaseRequestId: string, currency?: string, note?: string };
        } else {
            params = {
                purchaseRequestId: paramsOrFirst as string,
                currency: rest[0] as string,
                note: rest[1] as string            
            };
        }
        
        const purchaseRequestId = params.purchaseRequestId;
        const currency = params.currency;
        const note = params.note;

        if (typeof purchaseRequestId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "purchaseRequestId"');
        }

        const apiPath = '/v1/cost-centers/withdraw';
        const apiPayload: Payload = {};
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
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
