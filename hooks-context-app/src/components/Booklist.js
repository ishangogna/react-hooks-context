import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
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
            <AuthContext.Consumer>{(authContext)=> (
                <ThemeContext.Consumer>{(context)=>{
                    const { isAuthenticated,authenticate } = authContext;
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    return(
                        <div>
                            <div className = 'book-list' style = {{background : theme.ui, color : theme.syntax}}>
                                <ul>
                                    {this.state.books.map(book => (
                                        <li key = {book.id}>{book.title}</li>
                                    ))}
                                </ul>
                                
                            </div>
                            <div onClick = {authenticate} style = {{cursor : 'pointer'}}>
                                    { 
                                        isAuthenticated ? 'Logged in' : 'Logged out'
                                    }
                            </div>
                        </div>
                        )
                    }}
                </ThemeContext.Consumer>
            )}
            
        </AuthContext.Consumer>
            
        )
    }    
        
    
}
 
export default BookList;