import React, {Component} from 'react';
import {connect} from "react-redux";
import {receiveFilteredProducts, toggleFilters, toggleLoader} from "../../actions";

class FilterItemComponent extends Component {
    state = {
        isSelected: false
    };

    toggleSelected = () => {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
        }))
    };

    filterProducts = () => {
        const {filterKey, dispatch, productFilterName, products, filteredProducts} = this.props;
        dispatch(toggleFilters(filterKey, productFilterName));
        this.toggleSelected();
        dispatch(toggleLoader(true));
        setTimeout(() => {
            dispatch(toggleLoader(false))
        }, 500);
    };


    render() {
        const {name} = this.props;
        const {isSelected} = this.state;
        return (
            <li className={isSelected ? "active" : ""} onClick={this.filterProducts}>
                <span className="check-item">
                    <i className="icon-check"/>
                </span>
                <span>{name}</span>
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    products: state.HomeReducer.products,
    filteredProducts: state.HomeReducer.filteredProducts,
    [ownProps.productFilterName]: state.HomeReducer[ownProps.productFilterName],
});
export default connect(mapStateToProps)(FilterItemComponent);