import API from '../Books.js';

const getBooks = () => API.get('petfind/')
const getBookById = (id = '') => API.get(`petfind/${id}`)

export { getBooks, getBookById }