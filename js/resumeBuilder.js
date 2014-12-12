//I included lots of notes so that my grader knows exactly what I was
//thinking at each step. I hope that where notes are not included, the code simply
//speaks for itself.
var bio = {
  "name": "Marom Mishan",
  "role": "Web Developer",
    "welcomeMessage": "Welcome to my website. Here you will find my CV",
    "contacts": {        //curly brackets suggest storing object within contact   
        "mobile": "+27 79 883 6412",
        "email": "maromishan@gmail.com", 
        "github": "maromishan",
        "location": "Johannesburg, South Africa"
},
    "bioPic": "images/myPic.jpg",
    "skills": ["JAVA", "Web-Development", "Mathematics", "Statistics"]
};

//This function will append to resume. Will be used throughout document.
function appender(a, b, c) {
    $(a).append(b.replace("%data%", c) );
    }
//This function will prepend to header of resume.
    function prepender(a, b, c) {
    $(a).prepend(b.replace("%data%", c) );
     }

bio.display = function(){
prepender('#header', HTMLheaderRole, bio.role);
prepender('#header', HTMLheaderName, bio.name);
appender('#topContacts', HTMLmobile, bio.contacts.mobile);
appender('#topContacts', HTMLemail, bio.contacts.email);
appender('#topContacts', HTMLgithub, bio.contacts.github);
appender('#topContacts', HTMLlocation, bio.contacts.location);
appender('#header', HTMLbioPic, bio.bioPic);
appender('#header', HTMLWelcomeMsg, bio.welcomeMessage);
  if (bio.skills.length > 0){
     $("#header").append(HTMLskillsStart);
    //following code is a loop to append all skills in the array
     for(skill in bio.skills){
        appender('#header', HTMLskills, bio.skills[skill]);
         }
      }
}

bio.display();

appender('#footerContacts', HTMLmobile, bio.contacts.mobile);
appender('#footerContacts', HTMLemail, bio.contacts.email);
appender('#footerContacts', HTMLgithub, bio.contacts.github);
appender('#footerContacts', HTMLlocation, bio.contacts.location);

//validated JSON
var work = {
  "jobs":
  [
    {
  "employer": "True Combat",
  "title": "Muay Thai Instructor",
  "dates": "2009-Present",
  "location": "London, UK",
  "description": "Teach adults' night classes and private sessions"
    },
    {
  "employer": "Wits",
  "title": "Student",
  "dates": "2013-Present",
  "location": "Johannesburg, South Africa",
  "description": "Actuarial Student"
    }
  ]
};

work.display = function(){
   for(job in work.jobs){
   $("#workExperience").append(HTMLworkStart);
     appender('.work-entry:last', HTMLworkEmployer, work.jobs[job].employer);
     appender('.work-entry:last', HTMLworkTitle, work.jobs[job].title);
     appender('.work-entry:last', HTMLworkDates, work.jobs[job].dates);
     appender('.work-entry:last', HTMLworkLocation, work.jobs[job].location);
     appender('.work-entry:last', HTMLworkDescription, work.jobs[job].description);
        }
}

work.display();
var projects =  {
  "projects":
  [
     {
    "title": "P1: HTML Mockup",
    "dates": "12 December 2014",
    "description": "Mockup of a website of Udacity mug",
    "images": ["http://placekitten.com/170/170", "http://placekitten.com/170/170"]
    },
    {
    "title": "P2: Interactive Resume",
    "dates": "12 December 2014",
    "description": "JS project",
    "images": ["http://placekitten.com/170/170", "http://placekitten.com/170/170"]
    }
  ]
};

projects.display = function(){
   for(p in projects.projects){
    $("#projects").append(HTMLprojectStart);
    appender('.project-entry:last', HTMLprojectTitle, projects.projects[p].title);
    appender('.project-entry:last', HTMLprojectDates, projects.projects[p].dates);
    appender('.project-entry:last', HTMLprojectDescription, projects.projects[p].description);
           if(projects.projects[p].images.length > 0){
         for(i in projects.projects[p].images){
          appender('.project-entry:last', HTMLprojectImage, projects.projects[p].images[i]);
                                              }
                                       }    
                              }
}

projects.display();

var education = {
    "schools": 
    [
    {
       "name": "Wits",
       "location": "Johannesburg, South Africa",
       "degree": "BSc",
       "majors": ["Actuary", "Statistics"],
       "dates": 2015
   },
       {
       "name": "Wits",
       "location": "Johannesburg, South Africa",
       "degree": "Honours",
       "majors": ["Actuary"],
       "dates": 2016    
       }  
    ],
"onlineCourses": 
  [
      {
      "school": "Udacity",
      "title": "Front End Nanodegree",
      "dates": 2015,
      "url": "udacity.com"
      }
  ]
};

education.display = function(){
for(school in education.schools){
    $("#education").append(HTMLschoolStart);
    appender('.education-entry:last', HTMLschoolName, education.schools[school].name);
    appender('.education-entry:last', HTMLschoolDegree, education.schools[school].degree);
    appender('.education-entry:last', HTMLschoolDates, education.schools[school].dates);
    appender('.education-entry:last', HTMLschoolLocation, education.schools[school].location);
        
       if(education.schools[school].majors.length > 0){
         for(i in education.schools[school].majors){
          appender('.education-entry:last', HTMLschoolMajor, education.schools[school].majors[i]);
                                                      }
                                                  }                                                                                   
                                 }
for(course in education.onlineCourses){
    $('.education-entry:last').append(HTMLonlineClasses);
    appender('.education-entry:last', HTMLonlineTitle, education.onlineCourses[course].title);
    appender('.education-entry:last', HTMLonlineSchool, education.onlineCourses[course].school);
    appender('.education-entry:last', HTMLonlineDates, education.onlineCourses[course].dates);
    appender('.education-entry:last', HTMLonlineURL, education.onlineCourses[course].url);
                                }
}

education.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#mapDiv").append(googleMap);