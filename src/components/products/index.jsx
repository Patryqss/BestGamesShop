import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productAction';
import { addToCart } from '../../actions/cartActions';

import Item from './item';

class Products extends Component {
    componentDidMount(){
        this.props.fetchProducts();
    }

    render() {
        return (
            <div className='products section'>
                <p className='productsTitle'>OUR PRODUCTS</p>
                {this.props.products.map(item => (
                    <div className='itemGroup' key={item.id}>
                        <Item data={item} />
                        {item.availability && <div className='button' onClick ={() => this.props.addToCart(this.props.cartItems, item)}>Add to Cart</div>}
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products.items,
    cartItems: state.cart.itemsInCart
})

export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);