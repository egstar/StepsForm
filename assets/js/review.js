
const reviewData = () => {
    const slideForm = document.querySelector('#slide4 .slide-form')
    let tmpAdds =''
    let totalPrice = 0
    document.querySelectorAll('input').forEach(e => userData={...userData, [e.id]:  [e.checked || e.value, addonPrices.filter((a) => a.name == e.id.toString()).map(a =>{ return a})]})
    userData = {
        userplan: userData.arcade[0] == true
            ? ['Arcade', 9]
            : userData.pro[0] == true
                ? ['Pro', 15]
                : userData.advanced[0] == true && ['advanced',12],
        planPeriod: userData.period[0] == true
            ? ['Yearly', 'per year', 'yr']
            : ['Monthly', 'per month', 'mo'],
        planAddons: [
            userData.addon1[0] == true ? userData.addon1[1] : null,
            userData.addon2[0] == true ? userData.addon2[1] : null,
            userData.addon3[0] == true ? userData.addon3[1] : null
        ],
    }
    
        userData.planAddons.map((elm) => {
            if(elm != null) {
                    totalPrice+= elm[0].price
                    tmpAdds+= `<div class="addon-review-details">
                        <span>${elm[0].title}</span>
                        <span class="addon-details-price">+${userData.planPeriod[2] == 'yr' ? elm[0].price * 10: elm[0].price}/${userData.planPeriod[2]}</span>
                    </div>`
            } else {
                tmpAdds += ''
            }
        })
        totalPrice += userData.userplan[1]
    slideForm.innerHTML = `
        <div class="price-details">
            <div class="plan-details">
                <div class="plan-name">
                    <h4>${userData.userplan[0]}<span>(${userData.planPeriod[0]})</span></h4>
                    <a href="#" class="change-href" onclick='() => backBtn.click()'>Change</a>
                </div>
                <div class="plan-review-price">
                    <h4>$${userData.planPeriod[2] == 'yr' ? userData.userplan[1] * 10 : userData.userplan[1]}/${userData.planPeriod[2]}</h4>
                </div>
            </div>${tmpAdds == '' ? '' 
            :`<hr class="break-line" />
                <div class="addon-details-page">
                ${tmpAdds}
                </div>
            `}
        </div>
        <div class="total-price">
            <p>Total (${userData.planPeriod[1]})</p>
            <span>$${userData.planPeriod[2] == 'yr' ? totalPrice * 10 : totalPrice}/${userData.planPeriod[2]}</span>
        </div>
    `
}