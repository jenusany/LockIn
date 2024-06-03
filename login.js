// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

const emailBox = document.getElementById('username');
localStorage.setItem('userEmail', emailBox.value);

const passBox = document.getElementById('password');

emailBox.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        passBox.focus();
    }
});

passBox.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        const password = passBox.value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            localStorage.setItem('userEmail', email);

            window.location.href = "main.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
});

const login = document.getElementById('login');

login.addEventListener('click', function(event){
    event.preventDefault();
    const email = emailBox.value;
    const password = passBox.value; 

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('userEmail', email);
        window.location.href = "main.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});
