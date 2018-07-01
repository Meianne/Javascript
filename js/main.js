// ------ Exercice 1 : Hello World ------                                       ok
/*
console.log ("Hello World !");
var helloWorld = "Hello World !";
console.log(helloWorld);
*/



//  ------ Exercice 2 : Calculs divers ------                                   ok
/*
var result = 3*3;
alert(result);
result = 12/0;
alert(result);
result = 4+9+78;
alert(result);
result = 12-7;
alert(result);
result = 5e4;
alert(result);
*/



// ------ Exercice 3 : Communiquer avec l'ordinateur ------                     ok
/*
var userName = prompt("Bonjour, quel est votre nom ?");
var hello = "Bonjour ";
alert(hello + userName);
*/



//  ------ Exercice 4 : Nom et prénom ------                                    ok
/*
var hello = "Bonjour ";
var userFirstName = "Geneviève ";
var userLastName = "PREVOST";
console.log(hello + userFirstName + userLastName);
*/



//  ------ Exercice 5 : Des caractères au nombre ------                         ok
/*
var myNumber = "123";
var number = parseInt(myNumber);
console.log(myNumber);
console.log(number);
console.log(typeof (number));
*/



//  ------ Exercice 6 : Majuscules et miniscules ------                         ok
/*
var bienvenue = "Bonjour, bienvenue sur Notre Site !";
console.log(bienvenue.toUpperCase());
console.log(bienvenue.toLowerCase());
*/



//  ------ Exercice 7 : True ou False ?------                                   ok
/*
var hello = "Hello World !";
var hlo = hello.length;
console.log(hlo);
var bonjour = "" ;
var bjr = bonjour.length;
console.log(bjr);
*/



//  ------ Exercice 8 : Calculer mon âge ------                                 ok
/*
var today = new Date(prompt("Bonjour. En quelle année somme nous ?"));
var birthday = new Date(prompt("En quelle année êtes-vous né(e) ?"));
var years = today.getFullYear() - birthday.getFullYear();
birthday.setFullYear(today.getFullYear());
if (today < birthday)
{
   years--;
}
alert("Vous avez " + years + " ans !");
var age = Number(prompt("Quel est votre âge ?"));
alert(age + years);
*/



// ------ Exercice 9 : Problème de chaussures ------                            ok
/*
var prix1 = 70;
var prix2 = 59;
var prix3 = 20;
var total = (prix1 + prix2 + prix3) - (prix1 + prix2 + prix3)*20/100;
console.log(total);
*/



// ------ Exercice 10 : Une calculatrice JavaScript ------                      ok
/*
var firstNumber = parseInt(prompt("Entrez un premier nombre"));
var secondNumber = parseInt(prompt("Entez un second nombre"));
console.log(firstNumber + secondNumber);
*/



// ------ Exercice 11 : Travailler avec les propriétés ------                   ok
/*
var userFirstName = prompt("Bonjour, quel est votre prénom ?");
var userLastName = prompt("Quel est votre nom ?");
var initialFirstName1 = userFirstName.slice(0, 1,);
var initialFirstName2 = userFirstName.slice(-1);
var initialLastName1 = userLastName.slice(0, 1,);
var initialLastName2 = userLastName.slice(-1);
console.log(initialFirstName1 + initialFirstName2 + initialLastName1 + initialLastName2);
var age = Number(prompt("Quel est votre âge ?"));
alert(Math.round(age/33));
*/



// ------ Exercice 12 : Le nombre le plus grand ------                          ok
/*
var number1 = 25;
var number2 = 3250;
var number3 = 12720;
var number4 = 4;
console.log(Math.max(number1, number2, number3, number4));
*/



// ------ Exercice 13 : Condition d'âge ------                                  ok
/*
var age = Number(prompt("Quel est votre âge ? "));
if (age < 0) {
  ageResult = "Veuillez entrer un âge réel ";
} else if (0 <= age && age <= 21) {
  ageResult = "Vous n'avez pas l'âge légal";
} else {
  (age >= 21)
  ageResult = "Accès autorisé ";
}
alert(ageResult);
if (age%2 == 0) {
  pairImpair = "Votre âge est pair ";
} else if (Math.pow(age, 1/2)) {
  pairImpair = "Votre âge est un carré ";
} if (age < 0) {
  pairImpair = "Essayez à nouveau";
}
alert(pairImpair);
*/



// ------ Exercice 14 : Le nombre caché ------                                  ok
/*
var secretNumber = 19;
var answer = Number(prompt("Devinez le nombre secret entre 0 et 30 ! Quelle est votre réponse ?"));

while (secretNumber != answer) {

    if (secretNumber < answer)
        alert("Vous êtes au dessus du nombre secret.");
    else
        alert("Vous êtes en dessous du nombre secret.");

    answer = Number(prompt("Devinez le nombre secret ! Quelle est votre réponse ?"));
}
alert("Bravo ! Vous avez gagné !");
*/



// ------ Exercice 15 : Des nombres en boucle ------                            ok
/*
var nombre = 1;
var interligne = "\n\n";
while (nombre <= 100) {
    console.log(nombre + interligne);
    nombre++;
}
*/



// ------ Exercice 16 : Des nombres en boucle bis ------                        ok
/*
for (var nombre = 1; nombre <= 100; nombre++) {
  if (nombre%2 == 0) {
    console.log(nombre);
  }
}
*/



// ------ Exercice 17 : Remplir la piscine ------                               pas sûr
/*
var information = "La piscine se remplit en ";
var piscine = 10*5*3;
var remplissageMin = 1000/60;

var result = piscine * remplissageMin;

alert(information + result + "minutes");
*/



// ------ Exercice 18 : Calculs de cercle ------                                ok
/*
var rayon = Number(prompt("Veuillez donner une valeur au rayon du cercle."));
var air = 3.14*(rayon*rayon);
var result = 2*3.14*rayon;
console.log(air + result);
*/



// ------ Exercice 19 : Une pyramide ------                                     pas tout à fait ok
/*
var i,j;
for (var i = 1; i <=5; i++)
{
  for (var j = 1; j <=i; j++)
  {
    console.log("*");
  }
  console.log("\n")
}
*/

// ------ Exercice 20 : FIZZ BUZZ ------                                        ok
/*
var fizz = " FIZZ";
var buzz = " BUZZ";
var fizzBuzz = " FIZZBUZZ";

for (var nombre = 1; nombre <= 100; nombre++) {
  if (nombre!= 0 && ( nombre%3 == 0 )) {
    console.log(nombre + fizz);
  }
  else if (nombre!= 0 && ( nombre%5 == 0 )) {
    console.log(nombre + buzz);
  }
  if (nombre!= 0 && ( nombre%3 == 0 ) && ( nombre%15 == 0 )) {
    console.log(nombre + fizzBuzz);
  }
}
*/



// ------ Exercice 21 : Un échiquier ------                                      pas sûr
/*
var ligne1 = [" # # # # # # # #"];
var ligne2 = ["# # # # # # # # "];
var interligne = "\n";

console.log(ligne1 + interligne + ligne2 + interligne + ligne1 + interligne + ligne2 + interligne + ligne1 + interligne + ligne2 + interligne + ligne1 + interligne + ligne2 + interligne);
*/



// ------ Exercice 22 : Un Matrix dans la console ------                        pas ok
/*
var zero = "";
var one = "1";
var dash = "\"-------\"";
console.log(dash);
*/



// ------ Exercice 23 : Nombre paire ? ------                                   ok
/*
var total = Number(prompt("Entrez votre montant"));
if (total%2 == 0) {
  pairImpair = "True";
} else if (total&1) {
  pairImpair = "False";
} else {
  pairImpair = (Math.round(total));
}
console.log(pairImpair);
*/



// ------ Exercice 24 : Vous avez dit factorielle ? ------                      pas ok



// ------ Exercice 25 : Les tirets ça compte ! ------                           ok
/*
var dash = prompt("Entrez un texte");
var underscore = dash.replace(/-/gi, "_");
console.log(underscore);
*/



// ------ Exercice 26 : Entrainez-vous avec les tableaux ------                 ok
/*
var shoppingListTab = ["Légumes ", "Farine ", "Oeufs ", "Sucre de canne ", "Lait de riz ", "Lait d'amande "];
var achat = "Il faut absolument acheter : ";
console.log(achat + shoppingListTab[0], shoppingListTab[5] + shoppingListTab[3]);
*/



// ------ Exercice 27 : Le tableau d'un homme ------                            ok
/*
var man = ["Miyazaki ", "Hayao ", "77 ans ", "5 janvier 1941"];
function table() {
  console.log(man[0]);
  console.log(man[1]);
  console.log(man[2]);
}
table(1, 2, 3);
*/



// ------ Exercice 28 : Le max d'un tableau ------                              ok
/*
var tableau = [0, 2412, 720, 27857, 4, 22, -27]
console.log(Math.max(...tableau));
*/



// ------ Exercice 29 : Une to do list ------                                   pas ok
/*
var toDo = [];
var add = toDo.push(prompt("Quelle tâche voulez-vous ajouter ?"));
var end = "Fin";

while (add != fin) {
  console.log(toDo);
} else {
  answer = add;
}
*/



// ------ Exercice 30 : Un jeu en JavaScript ------                             pas ok
/*
var userchoice = prompt("Qu'allez-vous jouer ? pierre, feuille, ou ciseaux ?");

var itChoice = Math.random();

if (itChoice <= 0.30) {
	itChoice = "pierre";
} else if (itChoice <= 0.60) {
	itChoice = "feuille";
} else {
	itChoice = "ciseaux";
}

var won = itChoice;
var userWon = userchoice;

alert("Le choix de l'ordinateur " + itChoice);
*/
