import axios from 'axios';

const url = '/api/authors';

const GetAuthorsByTopBooks = () => new Promise(
    (resolve, reject) =>
        axios.get(url)
            .then(res => resolve(mapToTable(res.data)))
            .catch(err => reject(err)) 
);

const GetAuthorBooksByName = name => new Promise(
    (resolve, reject) => 
        axios.get(`${url}/${name}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
);

const mapToTable = authors =>
    authors.map(author => ({
        name: author.name,
        title: author.topBook.title,
        type: author.topBook.type,
        price: author.topBook.price,
        publishedOn: author.topBook.publishedOn
    }))


export default {
    GetAuthorsByTopBooks,
    GetAuthorBooksByName
}
