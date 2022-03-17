import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'

const CategoryList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="catName" label='category name' />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>

    )
}

export default CategoryList