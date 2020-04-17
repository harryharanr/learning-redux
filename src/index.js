import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";
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

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 2 }));
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(projectAdded({ name: "Project 2" }));
// store.dispatch(actions.bugRemoved({ id: 2 }));

console.log("Final State", store.getState());

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log("unResolvedBugs", unresolvedBugs);
