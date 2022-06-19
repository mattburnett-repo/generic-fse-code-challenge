

import { useMemo } from "react"

// table component needs array data to work.
export const editProviders_jsonToArray = (theData) => {    
    let theArray = []

    // FIXME: not sure that .data. is right. Look at source data
    // theData?.data.users?.forEach((user) => {
    theData?.providers?.forEach((provider) => {
        theArray.push({
            id: provider.id, prefixCode: provider.prefix_code, description: provider.description
        })
    })

    return theArray;
}

export const EditProvidersTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(() => 
        [
            {
                Header: 'Create / Edit Providers',
                columns: [
                    {
                        Header: "ID",
                        accessor: "id"
                    },
                    {
                        Header: 'Prefix Code',
                        accessor: 'prefixCode',
                        Cell: EditTextField
                    },   
                    {
                        Header: 'Description',
                        accessor: 'description',
                        Cell: EditTextField
                    },                    
                ]
            }
        ], [])
        
    return columns
}