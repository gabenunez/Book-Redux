import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    // On inital load, check if props.book exists!
    render() {
        if(!this.props.book) {
            return <div>Yo dawg, you havent selected anything yet.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    };
};

function mapStatetoProps(state) {
    return {
        // state.activeBook called because it's a key in the reducers index.js file
        book: state.activeBook
    }

}

export default connect(mapStatetoProps)(BookDetail);