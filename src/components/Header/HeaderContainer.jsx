import React from 'react';
import s from './Header.module.css';
import Header from './Header';

import { connect } from 'react-redux';
import {logout} from './../../redux/auth-reducer';



class HeaderContainer extends React.Component {
    /*componentDidMount() {
     this.props.getAuthUserData();
    }
    */
  
  
  render(){
    return(
      <Header { ...this.props} profile= {this.props.profile} />
    );
  }
}


const mapStateToProps = (state) =>({
  
  isAuthoris: state.auth.isAuthoris,
  login: state.auth.login,
  profile: state.profilePage.profile,
  users:state.usersPage.users,
  logout: state.auth.logout,
  
})


export default connect(mapStateToProps,{logout})(HeaderContainer);