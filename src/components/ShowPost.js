import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt} from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Data from "./Data";

const ShowPost = (props) => {

  
  const [state] = React.useState(Data);
  return (
    <div className="show">
      {state.map((post) => {
       if(post.status===props.status || props.all===0)
       {
         return(
          <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
            <div className="post-option" style={{ float: "right"}}><BiDotsHorizontalRounded/></div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              {(post.status!=1)?  <img src={post.postImg} alt="post" /> : <video src={post.postImg} style={{width:"100%",height:"200px"}}  controls></video>}
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
          <br/>
          <div className="create__first">
                <div className="show__header-img">
                  <span>
                    <img src="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/236459815_553569445795524_5058894857048883912_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF9NV3tO0x8gAmKkeI0VJsCh27N8yjHLMaHbs3zKMcsxmOv6F4qdsIlDNv4umu7pfnxtDM7sXYyFz0qxaptQmd9&_nc_ohc=toA91rOXNtUAX_SzMJE&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-p8XFMRs3G_690Zb7kmz5795P7o32Oqc_qVemmrI4C0g&oe=623A2D78" alt="user" />
                  </span>
                </div>
                <div className="create__first-input" style={{marginLeft:"10px"}}>
                  <input
                    type="text"
                    className="create__first-inputs"
                    placeholder="Write a comment.... "
                  />
                </div>
              </div>
        </div>
         );
       }
      })
      }
      
    </div>
  );
};

export default ShowPost;
