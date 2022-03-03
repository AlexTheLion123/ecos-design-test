

<section>
    <h2>How is the developer getting the update?</h2>
    <div class="content">
        The update process works sequentially as follows: 
        <ul>
            <li>Front-end sends a post request to an api endpoint with the relevant parameters (chat id, author, error message)</li>
            <li>The endpoint attempts to update the database which is stored on firebase</li>
            <li>If there is no error in the update, no message is sent to the developer</li>
            <li>If there is an error or if the simulate error option was selected, the endpoint, which is also hosting the bot, sends an update to the telegram bot api</li>
            <li>In turn, the telegram bot will notify the relevant user of the error in the database</li>
        </ul>
        <p class="subcontent">
            Note that the update will be received by the user on any device running the telegram app. This includes mobile, desktop, and tablet. 
        </p>
    </div>
</section>

<section>
    <h2>How does the app work?</h2>
    <p class="content">
        The app uses the <a href="https://kit.svelte.dev/" target="_blank">Sveltekit</a> framework which provides both the frontend (user-interface) and backend for the app.
        The app is hosted on netlify.
        The error logs are stored on <a href="https://firebase.google.com/" target="_black">Firebase</a>
    </p>
</section>

<section>
    <h2>Database</h2>
    <div class="content">
        As aforementioned, the simulated error logs are stored on Firebase which provides 'backend as a service' (Baas) over the cloud.
        Firebase is especially suitable for this application its api makes it very easy to monitor for real-time changes to the database.
        <br/>
        <br/>
        <h4>Relational or non-relational?</h4>
        <p></p>

        <h4>Type of database</h4>
        Firebase currently only provides storage options tailored to non-relational data, implying that firebase may not be optimal with relational data. 
    </div>
</section>


<style>
    section {
        border: 1px solid black;
    }
</style>
