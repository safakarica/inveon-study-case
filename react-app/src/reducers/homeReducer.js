import {
    RECEIVE_FILTERED_PRODUCTS,
    RECEIVE_FILTERS,
    RECEIVE_PRODUCTS, TOGGLE_FILTERS, TOGGLE_LOADER, TOGGLE_PRODUCTS_IN_BASKET,

} from '../constants/actionTypes'

const initialState = {
        filters: [],
        productsInBasket: [],
        filteredProducts: [],
        selectedFilters: {
            sizeKey: [],
            genderKey: [],
            priceKey: [],
            colorKey: []
        }

    };

const HomeReducer = (state = initialState, action) => {

    switch (action.type) {

        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case RECEIVE_FILTERS:
            return {
                ...state,
                filters: action.payload
            };
        case TOGGLE_FILTERS:
            let termSelectedFilters = Object.assign({}, state.selectedFilters);
            if (termSelectedFilters[action.filterName].includes(action.payload)) {
                let index = termSelectedFilters[action.filterName].indexOf(action.payload);
                termSelectedFilters[action.filterName].splice(index, 1);
            } else {
                termSelectedFilters[action.filterName].push(action.payload);
            }
            return {
                ...state,
                selectedFilters: termSelectedFilters
            };
        case RECEIVE_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
            };
        case TOGGLE_PRODUCTS_IN_BASKET:
            let termBasket = Object.assign([], state.productsInBasket);
            if (termBasket.includes(action.payload)) {
                let index = termBasket.indexOf(action.payload);
                termBasket.splice(index, 1);
            } else {
                termBasket.push(action.payload);
            }

            return {
                ...state,
                productsInBasket: termBasket
            };
        case TOGGLE_LOADER:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default HomeReducer;
