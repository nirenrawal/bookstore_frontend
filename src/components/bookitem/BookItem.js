import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="book-item">
                <img className="book-image" src={this.props.book.imageUrl}/>
                <h4>Book Name: {this.props.book.title}</h4>
                <h4>Edition : {this.props.book.edition}</h4>
                <h2>Book Author: {this.props.book.authorByAuthorId.authorName}</h2>

            </div>
        )
    }
}