let todos = [];

// Cargamos Datos almacenados en el LocalStorage
todos = JSON.parse(localStorage.getItem('todos'))

const errorMessage = document.getElementById('errorMessage')

//Renderizamos los datos
const render = () => {
    const todoList = document.getElementById('todo-list')
    const todoTempleate = todos.map(t => `<li>${t}</li>`)
    todoList.innerHTML = todoTempleate.join('')
    localStorage.setItem('todos', JSON.stringify(todos))

    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            render();
        })
    })
}

window.onload = () => {

    render();

    const form = document.getElementById('todo-form')
    const todo = document.getElementById('todo')

    form.onsubmit = (e) => {
        e.preventDefault()
        const todoText = todo.value;
        todo.value = ''
        if (todoText.trim() == ""){
            errorMessage.textContent = 'Favor ingrese una entrada valida'
            return
        }
        todos.push(todoText)
        render();
        closePopup();
    }

    todo.addEventListener('keypress', () => {
        if (errorMessage.textContent != ""){
            errorMessage.innerText = ''
        }
    })


    // Popup

    const popup = document.querySelector('.popup')
    const overlay = document.querySelector('.overlay')

    const btnClose = document.getElementById('btn-close')
    const btnNuevo = document.querySelector('.btn-nuevo')

    const openPopup = () => {
        popup.classList.toggle('popup-hidde')
        overlay.classList.toggle('overlay-close')
    }

    const closePopup = () => {
        popup.classList.toggle('popup-hidde')
        overlay.classList.toggle('overlay-close')
    }

    btnClose.addEventListener('click', () => {
        closePopup();
    })

    btnNuevo.addEventListener('click', () => {
        errorMessage.innerText = ''
        openPopup();
    })

}