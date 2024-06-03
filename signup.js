

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1gtrKrNlr7yEPgE3vDNsmMITL35BgVtU",
  authDomain: "lockin-95d98.firebaseapp.com",
  projectId: "lockin-95d98",
  storageBucket: "lockin-95d98.appspot.com",
  messagingSenderId: "1055838271245",
  appId: "1:1055838271245:web:4638b1dd43eb458ad46244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailBox = document.getElementById('createUsername');
const passBox = document.getElementById('createPassword');

emailBox.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        passBox.focus();
    }
})

passBox.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
      event.preventDefault()
      const email = document.getElementById('createUsername').value;
      const password = document.getElementById('createPassword').value; 
  
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location.href = "main.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
        }
})

const signup = document.getElementById('signup');

signup.addEventListener('click', function(event){
    event.preventDefault()
    const email = document.getElementById('createUsername').value;
    const password = document.getElementById('createPassword').value; 

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    localStorage.setItem('userEmail', email);
    window.location.href = "main.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})