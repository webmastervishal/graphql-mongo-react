import React from 'react';
import {graphql} from 'react-apollo';

import {getAuthorsQuery} from './../queries';


class AddBook extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      genre: "",
      authorid: ""
    };

  }

  displayAuthors = () => {
      const {data} = this.props;
      if(data.loading)
        return <option disabled>Loading...</option>
      else {
        return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
      }
  }

  formOnSubmit = (e) => {
    e.preventDefault();

    console.log('from state',this.state);
  }

  render() {
    const {name, genre, authorid} = this.state;
    return(
      <form onSubmit={this.formOnSubmit}>
        <div>
          <label>Book Name</label>
          <input type="text" value={name} onChange={(e) => this.setState({name: e.target.value})}/>
        </div>

        <div>
          <label>Book Genre</label>
          <input type="text" value = {genre} onChange={(e) => this.setState({genre: e.target.value})}/>
        </div>

        <div>
          <label>Author</label>
          <select value={authorid} onChange={(e) => this.setState({authorid: e.target.value})}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <div>
          <button>Add Book</button>
        </div>

      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
