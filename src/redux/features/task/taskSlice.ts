import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks:ITask[];
    filter:"all"|"high"|"medium"|"low";
}

// initial state works like schema
const initialState:InitialState ={
    tasks:[
        {
            id:'abcdefgh',
            title:'Initialize frontend',
            description:"Create Home Page, and routing",
            deuDate:"2025-11",
            isCompleted:false,
            priority:"High"
        },
        {
            id:'abcde',
            title:'Initialize Backend',
            description:"Create Github,",
            deuDate:"2025-11",
            isCompleted:false,
            priority:"High"
        },
    ],
    filter:"all"
}

const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{}
})

export const selectTask =(state:RootState)=>{
    return state.todo.tasks;
}
export const selectFilter =(state:RootState)=>{
    return state.todo.filter;
}
export default taskSlice.reducer;