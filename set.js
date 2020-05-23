//set variables to ids on sections
var preGame = document.getElementById("before");
var postGame = document.getElementById("after");
var wholeGame = document.getElementById("game");
//functions for the buttons on pre and post game
function clickStart(){
    console.log("begin")
    preGame.classList.add("vanish");
    wholeGame.classList.remove("vanish");
}
function clickReplay(){
    console.log("end");
    preGame.classList.remove("vanish");
    wholeGame.classList.add("vanish");
    postGame.classList.add("vanish");
}
//set variables to classes
var myNimbus = document.querySelectorAll('.nimbus');
var myHagrid = document.querySelectorAll('.hagrid');
var myHedwig = document.querySelectorAll('.hedwig');
var myAlbus = document.getElementsByClassName('albus');
var myNewt = document.querySelectorAll('.newt');
var myGolden = document.querySelectorAll('.golden');
var myHermione = document.querySelectorAll('.hermione');
var myLupin = document.querySelectorAll('.lupin');
var myDobby = document.querySelectorAll('.dobby');
var myRon = document.querySelectorAll('.ron');
var mySeverus = document.querySelectorAll('.severus');
//created variables to be used on compare function to store how many letters match in each word
var nim = 0, hag = 0, hed = 0, alb = 0, ne = 0, go = 0, her = 0, lu = 0, dob = 0, r = 0, sev = 0;

//sets background color to white/used it to remove the highlight on words
function nox(){
    for(var i = 0; i<$("input").length; i++){
        document.querySelectorAll("input")[i].style.background = "white";
    }
    for(var i = 0; i<$("li").length; i++){
        document.querySelectorAll("li")[i].style.background = "white";
    }
}
//sets background color to Gainsboro/used it to highlight the words when clicked
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
            }
            else if(event.target.classList.contains("hedwig")){
                nox();
                for(var i = 0; i<$(".hedwig").length; i++){
                    myHedwig[i].style.background = "Gainsboro";
                }
                myHermione[0].style.background = "Gainsboro";
            }
            else if(event.target.classList.contains("albus")){
                nox();
                myAlbus[0].style.background = "Gainsboro";
                myAlbus[1].style.background = "Gainsboro";
                myAlbus[2].style.background = "Gainsboro";
                myAlbus[3].style.background = "Gainsboro";
                myAlbus[4].style.background = "Gainsboro";
                myAlbus[5].style.background = "Gainsboro";
                myHermione[2].style.background = "Gainsboro";
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
                myAlbus[0].style.background = "Gainsboro";
            }
            else if(event.target.classList.contains("hermione")){
                nox();
                for(var i = 0; i<$(".hermione").length; i++){
                    myHermione[i].style.background = "Gainsboro";
                }
                myHagrid[0].style.background = "Gainsboro";
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
//compares letters that were typed on input boxes
function compareLetters(){
    if(myNimbus[0].value.toLowerCase() === "n"){
        nim++;
        if(myNimbus[1].value.toLowerCase() === "i"){
            nim++;
            if(myNimbus[2].value.toLowerCase() === "m"){
                nim++;
                if(myNimbus[3].value.toLowerCase() === "b"){
                    nim++;
                    if(myNimbus[4].value.toLowerCase() === "u"){
                        nim++;
                        if(mySeverus[0].value.toLowerCase() === "s"){nim++;}
                    }
                }
            }
        }
    }
    if(myHagrid[0].value.toLowerCase() === "h"){
        hag++;
        if(myHagrid[1].value.toLowerCase() === "a"){
            hag++;
            if(myHagrid[2].value.toLowerCase() === "g"){
                hag++; 
                if(myHagrid[3].value.toLowerCase() === "r"){
                    hag++;
                    if(myHagrid[4].value.toLowerCase() === "i"){
                        hag++;
                        if(myHagrid[5].value.toLowerCase() === "d"){hag++;}
                    }
                }
            }
        }
    }
    if(myHermione[0].value.toLowerCase() === "e"){
        hed++;
        if(myHedwig[0].value.toLowerCase() === "h"){
            hed++;
            if(myHedwig[1].value.toLowerCase() === "d"){
                hed++;
                if(myHedwig[2].value.toLowerCase() === "w"){
                    hed++;
                    if(myHedwig[3].value.toLowerCase() === "i"){
                        hed++;
                        if(myHedwig[4].value.toLowerCase() === "g"){hed++;}
                    }
                }
            }
        }
    }
    if(myAlbus[0].value.toLowerCase() === "d"){
        alb++;
        if(myAlbus[1].value.toLowerCase() === "u"){
            alb++;
            if(myHermione[2].value.toLowerCase() === "m"){
                alb++;
                if(myAlbus[2].value.toLowerCase() === "b"){
                    alb++;
                    if(myLupin[0].value.toLowerCase() === "l"){
                        alb++;
                        if(myAlbus[3].value.toLowerCase() === "e"){
                            alb++;
                            if(myAlbus[4].value.toLowerCase() === "d"){
                                alb++;
                                if(myDobby[1].value.toLowerCase() === "o"){
                                    alb++;
                                    if(myRon[0].value.toLowerCase() === "r"){
                                        alb++;
                                        if(mySeverus[5].value.toLowerCase() === "e"){alb++;}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(myNewt[0].value.toLowerCase() === "n"){
        ne++;
        if(myNewt[1].value.toLowerCase() === "e"){
            ne++;
            if(myNewt[2].value.toLowerCase() === "w"){
                ne++;
                if(myNewt[3].value.toLowerCase() === "t"){ne++;}
            }
        }
    }
    if(myGolden[0].value.toLowerCase() === "g"){
        go++;
        if(myGolden[1].value.toLowerCase() === "o"){
            go++;
            if(myGolden[2].value.toLowerCase() === "l"){
                go++;
                if(myAlbus[0].value.toLowerCase() === "d"){
                    go++;
                    if(myGolden[3].value.toLowerCase() === "e"){
                        go++;
                        if(myGolden[4].value.toLowerCase() === "n"){go++}
                    }
                }
            }
        }
    }
    if(myHagrid[0].value.toLowerCase() === "h"){
        her++;
        if(myHermione[0].value.toLowerCase() === "e"){
            her++;
            if(myHermione[1].value.toLowerCase() === "r"){
                her++
                if(myHermione[2].value.toLowerCase() === "m"){
                    her++;
                    if(myHermione[3].value.toLowerCase() === "i"){
                        her++;
                        if(myHermione[4].value.toLowerCase() === "o"){
                            her++;
                            if(myHermione[5].value.toLowerCase() === "n"){
                                her++;
                                if(myHermione[6].value.toLowerCase() === "e"){her++;}
                            }
                        }
                    }
                }
            }
        }
    }
    if(myLupin[0].value.toLowerCase() === "l"){
        lu++;
        if(myLupin[1].value.toLowerCase() === "u"){
            lu++;
            if(myLupin[2].value.toLowerCase() === "p"){
                lu++;
                if(myLupin[3].value.toLowerCase() === "i"){
                    lu++;
                    if(myNewt[0].value.toLowerCase() === "n"){lu++;}
                }
            }
        }
    }
    if(myDobby[0].value.toLowerCase() === "d"){
        dob++;
        if(myDobby[1].value.toLowerCase() === "o"){
            dob++;
            if(myDobby[2].value.toLowerCase() === "b"){
                dob++;
                if(myDobby[3].value.toLowerCase() === "b"){
                    dob++;
                    if(myDobby[4].value.toLowerCase() === "y"){dob++;}
                }
            }
        }
    }
    if(myRon[0].value.toLowerCase() === "r"){
        r++;
        if(myRon[1].value.toLowerCase() === "o"){
            r++;
            if(myRon[2].value.toLowerCase() === "n"){r++;}
        }
    }
    if(mySeverus[0].value.toLowerCase() === "s"){
        sev++;
        if(mySeverus[1].value.toLowerCase() === "u"){
            sev++;
            if(mySeverus[2].value.toLowerCase() === "r"){
                sev++;
                if(mySeverus[3].value.toLowerCase() === "e"){
                    sev++;
                    if(mySeverus[4].value.toLowerCase() === "v"){
                        sev++;
                        if(mySeverus[5].value.toLowerCase() === "e"){
                            sev++;
                            if(mySeverus[6].value.toLowerCase() === "s"){sev++;}
                        }
                    }
                }
            }
        }
    }
    console.log("nim:"+nim);
    console.log("hag:"+hag);
    console.log("hed:"+hed);
    console.log("albus:"+alb);
    console.log("newt:"+ne);
    console.log("golden:"+go);
    console.log("herm:"+her);
    console.log("lupin:"+lu);
    console.log("dobby:"+dob);
    console.log("ron:"+r);
    console.log("sev:"+sev);
}
//function that sees if the words are right
var conta = 0;
function compareWords(){
    if(nim >= 6 || hag >=6 || hed >= 6 || alb >= 10 || ne >=4 || go >=6 || her >= 8 || lu >= 5 || dob >=5 || r >= 3 || sev >= 7){
        if(nim >= 6){
            conta++;
        }
        if(hag >= 6){
            conta++;
        }
        if(hed >= 6){
            conta++;
        }
        if(alb >= 10){
            conta++;
        }
        if(ne >= 4){
            conta++;
        }
        if(go >= 6){
            conta++;
        }
        if(her >= 8){
            conta++;
        }
        if(lu >= 5){
            conta++;
        }
        if(dob >= 5){
            conta++;
        }
        if(r >= 3){
            conta++;
        }
        if(sev >= 7){
            conta++;
        }
    }
    else{ console.log("not this time");}
}

//function that sets the behavior of the project after the button gets clicked
function clickme(){
    wholeGame.classList.add("vanish");
    postGame.classList.remove("vanish");
    compareLetters();
    compareWords();
    document.getElementById("acertos").innerHTML = conta;
}

chosenOne();




