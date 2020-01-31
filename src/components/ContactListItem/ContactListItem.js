import React, { Component } from 'react'
import './ContactListItem.css'
import PropTypes from 'prop-types';

export default class ContactListItem extends Component {

    onDeleteBtnClick = () => {
        this.props.onDelete(this.props.contact.id);
    }

    onEditBtnClick = () => {
        this.props.onEdit(this.props.contact.id);
    }

    render() {
        const { contact } = this.props;
        return (
            <tr>
                <td onClick={this.onEditBtnClick}>{contact.name}</td>
                <td onClick={this.onEditBtnClick}>{contact.surname}</td>
                <td onClick={this.onEditBtnClick}>{contact.age}</td>
                <td onClick={this.onEditBtnClick}>{contact.phone}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={this.onEditBtnClick}>Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={this.onDeleteBtnClick}>Delete</button>
                </td>
            </tr>
        )
        }
}

ContactListItem.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
