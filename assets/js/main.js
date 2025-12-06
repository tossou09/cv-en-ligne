//================================== EMAIL JS =========================
const contactForm = document.getElementById('contact-form'),
                            contactMessage = document.getElementById('contact__message')
const sendEmail =(e) =>{
    e.preventDefault()

    // ServiceID - TemplateID - #Form - publickey

    emailjs.sendForm('service_6svc0zn' , 'template_j16o4s9' , '#contact-form' , 'cJz0XXxOrMEXAKrik')
    .then(()=>{
        // show sens message

        contactMessage.textContent = 'Message envoyer avec succè'

        // remove reponse after five seconds

        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)


        // clear input fields

        contactForm.rest()
    },()=>{
        //show error message

        contactMessage.textContent = 'Le message est pas envoyer(erreur de service)'
    })
}
contactForm.addEventListener('submit', sendEmail)



//================================== SHOW SCROLL UP =========================

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll__up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)




//================================== SCROLL SECTION ACTIVE LINK =========================

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId +  ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    } else{
        sectionsClass.classList.remove('active-link')
    }

    })
}
window.addEventListener('scroll' , scrollActive)

//================================== SCROLL REVEAL ANIMATION=========================
const sr = ScrollReveal({
    origin :'top',
    distance : '60px',
    duration: 2500,
    delay:400,
    //rest:true,  //Animation repeat

})

sr.reveal('.perfil, .contact__form')
sr.reveal('.info', {origin: 'left', delay:800})
sr.reveal('.skills', {origin: 'left', delay:1000})
sr.reveal('.about', {origin: 'right', delay:1200})
sr.reveal('.projets__card,  .services__card, .experience__card , .abilitie__card', {interval:100})
