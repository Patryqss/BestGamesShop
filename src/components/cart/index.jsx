import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';

class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className='cart section'>
                <p className='cartTitle'>CART</p>
                <p className='cartEmpty'>{cartItems.length === 0 && 'Your cart is empty.' }</p>
                {cartItems.length > 0 && <><div className='cartItemsList'>
                    {cartItems.map(i => (
                        <div key={i.id} className='cartItem'>
                            <img className='cartItemImg' src={i.cover} alt={i.title}/>
                            <p className='cartItemTitle'>{i.title}</p>
                            <div className='button xButton' onClick={(e) => this.props.removeFromCart(this.props.cartItems, i)}>X</div>
                            <p className='cartItemCost'>{i.quantity}x {i.price} {i.currency} = {Math.round(i.quantity * i.price * 100) / 100} {i.currency}</p>
                        </div>
                    ))}
                </div>
                <p className='cartTotalSum'>Total sum: {Math.round(cartItems.reduce((a, c) => a + c.price*c.quantity, 0) * 100) / 100} PLN</p></>}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.itemsInCart,
}); 

export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);