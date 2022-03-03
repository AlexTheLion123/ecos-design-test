import { c as create_ssr_component } from "../../chunks/index-c31da524.js";
var explanation_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-3w482x{border:1px solid black}li.svelte-3w482x{list-style:decimal}",
  map: null
};
const Explanation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-3w482x"}"><h2>How does the app work?</h2>
    <p class="${"content"}">The app uses the <a href="${"https://kit.svelte.dev/"}" target="${"_blank"}">Sveltekit</a> framework which provides both the frontend (user-interface) and backend for the app.
        The app is hosted on netlify.
        The error logs are stored on <a href="${"https://firebase.google.com/"}" target="${"_black"}">Firebase</a></p></section>

<section class="${"svelte-3w482x"}"><h2>How is the developer getting the update?</h2>
    <div class="${"content"}">The update process works sequentially as follows: 
        <ul><li class="${"svelte-3w482x"}">The front-end sends a post request to an api endpoint with the relevant parameters (chat id, author, error message)</li>
            <li class="${"svelte-3w482x"}">The endpoint sends an update to the database which is stored on firebase</li>
            <li class="${"svelte-3w482x"}">If there is no error in the update, no message is sent to the developer</li>
            <li class="${"svelte-3w482x"}">If there is an error or if the simulate error option was selected, the endpoint, which is also hosting the bot, sends an update to the telegram bot api</li>
            <li class="${"svelte-3w482x"}">In turn, the telegram bot will notify the relevant user of the error in the database</li>
            <li class="${"svelte-3w482x"}">The front-end of the app is updated in real-time since Firebase allows us to continuosly monitor the database for changes. <a href="${"https://firebase.google.com/docs/firestore/query-data/listen"}">https://firebase.google.com/docs/firestore/query-data/listen</a></li></ul>
        <p class="${"subcontent"}">Note that the update will be received by the user on any device running the telegram app. This includes mobile, desktop, and tablet. 
        </p></div></section>



<section class="${"svelte-3w482x"}"><h2>Database</h2>
    <div class="${"content"}">As aforementioned, the simulated error logs are stored on Firebase which provides &#39;backend as a service&#39; (Baas) over the cloud.
        Firebase is especially suitable for this application its api makes it very easy to monitor for real-time changes to the database.
        <h4>Relational or non-relational?</h4>
        <p>Relational data refers to... Non-relational data can be thought as .... Relational databases are able to maintain a much higher degree of data integrety and make it much easier to filter the data to obtain only the data relevant to a specific query. However, this comes at the cost of higher cost and decreased scalability.
            Non-relational databases are typically much harder to manipulate, but scale very well and are computationally cheaper.
        </p>
        <p>For error logs, since the data is not especially relational, and because of the fact that logs will likely incur many more read than write operations, it makes sense to store it in a non-relational database.
            In any case, Firebase does not currently support relational databases.
        </p></div>
</section>`;
});
export { Explanation as default };
