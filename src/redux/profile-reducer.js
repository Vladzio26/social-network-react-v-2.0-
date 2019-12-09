import { profileAPI } from "../api/api";


let ADD_POST_MAKER = "ADD_POST_MAKER";
let SET_USERS_PROFILE = "SET_USERS_PROFILE"
let TOGGLE_IS_FATCHING= "TOGGLE_IS_FATCHING";
let SET_STATUS ="SET_STATUS";


export let initialState =  {
//profilePage: {
    persData: [
        {name: 'Vasya', age:10, phone:'+380997657485' },
        
      ],
      profile: "",
    dataPost: [
        {message:'Hello it`s me', like: 100},
        {message:'What a miss(', like: 156},
        {message:'Great chance', like: 333}
      ],
    isFatching: true,
    status:"Yoo"

}

//}

const profileReducer = ( state = initialState, action) => {
  //debugger
    switch(action.type) {
        case ADD_POST_MAKER: {
        let postMessage = {
            message: action.newPostText,
            like: 0
          };
          let stateCopy = {...state};
          //stateCopy.persData = [...state.persData];
          stateCopy.dataPost = [...state.dataPost];
          stateCopy.dataPost.push(postMessage);
          stateCopy.newPostText = " ";
          return stateCopy;
        }
     
        case SET_USERS_PROFILE:{
          return {...state, profile: action.profile}
        }
        case TOGGLE_IS_FATCHING: {
          return {...state, isFatching: action.isFatching}
      }
        case SET_STATUS: {
          return {...state, status: action.status}
    }
    }



  return state;
}


export const addPostAC = (newPostText) =>({type:ADD_POST_MAKER, newPostText})
export const setUsersProfile = (profile) =>({type:SET_USERS_PROFILE, profile})

export const getUserProfile = (userId) =>(dispatch) => {
    
  profileAPI.getProfile(userId)
  .then(response =>{  
      dispatch(setUsersProfile(response.data));   
  });
}
export const toggleIsFatchingAC = (isFatching) =>({type:TOGGLE_IS_FATCHING, isFatching})
export const setStatus = (status) =>({type:SET_STATUS, status})




export const getStatus = (userId) => (dispatch) =>{
  profileAPI.getStatus(userId)
    .then(response =>{
   
      dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) =>{
  profileAPI.updateStatus(status)
    .then(response =>{
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
      }
    });
}


export default profileReducer;