"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { gameProps, SpriteInfoList } from "./Minesweeper.mjs";  



export class TScoreBoard{
  #TSpriteNumberLeft; //For miner øvre venstre hjørne
  #TSpriteNumberRight; //For tid øvre høyre hjørne
  #TSpriteButton; //For smiley øverste midten
  constructor(aSpriteCanvas){
    const pos = new lib2d.TPoint(80, 22)
    this.#TSpriteNumberLeft = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers,  pos);
    this.#TSpriteNumberRight = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers,  pos);
    this.#TSpriteButton = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.ButtonSmiley,  pos);
  }
  draw(){
    this.#TSpriteNumberLeft.draw();
    this.#TSpriteNumberRight.draw();
    this.#TSpriteButton.draw();
  }
  
}