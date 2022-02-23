<script>
  import Search from "./lib/Search.svelte";
  import Link from "./lib/Link.svelte";
  import { component_subscribe } from "svelte/internal";
  
  let links = [
    {link: "https://www.youtube.com/", src: "./src/assets/images/youtube.png"},
    {link: "https://github.com/tasmankingsley", src: "./src/assets/images/github.png"},
    {link: "https://www.netflix.com/browse", src: "./src/assets/images/netflix.png"},
    {link: "https://tasmankingsley.github.io/", src: "./src/assets/images/profile.png"},
  ];

  let new_link = "";
  let new_src = "";

  function add_component() {
    links = [...links, {link: new_link, src: new_src}]
    new_link = "";
    new_src = "";
  }

  
</script>
  
<main>  
  <span>new tab</span>
  <Search/>


  <input bind:value={new_link} type="text" placeholder="paste link">
  <input bind:value={new_src} type="text" placeholder="paste icon link">
  <button on:click={add_component}>add link</button>

  <button>rm link</button>
  
  <div>
    {#each links as comp}
      <svelte:component this={Link} web_link={comp.link} icon_src={comp.src}/>
    {/each}
  </div>

</main>
  
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 500px;
    margin: 0 auto;
    font-family: "Roboto Mono", monospace;
  }

  span {
    font-size: 2rem;
    /* font-weight: 200; */
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

  }

  @media (min-width: 640px) {
    main {
      max-width: 64%;
    }
  }
</style>