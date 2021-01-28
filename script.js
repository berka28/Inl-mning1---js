class User {
    constructor(firstname, lastname, email, phonenumber, invoiceadress, zipcode, city){
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.phonenumber = phonenumber
        this.invoiceadress = invoiceadress
        this.zipcode = zipcode
        this.city = city
    }
    get id() {
        return Date.now.toString()
    }
    get displayName(){
        return `${this.firstname}${this.lastname}`
    }
}

const user = new User('Mathias', 'Bergquist', 'berka@home', '0702222222', 'Hitvägen 1', '33322', 'Degerfors' )
console.log(user)

let inputs = document.getElementsByTagName('input')

for (let input of inputs) {
    input.addEventListener('keyup', e => {
        if(e.target.value.length < 2) {
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
            document.getElementById('add_btn').disabled = true
        
        } 
        else {
            document.getElementById(`${e.target.id}-error`).innerText = ''
            document.getElementById('add_btn').disabled = false
        }
    })
}
$(document).ready(function(){

})

/* 
  document.getElementById('regform').addEventListener(add_btn, (e) => {
    e.preventDefault()
    let errors = []

    for (let element of e.target.elements) {
        switch(element.tagName) {
            case 'input':
                errors.push(validateInput(element))
                break;
        }
    }

    if(!errors.includes(true))
        window.location.replace("success.php");  
})

function validateInput(element) {
    if(element.reguired){
        if (element.value.length <2){
            return true
        }
    }
    return false
}
 */
