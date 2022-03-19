import React from "react";
import {
  FaPlus,
 
} from "react-icons/fa";
import Data from "./Data";
const Stories = () => {
  const [state, setState] = React.useState(Data);
  return (
    <div className="stories">
      <div className="stories__col">
          <div className="stories_user__body">
            <img src={state[0].userImg} alt="stories" />
            <div className="stories_user__body-overlay">
              <div className="create-story">
              <div className="create-story-icon"><FaPlus/></div>
              </div>
              <div className="stories_user__body-name"><strong>Create story</strong></div>
            </div>
          </div>
        </div>
      {state.map((story,i) => {
         if (i <= 3 ) {
          return( <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.userImg} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.userImg} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>);
        }
        
      })};
    </div>
  );
};

export default Stories;
