import React from "react";

const listaTareas = document.getElementById('lista-tareas');
const nuevaTareaInput = document.getElementById('nueva-tarea');

nuevaTareaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea(nuevaTareaInput.value);
        nuevaTareaInput.value = '';
    }
});

function agregarTarea(tarea) {
    const tareaElement = document.createElement('li');
    tareaElement.classList.add('tarea');
    tareaElement.innerHTML = `
        <span>${tarea}</span>
        <span class="eliminar">&times;</span>
    `;
    listaTareas.appendChild(tareaElement);

    tareaElement.querySelector('.eliminar').addEventListener('click', () => {
        tareaElement.remove();
        actualizarLista();
    });

    actualizarLista();
}

function actualizarLista() {
    if (listaTareas.children.length === 0) {
        const sinTareasElement = document.createElement('li');
        sinTareasElement.classList.add('sin-tareas');
        sinTareasElement.textContent = 'No hay tareas, añadir tareas';
        listaTareas.appendChild(sinTareasElement);
    } else {
        const sinTareasElement = listaTareas.querySelector('.sin-tareas');
        if (sinTareasElement) {
            sinTareasElement.remove();
        }
    }
}

actualizarLista();


export default listaTareas;