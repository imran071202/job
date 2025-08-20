import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "jobs",
    initialState: {
        allJobs: [],
        singleJob: null
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setsingleJob: (state, action) => {
            state.singleJob = action.payload;
        }
    }
});

export const { setAllJobs, setsingleJob } = jobSlice.actions;
export default jobSlice.reducer; 
