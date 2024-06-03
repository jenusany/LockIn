// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


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


const email = localStorage.getItem('userEmail'); 
const db = getDatabase();

function addData(){
    set(ref(db, email), {
        content: localStorage.getItem('mainContent')
    })
}
