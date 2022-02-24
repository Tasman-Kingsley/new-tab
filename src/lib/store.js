/* eslint-disable */
import { writable } from 'svelte/store';

// export object "links" as writable store, either get stored object or create empty object
export let links = writable(JSON.parse(localStorage.getItem('store')) || []);

// Update on change to stored value (links)
links.subscribe((value) => localStorage.store = JSON.stringify(value));
