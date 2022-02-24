<script>

let sInput = 'search';
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
    <input id="searchInput" type="text" bind:value={sInput} on:click={resetSearch}
    on:keydown="{event => event.key === 'Enter' && search()}">
    <!-- <button on:click={search}>Search</button> -->

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
    div {
        margin: 10px;
    }

    #radio-div {
        display: flex;
        justify-content: center;
        padding: 10px 0px 0px 0px;
    }

    #searchInput {
        width: 100%;
    }

    label {
        margin: 0rem .5rem;
    }

    button:hover {
        opacity: 0.8;
        cursor: pointer;
    }
</style>