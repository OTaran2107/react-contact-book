import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ContactInfoForm.css'

export default class ContactInfoForm extends Component {
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.contact);
    }

    onInputChange = (e) => {
        this.props.onChange({
            [e.target.name]: e.target.value
        });
    }

    render() {
        console.log('render form');
        const { contact } = this.props;
        return (
            <form className='form-group' position="relative" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control form-control-sm" type="text" name="name" value={contact.name} onChange={this.onInputChange} placeholder='Enter name' />
                </div>
                <div className="form-group">
                    <label>Surname</label>
                    <input className="form-control form-control-sm" type="text" name="surname" value={contact.surname} onChange={this.onInputChange} placeholder='Enter surname' />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input className="form-control form-control-sm" type="text" name="age" value={contact.age} onChange={this.onInputChange} placeholder='Enter age' />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input className="form-control form-control-sm" type="text" name="phone" value={contact.phone} onChange={this.onInputChange} placeholder='Enter phone' />
                </div>
                <button type="submit" className="btn btn-sm btn-primary save-button">Save</button>
            </form>
        )
    }
}