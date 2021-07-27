import { writable } from 'svelte/store';

export const gameData = writable({
  name: 'bob',
  gold: 420,
  currentScale: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  enteredNotes: [],
  activeNote: 'c',
  //state is incremented for tutorial message demo
  //1 is a started game
  //2 is the scroll view
  //3 is the appearance of the first character
  //4 is ??
  tutorialState: 0,
  showScroll: false,
  canProgress: false,
  showUI: false,
  currentCharacterMessage: 'please help me figure this out...',
  currentPlayerMessage: 'testing the typewriter effect, needs refactoring...',
});

export const userInterface = writable({
  selectedNote: 'c',
  notePosition: 0,
  noteType: 'normal',
});
