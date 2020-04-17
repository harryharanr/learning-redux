/*
  1. So far , we've built two slices 
      i)  bugs
      ii) projects
      Each of these slices exposes a reducer function
      
  2. Using combineReducers() function , we can add multiple slices to the store
     This function combines all the reducers to one reducer and pass it to the store
*/
import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});
