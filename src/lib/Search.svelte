<script>

let sInput = 'search me';
let sEngine = 1;

function search() {
  if (sEngine === 1) {
    window.open(`https://www.google.com/search?q=${sInput}&btnG=Search`, '_self');
  } else {
    window.open(`https://duckduckgo.com/?q=${sInput}&t=h_&ia=web`, '_self');
  }
}

function resetSearch() {
    sInput = '';
}
</script>


<div>
    <input id="searchInput" type="text" bind:value={sInput} on:click={resetSearch}>

    <button on:click={search}>Search</button>


    <div id="radio-div">
        
        <label>
            <input type="radio" bind:group={sEngine} name="sEngine" value={1}>
            Google
        </label>

        
        <label>
            <input type="radio" bind:group={sEngine} name="sEngine" value={2}>
            DuckDuckGo
        </label>
    </div>
</div>

<style>
    #radio-div {
        display: flex;
        justify-content: center;
        margin: 20px 0px;
    }

    #searchInput {
        width: 70%;
    }

    input {
        margin: .5em;
    }

    label {
        margin: .5em;
    }

    button:hover {
        opacity: 0.8;
    }
</style>