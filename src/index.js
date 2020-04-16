import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();
/* 
  subscribe() method returns a function to unsubscribe
*/

store.subscribe(() => {
  // Whenever store gets updated , below console.log would be triggered
  console.log("Store changed !!", store.getState());
});

/* Using actionCreators , we need not write the same code when the same action
  is used somewhere else . we can simple call the action creator function and pass the necessary 
  parameter(s) */

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));
// store.dispatch(actions.bugRemoved({ id: 2 }));

console.log("Final State", store.getState());
