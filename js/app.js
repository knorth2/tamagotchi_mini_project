//pseudoCode
//Make an alert and prompt to add name of bug and to give rules of game. 

//Event Listeners-Make start button that starts the game/timer?

//Create buttons to keep bug alive, hunger, play, sleep(lights on/off) with a 1-10 scale.  There will also be metrics keeping track of hunger, sleepiness, play/boredom, and age. 

//Create object with functions/methods with if/else if statements.

//Morphing will require bug to stay alive for how long? 120secs? Bug will die if hunger, play, and sleepiness hits 10.

//Create morphed bug? 2 or 3 stages with setAge function inside game object?

//What will you use to keep track of 120sec of life. setInterval() method calls a function at specified intervals(in milliseconds). The setInterval()method continues calling the function until the clearInterval() is called, or the window is closed. 1sec = 1000milliseconds.

//Game ends when bug dies. Alert bug has died.


//Global variables
// const startTime = 120;
// let time = startTime;
// let age = 1;

//Parent Class - instantiate from parent class and make methods

class Character{
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
}

class Bug extends Character{
    constructor(name, hunger, sleepiness, boredom, age){
        super(name, hunger, sleepiness, boredom, age)
        this.name = name;
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.age = 1;
    }
    feed(){
        this.hunger++
    }
    sleep(){
        this.sleepiness++
    }
    play(){
        this.boredom++
    }
    //Intro to the Game.

    nameBug(promptName){
    this.name = prompt('Welcome to Bugs Life! To keep your bug alive, click the buttons to feed, play or rest your little friend. The buttons will go up one point for every 10secs! If any of the buttons reaches 10 your bug will die. So the more you interact with your bug the greater the chance you will keep it alive! Some features of this game include your bug morphing when the timer reaches 0. To proceed please type a name for your bug below and click ok.')
    }
}
const bug = new Bug('Ziggy Bug')
  console.log(bug)


//---Add event listeners to buttons: start, hunger(feed me), sleepiness(nap time), boredom(play time) using the class.

let startButton = document.querySelector('.startButton');

let hungerButton = document.querySelector('.feedText');
let hungerScore = document.querySelector('.hungerScoreText');

let sleepinessButton = document.querySelector('.sleepText');
let sleepinessScore = document.querySelector('.sleepScoreText')

let playButton = document.querySelector('.playText');
let boredomScore = document.querySelector('.boredomScoreText');



//call functions








