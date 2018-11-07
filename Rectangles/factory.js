function createRectangles(length, width) {
    return {
        length,
        width,
        getArea: function () {
            return length * width;
        }
    };
}

let rectangles1 = createRectangles(7, 4);
console.log(`1.Rechteck
Länge = ${rectangles1.length}, Breite = ${rectangles1.width}, Fläche = ${rectangles1.getArea()}
`)

let rectangles2 = createRectangles(30, 5);
console.log(`2.Rechteck
Länge = ${rectangles2.length}, Breite = ${rectangles2.width}, Fläche = ${rectangles2.getArea()}
`)