import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded } from "./actionCreators";
/* 
  subscribe() method returns a function to unsubscribe
*/
store.subscribe(() => {
  // Whenever store gets updated , below console.log would be triggered
  console.log("Store changed !!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

/* Using actionCreators , we need not write the same code when the same action
  is used somewhere else . we can simple call the action creator function and pass the necessary 
  parameter(s) */
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
