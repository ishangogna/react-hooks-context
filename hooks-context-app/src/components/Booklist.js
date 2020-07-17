import React, { Component } from 'react';

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
            <div className = 'book-list'>
                <ul>
                    {this.state.books.map(book => (
                        <li key = {book.id}>{book.title}</li>
                    ))}
                </ul>
            </div>
        )
        

    }
}
 
export default BookList;