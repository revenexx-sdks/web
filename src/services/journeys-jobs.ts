import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class JourneysJobs {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Executes due steps of all live journeys, oldest first, in chunks, within the budget (setting step_budget_ms). Also the five-minute schedule run-steps.
     *
     * @param {number} params.budgetMs - A shorter budget than the setting.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJobsSteps(params?: { budgetMs?: number }): Promise<{}>;
    /**
     * Executes due steps of all live journeys, oldest first, in chunks, within the budget (setting step_budget_ms). Also the five-minute schedule run-steps.
     *
     * @param {number} budgetMs - A shorter budget than the setting.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJobsSteps(budgetMs?: number): Promise<{}>;
    journeysJobsSteps(
        paramsOrFirst?: { budgetMs?: number } | number    
    ): Promise<{}> {
        let params: { budgetMs?: number };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { budgetMs?: number };
        } else {
            params = {
                budgetMs: paramsOrFirst as number            
            };
        }
        
        const budgetMs = params.budgetMs;


        const apiPath = '/v1/journeys/steps/run';
        const apiPayload: Payload = {};
        if (typeof budgetMs !== 'undefined') {
            apiPayload['budget_ms'] = budgetMs;
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
     * Date triggers that are due today, then the three-hour sweep over carts, orders, subscriptions and audience joins standing in for undelivered announcements (PE-748). Also the hourly schedule run-triggers.
     *
     * @param {boolean} params.force - Run date triggers again today, before their time.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    journeysJobsTriggers(params?: { force?: boolean }): Promise<{}>;
    /**
     * Date triggers that are due today, then the three-hour sweep over carts, orders, subscriptions and audience joins standing in for undelivered announcements (PE-748). Also the hourly schedule run-triggers.
     *
     * @param {boolean} force - Run date triggers again today, before their time.
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    journeysJobsTriggers(force?: boolean): Promise<{}>;
    journeysJobsTriggers(
        paramsOrFirst?: { force?: boolean } | boolean    
    ): Promise<{}> {
        let params: { force?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { force?: boolean };
        } else {
            params = {
                force: paramsOrFirst as boolean            
            };
        }
        
        const force = params.force;


        const apiPath = '/v1/journeys/triggers/run';
        const apiPayload: Payload = {};
        if (typeof force !== 'undefined') {
            apiPayload['force'] = force;
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
