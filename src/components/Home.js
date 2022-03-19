import React from 'react';
import SideBar from "./SideBar";
import Posts from "./Posts";
import ChatBar from "./ChatBar";
import ChatBox from "./ChatBox";
const Home=()=>{
    const user_login="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/236459815_553569445795524_5058894857048883912_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF9NV3tO0x8gAmKkeI0VJsCh27N8yjHLMaHbs3zKMcsxmOv6F4qdsIlDNv4umu7pfnxtDM7sXYyFz0qxaptQmd9&_nc_ohc=toA91rOXNtUAX_SzMJE&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-p8XFMRs3G_690Zb7kmz5795P7o32Oqc_qVemmrI4C0g&oe=623A2D78";
    const [state, setState] = React.useState(false);
    const [current, setCurrent] = React.useState({});
    const openChat = (user) => {
      setState(true);
      setCurrent(user);
    };
    const closeChat = () => {
      setState(false);
    };
return(
    <>
        <SideBar />
        <Posts />
        <ChatBar openChat={openChat} />
        <ChatBox state={state} current={current} userLogin={user_login} closeChat={closeChat} />
    </>
);
};

export default Home;