import store from "./store";

store.subscribe(()=>{
    console.log("Store changes", store.getState());
})
store.dispatch({
    type:"bugAdded",
    payload:{
        description:"Bug1"
    }
});
store.dispatch({
    type:"bugRemoved",
    payload:{
        id:1
    }
});
console.log(store.getState());
