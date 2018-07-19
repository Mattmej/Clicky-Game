# Clicky-Game

### Description

This project is an example of using React.js to create a basic game. This game is a basic memory game in which the player cannot select the same picture card twice. The game logs the user's current score and top score. 

### Required Items

##### Yarn Packages
* bootstrap
* reactstrap

##### Other
* yarn package manager
* React.js


### Details

To run this application, go to the root of this repository and run the command "yarn start" in the command prompt.

This application displays twelve individual pokemon cards to the webpage. The objective is to click all twelve cards without clicking the same picture card twice. Every time a card is clicked, the cards are shuffled and displayed randomly throughout the columns of the page. 

Every time the player selects a card that has not yet been selected, they receive one point. If the player selects any card that has already been selected, their points reset to zero. However, the app still keeps track of the user's highest score.

Once the player has ten points, the player wins.

[Test Link](https://github.com/Mattmej/Clicky-Game/blob/master/gifs/Winning.gif)