const task = document.getElementById("task");
const box = document.getElementById("title-box");

const red = document.getElementById("red");
red.addEventListener("click", () => {
    task.style.backgroundColor = red.style.backgroundColor;
})
const orange = document.getElementById("orange");
orange.addEventListener("click", () => {
    task.style.backgroundColor = orange.style.backgroundColor;
})
const yellow = document.getElementById("yellow");
yellow.addEventListener("click", () => {
    task.style.backgroundColor = yellow.style.backgroundColor;
})
const green = document.getElementById("green");
green.addEventListener("click", () => {
    task.style.backgroundColor = green.style.backgroundColor;
})
const blue = document.getElementById("blue");
blue.addEventListener("click", () => {
    task.style.backgroundColor = blue.style.backgroundColor;
})
const purple = document.getElementById("purple");
purple.addEventListener("click", () => {
    task.style.backgroundColor = purple.style.backgroundColor;
})
const pink = document.getElementById("pink");
pink.addEventListener("click", () => {
    task.style.backgroundColor = pink.style.backgroundColor;
})
const brown = document.getElementById("brown");
brown.addEventListener("click", () => {
    task.style.backgroundColor = brown.style.backgroundColor;
})
const grey = document.getElementById("grey");
grey.addEventListener("click", () => {
    task.style.backgroundColor = grey.style.backgroundColor;
})
const white = document.getElementById("white");
white.addEventListener("click", () => {
    task.style.backgroundColor = white.style.backgroundColor;
})



const main = document.getElementById("main");

const create = document.getElementById("new");

create.addEventListener("click", () => {
    const HTMLSTRING = `
    <div class="task flex task-color" id="task">
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
                <button id="new" class="confirm">✔</button>
            </div>
        </div>
    `
    main.insertAdjacentHTML("beforeend", HTMLSTRING);
})