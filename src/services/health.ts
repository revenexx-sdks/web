import { Service } from '../service';
import { RevenexxException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Health {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Answers as long as the process is running. Never touches a dependency, so it stays 200 while the gateway is degraded — use readiness to decide whether to send traffic.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    healthLive(): Promise<{}> {

        const apiPath = '/health/live';
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
     * Answers 200 once the gateway's registry source is reachable, 503 until then.
     *
     * @throws {RevenexxException}
     * @returns {Promise<{}>}
     */
    healthReady(): Promise<{}> {

        const apiPath = '/health/ready';
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
