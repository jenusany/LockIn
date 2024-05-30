const task = document.getElementById(`task1`);

const red = document.getElementById("red1");
red.addEventListener("click", () => {
    task.style.backgroundColor = red.style.backgroundColor;
})
const orange = document.getElementById("orange1");
orange.addEventListener("click", () => {
    task.style.backgroundColor = orange.style.backgroundColor;
})
const yellow = document.getElementById("yellow1");
yellow.addEventListener("click", () => {
    task.style.backgroundColor = yellow.style.backgroundColor;
})
const green = document.getElementById("green1");
green.addEventListener("click", () => {
    task.style.backgroundColor = green.style.backgroundColor;
})
const blue = document.getElementById("blue1");
blue.addEventListener("click", () => {
    task.style.backgroundColor = blue.style.backgroundColor;
})
const purple = document.getElementById("purple1");
purple.addEventListener("click", () => {
    task.style.backgroundColor = purple.style.backgroundColor;
})
const pink = document.getElementById("pink1");
pink.addEventListener("click", () => {
    task.style.backgroundColor = pink.style.backgroundColor;
})
const brown = document.getElementById("brown1");
brown.addEventListener("click", () => {
    task.style.backgroundColor = brown.style.backgroundColor;
})
const grey = document.getElementById("grey1");
grey.addEventListener("click", () => {
    task.style.backgroundColor = grey.style.backgroundColor;
})
const white = document.getElementById("white1");
white.addEventListener("click", () => {
    task.style.backgroundColor = white.style.backgroundColor;
})


const main = document.getElementById("main");

const create = document.getElementById("new");

create.addEventListener("click", () => {
    const text = document.getElementById("title-box");
    const HTMLSTRING = `
    <div class="task flex" id="task" style="background-color: ${task.style.backgroundColor};">
            <h1 class="entered-text"> &nbsp &nbsp  ${text.value}</h1>
            
            <div class="checkmark">
                <button id="new" class="confirm"></button>
            </div>
        </div>
    `
    text.value = "";
    main.insertAdjacentHTML("beforeend", HTMLSTRING);
})