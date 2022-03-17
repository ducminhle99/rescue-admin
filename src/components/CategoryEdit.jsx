import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const CategoryEdit = (props) => {

    return (
        <Edit title='sua category' {...props}>
            <SimpleForm>
                <TextInput source='catName' />
            </SimpleForm>
        </Edit>
    )
}

export default CategoryEdit