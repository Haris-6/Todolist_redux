import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',  //reuire name,initialstate,reducer
    initialState,
    reducers: {  // is main key value or function lekhta hai 
        addTodo: (state, action) => {  //state main update state value in the store milta hai or initailstate ki value milti hai
            const todo = {
                id: nanoid(), 
                text: action.payload //jo b update ati hai initial state main
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions //sub function ko export krain 

export default todoSlice.reducer  //or whole function ko export krain store main get krna k lea