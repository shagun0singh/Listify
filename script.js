const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  addTodo()
})

function addTodo() {
  if (todoInput.value.trim() === "") return

  const li = document.createElement("li")
  li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${todoInput.value}</span>
        <button class="delete-button">Delete</button>
    `

  const checkbox = li.querySelector(".checkbox")
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed")
  })

  li.querySelector(".delete-button").addEventListener("click", () => {
    li.remove()
  })

  todoList.appendChild(li)
  todoInput.value = ""
}

