import React, { Component } from 'react'
import Table from './Table'

export default class ContactBook extends Component {
    render() {
        return (
            <Table className='table-container' list={this.props.list} />
        )
    }
}
