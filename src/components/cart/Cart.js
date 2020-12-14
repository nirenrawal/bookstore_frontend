import React, {useState, useEffect} from 'react'
import './Cart.css'

const Cart = () => {
   const [carts, setCarts] = useState([])

    useEffect(()=> {
        const data = JSON.parse(localStorage.getItem('carts'));
        //console.log(data.length)
        if(data)
        setCarts(data)

    },[])

    const getPrice = (cart) =>{
       return cart.quantity * parseFloat(cart.price)
    }
    const totalPrice = carts && carts.reduce((total , cart ) => total + getPrice(cart), 0
    )

    const checkOut = () => {
       setCarts([])
       localStorage.removeItem('carts')
    }

  // console.log()
    if(carts.length === 0){
        return <div><h1>No Carts</h1></div>
    }
    return (
        <div>
            <h1>Cart</h1>
            {

                carts && carts.map((cart) => (
                      <div className="cart-item" key={cart.bookId}>
                          <div className="cart-item-image">
                              <img alt="item" src={cart.imageUrl}/>
                          </div>
                          <div className="cart-item-title">{cart.title}</div>
                          <div className="cart-item-price">{cart.price}</div>
                          <div className="cart-item-quantity">{cart.quantity}</div>
                          <div className="cart-item-amount">{(cart.quantity * cart.price).toFixed(2)}</div>
                      </div>

                ))

            }
            {carts && <div className="cart-item-totalPrice">totalPrice: {(totalPrice).toFixed(2)}</div> }

            {carts && <button className="cart-item-button" onClick={() => checkOut()}>Checkout</button> }


</div>
    )
}

export default Cart