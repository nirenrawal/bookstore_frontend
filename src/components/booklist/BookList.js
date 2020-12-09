import React from 'react';
import axios from 'axios'
import BookItem from "../bookitem/BookItem";

import './BookList.css';

export default class BookList extends  React.Component{

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get(`https://minebook.herokuapp.com/api/books`)
            .then(res => {
                //console.log(res)
                this.setState({
                    books : res.data
                })
            })
    }

    render() {
        return(
        <div className='book-list'>
            {
                this.state.books.map((book) => {
                        return <BookItem key={book.bookId} book={book}/>
                    }
                )
            }
        </div>
    )
    }

}