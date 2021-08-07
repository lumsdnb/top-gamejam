import { writable, readable } from 'svelte/store';

export const gameData = writable({
  name: 'bob',
  gold: 0,
  lettersCToB: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  letterPositions: [1, 3, 5, 6, 8, 10, 12],
  currentScale: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  // this keeps track of each letter, when user inputs a sharp or flat, add or subtract 1 to the position
  currentHalftoneSteps: [1, 3, 5, 6, 8, 10, 12],
  currentNoteTypes: [0, 0, 0, 0, 0, 0, 0],
  //type letters (string)
  enteredNotes: [],
  // full array
  enteredNotesWithTypes: [],
  //1-12 - yes it starts at 1
  enteredHalfTones: [],
  // 0 is normal, 1 is sharp, 2 is flat
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
  completedLetters: [],
  showScroll: false,
  canProgress: false,
  canPresent: true,
  wonRound: false,
  showUI: false,
});

// this contains all messages currently in the game
export const messageSystem = readable([
  [
    'i was sent to spread music throughout the world, but i forgot how to play...',
    '',
  ],
  ['i wonder who left this here. how convenient...', ''],
  [
    '                                                  ',
    'i am sad, so very very sad...',
  ],
  [
    'i need to cheer this fella up, what did the scroll say again..?',
    'i am sad, so very very sad...',
  ],
  ['', ''],
  [
    'that didnt work.. if i recall correctly, the 1st, 3rd and 5th note on the scale make up a major chord',
    'no, that doesnt feel right...',
  ],
  ['', 'thank you.. <3'],
  ['well that was.. something. i wonder who else i will encounter here...', ''],
  ['hmmm.. where to go next...', ''],
]);

export const characterMessages = readable({
  c: [
    `It's been so long since I heard my favorite chord...`,
    `YES, this is the one, thank you.`,
    `I don't like this chord.`,
  ],
  d: [
    `I heard you play chords for the folks in this forest, show me something for my taste.`,
    `You got some talent boy, good job.`,
    `This doesn't cut it for me.`,
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
    `I didn't enjoy this at all.`,
  ],
  a: [
    `At night the fireflies light up the forest. It's the most beautiful thing you'll ever see.`,
    `This was amazing.`,
    `I bet you can do something better.`,
  ],
  b: [
    `I heard you playing amazing music on your harp, show me something.`,
    `It's been a while since I heard something this beautiful.`,
    `Is that all you've got?`,
  ],
});
