// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore, doc, setDoc, deleteDoc, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

const email = localStorage.getItem('userEmail');

const main = document.getElementById("main");

const taskCollection = await getDocs(collection(db, email));
taskCollection.forEach((doc) => {
    let taskHTML = ``;
    if (window.innerWidth <= 600){
        taskHTML = `
        <div class="task flex" style="border: 3px solid ${doc.data().color || 'white'};">
            <h2 class="Mentered-text">${doc.data().text}</h2>
            <div class="checkmark">
                <button class="Mdelete"></button>
            </div>
        </div>
    `;
    }else{
        taskHTML = `
        <div class="task flex" style="border: 3px solid ${doc.data().color || 'white'};">
            <h1 class="entered-text">${doc.data().text}</h1>
            <div class="checkmark">
                <button class="delete"></button>
            </div>
        </div>
    `;
    }

    main.insertAdjacentHTML("beforeend", taskHTML);
});



const task = document.getElementById('task1');
const colors = ["red1", "orange1", "green1", "blue1", "purple1", "black1"];
colors.forEach(color => {
    const button = document.getElementById(color);
    button.addEventListener("click", () => {
        task.style.borderColor = button.style.backgroundColor;
    });
});

const create = document.getElementById("new");

create.addEventListener("click", () => {
    const text = document.getElementById("title-box");
    if (text.value === "") {
        alert("ENTER TEXT INTO FIELD");
        return;
    }

    let taskHTML = ``;

    if (window.innerWidth <= 600){
        taskHTML = `
        <div class="task flex" style="border: 3px solid ${task.style.borderColor || 'black'};">
            <h2 class="Mentered-text"> ${text.value}</h2>
            <div class="checkmark">
                <button class="Mdelete"></button>
            </div>
        </div>
    `;
    }else{
        taskHTML = `
        <div class="task flex" style="border: 3px solid ${task.style.borderColor || 'black'};">
            <h1 class="entered-text"> ${text.value}</h1>
            <div class="checkmark">
                <button class="delete"></button>
            </div>
        </div>
    `;
    }

    setDoc(doc(db, email, text.value), {
        color: task.style.borderColor || 'white',
        text: text.value
    });

    text.value = "";

    main.insertAdjacentHTML("beforeend", taskHTML);

});

main.addEventListener("click", (event) => {
    if (event.target && (event.target.classList.contains("delete") || event.target.classList.contains("Mdelete"))) {

        const taskDiv = event.target.closest(".task");
        deleteDoc(doc(db, email, taskDiv.innerText));

        taskDiv.remove();
    }
});