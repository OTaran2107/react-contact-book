import React, { Component } from 'react'
import TableCell from './TableCell'

export default class TableRow extends Component {
    render() {
        const rows = [];
        for (const key in this.props.rowData) {
            rows.push(<TableCell key={rows.length} value={this.props.rowData[key]} />);
        }
        return <tr>{rows}</tr>;
    }
}


