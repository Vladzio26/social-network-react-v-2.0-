import React, { Component } from "react";
import {Redirect} from 'react-router-dom';  


export const AuthRedirect = () =>{
    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuthoris) return <Redirect to= '/login' />

            return <Component {...this.props}/>
        }
    }
    return RedirectComponent;
}