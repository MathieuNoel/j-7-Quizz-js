/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* Exo 1 */
var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer noire";

/* Exo 2 */

var reponse1 = "la mer noire";

prompt(question1);

if (reponse1 == solution1) {
    alert('gagné !')
} else {
    alert("perdu...")
}
/* Exo 3 */
var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;
var reponse2 = 63;

Number(prompt(question2));

if (reponse2 == solution2) {
    alert("gagné")
}

var counter = 0

if (reponse1 == solution1) {
    counter ++ 
}
if (reponse2 === solution2) {
    counter ++ 
}
console.log('vos bonne reponses '+counter);