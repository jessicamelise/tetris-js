//@ts-check

export default class Block {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() { return this._x };
    get y() { return this._y };
    set x(value) { this._x = value; }
    set y(value) { this._y = value; }

    /**
     * 
     * @param {number} times 
     */
    moveLeft(times = 1) {
        this._x += times;
    }

    /**
     * 
     * @param {number} times 
     */
    moveRight(times = 1) {
        this._x -= times;
    }

    /**
     * 
     * @param {number} times 
     */
    moveDown(times = 1) {
        this._y += times;
    }

    /**
     * 
     * @param {number} times 
     */
    moveUp(times = 1) {
        this._y -= times;
    }

    /**
     * 
     * @param {boolean} antiClock 
     */
    rotate(antiClock = false) {
        let x = this._x;
        let y = this._y;
        if (!antiClock) [this._x, this._y] = [y * -1, x];
        else[this._x, this._y] = [y, x * -1];
    }
}