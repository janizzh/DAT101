"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs"
import libSprite from "../../common/libs/libSprite_v2.mjs"
import { TColorButton } from "./colorButton.mjs";

//--------------- Objects and Variables ----------------------------------//

// prettier-ignore
export const SpriteInfoList = {
  Background:     { x: 0, y:    0, width: 720, height: 720, count:  1 },
  ButtonYellow:   { x: 0, y:  720, width: 314, height: 314, count:  2, dst: { x:  29, y: 377, r1: 100, r2: 333 } },
  ButtonBlue:     { x: 0, y: 1034, width: 314, height: 314, count:  2, dst: { x: 377, y: 377, r1: 100, r2: 333 } },
  ButtonRed:      { x: 0, y: 1348, width: 314, height: 314, count:  2, dst: { x: 377, y:  29, r1: 100, r2: 333 } },
  ButtonGreen:    { x: 0, y: 1662, width: 314, height: 314, count:  2, dst: { x:  29, y:  29, r1: 100, r2: 333 } },
  ButtonStartEnd: { x: 0, y: 1976, width: 360, height: 360, count:  2, dst: { x: 180, y: 180, r1:   1, r2: 180 } },
  number:         { x: 0, y: 2344, width:  23, height:  34, count: 10, dst: { x: 365, y: 385}},
};

const cvs = document.getElementById("cvs"); // cvs er fra html dokumentet simonsays.html så her henter vi den
const spcvs = new libSprite.TSpriteCanvas(cvs);

export const gameProps = {
  Background: new libSprite.TSprite(spcvs, SpriteInfoList.Background, new lib2d.TPoint(0, 0)),
  GameCenter: new lib2d.TPosition(SpriteInfoList.Background.width / 2, SpriteInfoList.Background.height / 2),

  ColorButtons:[
     new TColorButton(spcvs, SpriteInfoList.ButtonYellow),
     new TColorButton(spcvs, SpriteInfoList.ButtonBlue),
     new TColorButton(spcvs, SpriteInfoList.ButtonRed),
     new TColorButton(spcvs, SpriteInfoList.ButtonGreen)],
  
  sequence: [],
  activeButton: null, // Ingen knapp er aktiv i starten
};


//--------------- Functions ----------------------------------------------//
function loadGame() {
  cvs.width = gameProps.Background.width;
  cvs.height = gameProps.Background.height;

  spawnSequence();
  drawGame();
}

function drawGame() {
  spcvs.clearCanvas();
  gameProps.Background.draw();
  //gameProps.ColorButton.draw();
  for (let i = 0; i < gameProps.ColorButtons.length; i++) {
    gameProps.ColorButtons[i].draw();
  // gameProps.ColorButtons.forEach((button) => button.draw());  Kan gjøres på denne måten også for å få det samme resultatet. 
  }

  requestAnimationFrame(drawGame);
}

function setMouseDown(){
  gameProps.activeButton.onMouseDown();
  setTimeout(setMouseUp, 1000);
}

function setMouseUp(){
  gameProps.activeButton.onMouseUp();
}

function spawnSequence(){
  const index = Math.floor(Math.random() * gameProps.ColorButtons.length); //generer random tall mellom 0 og 3 (4 tall siden vi har 4 knapper)
  console.log(index)
  const button = gameProps.ColorButtons[index];
  gameProps.sequence.push(button);
  gameProps.activeButton = gameProps.sequence[0];
  setTimeout(setMouseDown, 1000);
  

}
//--------------- Event Handlers -----------------------------------------//

//--------------- Main Code ----------------------------------------------//

spcvs.loadSpriteSheet("./media/spriteSheet.png", loadGame);