import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Pritam Reddy',
            userName: 'pritam6265',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://image.pngaaa.com/441/1494441-middle.png'

        });
        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src ="https://image.pngaaa.com/441/1494441-middle.png"></Avatar>
                    <input 
                    onChange={(e)=>setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?"
                    type="text">
                    </input>
                </div>
                <input
                    onChange={(e)=>setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
