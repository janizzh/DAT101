"use strict";
import libsSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";

export class TGameBoard{
    #sptl = null; //TopLeft
    #sptm = null; //TopMiddle
    #sptr = null; //TopRight
    #sprm = null; //RightMiddle
    #sprb = null; //RightBottom
    #spbm = null; //BottomMiddle
    #spbl = null; //BottomLeft
    #splm = null; //LeftMiddle

    constructor(aSpcvs, aSpriteInfo,){
        const pos = new lib2d.TPoint(0,0);
        this.#sptl = new libsSprite.TSprite(aSpcvs, aSpriteInfo.TopLeft, pos);
        pos.x = aSpriteInfo.TopLeft.width; //Posisjon for #sptm
        this.#sptm = new libsSprite.TSprite(aSpcvs, aSpriteInfo.TopMiddle, pos);
        pos.x += aSpriteInfo.TopMiddle.width;//Posisjon for #sptr
        this.#sptr = new libsSprite.TSprite(aSpcvs, aSpriteInfo.TopRight, pos);
    }

    draw(){
        this.#sptl.draw();
        this.#sptm.draw();
        this.#sptr.draw();
    }
} //End of TGameBoard Class