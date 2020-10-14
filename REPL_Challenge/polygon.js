class Polygon {
    constructor(sideOne, sideTwo, sideThree, sideFour) {
        this.perimeter = sideOne + sideTwo + sideThree + sideFour;
    }
}

console.log(new Polygon (3, 3, 8, 8).perimeter);