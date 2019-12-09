import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {updateNewTextMessageAC, addNewMessageAC} from "./../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return{
        dataDialogs: state.dialogsPage.dataDialogs,
        dataMessages: state.dialogsPage.dataMessages

    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessages: () => {
            dispatch(addNewMessageAC())
        },
        onMessageChange: (text) => {
            let action = updateNewTextMessageAC(text);
            dispatch(action);
        }

    }
}






export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);