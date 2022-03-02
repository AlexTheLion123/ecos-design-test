import { addDocument } from '$lib/scripts/firebase';
import {bot} from '$lib/scripts/bot'


export async function post(request) {
    console.log(request.params)
    if (request.params.method === '1') {

        try {
            const response = await getData(request.params.chatid)
            const data = (await response.json()).data;
            console.log("no error");
            return {
                status: 200,
                body: {
                    data: data
                }
            }
        } catch (error) {
            addDocAndEmail(request.params.chatid)


            // error
            console.log("THERE WAS AN ERROR")
            return {
                status: 400,
                body: { error }
            };
        }
    } else {
        addDocAndEmail(request.params.chatid)

        return {
            status: 400,
            body: { error: "Simulated error: Unable to fetch data" }
        };
    }


}

async function getData(chatid) {
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
        addDocAndEmail(chatid)
        throw new Error(err);
        // error
    }
}


function addDocAndEmail(chat_id: number) {
    addDocument({ ActionCode: 'Get data', Error: 'Simulated error', Timezone: (new Date()).getTimezoneOffset(), Author: 'Alex', Date: new Date() });

    bot.api.sendMessage(chat_id, "Hi, there was an error!");
}
