import React from 'react';
import ShowPost from './ShowPost';
import SideBar from './SideBar';

const Video=()=>{
return(
    <>
    <SideBar/>
    <div style={{width:"50%",margin:"auto"}}>
    <ShowPost status="1"/>
    </div>
    </>
);
};

export default Video;