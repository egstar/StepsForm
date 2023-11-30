
const nextBtn = document.querySelector('.next-btn')
const backBtn = document.querySelector('.back-btn')
const btnControl = document.querySelector('.slide-bottom')
let activeScreen = 1


nextBtn.addEventListener('click', () => {
    if(activeScreen<=4){
        backBtn.style.display = 'block'
        const activeSlide = document.querySelector('.screen-slide.active')
        const activeStep = document.querySelector('.step.active')
        if(activeScreen==4 && nextBtn.classList.contains('confirm')) {
            activeSlide.nextElementSibling.classList.toggle('active')
            activeSlide.classList.toggle('active')
            btnControl.style.display = 'none'
        } else {
            activeStep.nextElementSibling.classList.toggle('active')
            activeSlide.nextElementSibling.classList.toggle('active')
            activeSlide.classList.toggle('active')
            activeStep.classList.toggle('active')
            if(activeScreen == 3){
                nextBtn.classList.add('confirm')
                nextBtn.innerText = 'Confirm'
                reviewData()
            }
            activeScreen++
        }
    } 
    
})
backBtn.addEventListener('click', () => {
    if(activeScreen>1){
        const activeSlide = document.querySelector('.screen-slide.active')
        const activeStep = document.querySelector('.step.active')
        activeStep.previousElementSibling.classList.toggle('active')
        activeSlide.previousElementSibling.classList.toggle('active')
        activeSlide.classList.toggle('active')
        activeStep.classList.toggle('active')
        if(activeScreen == 4){
            nextBtn.classList.remove('confirm')
            nextBtn.innerText = 'Next Step'
        }
        if(activeScreen == 2) {
            backBtn.style.display = 'none'
        }
        --activeScreen
    } 
})


const slideContent = [
    {
        id: 1,
        name: 'slide1',
        title: 'Personal info',
        desc: 'Please provide your name, email address, and phone number.',
    },
    {
        id: 2,
        name: 'slide2',
        title: 'Select your plan',
        desc: 'You have the option of monthly or yearly billing.',
        
    },
    {
        id: 3,
        name: 'slide3',
        title: 'Pick add-ons',
        desc: 'Add-ons help enhance your gaming experience.',
        
    },
    {
        id: 4,
        name: 'slide4',
        title: 'Finishing up',
        desc: 'Double-check everything looks OK before confirming.',
        
    },
]