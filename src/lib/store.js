/* eslint-disable */
import { writable } from 'svelte/store';

// export object "links" as writable store, either get stored object or create empty object
export let links = writable(JSON.parse(localStorage.getItem('link_store')) || [
    {link: "http://www.youtube.com/", src: "https://imgs.search.brave.com/fx_jWgOxhgaeHV6M86OnqgVM0MG_iusDDEXrtSstecg/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/S1o3eGxMaXhHb2Zr/cFNyVVdYYlBnSGFI/YSZwaWQ9QXBp"},
    {link: "https://github.com/tasmankingsley", src: "https://imgs.search.brave.com/4EEUAkhTWot3uz4922e4wNEJhRSDkDacv7AC05BQb4k/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/NzhlNjJJZ09LSHFM/bUlEYlRONGlnSGFI/YSZwaWQ9QXBp"},
    {link: "https://tasmankingsley.github.io/", src: "https://tasmankingsley.github.io/images/spotify-profile.jpg"},
    {link: "https://mail.proton.me/u/1/inbox", src: "https://play-lh.googleusercontent.com/99IPL5W1HvN1TM7awcJ2gihUie-LQ5Ae7W9g0FgCBFJ8hNZnFIOJElyBPNcx4Wcx7A"},
    {link: "https://www.icloud.com/", src: "https://imgs.search.brave.com/_gOv2QfAAwR0sXy-ox2N_y_JrWciUkW9Se1Td-a7iqk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/bm5nSWNvSzFTcFJ3/S2MzZXpuMk1nSGFI/YSZwaWQ9QXBp"}

]);

// Update on change to stored value (links)
links.subscribe((value) => localStorage.link_store = JSON.stringify(value));
