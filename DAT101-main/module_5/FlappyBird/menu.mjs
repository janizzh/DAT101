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
    #spGameOver;
    #spMedal;
    #posScore;
    #posBestScore;
    #posPlayScore;
    #ranking = {first: 0, second: 0, third: 0};
    //#spScore;
    constructor(aSpriteCanvas){
        this.#spcvs = aSpriteCanvas;
        const pos = new lib2d.TPosition(210, 180) /** 
        grunnen til at vi kan endre på const konstanten her er fordi vi endrer ikke på new lib2.d.Tposition som definerer const, 
        men heller x,y koordinatene som kan endres uten problemer. /** */
        
//GameProps.status = EGameStatus.gameOver; // denne koden brukes for å starte spillet direkte i gameOver istedenfor idle.

        this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);

        pos.y = 150; // For nedtellingstallet
        pos.x = 280; // For nedtellingstallet
        this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig, pos);


        pos.y = 260; // For play knappen
        pos.x = 250; // For play knappen 
        this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay, pos);

        pos.x = 200; // For get ready teksten
        pos.y = 70; // For get ready teksten
        this.#spinfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos);

        this.#spNumber.index = 3; // Nedtelling starter på 3.
        this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
        this.#spcvs.addEventListener("click", this.#onClick);
        this.#activeSprite = null; // Vi har ingen aktiv sprite enda, når musen er over en

        pos.x = 190; // For Game Over boksen
        pos.y = 130; // For Game Over boksen
        this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver, pos);

       // pos.x = 370; // For scoren i Game Over boksen (Tallet under score)
      // pos.y = 160; // For scoren i Game over boksen (Tallet under score)
       // this.#spScore = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberSmall, pos);

        pos.x = 215; // For Medaljen i Game Over boksen
        pos.y = 170; // For Medaljen i Game Over boksen 
        this.#spMedal = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.medal, pos);

        this.#posScore = new lib2d.TPosition(390, 180); // For scoren i Game Over boksen (Tallet under score)
        this.#posBestScore = new lib2d.TPosition(390, 223); // For best scoren i Game Over boksen (Tallet under best score)
        this.#posPlayScore = new lib2d.TPosition(75, 50); // For scoren i spillet (Tallet øverst til venstre i spillet)
        
    }

    draw(){
        switch(GameProps.status){
            case EGameStatus.idle:
                this.#spFlappyBird.draw();
                this.#spButtonPlay.draw();
                break;
            case EGameStatus.getReady:
                this.#spinfoText.index = 0;
                this.#spinfoText.draw();
                this.#spNumber.draw();
                break;
            case EGameStatus.gameOver:
                this.#spinfoText.index = 1;// index 1 fordi vi skal bruke Game Over teksten og ikke Get Ready teksten som ligger i Flappybird.mjs SpriteInfolist koden.
                this.#spinfoText.draw();
                this.#spGameOver.draw(); 
                this.#spMedal.index = 0;// index 0 fordi vi skal bruke sølv medalje som ligger i  Flappybird.mjs SpriteInfolist koden. Den har totalt 4 index.
                //this.#spScore.draw();
                this.#spcvs.drawText("50", this.#posScore);
                this.#spcvs.drawText("100", this.#posBestScore);
                this.#spMedal.draw();
                this.#spButtonPlay.draw();
                break;
            case EGameStatus.playing:
                this.#spcvs.drawText(GameProps.score.toString(), this.#posPlayScore);
                break;
        }
        
    } // End of draw

    incScore(aScore){
        GameProps.score += aScore;
        if(GameProps.score > this.#ranking.first){ // første plass
            this.#ranking.third = this.#ranking.second;
            this.#ranking.second = this.#ranking.first;
            this.#ranking.first = GameProps.score;
            GameProps.bestScore = this.#ranking.first;
            this.#spMedal.index = 2;
        }else if(GameProps.score > this.#ranking.second){ // andre plass
            this.#ranking.third = this.#ranking.second;
            this.#ranking.second = GameProps.score;
            this.#spMedal.index = 1;
        }else if(GameProps.score > this.#ranking.third){ //tredje plass
            this.#ranking.third = GameProps.score;
            this.#spMedal.index = 3;
        }else{ // ingen plassering
            this.#spMedal.index = 0;
        }
    }


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