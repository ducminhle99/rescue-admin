import React from 'react'
import { ArrayField, ChipField, Datagrid, DeleteButton, List, SingleFieldList, TextField } from 'react-admin'

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
                <DeleteButton />
            </Datagrid>
        </List>

    )
}

export default ShopList