<script>
    import { fade } from 'svelte/transition';

    export let web_link;
    export let icon_src;

</script>

<div class="icon-div" in:fade out:fade>
    <a href={web_link}><img class="icon" src={icon_src} alt=""></a>
</div>

<style>
.icon-div:hover {
    opacity: 0.8;
}

.icon {
    width: 100px;
    height: 100px;
    border-radius: 20%;
    margin: 1rem;
}
</style>