import React from 'react';
import ReactDOM from 'react-dom/client';
import myimage from "./images/logonew.png";


const heading = React.createElement("h1", {id:"heading"}, "Hello world from react");

const Header=()=>{
    
    return(
        <div className='header'>
            <div>
                <img src={myimage} className='logo'/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}


const  AppLayout=()=>{
    return(
        <div className='app'>
         <Header/>
        </div>
    );
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);