import React from 'react';
import './BookItem.css';
import Dialog from "../dialog/Dialog";

export default class BookItem extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            carts: JSON.parse(localStorage.getItem('carts')) || []
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        const localStorageCart = JSON.parse(localStorage.getItem('carts'));
        if(localStorageCart) {
            if (prevState.carts.length !== localStorageCart.length) {
                this.setState({carts: localStorageCart})
            }
        }
    }

    moreInfoClick() {
        this.setState({isVisible: true})
    }

    closePopUp() {
        this.setState({isVisible: false})
    }

    addToCart(){
      const cartItems = [...this.state.carts];
      const cartItemToAdd = this.props.book;
      const existingCartItem = cartItems.find(cartItem => cartItem.bookId === cartItemToAdd.bookId);
      if(existingCartItem){

          const newData = cartItems.map(cartItem =>
              (cartItem.bookId === cartItemToAdd.bookId) ? {...cartItem, quantity:cartItem.quantity + 1} : cartItem)
          console.log(newData)
          this.setState({carts: newData});
          localStorage.setItem("carts", JSON.stringify(newData))
          this.closePopUp()
          return
      }

      this.setState({carts: [...cartItems, {...cartItemToAdd, quantity: 1}]});
      localStorage.setItem("carts", JSON.stringify([...cartItems, {...cartItemToAdd, quantity: 1}]))
        this.closePopUp()


    }

    render() {
        return (
            <>
                <Dialog data={this.props} visibility={this.state.isVisible} close={this.closePopUp.bind(this)} addToCart={this.addToCart.bind(this)}/>
                <div className="book-item">
                    {/*<div className="image" style={{backgroundImage: `url(${this.props.book.imageUrl})`}}/>*/}


                    <img className="book-item-image" src={this.props.book.imageUrl}/>


                    <button className="book-item-info-button" onClick={() => this.moreInfoClick()}>More info</button>


                    <div className="book-item-footer">
                        <span className="price">DKK {this.props.book.price}</span>
                        <button className="book-item-footer-button" onClick={() => this.addToCart()}>Add to Cart</button>
                    </div>x


                    {/*
                    <img className="book-image" src={this.props.book.imageUrl}/>
                    <p>Book Name: {this.props.book.title}</p>
                    <p>Edition : {this.props.book.edition}</p>
                    <p>Book Author: {this.props.book.authorByAuthorId.authorName}</p>
                    <p>Category : {this.props.book.categoryByCategoryId.categoryName}</p>
                    <p>Price : {this.props.book.price}</p>
                    <p>Description : {this.props.book.description}</p>
                */}

                    {/*<div className={`book-item-more-info ${this.state.isVisible ? 'visible' : ''}`}>
                    <h1 onClick={() => this.closePopUp()}>Hello</h1>
                </div>*/}

                </div>
            </>
        )
    }
}