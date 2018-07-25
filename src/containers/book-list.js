import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // Actions flow to creators

class BookList extends Component {
    renderList() {
        // Map creates a new array containing the returned value for each item.
        return this.props.books.map( (book) => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // This function is the GLUE between React and Redux.
    // Whatever is returned will allow it to be accessed by props.book(or any key)
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container 

// It needs to know about this dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);