import React from 'react'
import { ArrayField, ChipField, Datagrid, DeleteButton, EditButton, List, SingleFieldList, TextField } from 'react-admin'

const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="fullName" />
                <TextField source="email" />
                <TextField source="phone" />
                <ArrayField source="roles">
                    <SingleFieldList>
                        <ChipField source="roleType" />
                    </SingleFieldList>
                </ArrayField>
                {/* <EditButton /> */}
                <DeleteButton />
            </Datagrid>
        </List>

    )
}

export default UserList