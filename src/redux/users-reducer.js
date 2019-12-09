import {userAPI} from "../api/api";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USERS_COUNT= "SET_TOTAL_USERS_COUNT";
let TOGGLE_IS_FATCHING= "TOGGLE_IS_FATCHING";
let TOGGLE_IS_FOLLOWING_PROGRESS= "TOGGLE_IS_FOLLOWING_PROGRESS";


export let initialState =  {
    
    users: [ ],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage:1,
    isFatching: true,
    followingInProgres:[]
   }
   

   
let usersReducer = (state = initialState, action) =>{
 
    switch(action.type){
        case FOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: true}
                }
                return u;
            })
        }

        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: false}
                }
                return u;
            })
        }

        case SET_USERS: {
        return { ...state, users: action.users
            
        }}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
       
        case TOGGLE_IS_FATCHING: {
            return {...state, isFatching: action.isFatching}
        }

        
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state, followingInProgres:action.isFatching ? [...state.followingInProgres, action.userId] :
                 [state.followingInProgres.filter(id => id!= action.userId)]}
        }

    default:
        return state;
    }
}

export const follow = (userId) =>({type:FOLLOW, userId})
export const unfollow = (userId) =>({type:UNFOLLOW, userId})
export const setUsers = (users) =>({type:SET_USERS, users})
export const setCurrentPage = (currentPage) =>({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) =>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toggleIsFatching = (isFatching) =>({type:TOGGLE_IS_FATCHING, isFatching})
export const toggleFollowingProgress = (isFatching, userId) =>({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFatching, userId})


export const getUsers =(currentPage,pageSize) =>{
    return (dispatch) => {
    dispatch(toggleIsFatching(true));
    userAPI.getUser(currentPage, pageSize)
    .then(data =>{
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFatching(false));
        dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));   
         
    });
     }
}

export default usersReducer;
