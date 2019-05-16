import React from 'react';
import {graphql} from 'react-apollo';
import {gql} from 'apollo-boost';

const getAuthors = gql`
  {
    authors{
      id
      name
    }
  }
`;

class AddBook extends React.Component {

  displayAuthors = () => {
      const {data} = this.props;
      if(data.loading)
        return <option disabled>Loading...</option>
      else {
        return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
      }
  }

  render() {
    console.log(this.props);
    return(
      <form>
        <div>
          <label>Book Name</label>
          <input type="text" name="bookname"/>
        </div>

        <div>
          <label>Book Genre</label>
          <input type="text" name="bookgenre"/>
        </div>

        <div>
          <label>Author</label>
          <select>
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

export default graphql(getAuthors)(AddBook);
