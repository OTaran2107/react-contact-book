import React, { Component } from 'react'
import TableRow from './TableRow'

export default class TableBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.data.map((item) => (
                    <TableRow key={item.id} rowData={item} />
                ))}
            </tbody>
        )
    }
}
