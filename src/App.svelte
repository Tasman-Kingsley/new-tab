<script>
  import { links } from "./lib/store.js";
  import Search from "./lib/Search.svelte";
  import Link from "./lib/Link.svelte";
  import { fade } from 'svelte/transition';

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

  {#if visible}
    <div in:fade out:fade style="padding: 20px;">
      <input bind:value={new_link} type="text" placeholder="paste link">
      <input bind:value={new_src} type="text" placeholder="paste icon link">
      <button on:click={add_link}>add link</button>
    </div>
  {/if}


  <div class="comp_div">
<!-- loops through the link  component object and displays them -->
    {#each $links as comp, index}
      <svelte:component this={Link} web_link={comp.link} icon_src={comp.src}/>

<!-- Hides and unhides remove buttons for each component -->
      {#if visible}
        <span on:click={() => remove_link(index)} in:fade out:fade>ⓧ</span>
      {/if}
    {/each}
  </div>

</main>
  
<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    font-family: "Roboto Mono", monospace;
  }

  span {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .edit {
    right: 0;

    font-size: 2rem;
  }

  .comp_div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

  }

  span:hover {
        opacity: 0.8;
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