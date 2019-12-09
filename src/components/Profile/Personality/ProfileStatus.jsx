import React from 'react';
import s from './Personality.module.css';
import preloader from './../../../assets/820.png'; 
import userPhoto from "./../../../assets/user.png";


class  ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode(){
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState){
        debugger
        if(prevProps.status !== this.props.status){
        this.setState({status:this.props.status})
        }
    }

    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        });

    }



    render(){
    return(
    <div>
    {!this.state.editMode &&
    
    
        <div onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status}</div>
    
    }
    {this.state.editMode &&
        <div> 
        <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
        </div>
    }
    </div>
  )}}
export default ProfileStatus;