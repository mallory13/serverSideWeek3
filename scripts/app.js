"use strict";

//global variables
var missionStatement = "";
//projects array
var projects = "";



//iife immediately invoked function expression
//annonymous self executed functions
(function () {
    //code block being called by this function
    console.log("App started...");
    
    //named function way
    function replaceFirstParagraph() {
        
        console.log("inside replaceFirstParagraph function");
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "My new paragraph data";

    }
    
    //declare anonymous function with named alias
    /*
    var replaceFirstParagraph = function(){
        var firstParagraph;
        
        firstParagraph = document.getElementByID("first paragraph");
        firstParagraph.innerHTML = "first para data";
        
    };
*/


//call the replaceFirstParagraph function
replaceFirstParagraph();

})();