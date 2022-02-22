import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
    return (
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='fullName' />
                <TextInput source='email' />
                <TextInput source='phone' />

            </SimpleForm>
        </Edit>
    )
}

export default UserEdit