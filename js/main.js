// ------ Exercice 1 : Hello World ------     ok
/*
console.log ("Hello World !");
var helloWorld = "Hello World !";
console.log(helloWorld);
*/



//  ------ Exercice 2 : Calculs divers ------     ok
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



// ------ Exercice 3 : Communiquer avec l'ordinateur ------     ok
/*
var userName = prompt("Bonjour, quel est votre nom ?");
var hello = "Bonjour ";
alert(hello + userName);
*/



//  ------ Exercice 4 : Nom et prénom ------      ok
/*
var hello = "Bonjour ";
var userFirstName = "Geneviève ";
var userLastName = "PREVOST";
console.log(hello + userFirstName + userLastName);
*/



//  ------ Exercice 5 : Des caractères au nombre ------     ok
/*
var myNumber = "123";
var number = Number(myNumber);
console.log(myNumber);
console.log(number);
console.log(typeof (number));
*/



//  ------ Exercice 6 : Majuscules et miniscules ------     ok
/*
var bienvenue = "Bonjour, bienvenue sur Notre Site !";
console.log(bienvenue.toUpperCase());
console.log(bienvenue.toLowerCase());
*/



//  ------ Exercice 7 : True ou False ?------     ok
/*
var hello = "Hello World !";
var hlo = hello.length;
console.log(hlo);
var bonjour = "" ;
var bjr = bonjour.length;
console.log(bjr);
*/



//  ------ Exercice 8 : Calculer mon âge ------     ok
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



// ------ Exercice 9 : Problème de chaussures ------      ok
/*
var prix1 = 70;
var prix2 = 59;
var prix3 = 20;
var total = (prix1 + prix2 + prix3) - (prix1 + prix2 + prix3)*20/100;
console.log(total);
*/



// ------ Exercice 10 : Une calculatrice JavaScript ------      ok
/*
var firstNumber = Number(prompt("Entrez un premier nombre"));
var secondNumber = Number(prompt("Entez un second nombre"));
console.log(firstNumber + secondNumber);
*/



// ------ Exercice 11 : Travailler avec les propriétés ------ok (nom trop long ?)
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



// ------ Exercice 12 : Le nombre le plus grand ------      ok
/*
var number1 = 25;
var number2 = 3250;
var number3 = 12720;
var number4 = 4;
console.log(Math.max(number1, number2, number3, number4));
*/



// ------ Exercice 13 : Condition d'âge ------      ok
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



// ------ Exercice 14 : Le nombre caché ------      ok
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



// ------ Exercice 15 : Des nombres en boucle ------      ok
/*
var nombre = 1;
var interligne = "\n\n";
while (nombre <= 100) {
    console.log(nombre + interligne);
    nombre++;
}
*/



// ------ Exercice 16 : Des nombres en boucle bis ------      ok
/*
for (var nombre = 1; nombre <= 100; nombre++) {
  if (nombre%2 == 0) {
    console.log(nombre);
  }
}
*/



// ------ Exercice 17 : Remplir la piscine ------     pas sûr
/*
var information = "La piscine se remplit en ";
var piscine = 10*5*3;
var remplissageMin = 1000/60;

var result = piscine * remplissageMin;

alert(information + result + "minutes");
*/



// ------ Exercice 18 : Calculs de cercle ------      ok
/*
var rayon = Number(prompt("Veuillez donner une valeur au rayon du cercle."));
var air = 3.14*(rayon*rayon);
var result = 2*3.14*rayon;
console.log(air + result);
*/



// ------ Exercice 19 : Une pyramide ------     pas tout à fait ok
/*
for (var i = 1; i <=5; i++)
{
  for (var j = 1; j <=i; j++)
  {
    console.log("*");
  }
  console.log("\n")
}
*/

      // Corrections //         ok
/*
var pyramide = "";

for (var i = 1; i <= 5; i++) {
  pyramide = pyramide + "*";
  console.log(pyramide);
}
*/

// ------ Exercice 20 : FIZZ BUZZ ------      ok mais peu être simplifié
/*
var fizz = "FIZZ";
var buzz = " BUZZ";
var fizzBuzz = " FIZZBUZZ";

for (var nombre = 1; nombre <= 100; nombre++) {
  if (nombre!= 0 && ( nombre%3 == 0 )) {
    console.log(nombre + fizz);
  }
  else if (nombre!= 0 && ( nombre%5 == 0 )) {
    console.log(nombre + buzz);
  }
  if (nombre!= 0 && ( nombre%3 == 0 ) && ( nombre%5 == 0 )) {
    console.log(nombre + fizzBuzz);
  }
}
*/

      // Corrections //         ok
/*
for (var i = 1; i <= 100; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
   console.log("FIZZ BUZZ");
 }
 else if (i % 5 === 0) {
   console.log("BUZZ");
 }
 else if (i % 3 ===0) {
   console.log("FIZZ");
 }
 else {
   console.log(i);
 }
}
*/



// ------ Exercice 21 : Un échiquier ------   pas ok du tout
/*
var ligne1 = [" # # # # # # # #"];
var ligne2 = ["# # # # # # # # "];
var interligne = "\n";
console.log(ligne1 + interligne + ligne2 + interligne +
ligne1 + interligne + ligne2 + interligne + ligne1 + interligne +
ligne2 + interligne + ligne1 + interligne + ligne2 + interligne);
*/

          // Corrections //     ok
/*
//On déclare une variable qui stock le plateau
var plateau = "";
//On lance une 1er boucle pour créer les lignes
  for (var i = 1; i <= 8; i++) {
  //A chaque ligne, on lance une boucle pour créer les case
   for (var j = 1; j <= 16; j++) {
      //Si la somme de la ligne et de la case est paire
      //On affiche un blanc
      if ( (i + j) % 2 === 0) {
       plateau = plateau + " ";
      }
      //Sinon on affiche un noir
      else {
       plateau = plateau + "#";
       }
      }
      //Juste avant de passer à la ligne suivante
      //On ajoute un retour à la ligne
       plateau = plateau + "\n";
      }

//On affiche le plateau
console.log(plateau);
*/


// ------ Exercice 22 : Un Matrix dans la console ------      ok
/*
// Variable matrix
var matrix = "";
//1er boucle pour les lignes
  for (var i = 0; i < 20; i++) {
  //Boucle pour les 0 et 1
   for (var j = 1; j <= 1; j++) {
      //Si la somme de la ligne et de la case est paire
      //On affiche un blanc
      if ( (i + j) % 5 === 0) {
       matrix += "-------";
      }
      //
      else if ( (i + j) % 6 === 1 ) {
        matrix += "1";
      }
      //Sinon on affiche 0
      else {
       matrix += "0";
       }
      }
      //Retour à la ligne
       matrix += "\n";
      }

//On affiche la Matrix
console.log(matrix);
*/


// ------ Exercice 23 : Nombre paire ? ------     ok
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



// ------ Exercice 24 : Vous avez dit factorielle ? ------   peut-être ok
/*
var n = Number(prompt("Entrez un nombre entier"));

// Si le nombre est négatif
if (n < 0) {
  n += -1;
}
// Si le nombre est 0, son factorielle est 1
else if (n == 0) {
  n += 1;
}
// sinon
else {
  n += (n * (n - 1));
}
var result = n;
alert(result);
*/



// ------ Exercice 25 : Les tirets ça compte ! ------   ok
/*
var dash = prompt("Entrez un texte");
var underscore = dash.replace(/-/gi, "_");
console.log(underscore);
*/



// ------ Exercice 26 : Entrainez-vous avec les tableaux ------ ok
/*
var shoppingListTab = ["Légumes ", "Farine ", "Oeufs ", "Sucre de canne ", "Lait de riz ", "Lait d'amande "];
var achat = "Il faut absolument acheter : ";
console.log(achat + shoppingListTab[0], shoppingListTab[5] + shoppingListTab[3]);
*/




// ------ Exercice 27 : Le tableau d'un homme ------       ok
/*
var man = ["Miyazaki ", "Hayao ", "77 ans ", "5 janvier 1941"];
for (var i = 0; i < man.length; i++) {
  console.log(man[i]);
}
*/



// ------ Exercice 28 : Le max d'un tableau ------      ok
/*
var tableau = [0, 2412, 720, 27857, 4, 22, -27]
console.log(Math.max(...tableau));
*/



// ------ Exercice 29 : Une to do list ------     pas ok
/*
var toDo = [];
var add = toDo.push(prompt("Quelle tâche voulez-vous ajouter ?"));
var end = "Fin";

while (add != end) {
  for (var i = 0; i < toDo.length; i++) {
    toDo += add;
    console.log(toDo[i]);
  }
}
*/



// ------ Exercice 30 : Un jeu en JavaScript ------
/*
// Déterminer choix utilisateur et ordinateur
// Variable choix utilisateur
var userChoice = prompt("Qu'allez-vous jouer ? pierre, feuille, ou ciseaux ?");
//Variable choix random
var pcChoice = Math.random();
//Affiche choix pc


// Si utilisateur entre une mauvaise valeur

while (userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "ciseaux") {
  alert(" Veuillez choisir pierre, feuille ou ciseaux. ");
  userChoice = prompt("Qu'allez-vous jouer ? pierre, feuille, ou ciseaux ?");
}

//Valeur choix random
if (pcChoice <= 0.30) {
	pcChoice = "pierre";
} else if (pcChoice <= 0.60) {
	pcChoice = "feuille";
} else {
	pcChoice = "ciseaux";
}
alert(pcChoice);

//Pour créer la comparaison
//Déterminer les variables de choix
//Qui gagne
var won = pcChoice;
won = "Vous avez perdu ! ";
var userWon = userChoice;
userWon = "Vous avez gagné ! ";

var result = "";
	if (userChoice === pcChoice) {
		result += "Egalité ! " + "Vous aviez choisi : " + userChoice;
	} else if (userChoice === "pierre") {
		if (pcChoice === "ciseaux") {
			result += "La pierre gagne ! " + userWon + "Vous aviez choisi : " + userChoice;
		} else {
			result += "La feuille gagne ! " + won + "Vous aviez choisi : " + userChoice;
		}
	} else if (userChoice === "feuille") {
		if (pcChoice === "pierre") {
			result += "La feuille gagne ! " + userWon + "Vous aviez choisi : " + userChoice;
		} else {
			result += "Les ciseaux gagnent ! " + pcWon + "Vous aviez choisi : " + userChoice;
		}
	} else if (userChoice === "ciseaux") {
		if (pcChoice === "feuille") {
			result += "Les ciseaux gagnent ! " + userWon + "Vous aviez choisi : " + userChoice;
		} else {
			result += "La pierre gagne ! " + pcWon + "Vous aviez choisi : " + userChoice;
		}
	}

alert(result);
*/


/*
//déclarer tableau
var winnerUser = [];
var winnerPC = [];

while (winnerUser === 3 || winnerPC === 3) {
  if (result = userWon) {
    winnerUser.push(1)
  } else {
    winnerPC.push(1)
  }
  for (var i = 0; i <= winnerUser.length; i++) {
    console.log(i);
  }
  for (var j = 0; j <= winnerPC.length; i++) {
    console.log(j);
  }
}
*/

// //////////////////// ------ Corrections ------ //////////////////// //

////////// --- Boucles --- //////////
/*
var userAnswer = "";
while (userAnswer != "stop") {
  userAnswer = prompt("Une question ?")
}
*/

/*
var userPassword = "monpassword";
var userAnswer = "";
while (userAnswer != userPassword) {
  userAnswer = prompt("Entrez votre mot de passe.");
  if (userAnswer != userPassword) {
    alert("Mauvais mot de passe. Entrez à nouveau.")
  }
}
alert("Vous êtes connecté.")
*/

/*
for (var i = 0; i <= 10; i +=2) {
  console.log(i);
}
*/



////////// --- Tableaux --- //////////
/*
var userNames = ["Akira", "Shu", "Kimi"];
console.log("Les utilisateurs du site sont : ");
for (var i = 0; i < userNames.length; i++) {
  console.log(userNames[i]);
}
*/

/*
var userPassword = "monpassword";
var userAnswer;
while(userAnswer != userPassword) {
   userAnswer = prompt("rentrez votre mot de passe");
   if(userAnswer != userPassword) {
     alert("Mot de passe incorrect rententez votre chance");
   }
}
alert("Vous êtes connecté");

@chaîne Boucle while dans le cas d'un password
*/

/*
var userNames = ["Jean", "Héléne", "Steven", "Marie", "Youssef", "Renauds"];
console.log("Les utilisateurs du sites sont : ")
for (var i = 0; i < userNames.length; i++) {
 console.log(userNames[i]);
}

@chaîne script de base pour parcourir un tableau
*/

/*
//Tableau qui contient tous les utilisateurs
var users = [
 //Tableau utilisateur 0
 [
   "Dussart",
   "Guillaume",
   45,
   false
 ],
 //Tableau utilisateur 1
 [
   "Jonsson",
   "Olle",
   24,
   false
 ],
 //Tableau utilisateur 2
 [
   "Tchekov",
   "Nathalia",
   32,
   true
 ]
]

console.log("Les utilisateurs sont : ")
//Première boucle qui parcours users
for (var i = 0; i < users.length; i++) {
 //Deuxième boucle qui parcour chaque tableau utilisateur
 for (var j = 0; j < users[i].length; j++) {
   //Si on est au sexe de la personne
   if (j === 3) {
     //Si l'utilisateur est une femme
     if (users[i][j] === true) {
       console.log("Femme");
     }
     //Sinon c'est un homme
     else {
       console.log("Homme");
     }
   }
   //Sinon on affiche la valeur de manière classique
   else {
     console.log(users[i][j]);
   }
 }
 //Après avoir bouclé sur le tableau d'un utilisateur on ajoute une séparation visuelle
 console.log("--------");
}

@chaîne script pour boucler sur un tableau multi-dimensionnel et afficher les informations
*/

/*
//Déclaration
function addition(a, b) {
 console.log(a+b);
}

function soustraction(a, b) {
 console.log(a-b);
}

function multiplication(a, b) {
 console.log(a*b);
}

function calcul(a, b) {
 addition(a, b);
 soustraction(a, b);
 multiplication(a, b);
}

//Utilisation
calcul(200, 15);

@chaîne exemples de fonctions simples
*/

/*
///////////
//Global Data and variables
//////////

//Tableau qui contient tous les utilisateurs
var myUsers = [
 //Tableau utilisateur 0
 [
   "Dussart",
   "Guillaume",
   45,
   false
 ],
 //Tableau utilisateur 1
 [
   "Jonsson",
   "Olle",
   24,
   false
 ],
 //Tableau utilisateur 2
 [
   "Tchekov",
   "Nathalia",
   32,
   true
 ]
];

///////////
//Functions
//////////

function showSexe(user) {
 //Si l'utilisateur est une femme
 if (user[3] === true) {
   console.log("Femme");
 }
 //Sinon c'est un homme
 else {
   console.log("Homme");
 }
}

function loopUsers(users) {
 //Première boucle qui parcours users
 for (var i = 0; i < users.length; i++) {
   //Deuxième boucle qui parcour chaque tableau utilisateur
   for (var j = 0; j < users[i].length; j++) {
     //Si on est au sexe de la personne
     if (j === 3) {
       showSexe(users[i]);
     }
     //Sinon on affiche la valeur de manière classique
     else {
       console.log(users[i][j]);
     }
   }
 }
}

function showUsers(users) {
 console.log("Les utilisateurs sont : ");
   loopUsers(users);
   //Après avoir bouclé sur le tableau d'un utilisateur on ajoute une séparation visuelle
   console.log("--------");
}

///////////
//Program logic
//////////

showUsers(myUsers);

@chaîne voici un code bien commenté et organisé qui montre ce vers quoi vous devez tendre. Remarquez que j'ai divisé mon fichier en trois grandes parties, les données en premier, puis les fonctions et enfin la logique du programme à proprement parler
*/
