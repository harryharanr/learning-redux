import store from "./store";
import * as actions from "./actionTypes";
/* 
  subscribe() method returns a function to unsubscribe
*/
const unsubscribe = store.subscribe(() => {
  // Whenever store gets updated , below console.log would be triggered
  console.log("Store changed !!", store.getState());
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug 1",
  },
});

unsubscribe();
// Below change will not be notified to the subscription
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
