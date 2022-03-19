import React from "react";
import { FaVideo, FaPhone, } from "react-icons/fa";
import { MdClose, } from "react-icons/md";
const ChatBox = (props) => {
  const closeChat = () => {
    props.closeChat();
  };
  return (
    <>
      {props.state ? (
        <div className="chat">
          <div className="chat__header">
            <div className="chat__first">
              <div className="chat__header-img">
                <img
                  src={props.current.userImg ? props.current.userImg : ""}
                  alt="user"
                />
              </div>
              <div className="chat__header-name">
                {props.current.name ? props.current.name : ""}
              </div>
            </div>
            <div className="chat__second">
              <FaVideo className="chat__header-icons" />
              <FaPhone className="chat__header-icons" />
              <MdClose
                className="chat__header-icons"
                onClick={closeChat}
              />
            </div>
          </div>
          <div className="chat__body">
            <div className="chat__left">
            <img
                  src={props.current.userImg ? props.current.userImg : "hello"}
                  alt="user"
                />
              <p className="msg"> Hello Usman?</p>
            </div>
            <div className="chat__right">
           
              <p className="msg">Hey!</p>
               <img
                  src={props.userLogin ? props.userLogin : ""}
                  alt="user"
                  
                />
            </div>
            <div className="chat__left">
            <img
                  src={props.current.userImg ? props.current.userImg : ""}
                  alt="user"
                  
                />
              <p className="msg">
               How are you?
              </p>
            </div>
            <div className="chat__right">
            
              <p className="msg">I am also good and whats about you?</p>

              <img
                  src={props.userLogin ? props.userLogin : ""}
                  alt="user"
                  
                />
            </div>
          </div>
          <div className="chat__footer">
            <input type="text" className="chat__input" placeholder="Aa" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatBox;
