<script>

let sInput = 'search me';
let sEngine = 1;

function search() {
  if (sEngine === 1) {
    window.open(`https://search.brave.com/search?q=${sInput}`, '_self');
  } else {
    window.open(`https://www.google.com/search?q=${sInput}`, '_self');
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
            Brave
        </label>
        <label>
            <input type="radio" bind:group={sEngine} name="sEngine" value={2}>
            Google
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
        cursor: pointer;
    }
</style>