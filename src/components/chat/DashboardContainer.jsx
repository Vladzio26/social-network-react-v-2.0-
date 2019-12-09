import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';


import {CTX} from "../../redux/store";



const DashboardContainer = (props) =>{
    


      

    return(
        <div>
           <Dashboard   { ...props} />
        </div>
    )
}
const mapStateToProps = (state) =>({
    isAuthoris: state.auth.isAuthoris,
    login: state.auth.login,
    profile: state.profilePage.profile,
    users:state.usersPage.users,
    
  })

export default connect(mapStateToProps,{})(DashboardContainer);