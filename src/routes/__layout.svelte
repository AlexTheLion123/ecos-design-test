<nav>
	<ul>
		<li><a href="/">Error simulation</a></li>
		<li><a href="/explanation">Explanation</a></li>
	</ul>
</nav>

<div class="container">
	<main>
		<slot />
	</main>
</div>

<style>
	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	}
	nav {
		display: flex;
		justify-content: center;
		height: 5rem;
		border-bottom: 1px solid rgb(195, 195, 195);
		padding: 1rem;
		background: rgb(75, 102, 160);
	}

    .container {
        display: grid;
        place-items: center;
    }

	main {
		padding: 3rem;
		max-width: 2000px;
	}
	ul {
		display: flex;
		align-items: center;
	}
	li {
		list-style: none;
	}

	a {
		background: rgb(130, 128, 250);
		padding: 1rem;
		margin: 1rem;
		border-radius: 5px;
		border: 1px solid rgba(24, 24, 24, 0.507);
		text-decoration: none;
		color: white;
		font-weight: 600;
	}
	a:hover {
		background: rgb(107, 105, 248);
		cursor: pointer;
	}
</style>
