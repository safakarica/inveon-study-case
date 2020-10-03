import * as actionTypes from "../constants/actionTypes";
import {getFilters, getProducts} from "../services/webService";
import {RECEIVE_FILTERED_PRODUCTS} from "../constants/actionTypes";

const receiveProducts = (payload) => ({
    type: actionTypes.RECEIVE_PRODUCTS,
    payload
});

export const getProductsAction = () => dispatch => {
    getProducts().then((res) => {
        if (res.data.success) {
            dispatch(receiveProducts(res.data.success));
        }
    }).catch((err) => {
        console.log("getProductsErr", err);
    })
};

const receiveFilters = (payload) => ({
    type: actionTypes.RECEIVE_FILTERS,
    payload
});

export const getFiltersAction = () => dispatch => {
    getFilters().then((res) => {
        if (res.data.success) {
            dispatch(receiveFilters(res.data.success));
        }
    }).catch((err) => {
        console.log("getProductsErr", err);
    })
};

export const toggleFilters = (payload,filterName) => ({
    type: actionTypes.TOGGLE_FILTERS,
    payload,
    filterName
});

export const toggleProductsInBasket = (payload) => ({
    type: actionTypes.TOGGLE_PRODUCTS_IN_BASKET,
    payload
});
export const toggleLoader = (payload) => ({
    type: actionTypes.TOGGLE_LOADER,
    payload
});
export const receiveFilteredProducts = (payload) => ({
    type: actionTypes.RECEIVE_FILTERED_PRODUCTS,
    payload
});