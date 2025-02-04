"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameProps, EGameStatusType, spawnSequence } from "./SimonSays.mjs";

export class TColorButton extends libSprite.TSpriteButton{ // TcolorButton arver fra libSprite.TSpriteButton det er det extends betyr.
  constructor(aSpriteCanvas, aSpriteInfo){
    super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
    this.sound = null;
  }




// Vi har noe som heter A.P.I.E. som står for Abstract, Polymorphism, Inheritance, Encapsulation.
// Vi må løse dette med polymorphism, nårmusa er over smultringen. 
isMouseInside(aPoint){
    let isInside = super.isMouseInside(aPoint);
    // Hvis musa er over, sjekk videre om den er utenfor radius 1 og innenfor radius 2
    if(isInside){
      const dx = aPoint.x - gameProps.GameCenter.x;
      const dy = aPoint.y - gameProps.GameCenter.y;
      const dist = Math.hypot(dx, dy);
      isInside = (dist >= this.spi.dst.r1) && (dist <= this.spi.dst.r2);

    }
    return isInside;
}

// Vi må også løse dette med polymorphism, når musa trykkes ned på smultringen.
onMouseDown(aPoint){
    this.index = 1;
    this.sound.play();

}

// Vi må også løse dette med polymorphism, når musa slippes opp fra smultringen.
onMouseUp(aPoint){
    this.index = 0;
    this.sound.stop();
    if(gameProps.Status !== EGameStatusType.Player){
        return;
    }
    if(gameProps.activeButton === this){
      console.log("Riktig knapp");
      //Hvis vi har flere knapper i sekvensen, velgeneste knapp som aktiv!!!!
      if(gameProps.seqIndex < gameProps.sequence.length - 1){
        gameProps.seqIndex++;
        gameProps.activeButton = gameProps.sequence[gameProps.seqIndex];
      }else{
        //Nå er vi på siste knapp i sekvensen, og det er computerens tur
        spawnSequence();
      }



      //Hvis ikke så spawn en ny knapp i sekvensen
    } else{
        console.log("Feil knapp");
        gameProps.Status = EGameStatusType.gameOver;
        gameProps.buttonStartEnd.index = 1;
        gameProps.buttonStartEnd.visible = true;
    }
}

}//End of TColorButton class