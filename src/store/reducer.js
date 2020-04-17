/* 
  1. In this file , we can have root level reducers like 
      i)   entities
      ii)  auth
      iii) ui
      .
      .
      .
      etc .,

  2. In redux , multiple reducers can handle the same action 
*/

import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer,
});

/* 
  The current structure looks like below 
  {
    entities: {
      bugs: [],
      projects: []
    }
  }
*/
