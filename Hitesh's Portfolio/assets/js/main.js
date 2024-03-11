/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 




// Form validation for contact Details

 document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('.contact__form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validate Name
            const nameInput = form.querySelector('.contact__input[type="text"]');
            if (nameInput.value.trim() === '') {
                Swal.fire({
                    icon: "error",
                    title: "Please enter Your Name:",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                return;
            }

            // Validate Email
            const emailInput = form.querySelector('.contact__input[type="email"]');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                // alert('Please enter a valid email address.');
                Swal.fire({
                    icon: "error",
                    title: "Please enter Your email address.",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                return;
            }

            // Validate Message
            const messageTextarea = form.querySelector('.contact__input[type="textarea"]');
            const minWords = 5;
            const messageWords = messageTextarea.value.trim().split(/\s+/).length;
            if (messageWords < minWords) {
                // alert('Please enter a message with at least ' + minWords + ' words.');
                Swal.fire({
                    icon: "error",
                    title: "Please enter a message with at least"+ minWords + ' words.',
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                return;
            }

            // If all validations pass, you can submit the form or take other actions.
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Form submitted successfully!",
                showConfirmButton: false,
                timer: 1500
              });
            // Uncomment the line below to submit the form:
            // form.submit();
            window.location.href = "http://www.google.com";
        });
    });





    