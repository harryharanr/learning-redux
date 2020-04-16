import store from "./store";

store.subscribe(() => {
  // Whenever store gets updated , below console.log would be triggered
  console.log("Store changed !!", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug 1",
  },
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
