import {bot} from '$lib/scripts/bot'

export async function get() {
    const method = 1;

    return {
        body: {method}
    }
}