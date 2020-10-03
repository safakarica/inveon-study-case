import React, {Component} from 'react';
import ProductItemComponent from "../../components/homePage/productItemComponent";
import {connect} from "react-redux";

class ProductContainer extends Component {

    getFilteredProducts = () => {
        const {products, selectedFilters} = this.props;

        return products.filter(product => {
            let query_filters = Object.keys(selectedFilters).filter(selectedFilter => selectedFilters[selectedFilter].length > 0);
            if (query_filters.filter(filterName => selectedFilters[filterName].filter(item => item === product[filterName]).length > 0).length === query_filters.length) {
                return true;
            }
        })
    };


    render() {
        const {products, selectedFilters} = this.props;
        return (
            <div className="product-block">
                {
                    products && (Object.keys(selectedFilters).filter(selectedFilter => selectedFilters[selectedFilter].length > 0).length > 0 ?
                        this.getFilteredProducts() : products).map((item, key) =>
                        <ProductItemComponent {...item} key={key}/>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedFilters: state.HomeReducer.selectedFilters,
});

export default connect(mapStateToProps)(ProductContainer);