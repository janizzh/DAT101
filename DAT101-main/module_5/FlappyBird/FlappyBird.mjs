"use strict";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import lib2d from "../../common/libs/lib2d.mjs";
import THero from "./hero.mjs";
import TObstacle from "./obstacle.mjs";
import { TBait } from "./bait.mjs";
import { TMenu } from "./menu.mjs";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

// prettier-ignore
export const SpriteInfoList = {
  hero1:        { x:    0, y: 545, width:   34, height:  24, count:  4 },
  hero2:        { x:    0, y: 569, width:   34, height:  24, count:  4 },
  hero3:        { x:    0, y: 593, width:   34, height:  24, count:  4 },
  obstacle:     { x:    0, y:   0, width:   52, height: 320, count:  4 },
  background:   { x:  246, y:   0, width:  576, height: 512, count:  2 },
  flappyBird:   { x:    0, y: 330, width:  178, height:  50, count:  1 },
  ground:       { x:  246, y: 512, width: 1152, height: 114, count:  1 },
  numberSmall:  { x:  681, y: 635, width:   14, height:  20, count: 10 },
  numberBig:    { x:  422, y: 635, width:   24, height:  36, count: 10 },
  buttonPlay:   { x: 1183, y: 635, width:  104, height:  58, count:  1 },
  gameOver:     { x:    0, y: 384, width:  226, height: 114, count:  1 },
  infoText:     { x:    0, y: 630, width:  200, height:  55, count:  2 },
  food:         { x:    0, y: 696, width:   70, height:  65, count: 34 },
  medal:        { x:  985, y: 635, width:   44, height:  44, count:  4 },
};

export const EGameStatus = { idle: 0, getReady: 1, playing: 2, gameOver: 3 }; //Dette er en enum

export const GameProps = {
  soundMuted: false,
  dayTime: true,
  speed: 1,
  status: EGameStatus.idle, //For testing, normalt EgameStatus.idle
  background: null,
  ground: null,
  hero: null,
  obstacles: [],
  baits: [],
  menu: null,
  score: 0,
  bestScore: 0,
  sounds: {countDown: null, food: null, gameOver: null, dead: null, running: null}, 
  //Hva betyr denne syntaksen? Betyr at sound er en variabel i et objekt som heter Gameprops. Sounds er igjen et eget objekt som innhholder fire variabler.
};

//--------------- Functions ----------------------------------------------//

function playSound(aSound) {
  if (!GameProps.soundMuted) {
    aSound.play();
  } else {
    aSound.pause();
  }
}

function loadGame() {
  console.log("Game ready to load");
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  let pos = new lib2d.TPosition(0, 0);
  GameProps.background = new libSprite.TSprite(spcvs, SpriteInfoList.background, pos);
  const groundpos = new lib2d.TPosition(0, 450);
  GameProps.ground = new libSprite.TSprite(spcvs, SpriteInfoList.ground, groundpos);
  pos.x = 100;
  pos.y = 100;
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, pos);

  GameProps.menu = new TMenu(spcvs);

  //Load sounds
  GameProps.sounds.running = new libSound.TSoundFile("./Media/running.mp3");

  requestAnimationFrame(drawGame);
  setInterval(animateGame, 10);


} // End of LoadGame


function drawGame() {
  spcvs.clearCanvas(); // renser canvaset
  GameProps.background.draw(); // tegner canvaset
  drawBait(); // tegner sommerfuglene
  drawObstacles(); // tegner søylene
  GameProps.ground.draw(); // tegner bakken
  GameProps.hero.draw(); // tegner flappybirden
  GameProps.menu.draw(); // tegner menu
  requestAnimationFrame(drawGame);
}

function drawObstacles() {
  for (let i = 0; i < GameProps.obstacles.length; i++) {
    const obstacle = GameProps.obstacles[i];
    obstacle.draw();
  }
}

function drawBait() {
  for (let i = 0; i < GameProps.baits.length; i++) {
    const bait = GameProps.baits[i];
    bait.draw();
  }
}

function animateGame() {
  switch (GameProps.status) {
    case EGameStatus.playing:
      if (GameProps.hero.isDead) {
        GameProps.hero.animateSpeed = 0;
        GameProps.hero.update();
        return;
      }
      GameProps.ground.translate(-GameProps.speed, 0);
      if (GameProps.ground.posX <= -SpriteInfoList.ground.width / 2) {
        GameProps.ground.posX = 0;
      }
      GameProps.hero.update();
      let delObstacleIndex = -1;
      
      for (let i = 0; i < GameProps.obstacles.length; i++) {
        const obstacle = GameProps.obstacles[i];
        obstacle.update();
        if(obstacle.right < GameProps.hero.left && !obstacle.hasPassed){ 
        // implisitt deklarasjon her det liker vi ikke, vi har lagd obstacle.hasPassed uten å deklarere den, må lage variabel altså deklarere den først. 
        // Vi gjør det i obstacle.mjs fila og skriver this.hasPassed = false;. Kommer på eksamen
          // Congratulations, you have passed the obstacle
          GameProps.menu.incScore(20);
          obstacle.hasPassed = true;
        }
        if (obstacle.posX < -100) {
          delObstacleIndex = i;
        }
      }
      if (delObstacleIndex >= 0) {
        GameProps.obstacles.splice(delObstacleIndex, 1);
      }

    case EGameStatus.gameOver:
      let delBaitIndex = -1;
      const posHero = GameProps.hero.getCenter();
      for (let i = 0; i < GameProps.baits.length; i++) {
        const bait = GameProps.baits[i];
        bait.update();
        const posBait = bait.getCenter();
        const distanceToHero = posHero.distanceToPoint(posBait);
        if(distanceToHero < 15){
          delBaitIndex = i;
        }
      }
      if(delBaitIndex >= 0){
        GameProps.baits.splice(delBaitIndex, 1);
        GameProps.menu.incScore(10);
      }

      break;
      case EGameStatus.idle:
        GameProps.hero.updateIdle();
        break;
  }
}

function spawnObstacle() {
  const obstacle = new TObstacle(spcvs, SpriteInfoList.obstacle);
  GameProps.obstacles.push(obstacle);
  // Spawn a new obstacle in 2-7 seconds
  if(GameProps.status === EGameStatus.playing){
    const seconds = Math.ceil(Math.random() * 5) + 2; 
    setTimeout(spawnObstacle, seconds * 1000);
  }

}

function spawnBait() {
  const pos = new lib2d.TPosition(SpriteInfoList.background.width, 100);
  const bait = new TBait(spcvs, SpriteInfoList.food, pos);
  GameProps.baits.push(bait);
  // Generer nye baits hvert 0.5 til 1 sekund med step på 0.1
  if(GameProps.status === EGameStatus.playing){
    const seconds = Math.ceil(Math.random() * 5) / 10 + 0.5;
    setTimeout(spawnBait, seconds * 1000)
  }

}

export function startGame () { //export gjør at vi kan bruke funksjonen overalt andre steder i koden ved å skrive import {startGame} from "./FlappyBird.mjs"; i toppen av koden.
  GameProps.status = EGameStatus.playing;
  // Helten er død, vi må lage en ny helt!
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, new lib2d.TPosition(100, 100));
  GameProps.obstacles = [];
  GameProps.baits = [];
  GameProps.menu.reset();
  spawnObstacle();
  spawnBait();
  //Spill av lyd
  GameProps.sounds.running.play();
}

//--------------- Event Handlers -----------------------------------------//

function setSoundOnOff() {
  if (chkMuteSound.checked) {
    GameProps.soundMuted = true;
    console.log("Sound muted");
  } else {
    GameProps.soundMuted = false;
    console.log("Sound on");
  }
} // end of setSoundOnOff

function setDayNight() {
  if (rbDayNight[0].checked) {
    GameProps.dayTime = true;
    console.log("Day time");
  } else {
    GameProps.dayTime = false;
    console.log("Night time");
  }
} // end of setDayNight

function onKeyDown(aEvent) {
  switch (aEvent.code) {
    case "Space":
      if (!GameProps.hero.isDead) {
        //Husk dette kommer på eksamen, koden for at hero ikke skal flappe når den er død. ! betyr ikke. Så hvis ikke hero er død så kan den flappe.
        GameProps.hero.flap();
      }

      break;
  }
}

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[1].addEventListener("change", setDayNight);

// Load the sprite sheet
spcvs.loadSpriteSheet("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);
