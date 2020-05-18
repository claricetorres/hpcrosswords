//set variables to classes

var myNimbus = document.querySelectorAll('.nimbus');
var myHagrid = document.querySelectorAll('.hagrid');
var myHedwig = document.querySelectorAll('.hedwig');
var myAlbus = document.querySelector('.albus');
var myNewt = document.querySelectorAll('.newt');
var myGolden = document.querySelectorAll('.golden');
var myHermione = document.querySelectorAll('.hermione');
var myLupin = document.querySelectorAll('.lupin');
var myDobby = document.querySelectorAll('.dobby');
var myRon = document.querySelectorAll('.ron');
var mySeverus = document.querySelectorAll('.severus');

//array with classes

var dumbledoresArmy = [myNimbus, myHagrid, myHedwig, myAlbus, myNewt, myGolden, myHermione, myLupin, myDobby, myRon, mySeverus];
//removes background color
function nox(){
    for(var i = 0; i<$("input").length; i++){
        document.querySelectorAll("input")[i].style.background = "white";
    }
    for(var i = 0; i<$("li").length; i++){
        document.querySelectorAll("li")[i].style.background = "white";
    }
}

//See if one of the words are selected
function chosenOne(){
        document.addEventListener('click', function (event) {
            if (event.target.classList.contains("nimbus")){
                nox();
                for(var i = 0; i<$(".nimbus").length; i++){
                    myNimbus[i].style.background = "Gainsboro";
                }
                mySeverus[0].style.background = "Gainsboro";
            }
            else if(event.target.classList.contains("hagrid")){
                nox();
                for(var i = 0; i<$(".hagrid").length; i++){
                    myHagrid[i].style.background = "Gainsboro";
                }
                myHermione[0].style.background = "Gainsboro";
                
            }
            else if(event.target.classList.contains("hedwig")){
                nox();
                for(var i = 0; i<$(".hedwig").length; i++){
                    myHedwig[i].style.background = "Gainsboro";
                }
                myHermione[1].style.background = "Gainsboro";
            }
            else if(event.target.classList.contains("albus")){
                nox();
                //myAlbus[0].style.background = "Gainsboro";
                //myAlbus[3].style.background = "Gainsboro";
                //myAlbus[5].style.background = "Gainsboro";
                //myAlbus[6].style.background = "Gainsboro";
                //myAlbus[10].style.background = "Gainsboro";
                myGolden[3].style.background = "Gainsboro";
                myHermione[3].style.background = "Gainsboro";
                myLupin[0].style.background = "Gainsboro";
                myDobby[1].style.background = "Gainsboro";
                myRon[0].style.background = "Gainsboro";
                mySeverus[5].style.background = "Gainsboro";
            }
            else if(event.target.classList.contains("newt")){
                nox();
                for(var i = 0; i<$(".newt").length; i++){
                    myNewt[i].style.background = "Gainsboro";
                }
            }
            else if(event.target.classList.contains("golden")){
                nox();
                for(var i = 0; i<$(".golden").length; i++){
                    myGolden[i].style.background = "Gainsboro";
                }
            }
            else if(event.target.classList.contains("hermione")){
                nox();
                for(var i = 0; i<$(".hermione").length; i++){
                    myHermione[i].style.background = "Gainsboro";
                }
            }
            else if(event.target.classList.contains("lupin")){
                nox();
                for(var i = 0; i<$(".lupin").length; i++){
                    myLupin[i].style.background = "Gainsboro";
                }
                myNewt[0].style.background = "Gainsboro";
            }
            else if(event.target.classList.contains("dobby")){
                nox();
                for(var i = 0; i<$(".dobby").length; i++){
                    myDobby[i].style.background = "Gainsboro";
                }
                myNewt[3].style.background = "Gainsboro";
            }
            else if(event.target.classList.contains("ron")){
                nox();
                for(var i = 0; i<$(".ron").length; i++){
                    myRon[i].style.background = "Gainsboro";
                }
            }
            else if(event.target.classList.contains("severus")){
                nox();
                for(var i = 0; i<$(".severus").length; i++){
                    mySeverus[i].style.background = "Gainsboro";
                }
                
            }
        }, false);
    
}
// count classes size


//Highlight and identify words
chosenOne();



