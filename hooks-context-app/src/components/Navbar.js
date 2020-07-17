import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component{
    static contextType = ThemeContext;
    render(){
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return(
            <nav style = {{background: theme.ui, color : theme.syntax}}>
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
