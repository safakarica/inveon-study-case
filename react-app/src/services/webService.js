import axios from 'axios';

export const getProducts = () => {
    return axios.get("http://localhost:3000/data/products.json");
};
export const getFilters = () => {
    return axios.get("http://localhost:3000/data/filter.json");
};