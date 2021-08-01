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
  finishedTutorial: false,
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

export const characterMessages = readable({
  c: [
    `It's been so long since I heared my favorite chord.`,
    `YES, this is the one, thank you.`,
    `I don't like this chord.`,
  ],
  d: [
    `I heard you play chords for the folks in this forest, show me something for my taste.`,
    `You got some talent boy, good job.`,
    `This doesn't cut for me.`,
  ],
  e: [
    `It's so annoying to live with this shape, my leg alway gets tangled in vines.`,
    `I like this tune, keep it up!.`,
    `This is not what I like.`,
  ],
  f: [
    `My little brother E keeps complaining about getting tangled in vines, but there are no vines in this forest.`,
    `This chord is music to my ears, even tho I don't have ears.`,
    `Try a different one.`,
  ],
  g: [
    `The forest is filled with snakes, but they are more scared of you that you are scared to them.`,
    `Very well played! You are going places.`,
    `I didn't enjoy this a bit.`,
  ],
  a: [
    `At night the fireflies will lit the forrest up. It's the most beautiful thing you'll ever see.`,
    `This was amazing.`,
    `I bet you can do something better.`,
  ],
  b: [
    `I heared you playing amazing music on your harp, show me something.`,
    `It's been a while since I heared something this beautiful.`,
    `Is that all you've got?`,
  ],
});
