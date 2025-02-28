"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import  MastermindBoard from "./MastermindBoard.mjs";
import { GameProps } from "./Mastermind.mjs";

const Positions = MastermindBoard.ColorPicker;




export class TColorPicker extends libSprite.TSpriteDraggable { //eksamns spm, hva gjør en klasse abstrakt? 
    #spcvs;
    #spi;
    #color;
    constructor(spcvs, spriteInfo, color, index){
        super(spcvs, spriteInfo, Positions[color]);
        this.index = index;
        this.snapTo = GameProps.snapTo;
        this.#spcvs = spcvs;
        this.#spi = spriteInfo;
        this.#color = color;
    }

    onCanDrop(){
        return false;   
    }

    clone(){
        return new TColorPicker(
            this.#spcvs,
            this.#spi,
            this.#color,
            this.index
        )
    }
    onDrop(){
        GameProps.colorPickers.push(this.clone());
        const index = GameProps.snapTo.positions.indexOf(aDropPosition);
        GameProps.snapTo.positions.splice(index, 1);
    }

    onMouseDown(){
        super.onMouseDown();
        //Få dene knappen til å være i det øverste laget
        const index = GameProps.colorPickers.indexOf(this); //henter hvilken index knappen/fargen har i arrayet
        GameProps.colorPickers.splice(index, 1); //splicer/fjerner knappen/fargen fra arrayet, altså vi tar den ut av arrayet
        GameProps.colorPickers.push(this); //legger knappen/fargen tilbake i arrayet
    }   
} 