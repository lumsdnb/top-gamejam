### note entry system

- gets scale of character
- [x] tracks what notes player entered
- checks if sharps and flats are correct
- [x] for testing, hardcode c major scale first, easiest to get basic logic working
- [x] set up main game component that contains note grid, ui panels
- impl gold count in UI
- get gold when winning
- [x] note line renderer
  - [x] entered notes
  - [x] notes as separate components
    - [x] note colors
    - [x] active notes
    - [x] flats & sharps
  - correct answer (light up notes in red or green
  - change existing notes
- [x] detect & play sharps and flats
- [ ] render sharps and flats in note renderer

### player msg box

- [x] change to button when 3 notes were entered
- pressing it plays a submission sound & strums the chord presented, initiates chord check function in main gameobject

### story text system

- it needs that retro text scroll effect (seems easy to implement) https://svelte.dev/tutorial/custom-js-transitions
- character introduction
- character during note entry
  - up to 3 unique messages per note/ character
  - can be hints at the beginning, which would serve as the tutorial
  - correct/incorrect response text

### alchemy scroll

- shows scales and chord formulas
- can be looked at when in home view, costs gold to view during quest (has to be summoned)

### audio

- audio player object (keep in header?)
- [x] harp? sounds for each note - or some other bardlike instrument
- submit sound
- button click
- [x] confirm sound
- [x] error sound
- [x] message letter click sound

### other nice to haves

- transitions
  - msgbox puh in/over/out
  - receive gold
  - change input panel value
  - notes that poof/bounce in/out?
- put all input elements in form tag? best for accesibility and web standards i guess
- visual feedback, screen shakes, gold collecting
- redesign level select screen in figma first (low prio)
- unlock more complex game modes with gold to get more gold (low prio)
