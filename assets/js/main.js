window.onload = () => {
    document.getElementById('slide1').classList.add('active')
}
const planRates = [
    {
        name: 'arcade',
        price: 9,
    },
    {
        name: 'advanced',
        price: 12,
    },
    {
        name: 'pro',
        price: 15,
    }
]

const addonPrices = [
    {
        name: 'addon1',
        title: 'Online service',
        desc: 'Access to multiplayer games',
        price: 1
    },
    {
        name: 'addon2',
        title: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        price: 2
    },
    {
        name: 'addon3',
        title: 'Customizable profile',
        desc: 'Custom theme on your profile',
        price: 2
    }
]

const planSwitcher = document.querySelector('.plan-radio')
const switcherLabel = document.querySelectorAll('.switcher-label')
const radioSwitcher = document.querySelector('.radio-switcher')
const planDiscount = document.querySelectorAll('.yearly-discount')
const checkForm = document.querySelector('.checkbox-form')
const addonsForm = document.querySelector('.slide-addons')
let chkBox = document.querySelectorAll('.addon-chkbox')
let userData = {}

const displayData = (ratePlan) => {
    let tmpRates =''
    let tmpAddons = ''
    planRates.map((plan) => {
        const data = `
                <div class="check-group">
                    <div class='check-labels'>
                    <input class="plan-checkbox" name="plan" id="${plan.name}" type="radio" hidden ${plan.name == 'arcade' ? 'checked' : ''} />
                    <label for="${plan.name}" class="checkbox-label">
                        <div class="plan-info">
                            <img src="./assets/images/icon-${plan.name}.svg" alt="arcade-logo" class="plan-logo" />
                        </div>
                        <div class="plan-info">
                            <p class="check-title">${plan.name}</p>
                            <div id='${plan.name}-price' class="plan-price">$${ratePlan == 'mo' ? plan.price + '/mo' : plan.price * 10 + '/yr'}</div>
                            <div class="yearly-discount ${ratePlan=='yr' ? 'active' : null}">2 months free</div>
                        </div>
                    </label>
                    </div>
                </div>
            `
        tmpRates += data
    }) 
    addonPrices.map((addon) => {
        const data = `
        <div class="addon-group">
                <label class="addon-label" for="${addon.name}">
                  <input type='checkbox' class="addon-chkbox" id="${addon.name}" name="addon-chkbox" />
                  <div class="addon-info">
                    <h4 class="addon-title">
                      ${addon.title}
                    </h4>
                    <p class="addon-desc">
                      ${addon.desc}
                    </p>
                  </div>
                  <p class="addon-price">
                    +$${ratePlan == 'mo' ? addon.price+'/mo' : addon.price*10+'/yr'}
                  </p>
                </label>
              </div>
        `
        tmpAddons += data
    })
    checkForm.innerHTML = tmpRates
    addonsForm.innerHTML = tmpAddons
}

planSwitcher.addEventListener('change', () => {
    radioSwitcher.classList.toggle('switch-right')
    switcherLabel.forEach((elm) => elm.classList.toggle('active'))
    planDiscount.forEach((elm) => elm.classList.toggle('active'))
    planSwitcher.checked ? displayData('yr') : displayData('mo')
    chkBox = document.querySelectorAll('.addon-chkbox')
    chkBox.forEach((elm) => {
        elm.addEventListener('change', () => {
            elm.parentElement.classList.toggle('active')
        })
    })
})

chkBox.forEach((elm) => {
    elm.addEventListener('change', () => {
        elm.parentElement.classList.toggle('active')
    })
})


const slide1Inputs = document.querySelectorAll('#slide1 input')

slide1Inputs.forEach((elm) => {
    elm.addEventListener('input', (e) => {
        !elm.checkValidity()
        ? elm.previousElementSibling.children[1].classList.add('active') && elm.setCustomValidity('Error')
        : elm.previousElementSibling.children[1].classList.remove('active') && elm.setCustomValidity('')
    })
    !elm.checkValidity()
    ? elm.previousElementSibling.children[1].classList.add('active') && elm.setCustomValidity('Error')
    : elm.previousElementSibling.children[1].classList.remove('active') && elm.setCustomValidity('')
})