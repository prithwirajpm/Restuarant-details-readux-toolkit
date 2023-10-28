import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call - createAsyncThunk
export const fetchRestuarants = createAsyncThunk('restuarantList/fetchRestuarants',()=>
{
    // api call
 return axios.get('/restaurants.json').then(responser=>responser.data.restaurants)
  
})
console.log(fetchRestuarants);

const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState:{
        loading:false,
        allRestuarant:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestuarants.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestuarants.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestuarant = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestuarants.rejected,(state,action)=>{
            state.loading = false
            state.allRestuarant = []
            state.error = action.error.message
        })
    }
})

export default restuarantSlice.reducer