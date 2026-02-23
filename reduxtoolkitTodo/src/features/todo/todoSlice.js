import { createSlice, nanoid } from "@reduxjs/toolkit"

// const initialState=[]
const initialState = {
    todos:[{id:1,text:"hello"}]
}
export const todoSlice = createSlice({
    name: "todo",//used for redux extension name show
    initialState,
    // initialState:{todos:[{id:1,text:"hel"}]}
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // text:action.payload.text,
                text:action.payload,
            }
            state.todos.push(todo)
         },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
         state.todos= state.todos.filter((todo)=> todo.id !== action.payload.id)

        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;