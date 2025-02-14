"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { gameLevel, gameProps, SpriteInfoList, newGame } from "./Minesweeper.mjs";  



export class TScoreBoard{
  #TSpriteNumberLeftMine; //For miner øvre venstre hjørne
  #TSpriteNumberRightTime; //For tid øvre høyre hjørne
  #TSpriteButtonSmiley; //For smiley øverste midten
  #hndlTime;
  #spcvs;
  constructor(aSpriteCanvas){
    this.#spcvs = aSpriteCanvas;
    const pos = new lib2d.TPoint(112, 22)
    this.#TSpriteNumberLeftMine = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers,  pos);
    this.#TSpriteNumberLeftMine.justify = libSprite.ESpriteNumberJustifyType.Right;
    this.#TSpriteNumberLeftMine.digits = 3;
    this.#TSpriteNumberLeftMine.value = gameLevel.Mines;

    pos.x = aSpriteCanvas.canvas.width - 70;
    this.#TSpriteNumberRightTime = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers,  pos);
    this.#TSpriteNumberRightTime.justify = libSprite.ESpriteNumberJustifyType.Right;
    this.#TSpriteNumberRightTime.digits = 3;
    this.#TSpriteNumberRightTime.value = 0;

    pos.x = (aSpriteCanvas.canvas.width / 2) - (SpriteInfoList.ButtonSmiley.width / 2);
    this.#TSpriteButtonSmiley = new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonSmiley,  pos); 
    this.#TSpriteButtonSmiley.onSmileyMouseDown = this.onSmileyMouseDown; // Dette må være en pil-funksjon
    this.#TSpriteButtonSmiley.onSmileyMouseUp = this.onSmileyMouseUp; //Dette må være en pil-funksjon
    this.#TSpriteButtonSmiley.onClick = this.onSmileyClick; // Dette må være en pil-funksjon

    this.#hndlTime = setInterval(this.#increaseTime, 1000);
  }
  draw(){
    this.#TSpriteNumberLeftMine.draw();
    this.#TSpriteNumberRightTime.draw();
    this.#TSpriteButtonSmiley.draw();
  }

  get TSpriteButtonSmiley(){
    return this.#TSpriteButtonSmiley
  }

  //Vi må lage denne som pil-funksjon for å kunne bruke this
  #increaseTime = () => {
    if(this.#TSpriteNumberRightTime.value < 999) {
      this.#TSpriteNumberRightTime.value++
    }else{
      this.#TSpriteNumberRightTime.value = 999 
    }

  }
  
  stopTime(){
    clearInterval(this.#hndlTime);
  }

  onSmileyMouseDown = () => {
    this.#TSpriteButtonSmiley.index++;
  }

  onSmileyMouseUp= () => {
    this.#TSpriteButtonSmiley.index--;
  }

  onSmileyClick = () => {
    this.#TSpriteButtonSmiley.index = 0;
    newGame();
  }

  reset(){
    clearInterval(this.#hndlTime);
    this.#TSpriteNumberRightTime.value = 0;
    this.#TSpriteNumberLeftMine.value = gameLevel.Mines;

    const pos = new lib2d.TPoint(112, 22);
    this.#TSpriteButtonSmiley.x = pos.x;

    //Justere posisjonen til smiley
    pos.x = (this.#spcvs.canvas.width / 2) - (SpriteInfoList.ButtonSmiley.width / 2);
    this.#TSpriteButtonSmiley.x = pos.x;

    //Justere posisjonen til timer
    pos.x = this.#spcvs.canvas.width - 70;
    this.#TSpriteNumberRightTime = new libSprite.TSpriteNumber(this.#spcvs, SpriteInfoList.Numbers, pos)
    this.#TSpriteNumberRightTime.justify = libSprite.ESpriteNumberJustifyType.Right;
    this.#TSpriteNumberRightTime.digits = 3;
    this.#TSpriteNumberRightTime.value = 0;

    this.#hndlTime = setInterval(this.#increaseTime, 1000);
    
  }
  
get mineCounter(){
  return this.#TSpriteNumberLeftMine.value;
  }

set mineCounter(aValue){
  this.#TSpriteNumberLeftMine.value = aValue;

}

}//End of class TScoreBoard