"use strict";

//global variables
//var missionStatement = "";
//projects array
// var projects = "";
//     var aandcParagraph = "";
//     var albratrossParagraph = "";
//     var beautieLoungeParagraph = "";




// document.getElementById("projects").innerHTML = projects;
// var projects = "";
// var awards = "";
//     var award1= "";
//     var award2= "";
//     var award3= "";
//     var award4= "";
//     var award5= "";
// var education = "";
//     var georgian = "";
//     var georgian1 = "";
//     var georgian2 = "";
//     var georgian3 = "";
//     var georgian4 = "";
//     var delta = "";
//     var delta1 = "";
//     var ottawa = "";
//     var ottawa1 = "";
// var skills = "";
//     var skill1 = "";
//     var skill2 = "";
//     var skill3 = "";
//     var skill4 = "";
//     var skill5 = "";
//     var skill6 = "";
// var volunteer = "";
// var work = "";
// var goals = "";
// var goal1;
//     var goal2 = "";
//     var goal3 = "";
// var contact = "";
// var missionParagraph = "";
// var missionStatement = "";



//iife immediately invoked function expression
//annonymous self executed functions
(function () {
    //code block being called by this function
    console.log("App started...");
    
    //named function way
    // function replaceFirstParagraph() {
        
    //     console.log("inside replaceFirstParagraph function");
    //     var firstParagraph;
    //     firstParagraph = document.getElementById("firstParagraph");
    //     firstParagraph.innerHTML = "My new paragraph data";

    // }
    
    
    // mission statement section
    function missionStatement() {
        
        console.log("inside missionStatement function");
        var missionStatement;
        var missionParagraph;
        missionStatement = document.getElementById("missionStatement");
        missionStatement.innerHTML = "Mission Statement:";
        
        missionParagraph = document.getElementById("missionParagraph");
        missionParagraph.innerHTML = "I am currently a web accessibility consultant for the Ministry of Education. My professional mission is to strive to be a life long learner and continually develop a variety of skills. I will seek and take advantage of opportunities to gain experience in the web development industry as well as confront and learn from every challenge presented in the process. I will continue to expand my portfolio while creating and maintaining positive personal and working relationships.";

    }
    
    
    // accomplishments section
    function awards() {
        
        console.log("inside awards function");
        var awards;
        var award1;
        var award2;
        var award3;
        var award4;
        var award5;
        awards = document.getElementById("awards");
        awards.innerHTML = "Accomplishments:";
        
        award1 = document.getElementById("award1");
        award1.innerHTML = "IBM’s Master the Mainframe Part 1 Winner";
        
        award2 = document.getElementById("award2");
        award2.innerHTML = "Dean’s Council Computer Programmer Representative";
        
        award3 = document.getElementById("award3");
        award3.innerHTML = "People’s Choice Award at the Georgian College Innovation Showcase";
        
        award4 = document.getElementById("award4");
        award4.innerHTML = "IBM’s Choice Award at the Georgian College Innovation Showcase";
        
        award5 = document.getElementById("award5");
        award5.innerHTML = "Dean’s List";

    }
    
    // education section
    function education() {
        
        console.log("inside education function");
        var education;
        var georgian;
        var georgian1;
        var georgian2;
        var georgian3;
        var georgian4;
        var delta;
        var delta1;
        var ottawa;
        var ottawa1;
        
        education = document.getElementById("education");
        education.innerHTML = "Education:";
        
        georgian = document.getElementById("georgian");
        georgian.innerHTML = "Georgian College:";
        
        georgian1 = document.getElementById("georgian1");
        georgian1.innerHTML = "Interactive Web Design and Development - Current";
        
        georgian2 = document.getElementById("georgian2");
        georgian2.innerHTML = "Computer Programmer - 2015";
        
        georgian3 = document.getElementById("georgian3");
        georgian3.innerHTML = "Work Smart Certificate - 2013";
        
        georgian4 = document.getElementById("georgian4");
        georgian4.innerHTML = "Bartending 101 - 2005";
        
        delta = document.getElementById("delta");
        delta.innerHTML = "Delta Training Program:";
        
        delta1 = document.getElementById("delta1");
        delta1.innerHTML = "Introduction to Management - 2009";
        
        ottawa = document.getElementById("ottawa");
        ottawa.innerHTML = "University of Ottawa:";
        
        ottawa1 = document.getElementById("ottawa1");
        ottawa1.innerHTML = "Journalism - 2006";

    }
    
    // skills section
    function skills() {
        
        console.log("inside skills function");
        var skills;
        var skill1;
        var skill2;
        var skill3;
        var skill4;
        var skill5;
        var skill6;
        skills = document.getElementById("skills");
        skills.innerHTML = "Skills:";
        
        skill1 = document.getElementById("skill1");
        skill1.innerHTML = "Ability to work with others as a team player towards a common goal";
        
        skill2 = document.getElementById("skill2");
        skill2.innerHTML = "Excellent written and verbal communication skills with an eye for detail";
        
        skill3 = document.getElementById("skill3");
        skill3.innerHTML = "Positive and accommodating personality";
        
        skill4 = document.getElementById("skill4");
        skill4.innerHTML = "Ambitious to take initiative and continue learning";
        
        skill5 = document.getElementById("skill5");
        skill5.innerHTML = "Efficient at multi-tasking and problem solving";
        
        skill6 = document.getElementById("skill6");
        skill6.innerHTML = "Experience in a leadership role as well as a mentorship program exercised in the workplace.";

    }
    
    //needs to be completed
    function volunteer() {
        
        console.log("inside volunteer function");
        var volunteer;
        volunteer = document.getElementById("volunteer");
        volunteer.innerHTML = "Volunteer information here";

    }
    
   
    // goals section
    function goals() {
        
        console.log("inside goals function");
        var goals;
        var goal1;
        var goal2;
        var goal3;
        
        goals = document.getElementById("goals");
        goals.innerHTML = "Goals:";
        
        goal1 = document.getElementById("goal1");
        goal1.innerHTML = "Travel the world";
        
        goal2 = document.getElementById("goal2");
        goal2.innerHTML = "Retire at age 40";
        
        goal3 = document.getElementById("goal3");
        goal3.innerHTML = "Volunteer abroad";

    }
    
    // projects section  
    function projects() {
        
        console.log("inside project function");
        var projects;
        projects = document.getElementById("projects");
        projects.innerHTML = "Recent Projects:";

    }
    
    function aandcProject() {
        
        console.log("inside aandcProject function");
        var aandcParagraph;
        aandcParagraph = document.getElementById("aandcParagraph");
        aandcParagraph.innerHTML = "This is the federal website for Aboriginal and Northern Development Canada. I worked with a team of programmers to update the website to current HTML5 and ensure all content was compliant to the Web Content Accessibility Guidelines.";

    }
    
    function albatrossProject() {
        
        console.log("inside albatrossProject function");
        var albratrossParagraph;
        albratrossParagraph = document.getElementById("albratrossParagraph");
        albratrossParagraph.innerHTML = "The Albatross Motel is located near the main end in Wasaga Beach. This is a small business wordpress website currently being customized.";

    }
    
    function beautieLoungeProject() {
        
        console.log("inside contact function");
        var beautieLoungeParagraph;
        beautieLoungeParagraph = document.getElementById("beautieLoungeParagraph");
        beautieLoungeParagraph.innerHTML = "A small business wordpress website for a local self employed beauty consultant and make up artist.";

    }
    
    function contact() {
        
        console.log("inside contact function");
        var contact;
        contact = document.getElementById("contact");
        contact.innerHTML = "Contact Me:";

    }
    
    // //needs to be completed
    // function branding() {
        
    //     console.log("inside contact function");
    //     var branding;
    //     branding = document.getElementById("branding");
    //     branding.innerHTML = "Branding information here";

    // }
    
    // //needs to be completed
    // function styleGuide() {
        
    //     console.log("inside styleGuide function");
    //     var styleGuide;
    //     styleGuide = document.getElementById("styleGuide");
    //     styleGuide.innerHTML = "Style guide information here";

    // }
    //declare anonymous function with named alias
    /*
    var replaceFirstParagraph = function(){
        var firstParagraph;
        
        firstParagraph = document.getElementByID("first paragraph");
        firstParagraph.innerHTML = "first para data";
        
    };
*/


//call the functions
missionStatement();
awards();
education();
skills();
// volunteer();
goals();
projects();
albatrossProject();
aandcProject();
beautieLoungeProject();
contact();
// branding();
// styleGuide();


})();