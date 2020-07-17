import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {
    state = {
        books : [
            {id : 1, title : 'Eragon'},
            {id : 2, title : 'Eldest'},
            {id : 3, title : 'Brisingr'}
        ]
    }
    render() { 
        return(
            <ThemeContext.Consumer>{(context)=>{
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return(
                    <div className = 'book-list' style = {{background : theme.ui, color : theme.syntax}}>
                        <ul>
                            {this.state.books.map(book => (
                                <li key = {book.id}>{book.title}</li>
                            ))}
                        </ul>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
            
        )
    }    
        
    
}
 
export default BookList;