import { addDocument } from '$lib/scripts/firebase';
import {bot} from '$lib/scripts/bot'


export async function post(request) {
    if (request.params.method === '1') {

        try {
            const response = await getData(request.params.chatid, request.params.author, request.params.message)
            const data = (await response.json()).data;
            return {
                status: 200,
                body: {
                    data: data
                }
            }
        } catch (error) {
            addDocAndEmail(request.params.chatid, request.params.author, request.params.message)

            return {
                status: 400,
                body: { error }
            };
        }
    } else {
        addDocAndEmail(request.params.chatid, request.params.author, request.params.message)

        return {
            status: 400,
            body: { error: "Simulated error: Unable to fetch data" }
        };
    }


}

async function getData(chatid, author, message) {
    try {
        return fetch(
            "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
            {
                headers: {
                    "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
                },
            }
        );
    } catch (err) {
        addDocAndEmail(chatid, author, message)
        throw new Error(err);
        // error
    }
}


function addDocAndEmail(chat_id: number, author: string, message: string) {
    addDocument({ ActionCode: 'Simulate error', Error: message, Timezone: (new Date()).getTimezoneOffset(), Author: author, Date: (new Date()).toLocaleString() });

    bot.api.sendMessage(chat_id, `Hi ${author}, there was an error in your database:\n\n${message}`);
}
