//Deel 2
//A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie.. moet een item vinden op basis van een value
const findSpiderMan = (superheroes) => superheroes.find((superheroes) => superheroes.name === "Spiderman");
console.log(superheroes);
console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B 
const array = [1, 2, 3];
// pass the function to map
const doubleArrayValues = array.map(x => x * 2);
console.log(doubleArrayValues);
// result should be [2, 4, 6]


//C
function containsNumberBiggerThan10(array) {
  const result = array.filter(element => element > 10);
  return result.length > 0;
}

const containNumber = function (array) {
  const result = array.filter(element => element > 10);
  return result.length > 0;

}

const contNumber = (array) => array.filter(element => element > 10).length > 0;

console.log("uitkomst containsNumberBiggerThan10: " + containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
console.log("uitkomst containsNumberBiggerThan10: " + containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));

console.log("uitkomst containNumber: " + containNumber([1, 4, 3, 6, 9, 7, 11]));
console.log("uitkomst containNumber: " + containNumber([1, 2, 1, 2, 1, 2]));

console.log("uitkomst contNumber: " + contNumber([1, 4, 3, 6, 9, 7, 11]));
console.log("uitkomst contNumber: " + contNumber([1, 2, 1, 2, 1, 2]));

//D Eerst en function declaration
/* function isItalyInTheGreat7(array) {
 //console.log("hallo");
 const result = array.filter(element => element == 'Italy');
 //console.log(" reageert ie nog? ")
 return result.length > 0; 
} */

//Hier een function expression.
/*const isItalyInTheGreat7 = function (array) {
  const result = array.filter(element => element == 'Italy');
  return result.length > 0;
} */

// Hier een  arrow function (is ook een function expression) 
/* isItalyInTheGreat7 = (array) => {
  const result = array.filter(element => element == 'Italy');
  return result.length > 0;
}
 */

// De gecomprimeerde stijl. De functie => en de rest van de code op 1 regel dan hoef je geen return toe te voegen.
isItalyInTheGreat7 = (array) => array.filter(element => element == 'Italy').length > 0;

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true

//E
/*
2. tenfold wordt geactiveerd, met het argument 'array' met waarde [1, 4, 3, 6, 9, 7, 11]
*/
function tenfold(array) {
  /*
  3. nu ga ik in de array [1, 4, 3, 6, 9, 7, 11], per element iets doen (doIt). 
  Foreach is een loop, en dit wordt uitgevoerd voor alle elementen in de array, beginnende bij het element op index/positie 0;
  */
  array.forEach(doIt);
  /*
  6. Nu dat voor alle elementen in de array [1, 4, 3, 6, 9, 7, 11] de berekeningen en wijzigingen van de element waarden zijn doorgevoerd
   heeft de array nu de waardes [10, 40, 30, 60, 90, 70, 110]
  */

  /*
  7. De array met daarin de nieuwe waardes, geef ik terug als return, naar de plaats waar het aangeroepen is (zie stap 1)
  */
  return array;
}
/*
4. Dit wordt in dit geval meerdere malen aangeroepen, namelijk voor alle elementen in de array [1, 4, 3, 6, 9, 7, 11]. 
Beginnende met positie 0, die de waarde 1 heeft binnen het object array.
 foreach verwacht een function, met 
 1 verplicht argument currentvalue = huidige waarde van het element
 1 optioneel argyment index = huidige positie in de array van het huidige element
 1 optioneel argument arr = dit is het originele array object. Deze heeft initieel de waardes [1, 4, 3, 6, 9, 7, 11]
*/
function doIt(currentValue, index, arr) {
  /*
  5. de waarde van het huidige element vermenigvuldig ik met 10. De uitkomst van deze berekening plaats ik op 
   dezelfde positie als de originele waarde, in de array waar ik nu mee werk
  */
  arr[index] = currentValue * 10;
}

/*
1. voer de functie tenfold uit, met argument [1, 4, 3, 6, 9, 7, 11], en laat me in het console weten wat de uitkomst is.
*/
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
/*
8. result should be [10, 40, 30, 60, 90, 70, 110]
*/


//F
function isBelow100(array) {
  const result = array.filter(element => element < 100);
  return array.length < 0;
}
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

//G
/* maak een functie, gebruik reduce en zorg dat de alle waardes in de array bij elkaar worden opgeteld worden
en return resultaat ervan. */
//1 Maak een functie
const bigSum = (array) => {
  //console.log('hallo 1');
  //2 zorg dat alle waardes (currentValue) in de array bij elkaar opgeteld worden (accumulator)
  const reducer = ((accumulator, currentValue) => accumulator + currentValue);
  const result = array.reduce(reducer);
  return result;

}
//3  en gebruik .reduce (array- methods)
//4 return resultaat 


// 5 laat zien wat je gedaan hebt.
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118