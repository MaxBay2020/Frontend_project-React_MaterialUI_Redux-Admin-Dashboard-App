import React, {useState} from 'react';
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import {userColumns, userRows} from '../../data'
import {Link} from "react-router-dom";


const Datatable = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(user => user.id !== id ))
    }


    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <div className="cellAction">
                    <Link to='/users/test'>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    ]

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to='/users/new' className='link'>
                    Add New
                </Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
