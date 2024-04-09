class Shape extends React.Component {
    constructor(color) {
        this.color = color;
    }
    getArea() {

    }
    toString() {

    }
}

class Rectangle extends Shape{
    constructor(color, lenght, width){
        super(color)
        this.lenght = lenght;
        this.width = width;
    }

    getArea(){

    }

    toString(){

    }
}

class Triangle extends Shape{
    constructor(color, base, height){
        super(color);
        this.base = base;
        this.height = height;
    }

    getArea(){

    }

    toString(){
        
    }
}