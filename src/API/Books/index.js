import API from '..';

// template literals e métodos http
const getBooks = () => API.get('petfind/');
const getBookById = (id = '') => API.get(`petfind/${id}`);

export { getBooks, getBookById };