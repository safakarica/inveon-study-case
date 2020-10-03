import React, {Component} from 'react';
import {toggleProductsInBasket} from "../../actions";
import {connect} from "react-redux";

class ProductItemComponent extends Component {
    state = {
        isAdded: false
    };

    toggleAdded = () => {
        const {dispatch, id, isBasket} = this.props;
        dispatch(toggleProductsInBasket(id))
        this.setState({isAdded: true})
    };

    render() {
        const {name, price, image, isBasket, id, productsInBasket} = this.props;
        const {isAdded} = this.state;

        return (
            <div className={`product-item ${isBasket && productsInBasket.includes(id) ? "added" : ""}`}
                 onClick={()=>{
                     if ((isBasket && productsInBasket.includes(id)) || (!isBasket && !productsInBasket.includes(id))){
                         this.toggleAdded();
                     }
                 }}>
                <div className="img-item">
                    <picture>
                        <source srcSet={image.substr(0, image.lastIndexOf(".")) + ".webp"} type="image/webp"/>
                        <source srcSet={image} type="image/jpeg"/>
                        <img src={image} alt="blue"/>
                    </picture>
                </div>
                <div className="text-item">
                    <p>{name}</p>
                    <p>{price} TL</p>
                    <span>{isBasket ? "Sepetten Çıkar" : productsInBasket.includes(id) ? "Sepete Eklendi" : "Sepete Ekle"}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    productsInBasket: state.HomeReducer.productsInBasket,
});

export default connect(mapStateToProps)(ProductItemComponent);