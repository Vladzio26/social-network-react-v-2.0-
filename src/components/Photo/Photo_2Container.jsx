import React from 'react';

import { connect } from 'react-redux';

import Photo_2 from './Photo_2';
import Title from './Title'



class ChatContainer extends React.Component {
   
  
  
  
  render(){
    return(
      <div>
      <Title/>
      <Photo_2 { ...this.props} profile= {this.props.profile} />
      </div>
    );
  }
}


const mapStateToProps = (state) =>({
  
  isAuthoris: state.auth.isAuthoris,
  login: state.auth.login,
  profile: state.profilePage.profile,
  users:state.usersPage.users,
  
})


export default connect(mapStateToProps,{})(Photo_2);