import React from "react";
import Data from "./Data";

const ChatBar = (props) => {
  const [state] = React.useState(Data);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      <div className="sidebar_content" id="style-1">
      <div className="create">
        <div className="card-header">
          <div className="card-header-img">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/vhwDUUN8eCG.png?_nc_eui2=AeEwG593afPmchbSgz6vGn3QSWTzOO8ib89JZPM47yJvzyHAU4VyUOHi8d-i13_ic0ovYrJwB67lW7s9UpZw8b6W" className=""/>
          </div>
          <div className="card-header-name">
            <h4>Groups</h4>
          </div>
          <div className="card-header-close">
            X
          </div>
        </div>
        <div className="card-body">
          <img src="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/274691173_508506587358571_24608709246164423_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeHN5oxx96uRxRNOS7ihAyIbbSSO12rHe1ZtJI7Xasd7VjjZ-M7NS7u3aZa5L56DDF4dGHVH2uamv34ImseKKGpv&_nc_ohc=EEUVwUNAp1UAX85122B&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-fJpWp8-Ign6RsCGbZPqwQO9ifuFIkQ1oHYp-C6lQ0ZA&oe=623A4A98"/>
        </div>
        <div className="card-footer">
          <button>join</button>
        </div>
      </div>
      <hr/>
      <div className="chatBar__list">
          
          <div className="chatBar__list-name">Contacts</div>
        </div>
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.userImg} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ChatBar;
