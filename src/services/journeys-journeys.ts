import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { Trashed } from '../enums/trashed';
import { TriggerKind } from '../enums/trigger-kind';

export class JourneysJourneys {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Every journey of this tenant, without the trash unless `trashed` asks for it. Filter `?status=live`, `?campaign_ref=` for the journeys a campaign claimed (the calendar reads `live_from`/`live_until`).
     *
     * @param {number} params.limit - Page size (default 50, max 200).
     * @param {number} params.offset - Row offset for pagination (default 0).
     * @param {string} params.order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} params.trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} params.id - Keep only rows whose `id` equals this.
     * @param {string} params.name - Keep only rows whose `name` equals this.
     * @param {string} params.description - Keep only rows whose `description` equals this.
     * @param {string} params.status - Keep only rows whose `status` equals this.
     * @param {string} params.triggerKind - Keep only rows whose `trigger_kind` equals this.
     * @param {string} params.reenrol - Keep only rows whose `reenrol` equals this.
     * @param {string} params.reenrolGapDays - Keep only rows whose `reenrol_gap_days` equals this.
     * @param {string} params.campaignRef - Keep only rows whose `campaign_ref` equals this.
     * @param {string} params.templateCode - Keep only rows whose `template_code` equals this.
     * @param {string} params.currentVersion - Keep only rows whose `current_version` equals this.
     * @param {string} params.draftVersion - Keep only rows whose `draft_version` equals this.
     * @param {string} params.triggerRanOn - Keep only rows whose `trigger_ran_on` equals this.
     * @param {string} params.enrolledCount - Keep only rows whose `enrolled_count` equals this.
     * @param {string} params.activeCount - Keep only rows whose `active_count` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysList(params?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, name?: string, description?: string, status?: string, triggerKind?: string, reenrol?: string, reenrolGapDays?: string, campaignRef?: string, templateCode?: string, currentVersion?: string, draftVersion?: string, triggerRanOn?: string, enrolledCount?: string, activeCount?: string }): Promise<{}>;
    /**
     * Every journey of this tenant, without the trash unless `trashed` asks for it. Filter `?status=live`, `?campaign_ref=` for the journeys a campaign claimed (the calendar reads `live_from`/`live_until`).
     *
     * @param {number} limit - Page size (default 50, max 200).
     * @param {number} offset - Row offset for pagination (default 0).
     * @param {string} order - Sort by one column: 'column' | 'column.asc' | 'column.desc'.
     * @param {Trashed} trashed - `exclude` (default) leaves the trash out, `only` is the trash itself, `include` lists both.
     * @param {string} id - Keep only rows whose `id` equals this.
     * @param {string} name - Keep only rows whose `name` equals this.
     * @param {string} description - Keep only rows whose `description` equals this.
     * @param {string} status - Keep only rows whose `status` equals this.
     * @param {string} triggerKind - Keep only rows whose `trigger_kind` equals this.
     * @param {string} reenrol - Keep only rows whose `reenrol` equals this.
     * @param {string} reenrolGapDays - Keep only rows whose `reenrol_gap_days` equals this.
     * @param {string} campaignRef - Keep only rows whose `campaign_ref` equals this.
     * @param {string} templateCode - Keep only rows whose `template_code` equals this.
     * @param {string} currentVersion - Keep only rows whose `current_version` equals this.
     * @param {string} draftVersion - Keep only rows whose `draft_version` equals this.
     * @param {string} triggerRanOn - Keep only rows whose `trigger_ran_on` equals this.
     * @param {string} enrolledCount - Keep only rows whose `enrolled_count` equals this.
     * @param {string} activeCount - Keep only rows whose `active_count` equals this.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysList(limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, name?: string, description?: string, status?: string, triggerKind?: string, reenrol?: string, reenrolGapDays?: string, campaignRef?: string, templateCode?: string, currentVersion?: string, draftVersion?: string, triggerRanOn?: string, enrolledCount?: string, activeCount?: string): Promise<{}>;
    journeysJourneysList(
        paramsOrFirst?: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, name?: string, description?: string, status?: string, triggerKind?: string, reenrol?: string, reenrolGapDays?: string, campaignRef?: string, templateCode?: string, currentVersion?: string, draftVersion?: string, triggerRanOn?: string, enrolledCount?: string, activeCount?: string } | number,
        ...rest: [(number)?, (string)?, (Trashed)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, name?: string, description?: string, status?: string, triggerKind?: string, reenrol?: string, reenrolGapDays?: string, campaignRef?: string, templateCode?: string, currentVersion?: string, draftVersion?: string, triggerRanOn?: string, enrolledCount?: string, activeCount?: string };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { limit?: number, offset?: number, order?: string, trashed?: Trashed, id?: string, name?: string, description?: string, status?: string, triggerKind?: string, reenrol?: string, reenrolGapDays?: string, campaignRef?: string, templateCode?: string, currentVersion?: string, draftVersion?: string, triggerRanOn?: string, enrolledCount?: string, activeCount?: string };
        } else {
            params = {
                limit: paramsOrFirst as number,
                offset: rest[0] as number,
                order: rest[1] as string,
                trashed: rest[2] as Trashed,
                id: rest[3] as string,
                name: rest[4] as string,
                description: rest[5] as string,
                status: rest[6] as string,
                triggerKind: rest[7] as string,
                reenrol: rest[8] as string,
                reenrolGapDays: rest[9] as string,
                campaignRef: rest[10] as string,
                templateCode: rest[11] as string,
                currentVersion: rest[12] as string,
                draftVersion: rest[13] as string,
                triggerRanOn: rest[14] as string,
                enrolledCount: rest[15] as string,
                activeCount: rest[16] as string            
            };
        }
        
        const limit = params.limit;
        const offset = params.offset;
        const order = params.order;
        const trashed = params.trashed;
        const id = params.id;
        const name = params.name;
        const description = params.description;
        const status = params.status;
        const triggerKind = params.triggerKind;
        const reenrol = params.reenrol;
        const reenrolGapDays = params.reenrolGapDays;
        const campaignRef = params.campaignRef;
        const templateCode = params.templateCode;
        const currentVersion = params.currentVersion;
        const draftVersion = params.draftVersion;
        const triggerRanOn = params.triggerRanOn;
        const enrolledCount = params.enrolledCount;
        const activeCount = params.activeCount;


        const apiPath = '/v1/journeys/journeys';
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
        if (typeof trashed !== 'undefined') {
            apiPayload['trashed'] = trashed;
        }
        if (typeof id !== 'undefined') {
            apiPayload['id'] = id;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof status !== 'undefined') {
            apiPayload['status'] = status;
        }
        if (typeof triggerKind !== 'undefined') {
            apiPayload['trigger_kind'] = triggerKind;
        }
        if (typeof reenrol !== 'undefined') {
            apiPayload['reenrol'] = reenrol;
        }
        if (typeof reenrolGapDays !== 'undefined') {
            apiPayload['reenrol_gap_days'] = reenrolGapDays;
        }
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof templateCode !== 'undefined') {
            apiPayload['template_code'] = templateCode;
        }
        if (typeof currentVersion !== 'undefined') {
            apiPayload['current_version'] = currentVersion;
        }
        if (typeof draftVersion !== 'undefined') {
            apiPayload['draft_version'] = draftVersion;
        }
        if (typeof triggerRanOn !== 'undefined') {
            apiPayload['trigger_ran_on'] = triggerRanOn;
        }
        if (typeof enrolledCount !== 'undefined') {
            apiPayload['enrolled_count'] = enrolledCount;
        }
        if (typeof activeCount !== 'undefined') {
            apiPayload['active_count'] = activeCount;
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
     * Creates the journey as a draft with version 1. `steps` and `entry` may come along; otherwise the draft starts empty. The answer carries `problems` — what stands between the draft and going live.
     *
     * @param {string} params.name - What the journey is called, e.g. Warenkorb-Erinnerung.
     * @param {string} params.campaignRef - The campaign that claimed this journey, written by the campaigns app.
     * @param {string} params.currency - The currency revenue is stated in.
     * @param {string} params.description - What the journey is for.
     * @param {string} params.entry - The first step. Defaults to the first listed.
     * @param {any} params.goalConfig - The goal: `{ kind: event, topic, match }` or `{ kind: condition, match, rules }`; empty for none. Frozen while live.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {boolean} params.reenrol - Whether a person who finished may enter again. Off by default.
     * @param {number} params.reenrolGapDays - The least number of days between two entries. Empty means the tenant default.
     * @param {object[]} params.steps - 
     * @param {any} params.triggerConfig - The trigger: `{ topic, filter: [{ field, op, value }] }` for an event, `{ audience_id | audience_code }`, `{ stage }`, `{ field, offset_days }`. Frozen while live.
     * @param {TriggerKind} params.triggerKind - What enrols: `event`, `audience_join`, `lifecycle_stage` or `date_field`. Frozen while live.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Journey>}
     */
    journeysJourneysCreate(params: { name: string, campaignRef?: string, currency?: string, description?: string, entry?: string, goalConfig?: any, metadata?: any, reenrol?: boolean, reenrolGapDays?: number, steps?: object[], triggerConfig?: any, triggerKind?: TriggerKind }): Promise<Models.Journey>;
    /**
     * Creates the journey as a draft with version 1. `steps` and `entry` may come along; otherwise the draft starts empty. The answer carries `problems` — what stands between the draft and going live.
     *
     * @param {string} name - What the journey is called, e.g. Warenkorb-Erinnerung.
     * @param {string} campaignRef - The campaign that claimed this journey, written by the campaigns app.
     * @param {string} currency - The currency revenue is stated in.
     * @param {string} description - What the journey is for.
     * @param {string} entry - The first step. Defaults to the first listed.
     * @param {any} goalConfig - The goal: `{ kind: event, topic, match }` or `{ kind: condition, match, rules }`; empty for none. Frozen while live.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {boolean} reenrol - Whether a person who finished may enter again. Off by default.
     * @param {number} reenrolGapDays - The least number of days between two entries. Empty means the tenant default.
     * @param {object[]} steps - 
     * @param {any} triggerConfig - The trigger: `{ topic, filter: [{ field, op, value }] }` for an event, `{ audience_id | audience_code }`, `{ stage }`, `{ field, offset_days }`. Frozen while live.
     * @param {TriggerKind} triggerKind - What enrols: `event`, `audience_join`, `lifecycle_stage` or `date_field`. Frozen while live.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Journey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysCreate(name: string, campaignRef?: string, currency?: string, description?: string, entry?: string, goalConfig?: any, metadata?: any, reenrol?: boolean, reenrolGapDays?: number, steps?: object[], triggerConfig?: any, triggerKind?: TriggerKind): Promise<Models.Journey>;
    journeysJourneysCreate(
        paramsOrFirst: { name: string, campaignRef?: string, currency?: string, description?: string, entry?: string, goalConfig?: any, metadata?: any, reenrol?: boolean, reenrolGapDays?: number, steps?: object[], triggerConfig?: any, triggerKind?: TriggerKind } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (any)?, (any)?, (boolean)?, (number)?, (object[])?, (any)?, (TriggerKind)?]    
    ): Promise<Models.Journey> {
        let params: { name: string, campaignRef?: string, currency?: string, description?: string, entry?: string, goalConfig?: any, metadata?: any, reenrol?: boolean, reenrolGapDays?: number, steps?: object[], triggerConfig?: any, triggerKind?: TriggerKind };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { name: string, campaignRef?: string, currency?: string, description?: string, entry?: string, goalConfig?: any, metadata?: any, reenrol?: boolean, reenrolGapDays?: number, steps?: object[], triggerConfig?: any, triggerKind?: TriggerKind };
        } else {
            params = {
                name: paramsOrFirst as string,
                campaignRef: rest[0] as string,
                currency: rest[1] as string,
                description: rest[2] as string,
                entry: rest[3] as string,
                goalConfig: rest[4] as any,
                metadata: rest[5] as any,
                reenrol: rest[6] as boolean,
                reenrolGapDays: rest[7] as number,
                steps: rest[8] as object[],
                triggerConfig: rest[9] as any,
                triggerKind: rest[10] as TriggerKind            
            };
        }
        
        const name = params.name;
        const campaignRef = params.campaignRef;
        const currency = params.currency;
        const description = params.description;
        const entry = params.entry;
        const goalConfig = params.goalConfig;
        const metadata = params.metadata;
        const reenrol = params.reenrol;
        const reenrolGapDays = params.reenrolGapDays;
        const steps = params.steps;
        const triggerConfig = params.triggerConfig;
        const triggerKind = params.triggerKind;

        if (typeof name === 'undefined') {
            throw new RevenexxException('Missing required parameter: "name"');
        }

        const apiPath = '/v1/journeys/journeys';
        const apiPayload: Payload = {};
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof entry !== 'undefined') {
            apiPayload['entry'] = entry;
        }
        if (typeof goalConfig !== 'undefined') {
            apiPayload['goal_config'] = goalConfig;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof reenrol !== 'undefined') {
            apiPayload['reenrol'] = reenrol;
        }
        if (typeof reenrolGapDays !== 'undefined') {
            apiPayload['reenrol_gap_days'] = reenrolGapDays;
        }
        if (typeof steps !== 'undefined') {
            apiPayload['steps'] = steps;
        }
        if (typeof triggerConfig !== 'undefined') {
            apiPayload['trigger_config'] = triggerConfig;
        }
        if (typeof triggerKind !== 'undefined') {
            apiPayload['trigger_kind'] = triggerKind;
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
     * Every journey in the trash is deleted for good on its own terms. One that something still blocks stays in the trash and is named with its reason, so a partial success says exactly what remained. Not for a storefront contact.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashEmptyResult>}
     */
    journeysJourneysEmptyTrash(): Promise<Models.TrashEmptyResult> {

        const apiPath = '/v1/journeys/journeys/trash/empty';
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
     * What the nightly purge does, callable by hand: every journey in the trash for longer than the tenant trash retention (90 days unless the tenant set another) is deleted for good through the same rules as a second delete. A blocked one stays and carries its reason. When the retention cannot be read, nothing is deleted. Also the cron schedule.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysPurge(): Promise<{}> {

        const apiPath = '/v1/journeys/journeys/trash/purge';
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
     * The first DELETE moves the journey into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Only a draft that never went live goes into the trash; a journey people have been through is refused (`trash_blocked`, blocker `journey_published`) — archive it instead. A DELETE on a journey already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysDelete(params: { id: string }): Promise<{}>;
    /**
     * The first DELETE moves the journey into the trash: it stays, with everything hanging off it, and counts nowhere until it is restored. Only a draft that never went live goes into the trash; a journey people have been through is refused (`trash_blocked`, blocker `journey_published`) — archive it instead. A DELETE on a journey already in the trash deletes it for good — refused while something still needs it, and not for a storefront contact.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysDelete(id: string): Promise<{}>;
    journeysJourneysDelete(
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

        const apiPath = '/v1/journeys/journeys/{id}'.replace('{id}', id);
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
     * @returns {Promise<Models.Journey>}
     */
    journeysJourneysGet(params: { id: string }): Promise<Models.Journey>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Journey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysGet(id: string): Promise<Models.Journey>;
    journeysJourneysGet(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.Journey> {
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

        const apiPath = '/v1/journeys/journeys/{id}'.replace('{id}', id);
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
     * Name, description, re-enrolment, campaign. The trigger and the goal change only while the journey is not live. Status changes go through publish, pause, resume and archive.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.campaignRef - The campaign that claimed this journey, written by the campaigns app.
     * @param {string} params.currency - The currency revenue is stated in.
     * @param {string} params.description - What the journey is for.
     * @param {any} params.goalConfig - The goal: `{ kind: event, topic, match }` or `{ kind: condition, match, rules }`; empty for none. Frozen while live.
     * @param {any} params.metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} params.name - What the journey is called, e.g. Warenkorb-Erinnerung.
     * @param {boolean} params.reenrol - Whether a person who finished may enter again. Off by default.
     * @param {number} params.reenrolGapDays - The least number of days between two entries. Empty means the tenant default.
     * @param {any} params.triggerConfig - The trigger: `{ topic, filter: [{ field, op, value }] }` for an event, `{ audience_id | audience_code }`, `{ stage }`, `{ field, offset_days }`. Frozen while live.
     * @param {TriggerKind} params.triggerKind - What enrols: `event`, `audience_join`, `lifecycle_stage` or `date_field`. Frozen while live.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Journey>}
     */
    journeysJourneysUpdate(params: { id: string, campaignRef?: string, currency?: string, description?: string, goalConfig?: any, metadata?: any, name?: string, reenrol?: boolean, reenrolGapDays?: number, triggerConfig?: any, triggerKind?: TriggerKind }): Promise<Models.Journey>;
    /**
     * Name, description, re-enrolment, campaign. The trigger and the goal change only while the journey is not live. Status changes go through publish, pause, resume and archive.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} campaignRef - The campaign that claimed this journey, written by the campaigns app.
     * @param {string} currency - The currency revenue is stated in.
     * @param {string} description - What the journey is for.
     * @param {any} goalConfig - The goal: `{ kind: event, topic, match }` or `{ kind: condition, match, rules }`; empty for none. Frozen while live.
     * @param {any} metadata - Free-form JSON a caller may keep on the row. Nothing here reads it.
     * @param {string} name - What the journey is called, e.g. Warenkorb-Erinnerung.
     * @param {boolean} reenrol - Whether a person who finished may enter again. Off by default.
     * @param {number} reenrolGapDays - The least number of days between two entries. Empty means the tenant default.
     * @param {any} triggerConfig - The trigger: `{ topic, filter: [{ field, op, value }] }` for an event, `{ audience_id | audience_code }`, `{ stage }`, `{ field, offset_days }`. Frozen while live.
     * @param {TriggerKind} triggerKind - What enrols: `event`, `audience_join`, `lifecycle_stage` or `date_field`. Frozen while live.
     * @throws {RevenexxException}
     * @returns {Promise<Models.Journey>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysUpdate(id: string, campaignRef?: string, currency?: string, description?: string, goalConfig?: any, metadata?: any, name?: string, reenrol?: boolean, reenrolGapDays?: number, triggerConfig?: any, triggerKind?: TriggerKind): Promise<Models.Journey>;
    journeysJourneysUpdate(
        paramsOrFirst: { id: string, campaignRef?: string, currency?: string, description?: string, goalConfig?: any, metadata?: any, name?: string, reenrol?: boolean, reenrolGapDays?: number, triggerConfig?: any, triggerKind?: TriggerKind } | string,
        ...rest: [(string)?, (string)?, (string)?, (any)?, (any)?, (string)?, (boolean)?, (number)?, (any)?, (TriggerKind)?]    
    ): Promise<Models.Journey> {
        let params: { id: string, campaignRef?: string, currency?: string, description?: string, goalConfig?: any, metadata?: any, name?: string, reenrol?: boolean, reenrolGapDays?: number, triggerConfig?: any, triggerKind?: TriggerKind };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, campaignRef?: string, currency?: string, description?: string, goalConfig?: any, metadata?: any, name?: string, reenrol?: boolean, reenrolGapDays?: number, triggerConfig?: any, triggerKind?: TriggerKind };
        } else {
            params = {
                id: paramsOrFirst as string,
                campaignRef: rest[0] as string,
                currency: rest[1] as string,
                description: rest[2] as string,
                goalConfig: rest[3] as any,
                metadata: rest[4] as any,
                name: rest[5] as string,
                reenrol: rest[6] as boolean,
                reenrolGapDays: rest[7] as number,
                triggerConfig: rest[8] as any,
                triggerKind: rest[9] as TriggerKind            
            };
        }
        
        const id = params.id;
        const campaignRef = params.campaignRef;
        const currency = params.currency;
        const description = params.description;
        const goalConfig = params.goalConfig;
        const metadata = params.metadata;
        const name = params.name;
        const reenrol = params.reenrol;
        const reenrolGapDays = params.reenrolGapDays;
        const triggerConfig = params.triggerConfig;
        const triggerKind = params.triggerKind;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/journeys/journeys/{id}'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof campaignRef !== 'undefined') {
            apiPayload['campaign_ref'] = campaignRef;
        }
        if (typeof currency !== 'undefined') {
            apiPayload['currency'] = currency;
        }
        if (typeof description !== 'undefined') {
            apiPayload['description'] = description;
        }
        if (typeof goalConfig !== 'undefined') {
            apiPayload['goal_config'] = goalConfig;
        }
        if (typeof metadata !== 'undefined') {
            apiPayload['metadata'] = metadata;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof reenrol !== 'undefined') {
            apiPayload['reenrol'] = reenrol;
        }
        if (typeof reenrolGapDays !== 'undefined') {
            apiPayload['reenrol_gap_days'] = reenrolGapDays;
        }
        if (typeof triggerConfig !== 'undefined') {
            apiPayload['trigger_config'] = triggerConfig;
        }
        if (typeof triggerKind !== 'undefined') {
            apiPayload['trigger_kind'] = triggerKind;
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
     * Nobody enters again; everyone still inside leaves with the reason journey_archived (up to 500 at once, the rest with the next runs).
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysArchive(params: { id: string, data: object }): Promise<{}>;
    /**
     * Nobody enters again; everyone still inside leaves with the reason journey_archived (up to 500 at once, the rest with the next runs).
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysArchive(id: string, data: object): Promise<{}>;
    journeysJourneysArchive(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/archive'.replace('{id}', id);
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
     * For a test or for support: the person enters the live version now, under the same re-enrolment rules as a trigger.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.contactId - 
     * @param {object} params.data - Payload the steps may read, as a trigger would carry it.
     * @param {string} params.email - 
     * @param {string} params.key - Makes a resent request enrol once.
     * @param {string} params.market - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Enrollment>}
     */
    journeysJourneysEnrol(params: { id: string, contactId?: string, data?: object, email?: string, key?: string, market?: string }): Promise<Models.Enrollment>;
    /**
     * For a test or for support: the person enters the live version now, under the same re-enrolment rules as a trigger.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} contactId - 
     * @param {object} data - Payload the steps may read, as a trigger would carry it.
     * @param {string} email - 
     * @param {string} key - Makes a resent request enrol once.
     * @param {string} market - 
     * @throws {RevenexxException}
     * @returns {Promise<Models.Enrollment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysEnrol(id: string, contactId?: string, data?: object, email?: string, key?: string, market?: string): Promise<Models.Enrollment>;
    journeysJourneysEnrol(
        paramsOrFirst: { id: string, contactId?: string, data?: object, email?: string, key?: string, market?: string } | string,
        ...rest: [(string)?, (object)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.Enrollment> {
        let params: { id: string, contactId?: string, data?: object, email?: string, key?: string, market?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, contactId?: string, data?: object, email?: string, key?: string, market?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                contactId: rest[0] as string,
                data: rest[1] as object,
                email: rest[2] as string,
                key: rest[3] as string,
                market: rest[4] as string            
            };
        }
        
        const id = params.id;
        const contactId = params.contactId;
        const data = params.data;
        const email = params.email;
        const key = params.key;
        const market = params.market;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/enrol'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof contactId !== 'undefined') {
            apiPayload['contact_id'] = contactId;
        }
        if (typeof data !== 'undefined') {
            apiPayload['data'] = data;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof key !== 'undefined') {
            apiPayload['key'] = key;
        }
        if (typeof market !== 'undefined') {
            apiPayload['market'] = market;
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
     * What the canvas draws: the steps and edges of one version, the trigger, the goal, and the problems that would refuse publishing.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.version - `draft` (default: the draft, else the live version), `live`, or a number.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysGraph(params: { id: string, version?: string }): Promise<{}>;
    /**
     * What the canvas draws: the steps and edges of one version, the trigger, the goal, and the problems that would refuse publishing.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} version - `draft` (default: the draft, else the live version), `live`, or a number.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysGraph(id: string, version?: string): Promise<{}>;
    journeysJourneysGraph(
        paramsOrFirst: { id: string, version?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { id: string, version?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, version?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                version: rest[0] as string            
            };
        }
        
        const id = params.id;
        const version = params.version;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/graph'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
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
     * Writes the draft, creating it as the next version when the journey has none — a live version is never edited. A graph with problems is saved; publishing refuses it.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object[]} params.steps - 
     * @param {string} params.entry - The first step. Defaults to the first listed.
     * @param {string} params.notes - What changed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysSaveGraph(params: { id: string, steps: object[], entry?: string, notes?: string }): Promise<{}>;
    /**
     * Writes the draft, creating it as the next version when the journey has none — a live version is never edited. A graph with problems is saved; publishing refuses it.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object[]} steps - 
     * @param {string} entry - The first step. Defaults to the first listed.
     * @param {string} notes - What changed.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysSaveGraph(id: string, steps: object[], entry?: string, notes?: string): Promise<{}>;
    journeysJourneysSaveGraph(
        paramsOrFirst: { id: string, steps: object[], entry?: string, notes?: string } | string,
        ...rest: [(object[])?, (string)?, (string)?]    
    ): Promise<{}> {
        let params: { id: string, steps: object[], entry?: string, notes?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, steps: object[], entry?: string, notes?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                steps: rest[0] as object[],
                entry: rest[1] as string,
                notes: rest[2] as string            
            };
        }
        
        const id = params.id;
        const steps = params.steps;
        const entry = params.entry;
        const notes = params.notes;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof steps === 'undefined') {
            throw new RevenexxException('Missing required parameter: "steps"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/graph'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof entry !== 'undefined') {
            apiPayload['entry'] = entry;
        }
        if (typeof notes !== 'undefined') {
            apiPayload['notes'] = notes;
        }
        if (typeof steps !== 'undefined') {
            apiPayload['steps'] = steps;
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
     * Nobody enters, nobody moves; everyone stays at their step. Waits that pass during the pause run after resume, in the job's budgeted chunks.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysPause(params: { id: string, data: object }): Promise<{}>;
    /**
     * Nobody enters, nobody moves; everyone stays at their step. Waits that pass during the pause run after resume, in the job's budgeted chunks.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysPause(id: string, data: object): Promise<{}>;
    journeysJourneysPause(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/pause'.replace('{id}', id);
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
     * Checks the draft, the trigger and the goal; makes the draft the live version and retires the one before. Running enrollments finish on their own version. A paused journey stays paused.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysPublish(params: { id: string, data: object }): Promise<{}>;
    /**
     * Checks the draft, the trigger and the goal; makes the draft the live version and retires the one before. Running enrollments finish on their own version. A paused journey stays paused.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysPublish(id: string, data: object): Promise<{}>;
    journeysJourneysPublish(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/publish'.replace('{id}', id);
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
     * Per step: waiting now, entered, passed, sent, skipped and why, failed, exited and why, clicked, goal reached, revenue. Per version: enrolled, active, completed, goal reached, exited, failed, conversion. `step_bars` and `exit_bars` are the same figures as bar-list rows in the language of Accept-Language: who entered each step with the drop-off, and why people left.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {string} params.version - A version number, `live` (default) or `draft`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysReport(params: { id: string, version?: string }): Promise<{}>;
    /**
     * Per step: waiting now, entered, passed, sent, skipped and why, failed, exited and why, clicked, goal reached, revenue. Per version: enrolled, active, completed, goal reached, exited, failed, conversion. `step_bars` and `exit_bars` are the same figures as bar-list rows in the language of Accept-Language: who entered each step with the drop-off, and why people left.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {string} version - A version number, `live` (default) or `draft`.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysReport(id: string, version?: string): Promise<{}>;
    journeysJourneysReport(
        paramsOrFirst: { id: string, version?: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { id: string, version?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, version?: string };
        } else {
            params = {
                id: paramsOrFirst as string,
                version: rest[0] as string            
            };
        }
        
        const id = params.id;
        const version = params.version;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/report'.replace('{id}', id);
        const apiPayload: Payload = {};
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
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
     * Clears the trash marks on the journey. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     */
    journeysJourneysRestore(params: { id: string }): Promise<Models.TrashRestoreResult>;
    /**
     * Clears the trash marks on the journey. Its parts were never touched, so they come back with it, in the state it was in. The same right as deleting.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<Models.TrashRestoreResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysRestore(id: string): Promise<Models.TrashRestoreResult>;
    journeysJourneysRestore(
        paramsOrFirst: { id: string } | string    
    ): Promise<Models.TrashRestoreResult> {
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

        const apiPath = '/v1/journeys/journeys/{id}/restore'.replace('{id}', id);
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
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysResume(params: { id: string, data: object }): Promise<{}>;
    /**
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysResume(id: string, data: object): Promise<{}>;
    journeysJourneysResume(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/resume'.replace('{id}', id);
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
     * The step job, limited to one live journey — what the Cockpit offers on a test journey instead of waiting for the next five-minute tick.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @param {object} params.data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysRun(params: { id: string, data: object }): Promise<{}>;
    /**
     * The step job, limited to one live journey — what the Cockpit offers on a test journey instead of waiting for the next five-minute tick.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @param {object} data - Request body
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysRun(id: string, data: object): Promise<{}>;
    journeysJourneysRun(
        paramsOrFirst: { id: string, data: object } | string,
        ...rest: [(object)?]    
    ): Promise<{}> {
        let params: { id: string, data: object };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { id: string, data: object };
        } else {
            params = {
                id: paramsOrFirst as string,
                data: rest[0] as object            
            };
        }
        
        const id = params.id;
        const data = params.data;

        if (typeof id === 'undefined') {
            throw new RevenexxException('Missing required parameter: "id"');
        }
        if (typeof data === 'undefined') {
            throw new RevenexxException('Missing required parameter: "data"');
        }

        const apiPath = '/v1/journeys/journeys/{id}/run'.replace('{id}', id);
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
     * Entries and reached goals per day over all versions, in the tenant time zone, from the first entry to the last with every day between, at most the latest 60 days.
     *
     * @param {string} params.id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJourneysTimeline(params: { id: string }): Promise<{}>;
    /**
     * Entries and reached goals per day over all versions, in the tenant time zone, from the first entry to the last with every day between, at most the latest 60 days.
     *
     * @param {string} id - The row id, as it came back from the list.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJourneysTimeline(id: string): Promise<{}>;
    journeysJourneysTimeline(
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

        const apiPath = '/v1/journeys/journeys/{id}/timeline'.replace('{id}', id);
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
