let submit = document.getElementById("submit");
let tasks = document.getElementById("tasks");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  let data = document.getElementById("Task-Field").value
  let div = document.createElement("div");
  div.innerHTML = `<div class="check-boxs"><span class="text">${data}</span> <i class="fa-solid fa-xmark"></i> </div>`
  div.addEventListener("click", () => {
    div.classList.toggle("underline")
  })
  if (data === "") {
    alert("No Task Provided!");
    return;
  }
  tasks.append(div)
  let icon = div.querySelector(".fa-xmark")
  icon.addEventListener("click", (event) => {
    event.stopPropagation()
    tasks.removeChild(div)
  }, true)
  document.getElementById("Task-Field").value = ""
})


