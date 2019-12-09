import React, { Component } from 'react';
import { storage } from '../SimpleChat/Firebase';
import s from './Music.module.css';
import Firebase from '../SimpleChat/Firebase';
import AudioPlayer from "react-h5-audio-player";

class Music extends React.Component{
  constructor(props){
    super(props);
    this.state={
      audio:null,
      audios:[],
      url: [],
      progress:0,
      newURL:[],
      text:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.getAudioUrl = this.getAudioUrl.bind(this);
    this.renderAudio = this.renderAudio.bind(this);


  }

  handleChange = e =>{
    if(e.target.files[0]){
      const audio = e.target.files[0];
      this.setState(()=>({audio}));
    }
  }


  handleUpload = () =>{
    const {audio} = this.state;
    const uploadTask = storage.ref(`audios/${audio.name}`).put(audio);
    uploadTask.on('state_changed',
    (snapshot)=>{
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
    },
    (error) =>{
      console.log(error);
    },
    (url)=>{
      storage.ref('audios').child(audio.name).getDownloadURL().then(url=>{
        console.log(url);
        Firebase.database().ref('urlAudio/').push({
           audioUrl:url,
           audioName: audio.name
        })
        this.setState({url});
      })
    });
  }


  componentDidMount (){
    this.getAudioUrl();  
  
  }


  getAudioUrl =() =>{
    let audioUrl = Firebase
    .database()
    .ref('urlAudio/')
    .limitToLast(500)
    audioUrl.on('value',snapshot =>{
      let newUrlAudio = []
      snapshot.forEach(child =>{
        var audio = child.val()
        newUrlAudio.push({id: child.key, audioUrl:audio.audioUrl, audioName:audio.audioName})
       console.log(newUrlAudio);
      })
  
      this.setState({audios:newUrlAudio})
     
    })
  
}

renderAudio = () =>{

  console.log(this.state.audios)
  return this.state.audios.map((audio)=>(
    <div className={s.audioFile}>
      <h3>{audio.audioName}</h3>
      <AudioPlayer
        src={audio.audioUrl}
        onPlay={e => console.log("onPlay")}
      />
    </div>
       ))
 }


  render () {
   

    return (
      <div>
      <progress  className={s.progress} value={this.state.progress} max="100"/>
      {this.state.progress}
      <br/>
      <div className={s.audioInput} onChange={this.handleChange}>
        <br/>
        <span className={s.audioSpan}>Upload music</span>
        <input className={s.audioInputfile}  type="file" onChange={this.handleChange}/>
      </div>
        <button  className={s.style} onClick={this.handleUpload}>Upload</button>
        <br/>
        {this.renderAudio()}
   
      </div>
    )
}}




export default Music;