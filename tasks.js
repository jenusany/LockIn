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
                <button class="delete">🚮</button>
            </div>
        </div>
    `;


    text.value = "";

    main.insertAdjacentHTML("beforeend", taskHTML);
});

main.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("delete")) {
        const taskDiv = event.target.closest(".task");
        taskDiv.remove();
    }
});
