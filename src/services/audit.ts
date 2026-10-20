import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Audit {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Read-only. The values are the tenant's settings in Console; they are changed there, not here. `defaults` is true while Console holds none for the tenant (two years of history, 90 days of trash). An app's trash purge reads `trash_retention_days` here.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    auditGetSettings(): Promise<{}> {

        const apiPath = '/v1/audit/settings';
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
