import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Channel } from '../enums/channel';
import { AudiencesRulesCreateKind } from '../enums/audiences-rules-create-kind';
import { MatchMode } from '../enums/match-mode';

export class AudiencesRules {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * The rule rows of every active audience; filter `?audience_id=` for one audience's tree.
     *
     * @param {number} params.limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} params.offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} params.parentId - Keep only rows whose `parent_id` equals this.
     * @param {string} params.kind - Keep only rows whose `kind` equals this.
     * @param {string} params.matchMode - Keep only rows whose `match_mode` equals this.
     * @param {string} params.negate - Keep only rows whose `negate` equals this.
     * @param {string} params.subject - Keep only rows whose `subject` equals this.
     * @param {string} params.field - Keep only rows whose `field` equals this.
     * @param {string} params.operator - Keep only rows whose `operator` equals this.
     * @param {string} params.windowDays - Keep only rows whose `window_days` equals this.
     * @param {string} params.channel - Keep only rows whose `channel` equals this.
     * @param {string} params.position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    audiencesRulesList(params?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, field?: string, operator?: string, windowDays?: string, channel?: string, position?: string }): Promise<{}>;
    /**
     * The rule rows of every active audience; filter `?audience_id=` for one audience's tree.
     *
     * @param {number} limit - Page size (default 50, max 200). A larger value is clamped rather than refused.
     * @param {number} offset - Row offset for pagination (default 0). Page with `page.total` and `page.hasMore`.
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'. The column has to be one this entity has.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} audienceId - Keep only rows whose `audience_id` equals this.
     * @param {string} parentId - Keep only rows whose `parent_id` equals this.
     * @param {string} kind - Keep only rows whose `kind` equals this.
     * @param {string} matchMode - Keep only rows whose `match_mode` equals this.
     * @param {string} negate - Keep only rows whose `negate` equals this.
     * @param {string} subject - Keep only rows whose `subject` equals this.
     * @param {string} field - Keep only rows whose `field` equals this.
     * @param {string} operator - Keep only rows whose `operator` equals this.
     * @param {string} windowDays - Keep only rows whose `window_days` equals this.
     * @param {string} channel - Keep only rows whose `channel` equals this.
     * @param {string} position - Keep only rows whose `position` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesRulesList(limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, field?: string, operator?: string, windowDays?: string, channel?: string, position?: string): Promise<{}>;
    audiencesRulesList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, field?: string, operator?: string, windowDays?: string, channel?: string, position?: string } | number,
        ...rest: [(number)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, field?: string, operator?: string, windowDays?: string, channel?: string, position?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, id?: string, audienceId?: string, parentId?: string, kind?: string, matchMode?: string, negate?: string, subject?: string, field?: string, operator?: string, windowDays?: string, channel?: string, position?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                id: rest[2] as string,
                audienceId: rest[3] as string,
                parentId: rest[4] as string,
                kind: rest[5] as string,
                matchMode: rest[6] as string,
                negate: rest[7] as string,
                subject: rest[8] as string,
                field: rest[9] as string,
                operator: rest[10] as string,
                windowDays: rest[11] as string,
                channel: rest[12] as string,
                position: rest[13] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const id = params.id;
        const audienceId = params.audienceId;
        const parentId = params.parentId;
        const kind = params.kind;
        const matchMode = params.matchMode;
        const negate = params.negate;
        const subject = params.subject;
        const field = params.field;
        const operator = params.operator;
        const windowDays = params.windowDays;
        const channel = params.channel;
        const position = params.position;


        const apiPath = '/v1/audiences/rules';
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
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof matchMode !== 'undefined') {
            apiPayload['match_mode'] = matchMode;
        }
        if (typeof negate !== 'undefined') {
            apiPayload['negate'] = negate;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof field !== 'undefined') {
            apiPayload['field'] = field;
        }
        if (typeof operator !== 'undefined') {
            apiPayload['operator'] = operator;
        }
        if (typeof windowDays !== 'undefined') {
            apiPayload['window_days'] = windowDays;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
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
     * @param {string} params.audienceId - The audience this row belongs to. Deleting the audience deletes it.
     * @param {Channel} params.channel - For a subscription question: `email`, `sms` or `whatsapp`.
     * @param {string} params.field - Which contact column, organisation figure, order window or subscription type the question reads, where the subject needs one.
     * @param {AudiencesRulesCreateKind} params.kind - `group` holds further rules; `question` asks one thing about a person.
     * @param {MatchMode} params.matchMode - For a group: `all` or `any` of its rules.
     * @param {boolean} params.negate - Turns the answer around. An unanswered question stays unanswered.
     * @param {string} params.operator - How it compares — one of GET /audiences/vocabularies/operators, limited per subject.
     * @param {string} params.parentId - The group this rule sits inside. Empty at the top level.
     * @param {number} params.position - Order among siblings, ascending; ties are ordered by id.
     * @param {string} params.subject - What the question asks about — one of the subjects in GET /audiences/vocabularies/subjects.
     * @param {any} params.value - What it compares against: a list of codes, a text or a number.
     * @param {any} params.valueTo - The upper bound of a `between`.
     * @param {number} params.windowDays - How many days back a time-bound question looks.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRule>}
     */
    audiencesRulesCreate(params: { audienceId: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number }): Promise<Models.AudienceRule>;
    /**
     *
     * @param {string} audienceId - The audience this row belongs to. Deleting the audience deletes it.
     * @param {Channel} channel - For a subscription question: `email`, `sms` or `whatsapp`.
     * @param {string} field - Which contact column, organisation figure, order window or subscription type the question reads, where the subject needs one.
     * @param {AudiencesRulesCreateKind} kind - `group` holds further rules; `question` asks one thing about a person.
     * @param {MatchMode} matchMode - For a group: `all` or `any` of its rules.
     * @param {boolean} negate - Turns the answer around. An unanswered question stays unanswered.
     * @param {string} operator - How it compares — one of GET /audiences/vocabularies/operators, limited per subject.
     * @param {string} parentId - The group this rule sits inside. Empty at the top level.
     * @param {number} position - Order among siblings, ascending; ties are ordered by id.
     * @param {string} subject - What the question asks about — one of the subjects in GET /audiences/vocabularies/subjects.
     * @param {any} value - What it compares against: a list of codes, a text or a number.
     * @param {any} valueTo - The upper bound of a `between`.
     * @param {number} windowDays - How many days back a time-bound question looks.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesRulesCreate(audienceId: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number): Promise<Models.AudienceRule>;
    audiencesRulesCreate(
        paramsOrFirst: { audienceId: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number } | string,
        ...rest: [(Channel)?, (string)?, (AudiencesRulesCreateKind)?, (MatchMode)?, (boolean)?, (string)?, (string)?, (number)?, (string)?, (any)?, (any)?, (number)?]    
    ): Promise<Models.AudienceRule> {
        let params: { audienceId: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { audienceId: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number };
        } else {
            params = {
                audienceId: paramsOrFirst as string,
                channel: rest[0] as Channel,
                field: rest[1] as string,
                kind: rest[2] as AudiencesRulesCreateKind,
                matchMode: rest[3] as MatchMode,
                negate: rest[4] as boolean,
                operator: rest[5] as string,
                parentId: rest[6] as string,
                position: rest[7] as number,
                subject: rest[8] as string,
                value: rest[9] as any,
                valueTo: rest[10] as any,
                windowDays: rest[11] as number            
            };
        }
        
        const audienceId = params.audienceId;
        const channel = params.channel;
        const field = params.field;
        const kind = params.kind;
        const matchMode = params.matchMode;
        const negate = params.negate;
        const operator = params.operator;
        const parentId = params.parentId;
        const position = params.position;
        const subject = params.subject;
        const value = params.value;
        const valueTo = params.valueTo;
        const windowDays = params.windowDays;

        if (typeof audienceId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "audienceId"');
        }

        const apiPath = '/v1/audiences/rules';
        const apiPayload: Payload = {};
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof field !== 'undefined') {
            apiPayload['field'] = field;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof matchMode !== 'undefined') {
            apiPayload['match_mode'] = matchMode;
        }
        if (typeof negate !== 'undefined') {
            apiPayload['negate'] = negate;
        }
        if (typeof operator !== 'undefined') {
            apiPayload['operator'] = operator;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof valueTo !== 'undefined') {
            apiPayload['value_to'] = valueTo;
        }
        if (typeof windowDays !== 'undefined') {
            apiPayload['window_days'] = windowDays;
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
    audiencesRulesDelete(params: { id: string }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesRulesDelete(id: string): Promise<{}>;
    audiencesRulesDelete(
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

        const apiPath = '/v1/audiences/rules/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.AudienceRule>}
     */
    audiencesRulesGet(params: { id: string }): Promise<Models.AudienceRule>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesRulesGet(id: string): Promise<Models.AudienceRule>;
    audiencesRulesGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.AudienceRule> {
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

        const apiPath = '/v1/audiences/rules/{id}'.replace('{id}', id);
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
     * @param {string} params.audienceId - The audience this row belongs to. Deleting the audience deletes it.
     * @param {Channel} params.channel - For a subscription question: `email`, `sms` or `whatsapp`.
     * @param {string} params.field - Which contact column, organisation figure, order window or subscription type the question reads, where the subject needs one.
     * @param {AudiencesRulesCreateKind} params.kind - `group` holds further rules; `question` asks one thing about a person.
     * @param {MatchMode} params.matchMode - For a group: `all` or `any` of its rules.
     * @param {boolean} params.negate - Turns the answer around. An unanswered question stays unanswered.
     * @param {string} params.operator - How it compares — one of GET /audiences/vocabularies/operators, limited per subject.
     * @param {string} params.parentId - The group this rule sits inside. Empty at the top level.
     * @param {number} params.position - Order among siblings, ascending; ties are ordered by id.
     * @param {string} params.subject - What the question asks about — one of the subjects in GET /audiences/vocabularies/subjects.
     * @param {any} params.value - What it compares against: a list of codes, a text or a number.
     * @param {any} params.valueTo - The upper bound of a `between`.
     * @param {number} params.windowDays - How many days back a time-bound question looks.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRule>}
     */
    audiencesRulesUpdate(params: { id: string, audienceId?: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number }): Promise<Models.AudienceRule>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} audienceId - The audience this row belongs to. Deleting the audience deletes it.
     * @param {Channel} channel - For a subscription question: `email`, `sms` or `whatsapp`.
     * @param {string} field - Which contact column, organisation figure, order window or subscription type the question reads, where the subject needs one.
     * @param {AudiencesRulesCreateKind} kind - `group` holds further rules; `question` asks one thing about a person.
     * @param {MatchMode} matchMode - For a group: `all` or `any` of its rules.
     * @param {boolean} negate - Turns the answer around. An unanswered question stays unanswered.
     * @param {string} operator - How it compares — one of GET /audiences/vocabularies/operators, limited per subject.
     * @param {string} parentId - The group this rule sits inside. Empty at the top level.
     * @param {number} position - Order among siblings, ascending; ties are ordered by id.
     * @param {string} subject - What the question asks about — one of the subjects in GET /audiences/vocabularies/subjects.
     * @param {any} value - What it compares against: a list of codes, a text or a number.
     * @param {any} valueTo - The upper bound of a `between`.
     * @param {number} windowDays - How many days back a time-bound question looks.
     * @throws {RevenexxException}
     * @returns {Promise<Models.AudienceRule>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    audiencesRulesUpdate(id: string, audienceId?: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number): Promise<Models.AudienceRule>;
    audiencesRulesUpdate(
        paramsOrFirst: { id: string, audienceId?: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number } | string,
        ...rest: [(string)?, (Channel)?, (string)?, (AudiencesRulesCreateKind)?, (MatchMode)?, (boolean)?, (string)?, (string)?, (number)?, (string)?, (any)?, (any)?, (number)?]    
    ): Promise<Models.AudienceRule> {
        let params: { id: string, audienceId?: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, audienceId?: string, channel?: Channel, field?: string, kind?: AudiencesRulesCreateKind, matchMode?: MatchMode, negate?: boolean, operator?: string, parentId?: string, position?: number, subject?: string, value?: any, valueTo?: any, windowDays?: number };
        } else {
            params = {
                id: paramsOrFirst as string,
                audienceId: rest[0] as string,
                channel: rest[1] as Channel,
                field: rest[2] as string,
                kind: rest[3] as AudiencesRulesCreateKind,
                matchMode: rest[4] as MatchMode,
                negate: rest[5] as boolean,
                operator: rest[6] as string,
                parentId: rest[7] as string,
                position: rest[8] as number,
                subject: rest[9] as string,
                value: rest[10] as any,
                valueTo: rest[11] as any,
                windowDays: rest[12] as number            
            };
        }
        
        const id = params.id;
        const audienceId = params.audienceId;
        const channel = params.channel;
        const field = params.field;
        const kind = params.kind;
        const matchMode = params.matchMode;
        const negate = params.negate;
        const operator = params.operator;
        const parentId = params.parentId;
        const position = params.position;
        const subject = params.subject;
        const value = params.value;
        const valueTo = params.valueTo;
        const windowDays = params.windowDays;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/audiences/rules/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof audienceId !== 'undefined') {
            apiPayload['audience_id'] = audienceId;
        }
        if (typeof channel !== 'undefined') {
            apiPayload['channel'] = channel;
        }
        if (typeof field !== 'undefined') {
            apiPayload['field'] = field;
        }
        if (typeof kind !== 'undefined') {
            apiPayload['kind'] = kind;
        }
        if (typeof matchMode !== 'undefined') {
            apiPayload['match_mode'] = matchMode;
        }
        if (typeof negate !== 'undefined') {
            apiPayload['negate'] = negate;
        }
        if (typeof operator !== 'undefined') {
            apiPayload['operator'] = operator;
        }
        if (typeof parentId !== 'undefined') {
            apiPayload['parent_id'] = parentId;
        }
        if (typeof position !== 'undefined') {
            apiPayload['position'] = position;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof value !== 'undefined') {
            apiPayload['value'] = value;
        }
        if (typeof valueTo !== 'undefined') {
            apiPayload['value_to'] = valueTo;
        }
        if (typeof windowDays !== 'undefined') {
            apiPayload['window_days'] = windowDays;
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
