import React,{ Component } from "react";
import PropTypes from 'prop-types';

class NoteItem extends Component {

    render() {
        const { id, title, content, category } = this.props.note;
        return (
            <div>
                <p>
                    { title }
                </p>
            </div>
            
        )

    }
}


export default NoteItem;