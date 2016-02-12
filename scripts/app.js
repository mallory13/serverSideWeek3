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
    
    function missionStatement() {
        
        console.log("inside replaceFirstParagraph function");
        var missionStatement;
        missionStatement = document.getElementById("missionStatement");
        missionStatement.innerHTML = "My new paragraph data";

    }
    
    function awards() {
        
        console.log("inside replaceFirstParagraph function");
        var awards;
        awards = document.getElementById("awards");
        awards.innerHTML = "My new paragraph data";

    }
    
    function education() {
        
        console.log("inside replaceFirstParagraph function");
        var education;
        education = document.getElementById("education");
        education.innerHTML = "My new paragraph data";

    }
    
    function skills() {
        
        console.log("inside replaceFirstParagraph function");
        var skills;
        skills = document.getElementById("skills");
        skills.innerHTML = "My new paragraph data";

    }
    
    function volunteer() {
        
        console.log("inside replaceFirstParagraph function");
        var volunteer;
        volunteer = document.getElementById("volunteer");
        volunteer.innerHTML = "My new paragraph data";

    }
    
    function work() {
        
        console.log("inside replaceFirstParagraph function");
        var work;
        work = document.getElementById("work");
        work.innerHTML = "My new paragraph data";

    }
    
    function contact() {
        
        console.log("inside replaceFirstParagraph function");
        var contact;
        contact = document.getElementById("contact");
        contact.innerHTML = "My new paragraph data";

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