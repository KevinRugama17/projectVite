import data from './data.json';
import mifuncion, { Hello } from './modules/modulo.js';

console.log(Hello);
console.log(mifuncion());

console.log(data.users.filter(user => user.age >= 30));

const userList = document.querySelector("#users");

const taskInput = document.querySelector(".taskInput");

const taskButton = document.querySelector(".taskButton");
    
taskButton.addEventListener("click", (e) => {
console.log(taskInput.value);

data.users.push({name: taskInput.value, age: 20});

renderUsers(); 
taskInput.value = "";


});

renderUsers();  

function renderUsers() {

userList.innerHTML = "";

data.users.forEach(user => {

    console.log(user.name);
    userList?.insertAdjacentHTML("beforeend", `<li>${user.name}</li>`); //MEJORAR



});
}