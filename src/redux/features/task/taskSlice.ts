import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { v4 as uuidv4} from "uuid";

interface InitialState {
    tasks:ITask[];
    filter:"all"|"high"|"medium"|"low";
}

// initial state works like schema
const initialState:InitialState ={
    tasks:[],
    filter:"all"
}

type DraftTask = Pick<ITask, "title"|"description"|"deuDate"|"priority">;

const createTask=(taskData:DraftTask):ITask =>{
    return { id:nanoid(), isCompleted:false, ...taskData}
}

const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state, action:PayloadAction<DraftTask>)=>{
            // const id =uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id,
            //     isCompleted:false,
            // }
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteState:(state, action:PayloadAction<string>)=>{
            state.tasks.forEach((task) =>task.id === action.payload? task.isCompleted = !task.isCompleted: task
        );
        },
        deleteTask:(state, action:PayloadAction<string>)=>{
           state.tasks = state.tasks.filter(task => task.id !== action.payload);
        
        }
    }
})

export const selectTask =(state:RootState)=>{
    return state.todo.tasks;
}
export const selectFilter =(state:RootState)=>{
    return state.todo.filter;
}

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;