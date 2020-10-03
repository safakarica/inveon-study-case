import React, {Component} from 'react';
import InputFieldComponent from "../homePage/inputFieldComponent";
import ProductItemComponent from "../homePage/productItemComponent";
import {connect} from "react-redux";

class HeaderRightBlockComponent extends Component {
    basketRoot = React.createRef();
    basketItem = React.createRef();
    state = {
        isBasketShowing: false
    };

    constructor(props) {
        super(props);
        document.addEventListener('click', this.handleClickOutside, {passive: false});
    }

    handleClickOutside = (event) => {
        if (this.basketRoot && this.basketRoot.current && !this.basketRoot.current.contains(event.target) && !this.basketItem.current.contains(event.target)) {
            this.setState({isBasketShowing: false});
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isBasketShowing !== this.state.isBasketShowing && typeof window !== "undefined" && window.innerWidth < 640) {
            if (this.state.isBasketShowing) {
                document.getElementsByTagName("body")[0].classList.add("no-scroll");
            } else {
                document.getElementsByTagName("body")[0].classList.remove("no-scroll");
            }
        }
    }

    toggleBasket = () => {
        this.setState(prevState => ({
            isBasketShowing: !prevState.isBasketShowing
        }))
    };

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        const {products, productsInBasket} = this.props;
        const {isBasketShowing} = this.state;
        return (
            <div className="right-block">
                <div className="basket-item" onClick={(e) => {
                    this.toggleBasket()
                }} ref={this.basketItem}>
                    <i className="icon-basket"/>
                </div>
                {
                    isBasketShowing &&
                    <div className="basket-root" ref={this.basketRoot}>
                        <div className="basket-container safe-area">
                            <div className="head-block">
                                <span>Sepettekiler</span>
                            </div>
                            <div className="product-block">
                                {
                                    products && productsInBasket.length > 0 ?
                                        products.filter(product => productsInBasket.filter(productInBasket => productInBasket == product.id).length > 0).map((productItem, key) =>
                                            <ProductItemComponent {...productItem} key={key} isBasket={true}/>
                                        )
                                        :
                                        <p className="no-product">Sepete Ekli Ürün Bulunmamaktadır.</p>
                                }
                            </div>

                        </div>
                    </div>
                }
                <div className="search-block">
                    <InputFieldComponent/>
                </div>
                <div className="resp-menu-item">
                    <i className="icon-bars"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    productsInBasket: state.HomeReducer.productsInBasket,
    products: state.HomeReducer.products,
});
export default connect(mapStateToProps)(HeaderRightBlockComponent);