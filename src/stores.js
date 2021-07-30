import { writable, readable } from 'svelte/store';

export const gameData = writable({
  name: 'bob',
  gold: 420,
  currentScale: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  enteredNotes: [],
  activeNote: 'c',
  //state is incremented for tutorial message demo
  //1 starts game with scroll view
  //2 is the appearance of the first character
  //3 - first game played
  //4 if answer is wrong
  //5 if answer is correct
  tutorialState: 0,
  showScroll: false,
  canProgress: false,
  wonRound: false,
  showUI: false,
});

// this contains all messages currently in the game
export const messageSystem = readable([
  [
    'testing the typewriter effect, needs refactoring...',
    'i am sad, so very very sad...',
  ],
  ['i wonder who left this here. how convenient...', ''],
  ['', 'i am sad, so very very sad...'],
  [
    'i need to cheer this fella up, what did the scroll say again..?',
    'i am sad, so very very sad...',
  ],
  ['', ''],
  [
    'that didnt work.. if i recall correctly, the scale was c, d e f g a b c',
    'no, that doesnt feel right...',
  ],
  ['', 'thank you.. <3'],
  ['well that was.. something. i wonder what else i will find here..', ''],
]);
