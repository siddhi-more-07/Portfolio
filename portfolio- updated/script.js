// menu for mobile
const menuIcon = document.querySelector('.show-menu-forMobile');
const menubar = document.querySelector('.menubar');
const profileCard = document.querySelector('.profile-card');
const closeMenuIcon = document.querySelector('.close');

menuIcon.addEventListener('click', function () {
    menubar.style.display = 'flex';
    profileCard.style.filter = 'blur(2px)';
    menuIcon.style.display = 'none';
    closeMenuIcon.style.display = 'flex';
});

closeMenuIcon.addEventListener('click', function () {
    menubar.style.display = 'none';
    profileCard.style.filter = 'blur(0)';
    menuIcon.style.display = 'flex';
    closeMenuIcon.style.display = 'none';
});



// sections for desktop
const aboutSection = document.querySelector('.middle-section .about-section');
const resumeSection = document.querySelector('.middle-section .resume-section');
const projectSection = document.querySelector('.middle-section .project-section');
const certificateSection = document.querySelector('.middle-section .Certification-section');
const contactSection = document.querySelector('.middle-section .contact-section');

const desktopAbout = document.getElementById('desktop-about');
const desktopResume = document.getElementById('desktop-resume');
const desktopProject = document.getElementById('desktop-projects');
const desktopCertificate = document.getElementById('desktop-certificate');
const desktopContact = document.getElementById('desktop-contact');

desktopAbout.addEventListener('click', function () {
    aboutSection.style.display = 'flex';
    resumeSection.style.display = 'none';
    projectSection.style.display = 'none';
    certificateSection.style.display = 'none';
    contactSection.style.display = 'none';
});

desktopResume.addEventListener('click', function () {
    aboutSection.style.display = 'none';
    resumeSection.style.display = 'flex';
    projectSection.style.display = 'none';
    certificateSection.style.display = 'none';
    contactSection.style.display = 'none';
});

desktopProject.addEventListener('click', function () {
    aboutSection.style.display = 'none';
    resumeSection.style.display = 'none';
    projectSection.style.display = 'flex';
    certificateSection.style.display = 'none';
    contactSection.style.display = 'none';
});

desktopCertificate.addEventListener('click', function () {
    aboutSection.style.display = 'none';
    resumeSection.style.display = 'none';
    projectSection.style.display = 'none';
    certificateSection.style.display = 'flex';
    contactSection.style.display = 'none';
});

desktopContact.addEventListener('click', function () {
    aboutSection.style.display = 'none';
    resumeSection.style.display = 'none';
    projectSection.style.display = 'none';
    certificateSection.style.display = 'none';
    contactSection.style.display = 'flex';
});


// sections for mobile
const aboutSectionmob = document.querySelector('.middle-section .about-section');
const resumeSectionmob = document.querySelector('.middle-section .resume-section');
const projectSectionmob = document.querySelector('.middle-section .project-section');
const certificateSectionmob = document.querySelector('.middle-section .Certification-section');
const contactSectionmob = document.querySelector('.middle-section .contact-section');

const middleSection = document.querySelector('.middle-section');

const mobileAbout = document.getElementById('mobile-about');
const mobileresume = document.getElementById('mobile-resume');
const mobileprojects = document.getElementById('mobile-projects');
const mobilecertficate = document.getElementById('mobile-certificates');
const mobilecontact = document.getElementById('mobile-contact');

mobileAbout.addEventListener('click', function () {
    aboutSectionmob.style.display = 'flex';
    resumeSectionmob.style.display = 'none';
    projectSectionmob.style.display = 'none';
    certificateSectionmob.style.display = 'none';
    contactSectionmob.style.display = 'none';
});

mobileresume.addEventListener('click', function () {
    aboutSectionmob.style.display = 'none';
    resumeSectionmob.style.display = 'flex';
    projectSectionmob.style.display = 'none';
    certificateSectionmob.style.display = 'none';
    contactSectionmob.style.display = 'none';
});

mobileprojects.addEventListener('click', function () {
    aboutSectionmob.style.display = 'none';
    resumeSectionmob.style.display = 'none';
    projectSectionmob.style.display = 'flex';
    certificateSectionmob.style.display = 'none';
    contactSectionmob.style.display = 'none';
});

mobilecertficate.addEventListener('click', function () {
    aboutSectionmob.style.display = 'none';
    resumeSectionmob.style.display = 'none';
    projectSectionmob.style.display = 'none';
    certificateSectionmob.style.display = 'flex';
    contactSectionmob.style.display = 'none';
});

mobilecontact.addEventListener('click', function () {
    aboutSectionmob.style.display = 'none';
    resumeSectionmob.style.display = 'none';
    projectSectionmob.style.display = 'none';
    certificateSectionmob.style.display = 'none';
    contactSectionmob.style.display = 'flex';
});


// scroll to top
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtns = document.querySelectorAll(".scroll-to-top button");
    scrollToTopBtns.forEach(button => {
        button.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
});


// project section
const clonning = document.getElementById('clonning');
const webDevelopment = document.getElementById('webDevelopment');
const fullStackDev = document.getElementById('fullStackDev');

const cloningSection = document.querySelector('.project-section .cloning-section');
const webSection = document.querySelector('.project-section .web-section');
const fullstackSection = document.querySelector('.project-section .fullstack-section');

clonning.addEventListener('click', function () {
    cloningSection.style.display = 'flex';
    webSection.style.display = 'none';
    fullstackSection.style.display = 'none';
});

webDevelopment.addEventListener('click', function () {
    cloningSection.style.display = 'none';
    webSection.style.display = 'flex';
    fullstackSection.style.display = 'none';
});

fullStackDev.addEventListener('click', function () {
    cloningSection.style.display = 'none';
    webSection.style.display = 'none';
    fullstackSection.style.display = 'flex';
});

// for mobile projects
const projectSelect = document.getElementById('projectSelect');

const cloningSectionMob = document.querySelector('.cloning-section');
const webSectionMob = document.querySelector('.web-section');
const fullstackSectionMob = document.querySelector('.fullstack-section');

projectSelect.addEventListener('change', function () {
    const selectedValue = this.value;

    cloningSectionMob.style.display = 'none';
    webSectionMob.style.display = 'none';
    fullstackSectionMob.style.display = 'none';

    if (selectedValue === 'clonningMob') {
        cloningSectionMob.style.display = 'flex';
        cloningSectionMob.style.flexWrap = 'wrap';
    } else if (selectedValue === 'webDevelopmentMob') {
        webSectionMob.style.display = 'flex';
        webSectionMob.style.flexWrap = 'wrap';
    } else if (selectedValue === 'fullStackDevMob') {
        fullstackSectionMob.style.display = 'flex';
        fullstackSectionMob.style.flexWrap = 'wrap';
    }
});

// smooth scrolling for window
const targetElement = document.querySelector('.container');

targetElement.scrollIntoView({ behavior: 'smooth' });