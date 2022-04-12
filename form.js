
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfgCpJlRySSlZZsDlh06u3rDS4KpEoYlU",
  authDomain: "restaurant-reservation-3ac1c.firebaseapp.com",
  projectId: "restaurant-reservation-3ac1c",
  storageBucket: "restaurant-reservation-3ac1c.appspot.com",
  messagingSenderId: "980422654872",
  appId: "1:980422654872:web:7895eca9521501677a89ed",
  measurementId: "G-NJXVXSBXBX"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        window.location = 'index.html'; //After successful login, user will be redirected to home.html
      }
    });
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  // active user to homepage
  // firebase.auth().onAuthStateChanged((user)=>{
  //   if(user){
  //     var email = user.email;
  //     alert("Active user "+email);

  //   }else{
  //     alert("No Active user Found")
  //   }
  // })

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(error.Message);

});
  firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    window.location = 'index.html'; //After successful login, user will be redirected to home.html
  }
});