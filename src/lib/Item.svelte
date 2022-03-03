<script>
	export let id;
	export let name;
	export let symbol;
	export let cmc_rank;
	export let last_updated;
	export let circulating_supply;
	export let total_supply;
</script>

<div class="container">
		<div class="item">Id: {id}</div>
		<div class="item">Name: {name}</div>
		<div class="item">Symbol: {symbol}</div>
		<div class="item">Cmc rank: {cmc_rank}</div>
		<div class="item">Circulating supply: {circulating_supply}</div>
		<div class="item">Total supply: {total_supply}</div>
	<div class="item">Last updated: {last_updated}</div>
</div>

<style>
	.container {
		border: 1px solid black;
        margin: 1rem 0;
	}

	.container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
		padding: 1rem;
	}
</style>
