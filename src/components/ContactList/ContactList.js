import React, { Component } from 'react'
import ContactListItem from '../ContactListItem/ContactListItem'
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ContactList.css'
import { contacts } from '../../data'

export default class ContactList extends Component {
    state = {
        list: contacts,
        selected: this.emptyContact(),
        nextID: contacts.length + 1
    };

    emptyContact() {
        return {
            id: '',
            name: '',
            surname: '',
            phone: '',
            age: ''
        }
    }

    deleteContact = id => {
        const newList = this.state.list.filter(item => {
            return item.id !== id;
        });

        this.setState({
            list: newList
        });
    }

    editContact = id => {
        const contact = this.state.list.find(item => {
            return item.id === id;
        });

        this.setState({
            selected: contact
        });
    }

    onFormChange = changes => {
        this.setState({
            selected: {
                ...this.state.selected,
                ...changes
            }
        })
    }

    onFormSubmit = contact => {
        if (contact.id) {
            const newList = this.state.list.map(item => {
                if (item.id !== contact.id) return item;
                else return contact;
            });

            this.setState({
                list: newList,
                selected: this.emptyContact()
            })
        } else {
            this.setState({
                list: [...this.state.list, {
                    ...contact,
                    id: Date.now()
                }
                ],
                selected: this.emptyContact()
            })
        }
    }

    onAddBtnClick = () => {
        this.setState({
            selected: this.emptyContact()
        })
    }

    render() {
        const { list, selected } = this.state;
        return (
            <>
                <div className='contact-list'>
                    <header className='contact-list-header'>Contact list</header>
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
                                <ContactListItem key={contact.id} contact={contact} onDelete={this.deleteContact} onEdit={this.editContact} />
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-sm btn-primary add-button" onClick={this.onAddBtnClick}>Add contact</button>
                </div>
                <div className='contact-form'><ContactInfoForm onChange={this.onFormChange} onSubmit={this.onFormSubmit} contact={selected} /></div>
            </>
        )
    }
}
