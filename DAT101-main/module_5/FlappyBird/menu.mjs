"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus } from "./FlappyBird.mjs";

export class TMenu{
    #spFlappyBird;
    #spButtonPlay;
    #spcvs;
    #activeSprite;
    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas;
        const pos = new lib2d.TPosition(200, 100) /** 
        grunnen til at vi kan endre på const konstanten her er fordi vi endrer ikke på new lib2.d.Tposition som definerer const, 
        men heller x,y koordinatene. /** */
        this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);
        pos.y = 200;
        pos.x = 230;
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay, pos);
        this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
        this.#spcvs.addEventListener("click", this.#onClick);
        this.#activeSprite = null; // Vi har ingen aktiv sprite enda, når musen er over en
    }

    draw(){
        switch(GameProps.status){
            case EGameStatus.idle:
                this.#spFlappyBird.draw();
                this.#spButtonPlay.draw();
                break;
        }
        
    } // End of draw

    // Ikke eksamensrelevant, men viktig for event i canvas (pilfunksjoner er altså ikke eksamensrelevant)    
    #onMouseMove = (aEvent) => {
        const pos = this.#spcvs.getMousePos(aEvent);
        const boundRect = this.#spButtonPlay.boundingBox;
        if(boundRect.isPositionInside(pos)){
            this.#spcvs.style.cursor = "pointer";
            this.#activeSprite = this.#spButtonPlay
        }
        else{
            this.#spcvs.style.cursor = "default";
            this.#activeSprite = null; // ingen sprite er aktiv
        }
         
    }

    #onClick = () => {
        if(this.#activeSprite === this.#spButtonPlay){
            GameProps.status = EGameStatus.playing;
        }
    }

}