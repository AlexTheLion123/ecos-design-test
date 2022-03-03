<nav>
    <ul>
        <li><a href="/">Error simulation</a></li>
        <li><a href="/explanation">Explanation</a></li>
    </ul>
</nav>


<slot/>

<style>
    nav {
        display: flex;
        justify-content: center;
        height: 3rem;
        border-bottom: 1px solid black;
        padding: 1rem;
    }
    ul {
        display: flex;
        align-items: center;
    }
    li {
        list-style: none;
    }
    
    a {
        
        padding: 1rem;
        margin: 1rem;
        border-radius: 5px;
        border: 1px solid black;
        text-decoration: none;
    }
    a:hover {
        background: rgb(212, 212, 212);
        cursor: pointer;
    }
</style>