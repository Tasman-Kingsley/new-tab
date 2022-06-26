<script>
  import { links } from "./lib/store.js";
  import Search from "./lib/Search.svelte";
  import Link from "./lib/Link.svelte";
  import { fade, fly } from 'svelte/transition';

  let new_link = "";
  let new_src = "";
  let visible = false;
  let sign = "＋";

  function add_link() {
    $links = [...$links, {link: new_link, src: new_src}]
    new_link = "";
    new_src = "";
  }

  function remove_link(index) {
    $links.splice(index, 1);
    $links = $links;
  }

// Toggle visibility for add and delete component elements
  function toggle_visibility() {
    visible = !visible;

    if (visible === true) {
      sign = "－";
    } else {
      sign = "＋";
    }
  }


</script>
  
<main>  
  <!-- <Search/> -->

  <span on:click={toggle_visibility} class="edit">{sign}</span>

  
  <div class="edit_div" style="height: {visible ? "100px" : "0px"};">
    {#if visible}
      <input class="input" bind:value={new_link} type="text" placeholder="paste link" in:fly={{x: -400, duration: 400}}>
      <input class="input" bind:value={new_src} type="text" placeholder="paste icon link" in:fly={{x: -400, duration: 400}}>
      <button class="button" on:click={add_link} in:fly={{x: 400, duration: 400}}>add link</button>
    {/if}
  </div>


  <div class="comp_div">
<!-- loops through the link  component object and displays them -->
    {#each $links as comp, index}
      <div class="inner_comp_div" style="position: relative;">
        <div style="opacity: {visible ? 0.6 : 1};">
          <svelte:component this={Link} web_link={comp.link} icon_src={comp.src}/>
        </div>
        

  <!-- Hides and unhides remove buttons for each component -->
        {#if visible}
          <div class="rm_div" on:click={() => remove_link(index)} in:fade>ⓧ</div>
        {/if}
      </div>
    {/each}
  </div>

</main>
  
<style>
  main {
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    font-family: "Roboto Mono", monospace;
  }

  .edit {
    top: 0;
    font-size: 2rem;
    cursor: pointer;
  }

  .edit_div {
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    transition: height 0.3s;
  }

  .button {
    grid-column: 1 / 3;
    background-color:#7a879e;
    color: #fff;
  }

  .comp_div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .rm_div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    opacity: 0.9;
    cursor: pointer;
  }

  .inner_comp_div:hover {
        opacity: 0.9;
  }

  button:hover {
        opacity: 0.8;
        cursor: pointer;
    }

  @media (min-width: 640px) {
    main {
      max-width: 70%;
    }
  }
</style>