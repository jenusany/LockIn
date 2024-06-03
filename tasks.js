// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore, doc, setDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


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

const task = document.getElementById('task1');

const colors = ["red1", "orange1", "yellow1", "green1", "blue1", "purple1", "pink1", "brown1", "grey1", "white1"];
colors.forEach(color => {
    const button = document.getElementById(color);
    button.addEventListener("click", () => {
        task.style.backgroundColor = button.style.backgroundColor;
    });
});

const main = document.getElementById("main");
const create = document.getElementById("new");

create.addEventListener("click", () => {
    const text = document.getElementById("title-box");
    if (text.value === "") {
        alert("ENTER TEXT INTO FIELD");
        return;
    }

    const taskHTML = `
        <div class="task flex" style="background-color: ${task.style.backgroundColor || 'white'};">
            <h1 class="entered-text"> &nbsp &nbsp  ${text.value}</h1>
            <div class="checkmark">
                <button class="delete"></button>
            </div>
        </div>
    `;

    const email = localStorage.getItem('userEmail'); 
    const db = getFirestore(app);

    setDoc(doc(db, email, text.value), {
        color: task.style.backgroundColor || 'white',
        text: text.value
    });

    text.value = "";

    main.insertAdjacentHTML("beforeend", taskHTML);

});

main.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("delete")) {
        const taskDiv = event.target.closest(".task");

        const email = localStorage.getItem('userEmail'); 
        const db = getFirestore(app);
        deleteDoc(doc(db, email, taskDiv.innerText.substring(4)));

        taskDiv.remove();
    }
});
