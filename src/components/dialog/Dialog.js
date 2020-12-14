import React, {Fragment} from 'react';
import './Dialog.css';

const Dialog = (props) => {
    const {data, visibility, close, addToCart} = props;
    console.log(props)
    const {title, edition, description, authorByAuthorId, categoryByCategoryId, price} = data.book;

     if(visibility) {
         return (
             <Fragment>
                 <div className="dialog-shadow"/>
                 <div className="dialog">
                    <div className="dialog-banner">
                        <div className="title">{title} <span className="edition">({edition})</span> </div>

                        <div className="btn-close" onClick={close}>&#10005;</div>
                    </div>
                     <div className="dialog-content">
                         {description}
                     </div>
                     <div className="dialog-diverse"> Author : {authorByAuthorId.authorName}</div>
                     <div className="dialog-diverse"> Category : {categoryByCategoryId.categoryName}</div>
                     <div className="dialog-footer">
                         <button className="book-item-footer-button" onClick={addToCart}>Add to Cart - {price} dkk</button>
                     </div>
                </div>
            </Fragment>
         )
     }else {
         return null
     }

}

export default Dialog;