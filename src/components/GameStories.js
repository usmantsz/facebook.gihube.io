import React from "react";
import GameData from "./GameData";
const GameStories = () => {
  const [state] = React.useState(GameData);
  return (
    <div className="stories">
      {state.map((story,i) => {
         if (i <= 4 ) {
          return( <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.gameImg} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>);
        }
        
      })};
    </div>
  );
};

export default GameStories;
