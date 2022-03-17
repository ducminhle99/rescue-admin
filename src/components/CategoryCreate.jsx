import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const CategoryCreate = (props) => {

    return (
        <Create title='them moi category' {...props}>
            <SimpleForm>
                <TextInput source='catName' />
            </SimpleForm>
        </Create>
    )
}

export default CategoryCreate