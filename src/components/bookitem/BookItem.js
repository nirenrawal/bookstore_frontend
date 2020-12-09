import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }
    moreInfoClick(){
        this.setState({isVisible: true})
    }

    closePopUp(){
        this.setState({isVisible: false})
    }
    render() {
        return (
            <div className="book-item">
                {/*<div className="image" style={{backgroundImage: `url(${this.props.book.imageUrl})`}}/>*/}


                <img className="book-item-image" src={this.props.book.imageUrl}/>


                <button className="book-item-info-button" onClick={() => this.moreInfoClick()}>More info</button>


                <div className="book-item-footer">
                    <span className="price">DKK {this.props.book.price}</span>
                    <button className="book-item-footer-button">Add to Cart</button>
                </div>


                {/*
                    <img className="book-image" src={this.props.book.imageUrl}/>
                    <p>Book Name: {this.props.book.title}</p>
                    <p>Edition : {this.props.book.edition}</p>
                    <p>Book Author: {this.props.book.authorByAuthorId.authorName}</p>
                    <p>Category : {this.props.book.categoryByCategoryId.categoryName}</p>
                    <p>Price : {this.props.book.price}</p>
                    <p>Description : {this.props.book.description}</p>
                */}

                 <div className={`book-item-more-info ${this.state.isVisible ? 'visible' : ''}`}>
                    <h1 onClick={()=> this.closePopUp()}>Hello</h1>
                </div>
            </div>
        )
    }
}