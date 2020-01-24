import React, { Component } from 'react'

export default class TableHead extends Component {
    render() {
        return (
            <thead className="thead-dark">
                <tr>
                    {this.props.columns.map((col) => (
                        <th key={col}>{col.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
        )
    }
}
