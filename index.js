const modal = document.getElementById('modal')
const closeBtn = document.getElementById('modal-close-btn')
const choiceBtns = document.getElementById('modal-choice-btns')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const decBtn = document.getElementById('decline-btn')

setTimeout(() => {
    modal.style.display = 'inline'
},1500);

closeBtn.addEventListener("click", function() {
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(event) {
    event.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get('fullName')

    setTimeout(() => {
        document.getElementById('uploadText').innerText = 'Making the sale.....'
    },1500);

    setTimeout(() => {
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thank you <span class="modal-display-name">${name}</span>! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>` 
        closeBtn.disabled = false
    }, 3000);
})

decBtn.addEventListener("mouseover", function() {
    choiceBtns.classList.toggle('reverse')
})



// setTimeout(function, time)
// element.style  document.id.style.display = 'value '
// form  https://www.w3schools.com/html/html_form_input_types.asp
// FormData & .get() 
// event.preventDefault 
// CSS: row-reverse
// toggling classes
// 'disabled' attribute