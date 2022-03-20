import React from "react";
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
const Create = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__first-img">
          <span>
            <img src="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/236459815_553569445795524_5058894857048883912_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF9NV3tO0x8gAmKkeI0VJsCh27N8yjHLMaHbs3zKMcsxmOv6F4qdsIlDNv4umu7pfnxtDM7sXYyFz0qxaptQmd9&_nc_ohc=toA91rOXNtUAX_SzMJE&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-p8XFMRs3G_690Zb7kmz5795P7o32Oqc_qVemmrI4C0g&oe=623A2D78" alt="user" />
          </span>
        </div>
        <div className="create__first-input">
          <input
            type="text"
            className="create__first-inputs"
            placeholder="What's on your mind, Usman? "
          />
        </div>
      </div>
      <div className="create__second">
        <span className="create__second-icon">
          <FaVideo className="redColor" />
          <span className="text">Live Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegFileImage className="greenColor" />
          <span className="text">Photo / Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegGrinAlt className="orangeColor" />
          <span className="text">Feeling</span>
        </span>
      </div>
    </div>
  );
};

export default Create;
