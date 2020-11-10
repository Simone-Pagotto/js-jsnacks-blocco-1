// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
//Implementando methods

var rightTriangle = {
  'base' : 5,
  'high' : 5,
  'area' : function() {
    return (this.base * this.high) / 2;
  },
  'perimeter' : function() {
    return (this.base + this.high + ((this.base) ** 2 + (this.high) ** 2) ** .5);
  }
};

console.log(rightTriangle.area());
console.log(rightTriangle.perimeter());
