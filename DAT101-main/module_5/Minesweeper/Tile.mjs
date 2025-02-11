"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { gameLevel, gameProps } from "./Minesweeper.mjs";

const MineInfoColors = ["blue", "green", "red", "darkblue", "brown", "cyan", "black", "grey"];



class TCell{
  constructor(aRow, aColumn){
    
    this.row = aRow;
    this.col = aColumn;
  }

  get neighbors(){
    const rows = {
      from: this.row - 1, 
      to: this.row +1
    }
    const cols = {
      from: this.col -1,
      to: this.col +1,
    }
    if(rows.from < 0){
      rows.from = 0;
    }
    if(cols.from < 0){
      cols.from = 0;
    }
    if(rows.to >= gameLevel.Tiles.Row){
      rows.to = gameLevel.Tiles.Row - 1; //9 er siste tilen i raden i spillet, derfor må vi ta -1. Telles fra 0 til 9 som utgjør totalt 10 tiles.
    }
    if(cols.to >= gameLevel.Tiles.Col){
      cols.to = gameLevel.Tiles.Col - 1; //Samme som for rad
    }
    const neighbors = [];
    for(let rowIndex = rows.from; rowIndex <= rows.to; rowIndex++){
      const row = gameProps.tiles[rowIndex];
      for(let colIndex = cols.from; colIndex <= cols.to; colIndex++){
        const isThisTile = (this.row === rowIndex && this.col === colIndex);
        //Ikke legg til seg selv!
          if(!isThisTile){
          const tile = row[colIndex];
          neighbors.push(tile);
        }
      }
    }
    return neighbors;

  }// End of neighbors
}//End of class


export class TTile extends libSprite.TSpriteButton{
  #isMine;
  #cell;
  #mineInfo;

  constructor(aSpriteCanvas, aSpriteInfo, aRow, aColumn){
    const cell = new TCell(aRow, aColumn);
    const pos = new lib2d.TPoint(21, 133);
    pos.x += aSpriteInfo.width * cell.col;
    pos.y += aSpriteInfo.height * cell.row;
    super(aSpriteCanvas, aSpriteInfo, pos);
    this.#isMine = false; //Vi setter at det ikke er en mine som default
    this.#cell = cell;
    this.#mineInfo = 0;
    
  }

  onMouseDown(aEvent){
    this.index = 1;
  }

  onMouseUp(aEvent){
    this.index = 2;
    this.disable = true;
  }

  onLeave(aEvent){
    if(aEvent.buttons === 1){
    this.index = 0;
    }
  }

    get isMine(){
      return this.#isMine;
    }

    set isMine(aValue){
      this.#isMine = aValue;
      if(aValue){
      this.index = 4;
      const neighbors = this.#cell.neighbors;
      for(let i = 0; i < neighbors.length; i++ ){
        const neighbor = neighbors[i]; //[i] er syntaks for å hente et element i rekka neighbors (muligens eksamensrelevant)
        neighbor.incMineInfo();
        }
      this.#mineInfo = 0;

      }
    }

    incMineInfo(){
      if(this.#isMine){
        this.#mineInfo = 0;
      }else{
      this.#mineInfo++;
      this.index = 2; //For å teste at knappen er åpen.
    }
  }

  onCustomDraw(aCTX){
    if(this.#mineInfo > 0){
      const posX = this.x + 17;
      const posY = this.y + 35;
      aCTX.font = "30px serif";
      aCTX.fillStyle = MineInfoColors[this.#mineInfo - 1];
      aCTX.fillText(this.#mineInfo.toString(), posX, posY);
    }
  }

}// End of TTile class

export function forEachTile(aCallBack){
  if(!aCallBack){
    console.error("Missing callback function in forEachTile method");
    return;
  }
  const tiles = gameProps.tiles;
  for(let row = 0; row < tiles.length; row++){
    const rows = tiles[row];
    for(let col = 0; col < rows.length; col++){
      const tile = rows[col];
      aCallBack(tile);
    }
  }
}