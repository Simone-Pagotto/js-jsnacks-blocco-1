// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var rightTriangle = {
  'base' : 5,
  'high' : 5
}

var area = (rightTriangle.base * rightTriangle.high) / 2;
var perimeter = rightTriangle.base + rightTriangle.high + ((rightTriangle.base) ** 2 + (rightTriangle.high) ** 2) ** .5;


console.log('area:',area);
console.log('perimeter',perimeter);
