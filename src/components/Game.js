import React from 'react';
import GameStories from './GameStories';
import ShowPost from './ShowPost';
import SideBar from './SideBar';



const Game=()=>{
return(
    <>
    <SideBar/>
    <div className='posts' style={{width:"75%"}}>
            <div className='create'  style={{width:"90%",margin:"auto"}}>
            <iframe width="1033" height="401" src="https://www.youtube.com/embed/GU5dTDkLcQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br/>
                <div  style={{width:"80%",margin:"auto"}}>
                <GameStories/>
                <ShowPost status="1"/>
                </div>
    </div>
    </>
);
};

export default Game;