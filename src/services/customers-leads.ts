import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { LeadSource } from '../enums/lead-source';

export class CustomersLeads {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * `consent_marketing` on a contact is a mirror of the consent app (revenexx/marketing-consents): true while the person holds at least one confirmed email subscription there. This reads the email subscriptions the consent app changed in the last three hours and sets each person's flag to what the consent app answers now. The hourly schedule `mirror-marketing-consents` runs the same code, and so does each subscription event the platform delivers. A person the consent app does not answer for keeps the flag. Only a change is written.
     *
     * @throws {RevenexxException}
     * @returns {Promise<Models.ConsentMirrorResult>}
     */
    customersConsentMirrorRun(): Promise<Models.ConsentMirrorResult> {

        const apiPath = '/v1/customers/consent-mirror/run';
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
     * Names the sales rep who owns the person (`owner_id`, a rep CODE of the sales-reps app) and files a task for that rep on the person's timeline — the Cockpit's "An Vertrieb übergeben". The stage is left alone: accepting the lead is the rep's own step (sql). A code the sales-reps app does not know is refused; where that app is not installed, the code is taken as given.
     *
     * @param {string} params.contactId - The person to hand over.
     * @param {string} params.ownerId - The rep code who takes the lead.
     * @param {string} params.actor - Who handed it over.
     * @param {string} params.dueAt - When the rep should have called.
     * @param {string} params.note - What the rep should know.
     * @param {string} params.subject - The task's line. Defaults to „Lead übernehmen: <name>“.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactHandoverResult>}
     */
    customersContactsHandover(params: { contactId: string, ownerId: string, actor?: string, dueAt?: string, note?: string, subject?: string }): Promise<Models.ContactHandoverResult>;
    /**
     * Names the sales rep who owns the person (`owner_id`, a rep CODE of the sales-reps app) and files a task for that rep on the person's timeline — the Cockpit's "An Vertrieb übergeben". The stage is left alone: accepting the lead is the rep's own step (sql). A code the sales-reps app does not know is refused; where that app is not installed, the code is taken as given.
     *
     * @param {string} contactId - The person to hand over.
     * @param {string} ownerId - The rep code who takes the lead.
     * @param {string} actor - Who handed it over.
     * @param {string} dueAt - When the rep should have called.
     * @param {string} note - What the rep should know.
     * @param {string} subject - The task's line. Defaults to „Lead übernehmen: <name>“.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactHandoverResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsHandover(contactId: string, ownerId: string, actor?: string, dueAt?: string, note?: string, subject?: string): Promise<Models.ContactHandoverResult>;
    customersContactsHandover(
        paramsOrFirst: { contactId: string, ownerId: string, actor?: string, dueAt?: string, note?: string, subject?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.ContactHandoverResult> {
        let params: { contactId: string, ownerId: string, actor?: string, dueAt?: string, note?: string, subject?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, ownerId: string, actor?: string, dueAt?: string, note?: string, subject?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                ownerId: rest[0] as string,
                actor: rest[1] as string,
                dueAt: rest[2] as string,
                note: rest[3] as string,
                subject: rest[4] as string            
            };
        }
        
        const contactId = params.contactId;
        const ownerId = params.ownerId;
        const actor = params.actor;
        const dueAt = params.dueAt;
        const note = params.note;
        const subject = params.subject;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof ownerId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "ownerId"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/handover'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof dueAt !== 'undefined') {
            apiPayload['due_at'] = dueAt;
        }
        if (typeof note !== 'undefined') {
            apiPayload['note'] = note;
        }
        if (typeof ownerId !== 'undefined') {
            apiPayload['owner_id'] = ownerId;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
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
     * Sets the PERSON's lifecycle stage (subscriber, lead, mql, sql, opportunity, customer, or a stage of the tenant's own) and announces it once as `contact.lifecycle_changed` on the person's channel. A repeat of the stage the person already holds changes nothing, announces nothing and answers `changed: false`. A person without a lead source yet takes `lead_source` / `lead_source_ref` from the body; one that has a source keeps it. The journeys step `set_lifecycle_stage`, the Cockpit's Qualifizieren action and a form listener all call this.
     *
     * @param {string} params.contactId - The person to move.
     * @param {string} params.stage - The stage to move to — a code of GET /customers/contact-lifecycle-stages.
     * @param {string} params.actor - Who moved it (operator id or email). Rides on the event.
     * @param {LeadSource} params.leadSource - Taken only when the person has no source yet.
     * @param {string} params.leadSourceRef - Taken with `lead_source`.
     * @param {string} params.reason - Why, in words. Rides on the event; not stored on the contact.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactLifecycleResult>}
     */
    customersContactsLifecycle(params: { contactId: string, stage: string, actor?: string, leadSource?: LeadSource, leadSourceRef?: string, reason?: string }): Promise<Models.ContactLifecycleResult>;
    /**
     * Sets the PERSON's lifecycle stage (subscriber, lead, mql, sql, opportunity, customer, or a stage of the tenant's own) and announces it once as `contact.lifecycle_changed` on the person's channel. A repeat of the stage the person already holds changes nothing, announces nothing and answers `changed: false`. A person without a lead source yet takes `lead_source` / `lead_source_ref` from the body; one that has a source keeps it. The journeys step `set_lifecycle_stage`, the Cockpit's Qualifizieren action and a form listener all call this.
     *
     * @param {string} contactId - The person to move.
     * @param {string} stage - The stage to move to — a code of GET /customers/contact-lifecycle-stages.
     * @param {string} actor - Who moved it (operator id or email). Rides on the event.
     * @param {LeadSource} leadSource - Taken only when the person has no source yet.
     * @param {string} leadSourceRef - Taken with `lead_source`.
     * @param {string} reason - Why, in words. Rides on the event; not stored on the contact.
     * @throws {RevenexxException}
     * @returns {Promise<Models.ContactLifecycleResult>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    customersContactsLifecycle(contactId: string, stage: string, actor?: string, leadSource?: LeadSource, leadSourceRef?: string, reason?: string): Promise<Models.ContactLifecycleResult>;
    customersContactsLifecycle(
        paramsOrFirst: { contactId: string, stage: string, actor?: string, leadSource?: LeadSource, leadSourceRef?: string, reason?: string } | string,
        ...rest: [(string)?, (string)?, (LeadSource)?, (string)?, (string)?]    
    ): Promise<Models.ContactLifecycleResult> {
        let params: { contactId: string, stage: string, actor?: string, leadSource?: LeadSource, leadSourceRef?: string, reason?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { contactId: string, stage: string, actor?: string, leadSource?: LeadSource, leadSourceRef?: string, reason?: string };
        } else {
            params = {
                contactId: paramsOrFirst as string,
                stage: rest[0] as string,
                actor: rest[1] as string,
                leadSource: rest[2] as LeadSource,
                leadSourceRef: rest[3] as string,
                reason: rest[4] as string            
            };
        }
        
        const contactId = params.contactId;
        const stage = params.stage;
        const actor = params.actor;
        const leadSource = params.leadSource;
        const leadSourceRef = params.leadSourceRef;
        const reason = params.reason;

        if (typeof contactId === 'undefined') {
            throw new RevenexxException('Missing required parameter: "contactId"');
        }
        if (typeof stage === 'undefined') {
            throw new RevenexxException('Missing required parameter: "stage"');
        }

        const apiPath = '/v1/customers/contacts/{contact_id}/lifecycle'.replace('{contact_id}', contactId);
        const apiPayload: Payload = {};
        if (typeof actor !== 'undefined') {
            apiPayload['actor'] = actor;
        }
        if (typeof leadSource !== 'undefined') {
            apiPayload['lead_source'] = leadSource;
        }
        if (typeof leadSourceRef !== 'undefined') {
            apiPayload['lead_source_ref'] = leadSourceRef;
        }
        if (typeof reason !== 'undefined') {
            apiPayload['reason'] = reason;
        }
        if (typeof stage !== 'undefined') {
            apiPayload['stage'] = stage;
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
