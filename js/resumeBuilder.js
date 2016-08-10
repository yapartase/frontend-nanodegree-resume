var bio = {
    'name': 'Bud Spencer',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '12345678',
        'email': 'bud@spencer.com',
        'github': 'github.com/budspencer',
        'twitter': 'twitter.com/budspencer',
        'location': 'Winterthur, Switzerland'
    },
    'welcomeMessage': 'Yeah Science!',
    'skills': ['jQuery', 'CSS3', 'HTML5', 'Gymnastics'],
    'biopic': 'images/fry.jpg'
};

var education = {
    'schools': [{
        'name': 'Hogwarts school of witchcraft and wizardry',
        'location': 'Scotland',
        'degree': 'GCSE',
        'majors': ['wizardry', 'witchcraft'],
        'dates': '2002 - 2006',
        'url': 'www.hogwarts.com'
    }, {
        'name': 'Massachusetts Institute of Technology',
        'location': 'Cambridge, Massachusetts',
        'degree': 'Master',
        'majors': ['Information Technology', 'Nursing'],
        'dates': '2006 - 2012',
        'url': 'www.mit.edu'
    }],
    'onlineCourses': [{
        'title': 'Frontend Nanodegree',
        'school': 'Udacity',
        'dates': 'July 2016 - current',
        'url': 'www.udacity.com'
    }, {
        'title': 'InDesign',
        'school': 'Lynda',
        'dates': 'January 2012 - February 2012',
        'url': 'http://www.lynda.com'
    }]
};

var work = {
    'jobs': [{
        'employer': 'Seaworld',
        'title': 'Dolphin Rider',
        'location': 'Orlando, USA',
        'dates': '2009 - 2013',
        'description': 'Swim around all day. Was quite a depressing job.'
    }, {
        'employer': 'Google',
        'title': 'Janitor',
        'location': 'Zurich, Switzerland',
        'dates': '2013 - current',
        'description': 'I keep the place clean and tidy.'
    }]
};

var projects = {
    'projects': [{
        'title': 'Google Search',
        'dates': '1998',
        'description': 'The main purpose of Google Search is to hunt for text in publicly accessible documents offered by web servers, as opposed to other data, such as images or data contained in databases.',
        'images': ['images/197x148.gif', 'images/197x148.gif']
    }, {
        'title': 'eBay',
        'dates': '1995',
        'description': 'An online auction and shopping website in which people and businesses buy and sell a broad variety of goods and services worldwide.',
        'images': ['images/197x148.gif', 'images/197x148.gif']
    }]
};

bio.display = function() {
    var name = HTMLheaderName.replace('%data%', bio.name);
    var role = HTMLheaderRole.replace('%data%', bio.role);
    var pic = HTMLbioPic.replace('%data%', bio.biopic);
    var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').prepend(role);
    $('#header').prepend(name);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts:last').append(formattedMobile);
    $('#topContacts:last').append(formattedEmail);
    $('#topContacts:last').append(formattedTwitter);
    $('#topContacts:last').append(formattedGithub);
    $('#topContacts:last').append(formattedLocation);
    $('#header').append(pic);
    $('#header').append(welcomeMessage);
    $('#header').append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace('%data%', skill);
        $('#skills').append(formattedSkill);
    });
};

bio.display();
work.display = function() {
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace('%data%', job.employer);
        var title = HTMLworkTitle.replace('%data%', job.title);
        var dates = HTMLworkDates.replace('%data%', job.dates);
        var workLocation = HTMLworkLocation.replace('%data%', job.location);
        var description = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(employer + title);
        $('.work-entry:last').append(dates);
        $('.work-entry:last').append(workLocation);
        $('.work-entry:last').append(description);
    });
};

work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace('%data%', image);
            $('.project-entry:last').append(formattedImage);
        });
    });
};

projects.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $('#education').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace('%data%', school.name);
        var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
        $('.education-entry:last').append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
        $('.education-entry:last').append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
        $('.education-entry:last').append(formattedLocation);

        school.majors.forEach(function(major) {
            var formattedMajor = HTMLschoolMajor.replace('%data%', major);
            $('.education-entry:last').append(formattedMajor);
        });
    });
};

education.display();

$('#mapDiv').append(googleMap);
