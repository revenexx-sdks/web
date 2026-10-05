import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Condition } from '../enums/condition';
import { Effect } from '../enums/effect';
import { ApproverType } from '../enums/approver-type';
import { ProcurementPurchaseRequestItemsCreateType } from '../enums/procurement-purchase-request-items-create-type';
import { ProcurementVocabulariesGetName } from '../enums/procurement-vocabularies-get-name';

export class Procurement {
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
    procurementApprovalRulesList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementApprovalRulesList(limit?: number, offset?: number, order?: string): Promise<{}>;
    procurementApprovalRulesList(
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


        const apiPath = '/v1/procurement/approval-rules';
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
     * @param {Condition} params.condition - 
     * @param {Effect} params.effect - 
     * @param {string} params.name - 
     * @param {boolean} params.active - 
     * @param {string} params.approverContactId - 
     * @param {string} params.approverRole - 
     * @param {ApproverType} params.approverType - 
     * @param {object} params.conditionParameters - 
     * @param {string} params.costCenterId - 
     * @param {object} params.effectParameters - 
     * @param {object} params.metadata - 
     * @param {number} params.sequence - 
     * @param {boolean} params.showCondition - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ApprovalRule>}
     */
    procurementApprovalRulesCreate(params: { condition: Condition, effect: Effect, name: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, conditionParameters?: object, costCenterId?: string, effectParameters?: object, metadata?: object, sequence?: number, showCondition?: boolean }): Promise<Models.ApprovalRule>;
    /**
     *
     * @param {Condition} condition - 
     * @param {Effect} effect - 
     * @param {string} name - 
     * @param {boolean} active - 
     * @param {string} approverContactId - 
     * @param {string} approverRole - 
     * @param {ApproverType} approverType - 
     * @param {object} conditionParameters - 
     * @param {string} costCenterId - 
     * @param {object} effectParameters - 
     * @param {object} metadata - 
     * @param {number} sequence - 
     * @param {boolean} showCondition - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ApprovalRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementApprovalRulesCreate(condition: Condition, effect: Effect, name: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, conditionParameters?: object, costCenterId?: string, effectParameters?: object, metadata?: object, sequence?: number, showCondition?: boolean): Promise<Models.ApprovalRule>;
    procurementApprovalRulesCreate(
        paramsOrFirst: { condition: Condition, effect: Effect, name: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, conditionParameters?: object, costCenterId?: string, effectParameters?: object, metadata?: object, sequence?: number, showCondition?: boolean } | Condition,
        ...rest: [(Effect)?, (string)?, (boolean)?, (string)?, (string)?, (ApproverType)?, (object)?, (string)?, (object)?, (object)?, (number)?, (boolean)?]    
    ): Promise<Models.ApprovalRule> {
        let params: { condition: Condition, effect: Effect, name: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, conditionParameters?: object, costCenterId?: string, effectParameters?: object, metadata?: object, sequence?: number, showCondition?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('condition' in paramsOrFirst || 'effect' in paramsOrFirst || 'name' in paramsOrFirst || 'active' in paramsOrFirst || 'approverContactId' in paramsOrFirst || 'approverRole' in paramsOrFirst || 'approverType' in paramsOrFirst || 'conditionParameters' in paramsOrFirst || 'costCenterId' in paramsOrFirst || 'effectParameters' in paramsOrFirst || 'metadata' in paramsOrFirst || 'sequence' in paramsOrFirst || 'showCondition' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { condition: Condition, effect: Effect, name: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, conditionParameters?: object, costCenterId?: string, effectParameters?: object, metadata?: object, sequence?: number, showCondition?: boolean };
        } else {
            params = {
                condition: paramsOrFirst as Condition,
                effect: rest[0] as Effect,
                name: rest[1] as string,
                active: rest[2] as boolean,
                approverContactId: rest[3] as string,
                approverRole: rest[4] as string,
                approverType: rest[5] as ApproverType,
                conditionParameters: rest[6] as object,
                costCenterId: rest[7] as string,
                effectParameters: rest[8] as object,
                metadata: rest[9] as object,
                sequence: rest[10] as number,
                showCondition: rest[11] as boolean            
            };
        }
        
        const condition = params.condition;
        const effect = params.effect;
        const name = params.name;
        const active = params.active;
        const approverContactId = params.approverContactId;
        const approverRole = params.approverRole;
        const approverType = params.approverType;
        const conditionParameters = params.conditionParameters;
        const costCenterId = params.costCenterId;
        const effectParameters = params.effectParameters;
        const metadata = params.metadata;
        const sequence = params.sequence;
        const showCondition = params.showCondition;

        if (typeof condition === 'undefined') {
            throw new RevenexxException('Missing required parameter: "condition"');
        }
        if (typeof effect === 'undefined') {
            throw new RevenexxException('Missing required parameter: "effect"');
        }
        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/procurement/approval-rules';
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof approverContactId !== 'undefined') {
            apiPayload['approver_contact_id'] = approverContactId;
        }
        if (typeof approverRole !== 'undefined') {
            apiPayload['approver_role'] = approverRole;
        }
        if (typeof approverType !== 'undefined') {
            apiPayload['approver_type'] = approverType;
        }
        if (typeof condition !== 'undefined') {
            apiPayload['condition'] = condition;
        }
        if (typeof conditionParameters !== 'undefined') {
            apiPayload['condition_parameters'] = conditionParameters;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof effect !== 'undefined') {
            apiPayload['effect'] = effect;
        }
        if (typeof effectParameters !== 'undefined') {
            apiPayload['effect_parameters'] = effectParameters;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof sequence !== 'undefined') {
            apiPayload['sequence'] = sequence;
        }
        if (typeof showCondition !== 'undefined') {
            apiPayload['show_condition'] = showCondition;
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
    procurementApprovalRulesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementApprovalRulesDelete(id: string): Promise<{}>;
    procurementApprovalRulesDelete(
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

        const apiPath = '/v1/procurement/approval-rules/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.ApprovalRule>}
     */
    procurementApprovalRulesGet(params: { id: string }): Promise<Models.ApprovalRule>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ApprovalRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementApprovalRulesGet(id: string): Promise<Models.ApprovalRule>;
    procurementApprovalRulesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ApprovalRule> {
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

        const apiPath = '/v1/procurement/approval-rules/{id}'.replace('{id}', id);
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
     * @param {string} params.approverContactId - 
     * @param {string} params.approverRole - 
     * @param {ApproverType} params.approverType - 
     * @param {Condition} params.condition - 
     * @param {object} params.conditionParameters - 
     * @param {string} params.costCenterId - 
     * @param {Effect} params.effect - 
     * @param {object} params.effectParameters - 
     * @param {object} params.metadata - 
     * @param {string} params.name - 
     * @param {number} params.sequence - 
     * @param {boolean} params.showCondition - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ApprovalRule>}
     */
    procurementApprovalRulesUpdate(params: { id: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, condition?: Condition, conditionParameters?: object, costCenterId?: string, effect?: Effect, effectParameters?: object, metadata?: object, name?: string, sequence?: number, showCondition?: boolean }): Promise<Models.ApprovalRule>;
    /**
     *
     * @param {string} id - 
     * @param {boolean} active - 
     * @param {string} approverContactId - 
     * @param {string} approverRole - 
     * @param {ApproverType} approverType - 
     * @param {Condition} condition - 
     * @param {object} conditionParameters - 
     * @param {string} costCenterId - 
     * @param {Effect} effect - 
     * @param {object} effectParameters - 
     * @param {object} metadata - 
     * @param {string} name - 
     * @param {number} sequence - 
     * @param {boolean} showCondition - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ApprovalRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementApprovalRulesUpdate(id: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, condition?: Condition, conditionParameters?: object, costCenterId?: string, effect?: Effect, effectParameters?: object, metadata?: object, name?: string, sequence?: number, showCondition?: boolean): Promise<Models.ApprovalRule>;
    procurementApprovalRulesUpdate(
        paramsOrFirst: { id: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, condition?: Condition, conditionParameters?: object, costCenterId?: string, effect?: Effect, effectParameters?: object, metadata?: object, name?: string, sequence?: number, showCondition?: boolean } | string,
        ...rest: [(boolean)?, (string)?, (string)?, (ApproverType)?, (Condition)?, (object)?, (string)?, (Effect)?, (object)?, (object)?, (string)?, (number)?, (boolean)?]    
    ): Promise<Models.ApprovalRule> {
        let params: { id: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, condition?: Condition, conditionParameters?: object, costCenterId?: string, effect?: Effect, effectParameters?: object, metadata?: object, name?: string, sequence?: number, showCondition?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, active?: boolean, approverContactId?: string, approverRole?: string, approverType?: ApproverType, condition?: Condition, conditionParameters?: object, costCenterId?: string, effect?: Effect, effectParameters?: object, metadata?: object, name?: string, sequence?: number, showCondition?: boolean };
        } else {
            params = {
                id: paramsOrFirst as string,
                active: rest[0] as boolean,
                approverContactId: rest[1] as string,
                approverRole: rest[2] as string,
                approverType: rest[3] as ApproverType,
                condition: rest[4] as Condition,
                conditionParameters: rest[5] as object,
                costCenterId: rest[6] as string,
                effect: rest[7] as Effect,
                effectParameters: rest[8] as object,
                metadata: rest[9] as object,
                name: rest[10] as string,
                sequence: rest[11] as number,
                showCondition: rest[12] as boolean            
            };
        }
        
        const id = params.id;
        const active = params.active;
        const approverContactId = params.approverContactId;
        const approverRole = params.approverRole;
        const approverType = params.approverType;
        const condition = params.condition;
        const conditionParameters = params.conditionParameters;
        const costCenterId = params.costCenterId;
        const effect = params.effect;
        const effectParameters = params.effectParameters;
        const metadata = params.metadata;
        const name = params.name;
        const sequence = params.sequence;
        const showCondition = params.showCondition;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/procurement/approval-rules/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof active !== 'undefined') {
            apiPayload['active'] = active;
        }
        if (typeof approverContactId !== 'undefined') {
            apiPayload['approver_contact_id'] = approverContactId;
        }
        if (typeof approverRole !== 'undefined') {
            apiPayload['approver_role'] = approverRole;
        }
        if (typeof approverType !== 'undefined') {
            apiPayload['approver_type'] = approverType;
        }
        if (typeof condition !== 'undefined') {
            apiPayload['condition'] = condition;
        }
        if (typeof conditionParameters !== 'undefined') {
            apiPayload['condition_parameters'] = conditionParameters;
        }
        if (typeof costCenterId !== 'undefined') {
            apiPayload['cost_center_id'] = costCenterId;
        }
        if (typeof effect !== 'undefined') {
            apiPayload['effect'] = effect;
        }
        if (typeof effectParameters !== 'undefined') {
            apiPayload['effect_parameters'] = effectParameters;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof sequence !== 'undefined') {
            apiPayload['sequence'] = sequence;
        }
        if (typeof showCondition !== 'undefined') {
            apiPayload['show_condition'] = showCondition;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    procurementBudgetReleasesList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementBudgetReleasesList(limit?: number, offset?: number, order?: string): Promise<{}>;
    procurementBudgetReleasesList(
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


        const apiPath = '/v1/procurement/budget-releases';
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
     * @returns {Promise<Models.BudgetRelease>}
     */
    procurementBudgetReleasesGet(params: { id: string }): Promise<Models.BudgetRelease>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetRelease>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementBudgetReleasesGet(id: string): Promise<Models.BudgetRelease>;
    procurementBudgetReleasesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.BudgetRelease> {
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

        const apiPath = '/v1/procurement/budget-releases/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.BudgetReleaseResult>}
     */
    procurementBudgetReleasesRetry(params: { id: string }): Promise<Models.BudgetReleaseResult>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetReleaseResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementBudgetReleasesRetry(id: string): Promise<Models.BudgetReleaseResult>;
    procurementBudgetReleasesRetry(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.BudgetReleaseResult> {
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

        const apiPath = '/v1/procurement/budget-releases/{id}/retry'.replace('{id}', id);
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
     * @param {string} params.note - Required free-text reason, kept on the record.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetReleaseResult>}
     */
    procurementBudgetReleasesSettle(params: { id: string, note: string }): Promise<Models.BudgetReleaseResult>;
    /**
     *
     * @param {string} id - 
     * @param {string} note - Required free-text reason, kept on the record.
     * @throws {RevenexxException}
     * @returns {Promise<Models.BudgetReleaseResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementBudgetReleasesSettle(id: string, note: string): Promise<Models.BudgetReleaseResult>;
    procurementBudgetReleasesSettle(
        paramsOrFirst: { id: string, note: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.BudgetReleaseResult> {
        let params: { id: string, note: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, note: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                note: rest[0] as string            
            };
        }
        
        const id = params.id;
        const note = params.note;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof note === 'undefined') {
            throw new RevenexxException('Missing required parameter: "note"');
        }

        const apiPath = '/v1/procurement/budget-releases/{id}/settle'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
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
    procurementDirectOrdersList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementDirectOrdersList(limit?: number, offset?: number, order?: string): Promise<{}>;
    procurementDirectOrdersList(
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


        const apiPath = '/v1/procurement/direct-orders';
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
     * @returns {Promise<Models.DirectOrder>}
     */
    procurementDirectOrdersGet(params: { id: string }): Promise<Models.DirectOrder>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.DirectOrder>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementDirectOrdersGet(id: string): Promise<Models.DirectOrder>;
    procurementDirectOrdersGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.DirectOrder> {
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

        const apiPath = '/v1/procurement/direct-orders/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.DirectOrderResult>}
     */
    procurementDirectOrdersCommit(params: { id: string }): Promise<Models.DirectOrderResult>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.DirectOrderResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementDirectOrdersCommit(id: string): Promise<Models.DirectOrderResult>;
    procurementDirectOrdersCommit(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.DirectOrderResult> {
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

        const apiPath = '/v1/procurement/direct-orders/{id}/commit'.replace('{id}', id);
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
     * @param {string} params.note - Required free-text reason, kept on the record.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DirectOrderResult>}
     */
    procurementDirectOrdersSettle(params: { id: string, note: string }): Promise<Models.DirectOrderResult>;
    /**
     *
     * @param {string} id - 
     * @param {string} note - Required free-text reason, kept on the record.
     * @throws {RevenexxException}
     * @returns {Promise<Models.DirectOrderResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementDirectOrdersSettle(id: string, note: string): Promise<Models.DirectOrderResult>;
    procurementDirectOrdersSettle(
        paramsOrFirst: { id: string, note: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DirectOrderResult> {
        let params: { id: string, note: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, note: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                note: rest[0] as string            
            };
        }
        
        const id = params.id;
        const note = params.note;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof note === 'undefined') {
            throw new RevenexxException('Missing required parameter: "note"');
        }

        const apiPath = '/v1/procurement/direct-orders/{id}/settle'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
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
    procurementPendingApprovalsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPendingApprovalsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    procurementPendingApprovalsList(
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


        const apiPath = '/v1/procurement/pending-approvals';
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
     * @returns {Promise<Models.PendingApproval>}
     */
    procurementPendingApprovalsGet(params: { id: string }): Promise<Models.PendingApproval>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PendingApproval>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPendingApprovalsGet(id: string): Promise<Models.PendingApproval>;
    procurementPendingApprovalsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PendingApproval> {
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

        const apiPath = '/v1/procurement/pending-approvals/{id}'.replace('{id}', id);
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
     * @param {string} params.reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     */
    procurementPendingApprovalsApprove(params: { id: string, reason?: string }): Promise<Models.ResolutionResult>;
    /**
     *
     * @param {string} id - 
     * @param {string} reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPendingApprovalsApprove(id: string, reason?: string): Promise<Models.ResolutionResult>;
    procurementPendingApprovalsApprove(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ResolutionResult> {
        let params: { id: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/procurement/pending-approvals/{id}/approve'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     * @param {string} params.id - 
     * @param {string} params.reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     */
    procurementPendingApprovalsDecline(params: { id: string, reason?: string }): Promise<Models.ResolutionResult>;
    /**
     *
     * @param {string} id - 
     * @param {string} reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPendingApprovalsDecline(id: string, reason?: string): Promise<Models.ResolutionResult>;
    procurementPendingApprovalsDecline(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ResolutionResult> {
        let params: { id: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/procurement/pending-approvals/{id}/decline'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    procurementPurchaseRequestEventsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestEventsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    procurementPurchaseRequestEventsList(
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


        const apiPath = '/v1/procurement/purchase-request-events';
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
     * @returns {Promise<Models.PurchaseRequestEvent>}
     */
    procurementPurchaseRequestEventsGet(params: { id: string }): Promise<Models.PurchaseRequestEvent>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequestEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestEventsGet(id: string): Promise<Models.PurchaseRequestEvent>;
    procurementPurchaseRequestEventsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PurchaseRequestEvent> {
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

        const apiPath = '/v1/procurement/purchase-request-events/{id}'.replace('{id}', id);
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
    procurementPurchaseRequestItemsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestItemsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    procurementPurchaseRequestItemsList(
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


        const apiPath = '/v1/procurement/purchase-request-items';
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
     * @param {string} params.name - 
     * @param {string} params.purchaseRequestId - 
     * @param {number} params.quantity - 
     * @param {object} params.configuration - 
     * @param {string} params.costCenter - 
     * @param {number} params.lineTotal - 
     * @param {object} params.metadata - 
     * @param {number} params.position - 
     * @param {string} params.positionText - 
     * @param {object} params.product - 
     * @param {string} params.productId - 
     * @param {string} params.sku - 
     * @param {number} params.taxAmount - 
     * @param {number} params.taxRate - 
     * @param {ProcurementPurchaseRequestItemsCreateType} params.type - 
     * @param {string} params.unit - 
     * @param {number} params.unitPrice - 
     * @param {object} params.userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequestItem>}
     */
    procurementPurchaseRequestItemsCreate(params: { name: string, purchaseRequestId: string, quantity: number, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, position?: number, positionText?: string, product?: object, productId?: string, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object }): Promise<Models.PurchaseRequestItem>;
    /**
     *
     * @param {string} name - 
     * @param {string} purchaseRequestId - 
     * @param {number} quantity - 
     * @param {object} configuration - 
     * @param {string} costCenter - 
     * @param {number} lineTotal - 
     * @param {object} metadata - 
     * @param {number} position - 
     * @param {string} positionText - 
     * @param {object} product - 
     * @param {string} productId - 
     * @param {string} sku - 
     * @param {number} taxAmount - 
     * @param {number} taxRate - 
     * @param {ProcurementPurchaseRequestItemsCreateType} type - 
     * @param {string} unit - 
     * @param {number} unitPrice - 
     * @param {object} userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequestItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestItemsCreate(name: string, purchaseRequestId: string, quantity: number, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, position?: number, positionText?: string, product?: object, productId?: string, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object): Promise<Models.PurchaseRequestItem>;
    procurementPurchaseRequestItemsCreate(
        paramsOrFirst: { name: string, purchaseRequestId: string, quantity: number, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, position?: number, positionText?: string, product?: object, productId?: string, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object } | string,
        ...rest: [(string)?, (number)?, (object)?, (string)?, (number)?, (object)?, (number)?, (string)?, (object)?, (string)?, (string)?, (number)?, (number)?, (ProcurementPurchaseRequestItemsCreateType)?, (string)?, (number)?, (object)?]    
    ): Promise<Models.PurchaseRequestItem> {
        let params: { name: string, purchaseRequestId: string, quantity: number, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, position?: number, positionText?: string, product?: object, productId?: string, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, purchaseRequestId: string, quantity: number, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, position?: number, positionText?: string, product?: object, productId?: string, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object };
        } else {
            params = {
                name: paramsOrFirst as string,
                purchaseRequestId: rest[0] as string,
                quantity: rest[1] as number,
                configuration: rest[2] as object,
                costCenter: rest[3] as string,
                lineTotal: rest[4] as number,
                metadata: rest[5] as object,
                position: rest[6] as number,
                positionText: rest[7] as string,
                product: rest[8] as object,
                productId: rest[9] as string,
                sku: rest[10] as string,
                taxAmount: rest[11] as number,
                taxRate: rest[12] as number,
                type: rest[13] as ProcurementPurchaseRequestItemsCreateType,
                unit: rest[14] as string,
                unitPrice: rest[15] as number,
                userData: rest[16] as object            
            };
        }
        
        const name = params.name;
        const purchaseRequestId = params.purchaseRequestId;
        const quantity = params.quantity;
        const configuration = params.configuration;
        const costCenter = params.costCenter;
        const lineTotal = params.lineTotal;
        const metadata = params.metadata;
        const position = params.position;
        const positionText = params.positionText;
        const product = params.product;
        const productId = params.productId;
        const sku = params.sku;
        const taxAmount = params.taxAmount;
        const taxRate = params.taxRate;
        const type = params.type;
        const unit = params.unit;
        const unitPrice = params.unitPrice;
        const userData = params.userData;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }
        if (typeof purchaseRequestId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "purchaseRequestId"');
        }
        if (typeof quantity === 'undefined') {
            throw new RevenexxException('Missing required parameter: "quantity"');
        }

        const apiPath = '/v1/procurement/purchase-request-items';
        const apiPayload: Payload = {};
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof costCenter !== 'undefined') {
            apiPayload['cost_center'] = costCenter;
        }
        if (typeof lineTotal !== 'undefined') {
            apiPayload['line_total'] = lineTotal;
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
        if (typeof positionText !== 'undefined') {
            apiPayload['position_text'] = positionText;
        }
        if (typeof product !== 'undefined') {
            apiPayload['product'] = product;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof taxAmount !== 'undefined') {
            apiPayload['tax_amount'] = taxAmount;
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
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
    procurementPurchaseRequestItemsDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestItemsDelete(id: string): Promise<{}>;
    procurementPurchaseRequestItemsDelete(
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

        const apiPath = '/v1/procurement/purchase-request-items/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.PurchaseRequestItem>}
     */
    procurementPurchaseRequestItemsGet(params: { id: string }): Promise<Models.PurchaseRequestItem>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequestItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestItemsGet(id: string): Promise<Models.PurchaseRequestItem>;
    procurementPurchaseRequestItemsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PurchaseRequestItem> {
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

        const apiPath = '/v1/procurement/purchase-request-items/{id}'.replace('{id}', id);
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
     * @param {object} params.configuration - 
     * @param {string} params.costCenter - 
     * @param {number} params.lineTotal - 
     * @param {object} params.metadata - 
     * @param {string} params.name - 
     * @param {number} params.position - 
     * @param {string} params.positionText - 
     * @param {object} params.product - 
     * @param {string} params.productId - 
     * @param {string} params.purchaseRequestId - 
     * @param {number} params.quantity - 
     * @param {string} params.sku - 
     * @param {number} params.taxAmount - 
     * @param {number} params.taxRate - 
     * @param {ProcurementPurchaseRequestItemsCreateType} params.type - 
     * @param {string} params.unit - 
     * @param {number} params.unitPrice - 
     * @param {object} params.userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequestItem>}
     */
    procurementPurchaseRequestItemsUpdate(params: { id: string, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, name?: string, position?: number, positionText?: string, product?: object, productId?: string, purchaseRequestId?: string, quantity?: number, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object }): Promise<Models.PurchaseRequestItem>;
    /**
     *
     * @param {string} id - 
     * @param {object} configuration - 
     * @param {string} costCenter - 
     * @param {number} lineTotal - 
     * @param {object} metadata - 
     * @param {string} name - 
     * @param {number} position - 
     * @param {string} positionText - 
     * @param {object} product - 
     * @param {string} productId - 
     * @param {string} purchaseRequestId - 
     * @param {number} quantity - 
     * @param {string} sku - 
     * @param {number} taxAmount - 
     * @param {number} taxRate - 
     * @param {ProcurementPurchaseRequestItemsCreateType} type - 
     * @param {string} unit - 
     * @param {number} unitPrice - 
     * @param {object} userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequestItem>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestItemsUpdate(id: string, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, name?: string, position?: number, positionText?: string, product?: object, productId?: string, purchaseRequestId?: string, quantity?: number, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object): Promise<Models.PurchaseRequestItem>;
    procurementPurchaseRequestItemsUpdate(
        paramsOrFirst: { id: string, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, name?: string, position?: number, positionText?: string, product?: object, productId?: string, purchaseRequestId?: string, quantity?: number, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object } | string,
        ...rest: [(object)?, (string)?, (number)?, (object)?, (string)?, (number)?, (string)?, (object)?, (string)?, (string)?, (number)?, (string)?, (number)?, (number)?, (ProcurementPurchaseRequestItemsCreateType)?, (string)?, (number)?, (object)?]    
    ): Promise<Models.PurchaseRequestItem> {
        let params: { id: string, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, name?: string, position?: number, positionText?: string, product?: object, productId?: string, purchaseRequestId?: string, quantity?: number, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, configuration?: object, costCenter?: string, lineTotal?: number, metadata?: object, name?: string, position?: number, positionText?: string, product?: object, productId?: string, purchaseRequestId?: string, quantity?: number, sku?: string, taxAmount?: number, taxRate?: number, type?: ProcurementPurchaseRequestItemsCreateType, unit?: string, unitPrice?: number, userData?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                configuration: rest[0] as object,
                costCenter: rest[1] as string,
                lineTotal: rest[2] as number,
                metadata: rest[3] as object,
                name: rest[4] as string,
                position: rest[5] as number,
                positionText: rest[6] as string,
                product: rest[7] as object,
                productId: rest[8] as string,
                purchaseRequestId: rest[9] as string,
                quantity: rest[10] as number,
                sku: rest[11] as string,
                taxAmount: rest[12] as number,
                taxRate: rest[13] as number,
                type: rest[14] as ProcurementPurchaseRequestItemsCreateType,
                unit: rest[15] as string,
                unitPrice: rest[16] as number,
                userData: rest[17] as object            
            };
        }
        
        const id = params.id;
        const configuration = params.configuration;
        const costCenter = params.costCenter;
        const lineTotal = params.lineTotal;
        const metadata = params.metadata;
        const name = params.name;
        const position = params.position;
        const positionText = params.positionText;
        const product = params.product;
        const productId = params.productId;
        const purchaseRequestId = params.purchaseRequestId;
        const quantity = params.quantity;
        const sku = params.sku;
        const taxAmount = params.taxAmount;
        const taxRate = params.taxRate;
        const type = params.type;
        const unit = params.unit;
        const unitPrice = params.unitPrice;
        const userData = params.userData;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/procurement/purchase-request-items/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof configuration !== 'undefined') {
            apiPayload['configuration'] = configuration;
        }
        if (typeof costCenter !== 'undefined') {
            apiPayload['cost_center'] = costCenter;
        }
        if (typeof lineTotal !== 'undefined') {
            apiPayload['line_total'] = lineTotal;
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
        if (typeof positionText !== 'undefined') {
            apiPayload['position_text'] = positionText;
        }
        if (typeof product !== 'undefined') {
            apiPayload['product'] = product;
        }
        if (typeof productId !== 'undefined') {
            apiPayload['product_id'] = productId;
        }
        if (typeof purchaseRequestId !== 'undefined') {
            apiPayload['purchase_request_id'] = purchaseRequestId;
        }
        if (typeof quantity !== 'undefined') {
            apiPayload['quantity'] = quantity;
        }
        if (typeof sku !== 'undefined') {
            apiPayload['sku'] = sku;
        }
        if (typeof taxAmount !== 'undefined') {
            apiPayload['tax_amount'] = taxAmount;
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
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    procurementPurchaseRequestsList(params?: { limit?: number, offset?: number, order?: string }): Promise<{}>;
    /**
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort as 'column.asc' | 'column.desc', e.g. 'created_at.desc'.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestsList(limit?: number, offset?: number, order?: string): Promise<{}>;
    procurementPurchaseRequestsList(
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


        const apiPath = '/v1/procurement/purchase-requests';
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
     * @returns {Promise<Models.PurchaseRequest>}
     */
    procurementPurchaseRequestsGet(params: { id: string }): Promise<Models.PurchaseRequest>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequest>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestsGet(id: string): Promise<Models.PurchaseRequest>;
    procurementPurchaseRequestsGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.PurchaseRequest> {
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

        const apiPath = '/v1/procurement/purchase-requests/{id}'.replace('{id}', id);
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
     * @param {object} params.billingAddress - 
     * @param {object} params.buyer - 
     * @param {string} params.cartId - 
     * @param {string} params.channelId - 
     * @param {string} params.contactId - 
     * @param {string} params.currency - 
     * @param {string} params.customerOrderNumber - 
     * @param {string} params.externalRef - 
     * @param {number} params.grandTotal - 
     * @param {number} params.itemCount - 
     * @param {object} params.metadata - 
     * @param {string} params.number - 
     * @param {string} params.organizationId - 
     * @param {object} params.payment - 
     * @param {object} params.shipping - 
     * @param {object} params.shippingAddress - 
     * @param {number} params.shippingTotal - 
     * @param {number} params.subtotal - 
     * @param {number} params.taxTotal - 
     * @param {object} params.userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequest>}
     */
    procurementPurchaseRequestsUpdate(params: { id: string, billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, grandTotal?: number, itemCount?: number, metadata?: object, number?: string, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, subtotal?: number, taxTotal?: number, userData?: object }): Promise<Models.PurchaseRequest>;
    /**
     *
     * @param {string} id - 
     * @param {object} billingAddress - 
     * @param {object} buyer - 
     * @param {string} cartId - 
     * @param {string} channelId - 
     * @param {string} contactId - 
     * @param {string} currency - 
     * @param {string} customerOrderNumber - 
     * @param {string} externalRef - 
     * @param {number} grandTotal - 
     * @param {number} itemCount - 
     * @param {object} metadata - 
     * @param {string} number - 
     * @param {string} organizationId - 
     * @param {object} payment - 
     * @param {object} shipping - 
     * @param {object} shippingAddress - 
     * @param {number} shippingTotal - 
     * @param {number} subtotal - 
     * @param {number} taxTotal - 
     * @param {object} userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.PurchaseRequest>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestsUpdate(id: string, billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, grandTotal?: number, itemCount?: number, metadata?: object, number?: string, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, subtotal?: number, taxTotal?: number, userData?: object): Promise<Models.PurchaseRequest>;
    procurementPurchaseRequestsUpdate(
        paramsOrFirst: { id: string, billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, grandTotal?: number, itemCount?: number, metadata?: object, number?: string, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, subtotal?: number, taxTotal?: number, userData?: object } | string,
        ...rest: [(object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (object)?, (string)?, (string)?, (object)?, (object)?, (object)?, (number)?, (number)?, (number)?, (object)?]    
    ): Promise<Models.PurchaseRequest> {
        let params: { id: string, billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, grandTotal?: number, itemCount?: number, metadata?: object, number?: string, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, subtotal?: number, taxTotal?: number, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, billingAddress?: object, buyer?: object, cartId?: string, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, grandTotal?: number, itemCount?: number, metadata?: object, number?: string, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, shippingTotal?: number, subtotal?: number, taxTotal?: number, userData?: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                billingAddress: rest[0] as object,
                buyer: rest[1] as object,
                cartId: rest[2] as string,
                channelId: rest[3] as string,
                contactId: rest[4] as string,
                currency: rest[5] as string,
                customerOrderNumber: rest[6] as string,
                externalRef: rest[7] as string,
                grandTotal: rest[8] as number,
                itemCount: rest[9] as number,
                metadata: rest[10] as object,
                number: rest[11] as string,
                organizationId: rest[12] as string,
                payment: rest[13] as object,
                shipping: rest[14] as object,
                shippingAddress: rest[15] as object,
                shippingTotal: rest[16] as number,
                subtotal: rest[17] as number,
                taxTotal: rest[18] as number,
                userData: rest[19] as object            
            };
        }
        
        const id = params.id;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const cartId = params.cartId;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const customerOrderNumber = params.customerOrderNumber;
        const externalRef = params.externalRef;
        const grandTotal = params.grandTotal;
        const itemCount = params.itemCount;
        const metadata = params.metadata;
        const number = params.number;
        const organizationId = params.organizationId;
        const payment = params.payment;
        const shipping = params.shipping;
        const shippingAddress = params.shippingAddress;
        const shippingTotal = params.shippingTotal;
        const subtotal = params.subtotal;
        const taxTotal = params.taxTotal;
        const userData = params.userData;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/procurement/purchase-requests/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = buyer;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
        }
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
        }
        if (typeof grandTotal !== 'undefined') {
            apiPayload['grand_total'] = grandTotal;
        }
        if (typeof itemCount !== 'undefined') {
            apiPayload['item_count'] = itemCount;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof number !== 'undefined') {
            apiPayload['number'] = number;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof payment !== 'undefined') {
            apiPayload['payment'] = payment;
        }
        if (typeof shipping !== 'undefined') {
            apiPayload['shipping'] = shipping;
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof shippingTotal !== 'undefined') {
            apiPayload['shipping_total'] = shippingTotal;
        }
        if (typeof subtotal !== 'undefined') {
            apiPayload['subtotal'] = subtotal;
        }
        if (typeof taxTotal !== 'undefined') {
            apiPayload['tax_total'] = taxTotal;
        }
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
     * @param {string} params.reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     */
    procurementPurchaseRequestsApprove(params: { id: string, reason?: string }): Promise<Models.ResolutionResult>;
    /**
     *
     * @param {string} id - 
     * @param {string} reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestsApprove(id: string, reason?: string): Promise<Models.ResolutionResult>;
    procurementPurchaseRequestsApprove(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ResolutionResult> {
        let params: { id: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/procurement/purchase-requests/{id}/approve'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     * @param {string} params.id - 
     * @param {string} params.reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     */
    procurementPurchaseRequestsCancel(params: { id: string, reason?: string }): Promise<Models.ResolutionResult>;
    /**
     *
     * @param {string} id - 
     * @param {string} reason - Free-text note (decline/cancel reason, approval remark).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestsCancel(id: string, reason?: string): Promise<Models.ResolutionResult>;
    procurementPurchaseRequestsCancel(
        paramsOrFirst: { id: string, reason?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ResolutionResult> {
        let params: { id: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, reason?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                reason: rest[0] as string            
            };
        }
        
        const id = params.id;
        const reason = params.reason;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/procurement/purchase-requests/{id}/cancel'.replace('{id}', id);
        const apiPayload: Payload = {};
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
     * @param {string} params.id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     */
    procurementPurchaseRequestsOrder(params: { id: string }): Promise<Models.ResolutionResult>;
    /**
     *
     * @param {string} id - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.ResolutionResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementPurchaseRequestsOrder(id: string): Promise<Models.ResolutionResult>;
    procurementPurchaseRequestsOrder(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.ResolutionResult> {
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

        const apiPath = '/v1/procurement/purchase-requests/{id}/order'.replace('{id}', id);
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
     * @param {number} params.limit - Records examined per status (default 50, max 200).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReconcileResult>}
     */
    procurementReconcile(params?: { limit?: number }): Promise<Models.ReconcileResult>;
    /**
     *
     * @param {number} limit - Records examined per status (default 50, max 200).
     * @throws {RevenexxException}
     * @returns {Promise<Models.ReconcileResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementReconcile(limit?: number): Promise<Models.ReconcileResult>;
    procurementReconcile(
        paramsOrFirst?: { limit?: number } | number    
    ): Promise<Models.ReconcileResult> {
        let params: { limit?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number };
        } else {
            params = {
                limit: paramsOrFirst as number            
            };
        }
        
        const limit = params.limit;


        const apiPath = '/v1/procurement/reconcile';
        const apiPayload: Payload = {};
        if (typeof limit !== 'undefined') {
            apiPayload['limit'] = limit;
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
     * @param {string} params.cartId - Idempotency key — a re-submit for the same cart returns the existing PR/Order; a cart whose request was declined or cancelled is refused (409).
     * @param {Models.SubmitItem[]} params.items - 
     * @param {object} params.billingAddress - 
     * @param {object} params.buyer - 
     * @param {string} params.channelId - 
     * @param {string} params.contactId - 
     * @param {string} params.currency - ISO 4217 code the line amounts are stated in. It travels with every question and every movement put to cost-centers; a cost centre or personal limit holding another currency refuses the submission (409, outcome `currency_mismatch`). Omit to be read in the record's own currency.
     * @param {string} params.customerOrderNumber - 
     * @param {string} params.externalRef - 
     * @param {object} params.metadata - 
     * @param {string} params.organizationId - 
     * @param {object} params.payment - 
     * @param {object} params.shipping - 
     * @param {object} params.shippingAddress - 
     * @param {object} params.userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.SubmitResult>}
     */
    procurementSubmit(params: { cartId: string, items: Models.SubmitItem[], billingAddress?: object, buyer?: object, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, userData?: object }): Promise<Models.SubmitResult>;
    /**
     *
     * @param {string} cartId - Idempotency key — a re-submit for the same cart returns the existing PR/Order; a cart whose request was declined or cancelled is refused (409).
     * @param {Models.SubmitItem[]} items - 
     * @param {object} billingAddress - 
     * @param {object} buyer - 
     * @param {string} channelId - 
     * @param {string} contactId - 
     * @param {string} currency - ISO 4217 code the line amounts are stated in. It travels with every question and every movement put to cost-centers; a cost centre or personal limit holding another currency refuses the submission (409, outcome `currency_mismatch`). Omit to be read in the record's own currency.
     * @param {string} customerOrderNumber - 
     * @param {string} externalRef - 
     * @param {object} metadata - 
     * @param {string} organizationId - 
     * @param {object} payment - 
     * @param {object} shipping - 
     * @param {object} shippingAddress - 
     * @param {object} userData - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.SubmitResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementSubmit(cartId: string, items: Models.SubmitItem[], billingAddress?: object, buyer?: object, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, userData?: object): Promise<Models.SubmitResult>;
    procurementSubmit(
        paramsOrFirst: { cartId: string, items: Models.SubmitItem[], billingAddress?: object, buyer?: object, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, userData?: object } | string,
        ...rest: [(Models.SubmitItem[])?, (object)?, (object)?, (string)?, (string)?, (string)?, (string)?, (string)?, (object)?, (string)?, (object)?, (object)?, (object)?, (object)?]    
    ): Promise<Models.SubmitResult> {
        let params: { cartId: string, items: Models.SubmitItem[], billingAddress?: object, buyer?: object, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, userData?: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { cartId: string, items: Models.SubmitItem[], billingAddress?: object, buyer?: object, channelId?: string, contactId?: string, currency?: string, customerOrderNumber?: string, externalRef?: string, metadata?: object, organizationId?: string, payment?: object, shipping?: object, shippingAddress?: object, userData?: object };
        } else {
            params = {
                cartId: paramsOrFirst as string,
                items: rest[0] as Models.SubmitItem[],
                billingAddress: rest[1] as object,
                buyer: rest[2] as object,
                channelId: rest[3] as string,
                contactId: rest[4] as string,
                currency: rest[5] as string,
                customerOrderNumber: rest[6] as string,
                externalRef: rest[7] as string,
                metadata: rest[8] as object,
                organizationId: rest[9] as string,
                payment: rest[10] as object,
                shipping: rest[11] as object,
                shippingAddress: rest[12] as object,
                userData: rest[13] as object            
            };
        }
        
        const cartId = params.cartId;
        const items = params.items;
        const billingAddress = params.billingAddress;
        const buyer = params.buyer;
        const channelId = params.channelId;
        const contactId = params.contactId;
        const currency = params.currency;
        const customerOrderNumber = params.customerOrderNumber;
        const externalRef = params.externalRef;
        const metadata = params.metadata;
        const organizationId = params.organizationId;
        const payment = params.payment;
        const shipping = params.shipping;
        const shippingAddress = params.shippingAddress;
        const userData = params.userData;

        if (typeof cartId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "cartId"');
        }
        if (typeof items === 'undefined') {
            throw new RevenexxException('Missing required parameter: "items"');
        }

        const apiPath = '/v1/procurement/submit';
        const apiPayload: Payload = {};
        if (typeof billingAddress !== 'undefined') {
            apiPayload['billing_address'] = billingAddress;
        }
        if (typeof buyer !== 'undefined') {
            apiPayload['buyer'] = buyer;
        }
        if (typeof cartId !== 'undefined') {
            apiPayload['cart_id'] = cartId;
        }
        if (typeof channelId !== 'undefined') {
            apiPayload['channel_id'] = channelId;
        }
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof customerOrderNumber !== 'undefined') {
            apiPayload['customer_order_number'] = customerOrderNumber;
        }
        if (typeof externalRef !== 'undefined') {
            apiPayload['external_ref'] = externalRef;
        }
        if (typeof items !== 'undefined') {
            apiPayload['items'] = Client.toWireKeys(items, {"costCenter":{"wire":"cost_center","children":null},"positionText":{"wire":"position_text","children":null},"productId":{"wire":"product_id","children":null},"taxAmount":{"wire":"tax_amount","children":null},"taxRate":{"wire":"tax_rate","children":null},"unitPrice":{"wire":"unit_price","children":null},"userData":{"wire":"user_data","children":null}});
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organization_id'] = organizationId;
        }
        if (typeof payment !== 'undefined') {
            apiPayload['payment'] = payment;
        }
        if (typeof shipping !== 'undefined') {
            apiPayload['shipping'] = shipping;
        }
        if (typeof shippingAddress !== 'undefined') {
            apiPayload['shipping_address'] = shippingAddress;
        }
        if (typeof userData !== 'undefined') {
            apiPayload['user_data'] = userData;
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
     * @returns {Promise<Models.ProcurementVocabularyIndex>}
     */
    procurementVocabulariesList(): Promise<Models.ProcurementVocabularyIndex> {

        const apiPath = '/v1/procurement/vocabularies';
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
     * @param {ProcurementVocabulariesGetName} params.name - Which vocabulary to read — the part after the dot in `procurement.<name>`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProcurementVocabulary>}
     */
    procurementVocabulariesGet(params: { name: ProcurementVocabulariesGetName }): Promise<Models.ProcurementVocabulary>;
    /**
     *
     * @param {ProcurementVocabulariesGetName} name - Which vocabulary to read — the part after the dot in `procurement.<name>`.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ProcurementVocabulary>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    procurementVocabulariesGet(name: ProcurementVocabulariesGetName): Promise<Models.ProcurementVocabulary>;
    procurementVocabulariesGet(
        paramsOrFirst: { name: ProcurementVocabulariesGetName } | ProcurementVocabulariesGetName    
    ): Promise<Models.ProcurementVocabulary> {
        let params: { name: ProcurementVocabulariesGetName };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst) && ('name' in paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: ProcurementVocabulariesGetName };
        } else {
            params = {
                name: paramsOrFirst as ProcurementVocabulariesGetName            
            };
        }
        
        const name = params.name;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/procurement/vocabularies/{name}'.replace('{name}', name);
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
