import { c as create_ssr_component } from "../../chunks/index-c31da524.js";
var explanation_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-15rk733.svelte-15rk733{margin:1rem}h2.svelte-15rk733.svelte-15rk733{margin-bottom:1rem}.update-process.svelte-15rk733 li.svelte-15rk733{list-style:decimal}li.svelte-15rk733.svelte-15rk733{margin-top:0.5rem;margin-left:1.3rem}p.svelte-15rk733.svelte-15rk733{margin-top:0.5rem}h4.svelte-15rk733.svelte-15rk733{margin-bottom:1rem}.svelte-15rk733.svelte-15rk733{line-height:1.3rem}",
  map: null
};
const Explanation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-15rk733"}"><h2 class="${"svelte-15rk733"}">How does the app work?</h2>
    <ul class="${"content svelte-15rk733"}"><li class="${"svelte-15rk733"}">The app is hosted on Heroku in a docker container. A docker container is not totally necessary with correct modifications to the scripts, however it was used in this case for the benefit of simplicity. </li>
        <li class="${"svelte-15rk733"}">The app uses the <a href="${"https://kit.svelte.dev/"}" target="${"_blank"}" class="${"svelte-15rk733"}">Sveltekit</a> framework which provides both the frontend (user-interface) and the api endpoints for the app.</li>
        <li class="${"svelte-15rk733"}">The error logs are stored on <a href="${"https://firebase.google.com/"}" target="${"_black"}" class="${"svelte-15rk733"}">Firebase</a></li></ul></section>

<section class="${"svelte-15rk733"}"><h2 class="${"svelte-15rk733"}">How is the developer getting the update?</h2>
    <div class="${"content svelte-15rk733"}"><p class="${"subcontent svelte-15rk733"}">The update will be received by the user on any device running the <b class="${"svelte-15rk733"}">telegram app</b>. This includes mobile, desktop, and tablet. 
        </p>
        <br class="${"svelte-15rk733"}">
        <h4 class="${"svelte-15rk733"}">The update process works sequentially as follows: </h4> 
        <ul class="${"update-process svelte-15rk733"}"><li class="${"svelte-15rk733"}">The front-end sends a post request to an api endpoint with the relevant parameters (chat id, author, error message)</li>
            <li class="${"svelte-15rk733"}">The endpoint sends an update to the database which is stored on firebase</li>
            <li class="${"svelte-15rk733"}">If there is no error in the update, no message is sent to the developer</li>
            <li class="${"svelte-15rk733"}">If there is an error in the update, or if the simulate error option is selected, the endpoint sends an update to the telegram bot api</li>
            <li class="${"svelte-15rk733"}">In turn, the telegram bot will notify the relevant user of the error in the database</li>
            <li class="${"svelte-15rk733"}">The front-end of the app is updated in real-time since Firebase allows us to continuosly monitor the database for changes. <a href="${"https://firebase.google.com/docs/firestore/query-data/listen"}" class="${"svelte-15rk733"}">https://firebase.google.com/docs/firestore/query-data/listen</a></li></ul></div></section>



<section class="${"svelte-15rk733"}"><h2 class="${"svelte-15rk733"}">Database</h2>
    <div class="${"content firebase svelte-15rk733"}"><h4 class="${"svelte-15rk733"}">Firebase</h4>
        <p class="${"svelte-15rk733"}">As aforementioned, the simulated error logs are stored on Firebase which provides &#39;backend as a service&#39; (Baas) over the cloud.
            Firebase is especially suitable for this application because its api makes it very easy to  <b class="${"svelte-15rk733"}">monitor real-time changes</b> to the database.
        </p>
        <br class="${"svelte-15rk733"}">
        <h4 class="${"svelte-15rk733"}">Relational or non-relational?</h4>
        <ul class="${"data-type svelte-15rk733"}"><li class="${"svelte-15rk733"}">Relational data refers to data that is highly organizable through the use of multiple tables linked to each other by &#39;keys&#39; i.e. unique identifiers</li>
            <li class="${"svelte-15rk733"}">Non-relational data is data that is difficult to organize into many categories and subcategories</li>
            <li class="${"svelte-15rk733"}">Relational databases are able to maintain a much higher degree of data integrety and make it much easier to filter the data to obtain only the data relevant to a specific query. However, this comes at the cost of higher cost and decreased scalability.</li>
            <li class="${"svelte-15rk733"}">Non-relational databases are typically much harder to manipulate, but scale very well and are computationally cheaper</li></ul>
            <p class="${"svelte-15rk733"}">For error logs, since the data is not especially relational, and because of the fact that logs will likely incur many more write than read operations,  <b class="${"svelte-15rk733"}">it makes sense to store it in a non-relational database</b>.
            In any case, Firebase does not currently support relational databases.
        </p></div></section>

<section class="${"svelte-15rk733"}"><h2 class="${"svelte-15rk733"}">Alternatives</h2>
    <div class="${"content alternatives svelte-15rk733"}"><li class="${"svelte-15rk733"}">Firebase cloud messaging<p class="${"svelte-15rk733"}">Firebase provides its own cloud messaging service that can send push notifications to native mobile apps in addition to web apps. </p></li>
        <li class="${"svelte-15rk733"}">Email</li>
        <li class="${"svelte-15rk733"}">Slack</li>
        <li class="${"svelte-15rk733"}">Discord</li></div>
</section>`;
});
export { Explanation as default };
