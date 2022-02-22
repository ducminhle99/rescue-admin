import React from 'react'
import { ArrayField, ChipField, Datagrid, DateField, DeleteButton, Edit, EditButton, List, SearchInput, SingleFieldList, TextField } from 'react-admin'

const ShopList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                {/* <TextField source="address" /> */}
                <TextField source="phone" />
                <ArrayField source="categories">
                    <SingleFieldList>
                        <ChipField source="catName" />
                    </SingleFieldList>
                </ArrayField>
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>

    )
}

export default ShopList