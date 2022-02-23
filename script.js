const taskcontainer = document.querySelector(".container");
const input = document.querySelector("#task-to-add");
const button = document.querySelector(".button");
let newtasktext = "";
console.log(taskcontainer);
const completeTask = document.querySelector("#completed");
let completedtasknumber = 0;
const totaltask = document.querySelector("#total");
let totaltaskmumber = 0;
const changeTaskStatus = (event) => {
  //event.target.classList.contains("done")) {
  if (event.target.classList.contains("done")) {
    event.target.classList.remove("done");
    completedtasknumber--;
    totaltaskmumber--;
  } else {
    event.target.classList.add("done");
    completedtasknumber++;
    totaltaskmumber++;
  }
  completeTask.innerHTML = completedtasknumber;
};
const removetask = (event) => {
  event.target.parentElement.parentElement.remove();
};

const createnewtask = () => {
  const task = document.createElement("div");
  task.innerHTML = `<div class="task ">  
        <div class="checkbox not-done"></div>
        <p>Úkol</p>
        <i class="bin far fa-trash-alt"></i>
        </div>`;
  taskcontainer.appendChild(task);
  task.querySelector("p").innerHTML = newtasktext;
  const checkbox = task.querySelector(".checkbox");
  const bin = task.querySelector(".bin");
  checkbox.onclick = (e) => changeTaskStatus(e);
  bin.onclick = () => {
    if (confirm("Opravdu chceš smazat úkol ?")) {
      removetask(event);
    }
  };
  input.value = "";
};
button.onclick = () => {
  if (input.value !== "") {
    createnewtask();
  } else {
    alert("Vyplň políčko");
  }
};
input.onkeyup = (e) => {
  newtasktext = e.target.value;
  if (e.keyCode === 13) {
    if (Ne !== "") {
      createnewtask();
    } else {
      alert("Vyplň políčko");
    }
  }
};
