import React from "react";
import s from "./Login.module.css";
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls"
import {required} from "../../utils/validators/validators"
import { connect } from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom';  


const Login=(props)=>{ 
    return(
        <div className={s.loginForm}>
            <fieldset>
                <legend>LOGIN</legend>
        <form onSubmit={props.handleSubmit}>
            <div className={s.loginInt}>
                <label className={s.labelLogin} for='log'>Login name:</label>
                <Field  id='log' className={s.loginInput} placeholder="Логін" type="email" validate={[required]} name={"email"} component={Input}/>
            </div>
            <div></div>
            <div className={s.pass}>
            <label className={s.labelPass} for='pass'>Your password:</label>
                <Field id='pass' className={s.passInput} placeholder="Пароль" type={"password"} validate={[required]}  name={"password"}  component={Input}/>
            </div>
            <div className={s.rememberme}>
                <label><Field type="checkbox"  name={"rememberMe"}   component={Input}/><div className={s.disFloat}>Remember me</div></label>
            </div>
            <div className={s.logButton}>
                <button className={s.buttonLogin}>Log in -></button>
            </div>
        </form>
        </fieldset>

        </div>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(Login)

const LoginFn=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuthoris){
        return <Redirect to={"profile"} />
    }
    return(
        <div>
        
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state)=>({
    isAuthoris: state.auth.isAuthoris
})

export default connect(mapStateToProps, {login})(LoginFn);