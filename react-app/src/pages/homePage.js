import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getFiltersAction, getProductsAction} from "../actions";
import FilterContainer from "../containers/homePage/filterContainer";
import ProductContainer from "../containers/homePage/productContainer";

class HomePage extends Component {

    constructor(props) {
        super(props);
        props.dispatch(getProductsAction());
        props.dispatch(getFiltersAction());
    }

    render() {
        const {filters,products,isLoading} = this.props;

        return (
            <div className="product-list-root safe-area">
                <FilterContainer {...filters}/>
                {
                    isLoading ?
                        <div className="loader-root">
                            <img src="/assets/loader.gif" alt="loader" />
                        </div>
                        :
                        <ProductContainer products={products}/>

                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.HomeReducer.filters,
    products: state.HomeReducer.products,
    isLoading: state.HomeReducer.isLoading,
});
export default connect(mapStateToProps)(HomePage);