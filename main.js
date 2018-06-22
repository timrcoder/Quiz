//Create an alert to notify of a correct answer
//============
//Create a variable to hold the value when
// clicked.  For example, clicking correct answers 
// on ans. 2 % 3 would give a total of 50%
//=============
//
//let button = document.getElementById("Iran");
//let percentCorrect =document.getElementById("Iran" + "Bacon");
//let questionOne = document.getElementById("Iran");
//let questionTwo = document.getElementById("Bacon");
//let questionThree =document.getElementById("hidingOnThePage");
//let questionFour =document.getElementById("white");

//function add() {
//let one =questionOne.click;
//let two = questionTwo.click;
//}
//questionOne.addEventListener("input", add);
//questionTwo.addEventListener("input", add);
//questionThree.addEventListener("input", add);
////questionFour.addEventListener("input", add);

//console.log

//var two =document.getElementById("Iran") + document.getElementById("white") 
//console.log var("Hello");



///Iran.addEventListener("click", function() {
// console.log("25 %");
//});



//function Persia() {

//alert("Correct !");
//}

//function Bacon() {
//alert("Correct !");
//}

//function hidingOnThePage() {
//alert("Correct !");
//}

//function White() {
//alert("Correct !");
//}

//document.getElementById("Iran").addEventListener('click', function(){alert('HELLO');});

// END OF OLD CODE //
let score = 0;
let question = 0;

function answerQuestion(num) {
    score += num;
    question += 1

    if (question === 4) {
        score = score * 25
        console.log(score + "%");

    }


}
