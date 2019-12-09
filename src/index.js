import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {updateNewTextPosts} from './redux/store-redux';
import store_cust from './redux/state';
import {BrowserRouter} from "react-router-dom";
//import {Provider} from "react-redux";
//import {Provider} from "./StoreContext";
import {Provider} from 'react-redux';
//export const rerenderAllReact = (state) =>{
       
window.store = store
ReactDOM.render(
    
    <BrowserRouter>
    
    <Provider store={store}>
    <App        />
    </Provider>
         </BrowserRouter>, document.getElementById('root'));
    
    //}

    //rerenderAllReact(store.getState());

   // store.subscribe(()=>{
     //   let state = store.getState();
   //     rerenderAllReact(state);
    //})
    