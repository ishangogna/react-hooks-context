import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav>
                <div className = 'header'>
                    <h1>Context App</h1>
                </div>
            
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
