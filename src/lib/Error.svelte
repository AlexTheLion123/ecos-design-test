<script>
	export let ActionCode;
	export let Timezone;
	export let Author;
	export let Error;
	export let Date;
	export let id;
</script>

<main>
	<div class="item actionCode">Action code: {ActionCode}</div>
	<div class="item Timezone">Timezone: {Timezone}</div>
	<div class="item Author">Author: {Author}</div>
	<div class="item Error">Error: {Error}</div>
	<div class="item Date">Date: {Date}</div>
	<div class="item id">id: {id}</div>
</main>

<style>
    main {
        border: 1px solid black;
        margin: 1rem;
    }
</style>
