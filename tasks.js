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
    const HTMLSTRING = `
    <div class="task flex" id="task" style="background-color: ${task.style.backgroundColor};">
            <input type="text" id="title-box" class="task-title">
            <div class="color-box">
                <button class="colors" id="blue" style="background-color:cyan;"></button>
                <button class="colors" id="green" style="background-color:chartreuse;"></button>
                <button class="colors" id="red" style="background-color:crimson;"></button>
                <button class="colors" id="orange" style="background-color:coral;"></button>
                <button class="colors" id="purple" style="background-color:darkorchid;"></button>
            </div>
            <div class="color-box">
                <button class="colors" id="brown" style="background-color:brown;"></button>
                <button class="colors" id="grey" style="background-color:grey;"></button>
                <button class="colors" id="white" style="background-color:white;"></button>
                <button class="colors" id="yellow" style="background-color:yellow;"></button>
                <button class="colors" id="pink" style="background-color:pink;"></button>
            </div>
            <div class="checkmark">
                <button id="new" class="confirm"></button>
            </div>
        </div>
    `
    main.insertAdjacentHTML("beforeend", HTMLSTRING);
})