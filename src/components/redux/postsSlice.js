import { createSlice } from "@reduxjs/toolkit";



const postsSlice = createSlice({

    name:"post",
    initialState : {

        items : [],
    },
    reducers: {
       
        addPost: function(state,action){
          state.items.push(action.payload)
          
        }

    }
})

export const { addPost} = postsSlice.actions

export default postsSlice.reducer