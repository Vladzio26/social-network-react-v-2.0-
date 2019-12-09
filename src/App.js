import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import Feeds from './components/Feeds/Feeds';
import { connect } from 'react-redux';
import {initialize} from './redux/app-reducer';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { withRouter } from "react-router";

import Login from "./components/Login/Login";
import Music from './components/Music/Music';
import ChatContainer from './components/SimpleChat/ChatContainer';
import Photo from './components/Photo/Photo';
import Footer from './components/Footer/Footer';

import './stars.scss';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import Feed from './components/Feed/Feed';
import Feedd from './components/Feed/CatalogFeeds/Feedd';
import Game from './components/Games/Game';

class App extends React.Component {

  componentDidMount() {
    this.props.initialize();
   }

    render(){
      
      if (!this.props.initialize){
        debugger
      return    <Preloader/>
      }

    return (
      
      <div className = 'grid-wrapper '>
        <HeaderContainer />
        <Navbar  />

        <div className="content demo0" augmented-ui="tl-clip-y br-clip-y exe" >
     
        <Route path='/dialogs' render={ () =><ChatContainer/>}/>
        

       
        <Route path='/profile/:userId?' render={() =><ProfileContainer />}/> 
        <Route path='/Users' render={() =><UsersContainer/>}/>
        <Route path='/Music' render={() =><Music/>}/>
        <Route path='/Photo' render={() =><Photo/>}/>
        <Route path='/login' render={() =><Login/>}/>
        <Route path='/Games' render={() =><Game/>}/>

        <Route path='/feed' render={() =><Feed/>}/>
        
        </div>
        <Footer/>
      </div>
      
    );
}}



const mapStateToProps = (state)=>({
  initialized:state.app.initialize
})

export default connect(mapStateToProps,{initialize})(App);