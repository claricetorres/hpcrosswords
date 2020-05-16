//set variables to classes

var myNimbus = document.querySelectorAll("nimbus");
var myHagrid = document.querySelectorAll('hagrid');
var myHedwig = document.querySelectorAll('hedwig');
var myAlbus = document.querySelector('albus');
var myNewt = document.querySelectorAll('newt');
var myGolden = document.querySelectorAll('golden');
var myHermione = document.querySelectorAll('hermione');
var myLupin = document.querySelectorAll('lupin');
var myDobby = document.querySelectorAll('dobby');
var myRon = document.querySelectorAll('ron');
var mySeverus = document.querySelectorAll('severus');

//array with classes

var dumbledoresArmy = [myNimbus, myHagrid, myHedwig, myAlbus, myNewt, myGolden, myHermione, myLupin, myDobby, myRon, mySeverus];
var myClasses = ["nimbus", "hagrid", "hedwig", "albus", "newt", "golden", "hermione", "lupin", "dobby", "ron", "severus"];
//See if one of the words are selected
for(var i=0; i<myClasses.length; i++){
    var compare =  myClasses[i]
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains(compare)){
            console.log("hey");
        }
    }, false);
}

//Highlight words







