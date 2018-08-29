import axios from 'axios';

const url = '/api/authors';

const GetAuthorsTopBooks = () => new Promise(
    (resolve, reject) =>
        axios.get(url)
            .then(res => resolve(res.data))
            .catch(err => reject(err)) 
);

const GetAuthorBooksByName = name => new Promise(
    (resolve, reject) => 
        axios.get(`${url}/${name}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
);

export default {
    GetAuthorsTopBooks,
    GetAuthorBooksByName
}
