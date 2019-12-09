import {authAPI} from "../api/api";

let SET_USER_DATA = "SET_USER_DATA";


export let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuthoris: false
};

const authReducer = ( state = initialState, action ) => {

  
    switch (action.type) {
        case SET_USER_DATA:

            return {
              ...state,
              ...action.payload,
              isAuthoris:true
            }
        
    }
  return state;
}




export const setUserData = (userId, email, login, isAuthoris) =>({type:SET_USER_DATA, payload:{userId, email,login, isAuthoris }})
export const getAuthUserData = () =>(dispatch) =>{
  authAPI.me()
      .then(response => {  
        if(response.data.resultCode === 0){
          let{id, email, login} = response.data.data;
          dispatch(setUserData(id, email, login, true));
        
      }
     });
}


export const login = (email,password,rememberMe) =>(dispatch) =>{
  authAPI.login(email,password,rememberMe)
      .then(response => {  
        if(response.data.resultCode === 0){
          dispatch(getAuthUserData())
      }
     });
}


export const logout = (email,password,rememberMe) =>(dispatch) =>{
  authAPI.logout()
      .then(response => {  
        if(response.data.resultCode === 0){
          dispatch(getAuthUserData(null, null, null, null))
      }
     });
}


export default authReducer;