import {authAPI} from "../api/api";
import {getAuthUserData} from "./auth-reducer"
let SET_INITIALIZED = "SET_INITIALIZED";


export let initialState = {
    initialized: false
};

const appReducer = ( state = initialState, action ) => {

  
    switch (action.type) {
        case SET_INITIALIZED:

            return {
              ...state,
              initialized:true
            }
        
    }
  return state;
}




export const setInitializedSuccess = () =>({type:SET_INITIALIZED})
  

export const initialize = () =>(dispatch) =>{
  let dispatchResult = dispatch(getAuthUserData());
  
  Promise.all ([dispatchResult])
  .then(()=>{
    dispatch(setInitializedSuccess())
  });
    
  }

export default appReducer;