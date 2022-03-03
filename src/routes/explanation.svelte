
<section>
    <h2>How does the app work?</h2>
    <ul class="content">
        <li>The app is hosted on Heroku in a docker container. A docker container is not totally necessary with correct modifications to the scripts, however it was used in this case for the benefit of simplicity. </li>
        <li>The app uses the <a href="https://kit.svelte.dev/" target="_blank">Sveltekit</a> framework which provides both the frontend (user-interface) and the api endpoints for the app.</li>
        <li>The error logs are stored on <a href="https://firebase.google.com/" target="_black">Firebase</a></li>
    </ul>
</section>

<section>
    <h2>How is the developer getting the update?</h2>
    <div class="content">
        <p class="subcontent">
            The update will be received by the user on any device running the <b>telegram app</b>. This includes mobile, desktop, and tablet. 
        </p>
        <br/>
        <h4>The update process works sequentially as follows: </h4> 
        <ul class="update-process">
            <li>The front-end sends a post request to an api endpoint with the relevant parameters (chat id, author, error message)</li>
            <li>The endpoint sends an update to the database which is stored on firebase</li>
            <li>If there is no error in the update, no message is sent to the developer</li>
            <li>If there is an error in the update, or if the simulate error option is selected, the endpoint sends an update to the telegram bot api</li>
            <li>In turn, the telegram bot will notify the relevant user of the error in the database</li>
            <li>The front-end of the app is updated in real-time since Firebase allows us to continuosly monitor the database for changes. <a href="https://firebase.google.com/docs/firestore/query-data/listen">https://firebase.google.com/docs/firestore/query-data/listen</a></li>
        </ul>
        
    </div>
</section>



<section>
    <h2>Database</h2>
    <div class="content firebase">
        <h4>Firebase</h4>
        <p>

            As aforementioned, the simulated error logs are stored on Firebase which provides 'backend as a service' (Baas) over the cloud.
            Firebase is especially suitable for this application because its api makes it very easy to  <b>monitor real-time changes</b> to the database.
        </p>
        <br/>
        <h4>Relational or non-relational?</h4>
        <ul class="data-type">

            <li>Relational data refers to data that is highly organizable through the use of multiple tables linked to each other by 'keys' i.e. unique identifiers</li>
            <li>Non-relational data is data that is difficult to organize into many categories and subcategories</li>
            <li>Relational databases are able to maintain a much higher degree of data integrety and make it much easier to filter the data to obtain only the data relevant to a specific query. However, this comes at the cost of higher cost and decreased scalability.</li>
            <li>Non-relational databases are typically much harder to manipulate, but scale very well and are computationally cheaper</li>
        </ul>
            <p>For error logs, since the data is not especially relational, and because of the fact that logs will likely incur many more write than read operations,  <b>it makes sense to store it in a non-relational database</b>.
            In any case, Firebase does not currently support relational databases.
        </p>
    </div>
</section>

<section>
    <h2>Alternatives</h2>
    <div class="content alternatives">
        <li>Firebase cloud messaging<p>Firebase provides its own cloud messaging service that can send push notifications to native mobile apps in addition to web apps. </p></li>
        <li>Email</li>
        <li>Slack</li>
        <li>Discord</li>
        
    </div>
</section>


<style>
    section {
        margin: 1rem;
    }

    h2 {
        margin-bottom: 1rem;
    }

    .update-process li {
		list-style: decimal;
    }
    
    li {
        margin-top: 0.5rem;
        margin-left: 1.3rem;

    }


    p {
        margin-top: 0.5rem;
    }

    h4 {
        margin-bottom: 1rem;
    }

    * {
        line-height: 1.3rem;
    }
</style>
