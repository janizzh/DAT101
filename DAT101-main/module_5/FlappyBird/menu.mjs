"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus, startGame } from "./FlappyBird.mjs";

export class TMenu{
    #spFlappyBird;
    #spButtonPlay;
    #spNumber;
    #spinfoText;
    #spcvs;
    #activeSprite;
    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas;
        const pos = new lib2d.TPosition(200, 100) /** 
        grunnen til at vi kan endre på const konstanten her er fordi vi endrer ikke på new lib2.d.Tposition som definerer const, 
        men heller x,y koordinatene som kan endres uten problemer. /** */
        
        this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);

        pos.y = 200; // For nedtellingstallet
        pos.x = 300; // For nedtellingstallet
        this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig, pos);


        pos.y = 200; // For play knappen
        pos.x = 240; // For play knappen 
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay, pos);

        pos.x = 200; // For get ready teksten
        pos.y = 100; // For get ready teksten
        this.#spinfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos);

        this.#spNumber.index = 3; // Nedtelling starter på 3.
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
            case EGameStatus.getReady:
                this.#spinfoText.draw();
                this.#spNumber.draw();
                break;
                
        }
        
    } // End of draw

    // Ikke eksamensrelevant, men viktig for event i canvas (pilfunksjoner er altså ikke eksamensrelevant)    
    #onMouseMove = (aEvent) => {
        const pos = this.#spcvs.getMousePos(aEvent);
        const boundRect = this.#spButtonPlay.boundingBox;
        switch(GameProps.status){
            case EGameStatus.idle:
                if(boundRect.isPositionInside(pos)){
                    this.#spcvs.style.cursor = "pointer";
                    this.#activeSprite = this.#spButtonPlay
                }
                else{
                    this.#spcvs.style.cursor = "default";
                    this.#activeSprite = null; // ingen sprite er aktiv
                }
                break;
        }       
    }

    #onClick = () => {
        if(this.#activeSprite === this.#spButtonPlay){
            GameProps.status = EGameStatus.getReady;
            this.#spcvs.style.cursor = "default";
            setTimeout(this.#onCountDown, 1000);
        }
    }

    #onCountDown = () => {
     if(this.#spNumber.index > 1){
        this.#spNumber.index--; 
        setTimeout(this.#onCountDown, 1000); // 1000 fordi det er millisekunder
     }   
     else{
        startGame();    
     }
    }

} // End of Tmenu class