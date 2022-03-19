import React from 'react';
import Products from './Products';
import SideBar from './SideBar';



const Shop=()=>{
return(
    <>
    <SideBar/>
    <div className='posts' style={{width:"75%",padding:"20px"}}>
          
                <div  style={{width:"100%",margin:"auto"}}>
                <Products valueStart="0" valueEnd="3"/>
                <br/>
              
                </div>
    </div>
    </>
);
};

export default Shop;