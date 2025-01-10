"use strict";
/**
 * @library lib2d
 * @description A library for classes that manage 2D graphics.
 */

class TPoint{
    x;
    y;
    constructor(aX, aY){
    this.x = aX;
    this.y = aY;
    }
}

class TPosition extends TPoint{ //extends command arver public variabler og funksjoner fra klassen Tpoint så slipper man å deklarere igjen
    constructor(aX, aY){ 
        super(aX, aY); // er fordi det skal være en super classe SuperClass
    }

    clone(){
        return new TPosition(this.x, this.y);
    }

    distanceToPoint(aPoint){ // måle distansen mellom 2 punkt, bruker så pythagoras for å finne hypotenus
        const dx = this.x - aPoint.x;
        const dy = this.y - aPoint.y;
        return Math.hypot(dx, dy);
    }

} // End of TPosition class

export default {
    /**
     * @class TPoint
     * @description A class representation for x and y point in 2D.
     * @param {number} aX - The x-coordinate.
     * @param {number} aY - The y-coordinate.
     */
    Tpoint,
    /**
     * @class TPosition
     * @description A position class for manupulation of point in 2D.
     * @param {number} aX - The x-coordinate.
     * @param {number} aY - The y-coordinate.
     * @extends TPoint
     * @method clone - A method to clone the position object.
     * @method distanceToPoint  - A method to calculate the distance to another point
     */
    TPosition
}