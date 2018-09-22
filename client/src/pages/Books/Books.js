import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import DeleteBtn from '../../components/DeleteBtn';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, TextArea, FormBtn } from '../../components/Form';
import API from '../../utils/API';

class Books extends Component {
  // Initialize this.state.books as an empty array
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      title: '',
      author: '',
      synopsis: ''
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    // let boox;
    // API.getBooks()
    //   .then(myJson => {
    //     console.log(myJson);
    //     boox = myJson;
    //     this.setState({ books: boox });
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    fetch('/api/books', {
      headers: {
        accepts: 'application/json'
      }
    })
      .then(response => response.json())
      .then(myJson => {
        console.log(myJson);
        this.setState({ books: myJson });
      })
      .catch(error => console.log(error));
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let newBook = {
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    };

    API.saveBook(newBook)
      .then(myJson => {
        console.log(myJson.data);
        API.getBooks().then(results => this.setState({ books: results }));
      })
      .catch(error => console.log(error));

    this.setState({ title: '', author: '', synopsis: '' });

    // this.setState({ books: this.state.books.concat(newBook) });
  };

  handleDelete = id => {
    API.deleteBook(id)
      .then(results => this.setState({ books: results }))
      .catch(error => console.log(error));
  };

  // Add code here to get all books from the database and save them to this.state.books

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form onSubmit={this.handleSubmit}>
              <Input
                name="title"
                placeholder="Title (required)"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <Input
                name="author"
                placeholder="Author (required)"
                value={this.state.author}
                onChange={this.handleChange}
              />
              <TextArea
                name="synopsis"
                placeholder="Synopsis (Optional)"
                value={this.state.synopsis}
                onChange={this.handleChange}
              />
              <FormBtn>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={'/books/' + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.handleDelete(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
