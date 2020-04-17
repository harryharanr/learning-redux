import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
const store = configureStore();
/* 
  subscribe() method returns a function to unsubscribe
*/

store.subscribe(() => {
  // Whenever store gets updated , below console.log would be triggered
  console.log("Store Changed", store.getState());
});

/* Using actionCreators , we need not write the same code when the same action
  is used somewhere else . we can simple call the action creator function and pass the necessary 
  parameter(s) */

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugAssignedToUser({ bugId: 3, userId: 1 }));
store.dispatch(bugResolved({ id: 1 }));

console.log("Final State", store.getState());

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log("unResolvedBugs", unresolvedBugs); // will return true

const bugs = getBugsByUser(1)(store.getState());
console.log("bugs by userId 1", bugs);

// dispatch a function

// We can give the store the ability to dispatch functions by writing middleware functions
store.dispatch((dispatch, getState) => {
  // Here we can call an API end point
  // When the promise is resolved , we can dispatch an action with the data returned from the promise
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
  // When the promise is rejected , we can call another action that would indicate some error
});

store.dispatch({
  type: "error",
  payload: { message: "An error occured." },
});
