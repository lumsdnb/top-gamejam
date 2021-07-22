import { writable } from 'svelte/store';

export const gameData = writable({
  name: 'bob',
  gold: 420,
  currentScale: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  enteredNotes: ['c', 'e', 'g'],
  activeNote: 'c',
});
