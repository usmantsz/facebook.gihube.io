import React, { useState } from "react";
import {FiChevronDown} from "react-icons/fi";

// import {IoTimer} from "react-icons/io";
const iconStyle={
  fontSize: "26px",
  color: "#0099ff",
 
      // background:"linear-gradient(to right, #00f260, #0575e6)"
};
const SideBar = () => {
 
  return (
    <div className="sidebar">
     
       <div className="sidebar_content" id="style-1">
       <div className="sidebar__list">
          <div className="img-user-sidebar">
            <img src="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/236459815_553569445795524_5058894857048883912_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF9NV3tO0x8gAmKkeI0VJsCh27N8yjHLMaHbs3zKMcsxmOv6F4qdsIlDNv4umu7pfnxtDM7sXYyFz0qxaptQmd9&_nc_ohc=toA91rOXNtUAX_SzMJE&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-p8XFMRs3G_690Zb7kmz5795P7o32Oqc_qVemmrI4C0g&oe=623A2D78"></img>
          </div>
          <div className="sidebar__list-name">Usman Ali</div>
        </div>
       <div className="sidebar__list">
          <div >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeEPymhtNC_Hy2JKaUgt0Je1qfpKmA4GtxSp-kqYDga3FFXyaYWChhX4N_zwTAraokuGHIiOc1dvuP-VCMTG0O47"></img>
          </div>
          <div className="sidebar__list-name">Friends</div>
        </div>

        <div className="sidebar__list" >
          <div >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeEBQIsLvrn_JmUWhux9fEEIZ3xAUM5_bWpnfEBQzn9tagGtKBWybT7ma6ANhwbQu-R2r0glI0oHtOFVJYnQCCF6"/>
          </div>
          <div className="sidebar__list-name">Groups</div>
        </div>


        <div className="sidebar__list" >
          <div >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeE3EdioDnAi0v1AVr1sRcqM-vsl1K9A-9v6-yXUr0D7255VIff4zJoMUZcPs1zt9te3UfypJ5Ub-B8KPXWXVU43"/>
          </div>
          <div className="sidebar__list-name">Marketplace</div>
        </div>

        <div className="sidebar__list" >
          <div >
           <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeFaUMtWYxaAbYh__Y8Kl0T02NRDTXGHJ53Y1ENNcYcnnWIEm7ZKrkCvGpNMhqxvYHTiSnvyr3cPd1ZtiAFY4bV7"/>
          </div>
          <div className="sidebar__list-name">Watch</div>
        </div>


        <div className="sidebar__list" >
          <div >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeHShq3k_RYrJGWjksDGzK2Na4YXxTz5jX9rhhfFPPmNf90SWMMNz596_m9O0ANjNfFHPCcs2-2HwWEA6BfxNIyV"/>
          </div>
          <div className="sidebar__list-name">Memories</div>
        </div>

        <div className="sidebar__list" >
          <div >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeHpziuC-uFDxPH7l7yoWeCH-5kYScafj0T7mRhJxp-PRLx7DkuIBaQgTkULtvQZhLsKWJThBq3-D7xir6xCfQGy"/>
          </div>
          <div className="sidebar__list-name">Saved</div>
        </div>
        <div className="sidebar__list" >
          <div >
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeFdtEN08NLd9e6LY1b4VkgctEPFOzh_t-u0Q8U7OH-366NGMvZ68n45l8bri7L2Ohl3M1LaaA7_LYAdPGqBLO6N" />
          </div>
          <div className="sidebar__list-name">Pages</div>
        </div>

        <div className="sidebar__list" >
          <div >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png?_nc_eui2=AeFAPnqHMcnIkNdG0kLvyZXsG6-rVcdLeA4br6tVx0t4Dr59GUlMVpZiz-C3C2qLAqRdSWiyICvl4E3XQJEhXz6y"/>
          </div>
          <div className="sidebar__list-name">Events</div>
        </div>


        <div className="sidebar__list" >
          <div >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/hTN47HVa4oS.png?_nc_eui2=AeF2Xbt8tXm5WuxU6Q7a64qWq16uKNk6s_WrXq4o2Tqz9StUkQMqqVWGQMFFQbZ5-6X8hD4OvffXWTZnOkWa9W3b"/>
          </div>
          <div className="sidebar__list-name">Most Recent</div>
        </div>
      
        <div className="sidebar__list" >
          <div style={{background:"#BEC3C9",marginLeft:"0px"}} className="navbar__last-section">
            <FiChevronDown/>
          </div>
          <div className="sidebar__list-name">See More ...</div>
        </div>
        <hr/>
        <div className="sidebar__list" >
          <h3>Your shortcuts</h3>
        </div>
        <div className="sidebar__list" >
          <div style={{float:"left",width:"10%"}}>
            <img src="https://allursoft.com/wp-content/uploads/2021/04/6394236_preview.png" style={{width:"100%"}} />
          </div>
          <div className="sidebar__list-name">8 Ball Pool</div>
        </div>
        

        <div className="sidebar__list" >
        <p style={{fontSize:"13px"}}>Privacy  · Terms  · Advertising  · Ad Choices  </p>
        </div>
       </div>
       
     
    </div>
  );
};

export default SideBar;
