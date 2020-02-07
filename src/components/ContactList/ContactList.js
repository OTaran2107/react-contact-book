import React, { Component } from 'react'
import ContactListItem from '../ContactListItem/ContactListItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ContactList.css'

export default class ContactList extends Component {

    render() {
        const { list, onDelete, onEdit } = this.props;
        return (
            <>
                <table className='table table-hover table-sm'>
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((contact) => (
                            <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit} />
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}
