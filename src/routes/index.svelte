<script lang="ts">
	import Item from "$lib/Item.svelte";
	import { colRef } from "$lib/scripts/firebase";
	import Error from "$lib/Error.svelte";
	import { onSnapshot } from "firebase/firestore";

	let dataPromise;
	let method = 1;
	let chat_id;
	async function handleSubmit() {
		dataPromise = fetch(`/api/${method}/${chat_id}`, { method: "POST" }).then(
			(response) => {
				return response.json();
			}
		);
	}

	let errors;
	onSnapshot(colRef, (snapshot) => {
		let newerrors = [];
		snapshot.docs.forEach((doc) => {
			newerrors.push({ ...doc.data(), id: doc.id });
		});
		errors = newerrors;
	});

	let chatId
</script>

<section class="steps">
	<ul>
		<li>Open telegram</li>
		<li>Type in @EconomicsDesignBot</li>
		<li>Press /start</li>
		<li>Copy the response which represents the chat id</li>
		<li>Paste it in the chat id field below</li>
	</ul>
</section>

<form on:submit|preventDefault={handleSubmit}>
	<fieldset>
		<legend>Do stuff</legend>
		<label>
			<input type="radio" bind:group={method} name="method" value={1} />
			Get Data
		</label>

		<label>
			<input type="radio" bind:group={method} name="method" value={2} />
			Cause Error
		</label>

		<label>
			<input type="text" name="chat_id" bind:value={chat_id}>
		</label>

		<br />
		<br />

		<button type="submit">Submit</button>
	</fieldset>
</form>

<main>
	<section class="data">
		{#await dataPromise}
			Getting data...
		{:then result}
			{#if result?.data}
				<h1>Data collected successfully</h1>
				{#each result.data as item}
					<Item
						id={item.id}
						name={item.name}
						symbol={item.symbol}
						cmc_rank={item.cmc_rank}
						last_updated={item.last_updated}
						circulating_supply={item.circulating_supply}
						total_supply={item.total_supply}
					/>
				{/each}
			{/if}

			{#if result?.error}
				<h1>There was an error</h1>
				{result.error}
			{/if}
		{/await}
	</section>

	<section class="errors">
		{#if errors}
			<h1>Number of errors {errors.length}</h1>
			{#each errors as error, i}
				<span>{i+1}</span><Error {...error} />
			{/each}
		{/if}
	</section>
</main>

<style>
	main {
		display: flex;
		justify-content: space-between;
	}

	span {
		display: inline;
	}
</style>
