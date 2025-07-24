import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {id:"heading"}, "Hello world from react");
const img_path = "https://images.app.goo.gl/6jpUFVNdJPxDChxN6";
const Header=()=>{
    
    return(
        <div className='header'>
            <div>
                <img src={img_path} alt="logo" className='logo'/>
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