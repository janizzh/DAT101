"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { gameLevel, gameProps, SpriteInfoList } from "./Minesweeper.mjs";  



export class TScoreBoard{
  #TSpriteNumberLeftMine; //For miner øvre venstre hjørne
  #TSpriteNumberRightTime; //For tid øvre høyre hjørne
  #TSpriteButtonSmiley; //For smiley øverste midten
  constructor(aSpriteCanvas){
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


    //this.#TSpriteButton = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.ButtonSmiley,  pos); 
  }
  draw(){
    this.#TSpriteNumberLeftMine.draw();
    this.#TSpriteNumberRightTime.draw();
    //this.#TSpriteButtonSmiley.draw();
  }
  
}