import React, { Component } from 'react';
import {storage, database, firebase} from "../SimpleChat/Firebase";
import Firebase from '../SimpleChat/Firebase';
import s from "./Photo.module.css";

import ReactMediumImg from 'react-medium-zoom'





class Photo extends Component {
  
  constructor (props) {

    super(props);
    this.state = {
      images: [],
      image: null,
      url:[],
      progress:0,
      newURL:[],
      text:''
    }
    this.myRef= React.createRef();
    this.renderImages = this.renderImages.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.getImgUrl = this.getImgUrl.bind(this);
  }


 


handleChange = e =>{
  if(e.target.files[0]){
    const image = e.target.files[0];
    this.setState(()=>({image}));
  }
}




handleUpload =() =>{
  const {image} = this.state;
  const uploadTask= storage.ref(`images/${image.name}`).put(image);
 
  uploadTask.on('state_changed', 
  (snapshot)=>{
    //progress...
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
    this.setState({progress});
  }, (error)=>{
    //error messages
    console.log(error);
  }, (url)=>{
    //complet func
    storage.ref('images').child(image.name).getDownloadURL().then(url =>{
      console.log(url);
      Firebase.database().ref('url/').push({
        imageUrl:url
      })
      this.setState({url});
      
    })
   

  });
 
}




  componentDidMount (){
    this.getImgUrl();  
  
  }


    getImgUrl =() =>{
      let imageUrl = Firebase
      .database()
      .ref('url/')
      .limitToLast(500)
      imageUrl.on('value',snapshot =>{
        let newUrlImage = []
        snapshot.forEach(child =>{
          var image = child.val()
          newUrlImage.push({id: child.key, imageUrl:image.imageUrl})
         
        })
    
        this.setState({images:newUrlImage})
       
      })
    
}
    
renderImages = () =>{

  console.log(this.state.images)
  return this.state.images.map((image)=>(

  
          <ReactMediumImg className={s.myImg} id={s.myImgId} src={image.imageUrl}   />
  
          ))
 }

  render() {

    return (
      <div className={s.app}>
        <progress value = {this.state.progress} max = "100%" className={s.progress}></progress>
        {this.state.progress}
        <br />
        <div id="file" onChange={this.handleChange}  className={s.wrapperForInput}>
       
        <label for="file" className={s.label}>Upload image</label>
        
        <input   className={s.inputFile} type="file" onChange={this.handleChange}/>
        
        </div>
        <button className={s.buttonUpload} onClick={this.handleUpload}>Upload</button>
        <hr/>  
        
        <br/>
        <div className={s.wrapperPreview}>
        <h3 className={s.header}>Uploaded image</h3>
        <img className={s.alignImage} src={this.state.url} alt=""height="300" width="400" />      
        </div>
        <br/>
        <hr/>
        {this.renderImages()}
        <div id={s.myModal} className={s.modal}>
        <span className={s.close}>&times;</span>
         <img className={s.modal_content} id={s.img01} /> 
       
        </div>
       
        </div>
    );
  }
}
 
export default Photo;