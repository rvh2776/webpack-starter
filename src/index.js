import './styles.css';

import {Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));

todoList.todos.forEach(crearTodoHtml); // es lo mismo que la linea anterior 
                                       //pero como se envia un solo argumento no es necesario ponerlo.


   //console.log('todos', todoList.todos);















// const tarea = new Todo('Aprender Node.');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('clave', '123456');
// sessionStorage.setItem('clave', '1234');

// setTimeout(() => {
//     localStorage.removeItem('clave');
// }, 1500);

