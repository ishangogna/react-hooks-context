import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleTheme = () => {
    return(
        <ThemeContext.Consumer>
            {(context) => {
                const { toggleTheme } = context;
                return(
                    <button onClick = {toggleTheme}>Switch Themes</button>
                )
            }}
        </ThemeContext.Consumer>
    )
}
 
export default ToggleTheme;