import React, { Component } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

export default class Table extends Component {
    render() {
        const columns = Object.keys(this.props.list[0]);
        const data = this.props.list;

        return (
            <table className='table table-hover table-sm'>
                <TableHead columns={columns}/>
                <TableBody data={data}/>
            </table>
        )
    }
}
