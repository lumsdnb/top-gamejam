import { writable, readable } from 'svelte/store';

export const gameData = writable({
  name: 'bob',
  gold: 420,
  // this keeps track of each letter, when user inputs a sharp or flat, add or subtract 1 to the position
  letterPositions: [1, 3, 5, 6, 8, 10, 12],
  letters: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  currentScale: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  currentScaleNum: [1, 3, 5, 6, 8, 10, 12],
  //type letters (string)
  enteredNotes: [],
  //1-12 (halftones)
  enteredNotesAsID: [],
  enteredNoteTypes: [],
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
  canPresent: true,
  wonRound: false,
  showUI: false,
});

// this contains all messages currently in the game
export const messageSystem = readable([
  ['testing', ''],
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
