//complete this code
class Rectangle {
	constructor(width,height) {
		this._width=width;
		this._height=height;
	} 
	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	set width(newwidth) {
		this._width=newwidth;
	}

	set height(newheight) {
		this._height = newheight;
	}

	getArea() {
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	constructor(width,height) {
		super(width,height);
	}

	getPerimeter() {
		return 4*this._width;
	}
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
