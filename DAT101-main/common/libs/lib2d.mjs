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

class TRectangle extends TPosition{ //Trecangle arver fra Tposition ved å bruke extends command
    constructor(aX, aY, aWidth, aHeight){
        super(aX, aY);
        this.width = aWidth;
        this.height = aHeight;
    }

    get left(){
        return this.x;
    }

    get right(){
        return this.x + this.width;
    }

    get top(){
        return this.y;
    }

    get bottom(){
        return this.y + this.height;
    }


    isInsideRect(aRect){
    if(this.left >= aRect.right) return false;
    if(this.right <= aRect.left) return false;
    if(this.top >= aRect.bottom) return false;
    if(this.bottom <= aRect.top) return false;
    return true;
    }

    get center(){
        return new TPosition(this.x + this.width / 2, this.y + this.height / 2);
      }
    
      set center(aPoint){
        this.x = aPoint.x - this.width / 2;
        this.y = aPoint.y - this.height / 2;
      }
} // End of Trectangle class

const RAD = Math.PI / 180; // For å få radianer istedenfor grader

class TSineWave {
    #amplitude;
    #frequency;
    #angle;
    constructor(aAmplitude, aFrequency){
        this.#amplitude = aAmplitude;
        this.#frequency = aFrequency;
        this.#angle = 0;
    }

    get value(){
        let value = this.#amplitude * Math.sin(this.#angle * RAD);
        this.#angle += this.#frequency;
        return value;
    }

} // End of TSinWave class


export default {
    /**
     * @class TPoint
     * @description A class representation for x and y point in 2D.
     * @param {number} aX - The x-coordinate.
     * @param {number} aY - The y-coordinate.
     */
    TPoint: TPoint,
    /**
     * @class TPosition
     * @description A position class for manupulation of point in 2D.
     * @param {number} aX - The x-coordinate.
     * @param {number} aY - The y-coordinate.
     * @extends TPoint
     * @method clone - A method to clone the position object.
     * @method distanceToPoint  - A method to calculate the distance to another point
     */
    TPosition,

  /**
   * @class TRectangle
   * @extends TPosition
   * @description A class representation for a rectangle in 2D.
   * @param {number} aX - The x-coordinate.
   * @param {number} aY - The y-coordinate.
   * @param {number} aWidth - The width of the rectangle.
   * @param {number} aHeight - The height of the rectangle.
   * @property {number} width - The width of the rectangle.
   * @property {number} height - The height of the rectangle.
   * @property {number} left - The left side of the rectangle. 
   * @property {number} right - The right side of the rectangle.
   * @property {number} top - The top side of the rectangle.
   * @property {number} bottom - The bottom side of the rectangle.
   */
  TRectangle,
  /**
   * @class TSineWave
   * @description A class representation for a sine wave.
   * @param {number} aAmplitude - The amplitude of the wave.
   * @param {number} aFrequency - The frequency of the wave.
   * @property {number} value - The next value of the wave.
   */
  TSineWave
}