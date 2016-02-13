"use strict";


    // Steele Portfolio
    // @author: Mallory Steele
    // Assignment 1
    


(function () {
    var menu = '<div class="container-fluid"><div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand nav navbar-left" href="index.html"><img src="images/logo2.png" alt="steele suites logo" height="100" width="100"/></i></a> </div><!-- Collect the nav links, forms, and other content for toggling --><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right navbar-inverse nav-pills"><li><a href="index.html">Home</a></li><li><a href="projects.html">Recent Projects</a></li> <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Me<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="skills.html">Skills</a></li><li><a href="goals.html">Goals</a></li><li class="active"><a href="education.html">Education</a></li><!--<li><a href="work.html">Work History</a></li>--><li><a href="awards.html">Accomplishments</a></li><!--<li><a href="volunteer.html">Volunteer Work</a></li>--><li role="separator" class="divider"></li></ul></li><li><a href="contact.html">Contact Me</a></li><li role="separator" class="divider"></li></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid -->';
    document.getElementById('global-navigation').innerHTML = menu;
    var filePath = location.pathname;
    filePath = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
    console.log(filePath);
    switch (filePath) {

        case 'skills':
            (function skills() {
                console.log("inside skills function");
                var skills, skill1, skill2, skill3, skill4, skill5, skill6;

                document.getElementById("skills").innerHTML = "Skills:";
                document.getElementById("skill1").innerHTML = "Ability to work with others as a team player towards a common goal";
                document.getElementById("skill2").innerHTML = "Excellent written and verbal communication skills with an eye for detail";
                document.getElementById("skill3").innerHTML = "Positive and accommodating personality";
                document.getElementById("skill4").innerHTML = "Ambitious to take initiative and continue learning";
                document.getElementById("skill5").innerHTML = "Efficient at multi-tasking and problem solving";
                document.getElementById("skill6").innerHTML = "Experience in a leadership role as well as a mentorship program exercised in the workplace.";
            })();
            break;

        case 'education':
            (function education() {

                console.log("inside education function");
                var education, georgian, georgian1, georgian2, georgian3, georgian4, delta, delta1, ottawa, ottawa1;

                document.getElementById("education").innerHTML = "Education:";
                document.getElementById("georgian").innerHTML = "Georgian College:";
                document.getElementById("georgian1").innerHTML = "Interactive Web Design and Development - Current";
                document.getElementById("georgian2").innerHTML = "Computer Programmer - 2015";
                document.getElementById("georgian3").innerHTML = "Computer Programmer - 2015";
                document.getElementById("georgian4").innerHTML = "Bartending 101 - 2005";
                document.getElementById("delta").innerHTML = "Delta Training Program:";
                document.getElementById("delta1").innerHTML = "Introduction to Management - 2009";
                document.getElementById("ottawa").innerHTML = "University of Ottawa:";
                document.getElementById("ottawa1").innerHTML = "Journalism - 2006";

            })();
            break;
        case 'index':
            (function mission() {

                console.log("inside missionStatement function");
                var missionStatement, missionParagraph;
                document.getElementById("missionStatement").innerHTML = "Mission Statement:";
                document.getElementById("missionParagraph").innerHTML = "I am currently a web accessibility consultant for the Ministry of Education. My professional mission is to strive to be a life long learner and continually develop a variety of skills. I will seek and take advantage of opportunities to gain experience in the web development industry as well as confront and learn from every challenge presented in the process. I will continue to expand my portfolio while creating and maintaining positive personal and working relationships.";
            })();
            break;
        case 'goals':
            (function goals() {

                console.log("inside goals function");
                var goals, goal1, goal2, goal3;

                document.getElementById("goals").innerHTML = "Goals:";
                document.getElementById("goal1").innerHTML = "Travel the world";
                document.getElementById("goal2").innerHTML = "Retire at age 40";
                document.getElementById("goal3").innerHTML = "Volunteer abroad";


            })();
            break;
        case 'projects':
            (function projects() {

                console.log("inside project function");
                var projects, aandcParagraph, albratrossParagraph, beautieLoungeParagraph;
                document.getElementById("projects").innerHTML = "Recent Projects:";
                document.getElementById("aandcParagraph").innerHTML = "This is the federal website for Aboriginal and Northern Development Canada. I worked with a team of programmers to update the website to current HTML5 and ensure all content was compliant to the Web Content Accessibility Guidelines.";
                document.getElementById("albratrossParagraph").innerHTML = "The Albatross Motel is located near the main end in Wasaga Beach. This is a small business wordpress website currently being customized.";
                document.getElementById("beautieLoungeParagraph").innerHTML = "A small business wordpress website for a local self employed beauty consultant and make up artist.";
            })();
break;
        case 'awards':
            (function () {
                console.log("inside awards function");

                var awards, award1, award2, award3, award4, award5;
                document.getElementById("awards").innerHTML = "Accomplishments:";
                document.getElementById("award1").innerHTML = "IBM’s Master the Mainframe Part 1 Winner";
                document.getElementById("award2").innerHTML = "Dean’s Council Computer Programmer Representative";
                document.getElementById("award3").innerHTML = "People’s Choice Award at the Georgian College Innovation Showcase";
                document.getElementById("award4").innerHTML = "IBM’s Choice Award at the Georgian College Innovation Showcase";
                document.getElementById("award5").innerHTML = "Dean’s List";

            })();
            break;
        default:
    }


})();

