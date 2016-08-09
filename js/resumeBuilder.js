var work = {
    "jobs": [{
        "employer": "Goldwyn Partners Group AG",
        "title": "Web Developer",
        "dates": "2009 - 2013",
        "location": "Baar, Canton Zug",
        "description": "I was responsible for the company websites."
    }, {
        "employer": "Bosshard und Partner",
        "title": "IT Supporter",
        "dates": "2013 - current",
        "location": "Zurich City",
        "description": "I do first and second level support."
    }]
};

var projects = {
    "projects": [{
        "title": "KIT",
        "dates": "2010",
        "description": "A tool to send automated emails to clients.",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }, {
        "title": "Homepage",
        "dates": "2016",
        "description": "Created a wordpress website for my mothers business.",
        "images": ["images/197x148.gif", "images/197x148.gif"]
    }]
};

var bio = {
    "name": "Bud Spencer",
    "role": "Web Developer",
    "welcomeMessage": "Yeah Science!",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "12345678",
        "email": "bud@spencer.com",
        "github": "github.com/budspencer",
        "twitter": "twitter.com/budspencer",
        "location": "Winterthur"
    },
    "skills": ["jQuery", "CSS3", "HTML5", "Gymnastics"]
};

var education = {
    "schools": [{
        "name": "The Lady Elizabeth School",
        "location": "Javea, Spain",
        "degree dates": "2002 - 2006",
        "url": "http://www.theladyelizabethschool.com",
        "majors": ["GCSE", "A'Level"]
    }, {
        "name": "University of Zurich",
        "location": "Zurich, Switzerland",
        "degree dates": "2006 - 2012",
        "url": "http://www.unizh.ch",
        "majors": ["Bachelor of Linguistics", "Master of Disaster"]
    }],
    "onlineCourses": [{
        "title": "Frontend Nanodegree",
        "school": "Udacity",
        "Dates": "2016 - current",
        "url": "www.udacity.com"
    }, {
        "title": "InDesign",
        "school": "Lynda",
        "Dates": "2012",
        "url": "http://www.lynda.com"
    }]
};

var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var pic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(role);
$("#header").prepend(name);
$("#header").append(pic);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var skill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(skill);
    skill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(skill);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(employer + title);
        $(".work-entry:last").append(dates);
        $(".work-entry:last").append(workLocation);
        $(".work-entry:last").append(description);
    }
}
displayWork();

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        for (image in projects.projects[project].images){
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
    }
}

projects.display();

$("#mapDiv").append(googleMap);
