

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const tableType = document.getElementById('tableType');
const guestNumber = document.getElementById('guestNumber');
const placement = document.getElementById('placement');
const time = document.getElementById('time');
const note = document.getElementById('note');
const submit = document.getElementById('submit');

const database =  firebase.getFirestore
// import { collection, addDoc } from "firebase/firestore"; 

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    database.ref('/users/'+userId.value).add({
        first_name: firstName.value,
        last_name: lastName.value,
        e_mail: email.value,
        table_Type: tableType.value,
        guest_Number: guestNumber.value,
        place_ment: placement.value,
        ti_me: time.value,


    })
});