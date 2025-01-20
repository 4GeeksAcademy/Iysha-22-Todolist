import React, { useState } from 'react';

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');

  const agregarTarea = () => {
    if (tarea.trim()) {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Agregar tarea..."
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <span onClick={() => eliminarTarea(index)} style={{ color: 'red', cursor: 'pointer' }}> Eliminar</span>
          </li>
        ))}
      </ul>
    </div>
  );
};document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const emptyMessage = document.querySelector('.empty-message');

  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && taskInput.value.trim() !== '') {
          addTask(taskInput.value);
          taskInput.value = '';
      }
  });

  function addTask(task) {
      const li = document.createElement('li');
      li.textContent = task;

      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = '✖';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
          li.remove();
          updateEmptyMessage();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      updateEmptyMessage();
  }

  function updateEmptyMessage() {
      if (taskList.children.length === 1) {
          emptyMessage.style.display = 'block';
      } else {
          emptyMessage.style.display = 'none';
      }
  }
});

export default ListaTareas;