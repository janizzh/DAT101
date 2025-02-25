"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import  MastermindBoard from "./MastermindBoard.mjs";
import { GameProps } from "./Mastermind.mjs";

const Positions = MastermindBoard.ColorPicker;




export class TColorPicker extends libSprite.TSpriteDraggable { //eksamns spm, hva gjør en klasse abstrakt? 
    constructor(spcvs, spriteInfo, color, index){
        super(spcvs, spriteInfo, Positions[color]);
        this.index = index;
        this.snapTo = GameProps.snapTo;
    }

    onCanDrop(){
        return false;   
    }
} 