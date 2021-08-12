import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
}from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
           
           <div className ="widgets_input">
               <SearchIcon className="widgets_searchIcon" />
               <input placeholder="Search Twitter" type="text" />

           </div>
           <div className ="widgets_widgetContainer">
           <h2>What's Happening</h2> 
           <TwitterTweetEmbed tweetId={"1347165127036977153"}/>
           
           <TwitterTimelineEmbed
             sourceType="widget" widgetId="539487832448843776" options={{height: 400}} />
             
             <TwitterShareButton url="https://facebook.com/tesla" options={{
              text: 'Launching in India soon',
              via: 'tesla',
              screenName: null
            }} />
   
 
             
           </div>
        </div>
    )
}

export default Widgets
