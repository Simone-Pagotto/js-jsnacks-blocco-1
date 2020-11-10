// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bycicles = [
  {
    'nome' : 'olmo',
    'peso' : 55
  },
  {
    'nome' : 'scott',
    'peso' : 80
  },
  {
    'nome' : 'bianchi',
    'peso' : 34
  },
  {
    'nome' : 'energizer',
    'peso' : 33
  },
]

console.log(bycicles);

i=0;
var lighter = bycicles[i];

while(i<bycicles.length){
  if(lighter['peso'] > bycicles[i]['peso']){
    lighter = bycicles[i];
  }
  i++;
}

console.log(lighter);
