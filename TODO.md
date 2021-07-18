### note entry system
- gets scale of character
- tracks what notes player entered
- checks if sharps and flats are correct
- for testing, hardcode c major scale first, easiest to get basic logic working
- put all input elements in form tag? best for accesibility and web standards i guess
- set up main game component that contains note grid, ui panels
- impl gold count in main game component state
- note line renderer
   - entered notes
  - notes as separate components
    - note colors
    - active notes
    - flats & sharps
  - correct answer (light up notes in red or green
  - change existing notes
### player msg box
- change to button when 3 notes were entered
- pressing it plays a submission sound & strums the chord presented, initiates chord check function in main gameobject
### story text system
- it needs that retro text scroll effect
- character introduction
- character during note entry
  - up to 3 unique messages per note/ character
  - can be hints at the beginning, which would serve as the tutorial
  - correct/incorrect response text
### alchemy scroll
- shows scales and chord formulas
- can be looked at when in home view, costs gold to view during quest (has to be summoned)
### audio
- harp? sounds for each note - or some other bardlike instrument
- submit sound
- button click
- confirm sound
- error sound
- message letter click sound
### other nice to haves
- visual feedback, screen shakes, gold collecting 
- redesign level select screen in figma first (low prio)
- unlock more complex game modes with gold to get more gold (low prio)
