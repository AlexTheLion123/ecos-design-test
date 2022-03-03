<script lang="ts">
	import Item from "$lib/Item.svelte";
	import { colRef } from "$lib/scripts/firebase";
	import Error from "$lib/Error.svelte";
	import { onSnapshot } from "firebase/firestore";

	let dataPromise;
	let method = 1;
	let chat_id;
	let author;
	let message;
	async function handleSubmit() {
		if(!chat_id) {
			alert("Follow the instructions above to get your chat id")
			return;
		}

		if(!author) {
			alert("Enter your name in the author field")
			return;
		}
		if(!message) {
			alert("Enter your name in the message field")
			return;
		}

		dataPromise = fetch(`/api/${method}/${chat_id}/${author}/${message}`, { method: "POST" }).then(
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
	<h1>Instructions for setting up bot</h1>
	<ul class="instructions">
		<li>Open telegram</li>
		<li>Type in @EconomicsDesignBot</li>
		<li>Press or type in '/start'</li>
		<li>Copy the response which represents the chat id</li>
		<li>Paste it in the chat id field below</li>
	</ul>
</section>

<section>
</section>
<form on:submit|preventDefault={handleSubmit}>
	<fieldset>
		Use this form  to either get data from the coin market cap api successfully, or simulate an error
		<br/>
		<br/>
		<label>
			<input type="radio" class="radio" bind:group={method} name="method" value={1} />
			Get Data
		</label>

		<label>
			<input type="radio" class="radio" bind:group={method} name="method" value={2} />
			Simulate Error
		</label>
		<br />
		<br />

		<label class="chatid">
			Chat id
			<input type="text" name="chat_id" bind:value={chat_id}>
		</label>
		<br />
		<br />

		<label class="author">
			Author
			<input type="text" name="author" bind:value={author}>
		</label>

		<br />
		<br />

		<label class="message">
			Message
			<input type="text" name="message" bind:value={message}>
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
			<h1 style="text-align:right;">Number of simulated errors: {errors.length}</h1>
			{#each errors as error, i}
				<Error {...error} number={i+1}/>
			{/each}
		{/if}
	</section>
</main>

<style>
	main {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 3rem;
	}

	.instructions {
		font-size: 1.3rem;
		font-weight: 400;
		padding-left: 2rem;
		margin: 1rem;
	}

	.instructions li {
		margin: 0.5rem;
	}

	form {
		margin: 1rem 0;
	}

	.radio {
		width: 5rem;
	}

	fieldset {
		font-size: 1.2rem;
		padding: 1rem;
	}

	li {
		list-style: decimal;
	}

	input {
		height: 1.5rem;
		border-radius: 5px;
	}

	button {
		padding: 0.5rem;
		width: 8rem;
		border-radius: 5px;
		background: rgb(154, 152, 251);
	}

	button:hover {
		background:rgb(130, 128, 250);
	}
</style>
