import React,{useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db, { storage } from './firebase';
//import { render } from "react-dom";


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const [image ,setImage] = useState(null);
 //   const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    

    const sendTweet= e =>{
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: 'tejaaaa',
            username: 'tm420222',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://i.pinimg.com/originals/37/45/7e/37457e62e31c2569b1d9127e5cdf3d1c.jpg'

        });
        setTweetMessage('');
        setTweetImage('');
    }
    const readImages = (e) => {
       if( e.target.files[0]){
             setImage(e.target.files[0]);
       }
        // const images = db.storage().ref('images');
        // images.put(file);
        // console.log(file);
    };
    console.log("image= " , image);
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        snapshot => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
            
        },
        error=>{
            console.log(error);
        },
        ()=>{
            // storage
            //    .ref("image")
            //    .child(image.name)
            //    .getDownloadURL()
            //    .then(url => {
            //        setUrl(url);
            //     console.log(url);
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
               })
            }
        )
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                 <Avatar src="data:image/jpeg;base64,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 "/>
                  <input 
                     onChange={(e) => setTweetMessage(e.target.value)}  //to allow the user to write a tweet and then it will accept the wriiten content from the input field
                     value={tweetMessage} placeholder="Whats Happening?" type="text"></input>
                </div>
                  <input
                     onChange={(e) => setTweetImage(e.target.value)}  //to allow the user to write a tweet and then it will accept the wriiten content from the input field
                     value={tweetImage}
                     type="text" placeholder="add img URL" className="tweetBox_img"  ></input>

                    <progress value={progress} max="100" />
                    <input type ='file'  onChange={readImages}  />
                    <Button onClick = {handleUpload}> Upload</Button> 
                    <br />

                    
                    {/* <br />
                      <img src={url || "http://via.placeholder.com/300"} alt="hello" /> */}

                
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton"> 
                  Tweet </Button>
            </form> 
        </div>
    )
};

//render(<TweetBox />, document.querySelector("#root"));
export default TweetBox
