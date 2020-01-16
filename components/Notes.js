import React, { Component } from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

class Notes extends Component {

    render() {
        return this.props.notes.map((note) => (
            <NoteItem key={ note.title } note={ note } />
        ));
    }
}


export default Notes;