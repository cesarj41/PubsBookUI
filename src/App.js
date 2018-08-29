import React, { Component, Fragment } from 'react';
import AppNav from './components/AppNav/AppNav';
import AuthorPage from './pages/AuthorPage';
import authorService from './services/AuthorService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      search: '',
      back: false
    }
    this.getAuthorsBySales = () =>
      authorService
        .GetAuthorsByTopBooks()
          .then(authors => this.setState({
            authors,
            back: false
          }));

    this.getAuthorBookByName = () =>
      authorService
        .GetAuthorBooksByName(this.state.search)
          .then(authors => this.setState({
            authors,
            back: true
          }));
    this.onSearchValueChange = e =>
      this.setState({search: e.target.value})
      
  }

  componentDidMount() {
    this.getAuthorsBySales()
  }
  render() {
    let { authors, back, search } = this.state; 
    return (
      <Fragment>
        <AppNav
          searchValue={search}
          valueChange={this.onSearchValueChange}
          onSearch={this.getAuthorBookByName} />
        <AuthorPage 
          authors={authors} 
          onBackClick={this.getAuthorsBySales}
          back={back} />
      </Fragment>
    );
  }
}

export default App;
