import { writable } from 'svelte/store';

export const gameData = writable({
  name: 'bob',
  gold: 420,
  currentScale: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  enteredNotes: [],
  activeNote: 'c',
});
export const userInterface = writable({
  selectedNote: 'c',
  notePosition: 0,
  noteType: 'normal',
});
