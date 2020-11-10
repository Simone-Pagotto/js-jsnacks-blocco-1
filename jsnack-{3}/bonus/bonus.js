// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var rightTriangle = {
  'base' : 5,
  'high' : 5,
  'area' : function() {

    return (this.base * this.high) / 2;
  }
};

console.log(rightTriangle);
