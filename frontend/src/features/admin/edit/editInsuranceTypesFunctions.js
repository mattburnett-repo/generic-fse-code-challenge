

import { useMemo } from "react"

// table component needs array data to work.
export const editInsuranceTypes_jsonToArray = (theData) => {    
    let theArray = []

    theData?.insuranceTypes?.forEach((insuranceType) => {
        theArray.push({
            id: insuranceType.id, description: insuranceType.description
        })
    })

    return theArray;
}

export const EditInsuranceTypesTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(() => 
        [
            {
                Header: 'Insurance Types',
                columns: [
                    {
                        Header: "ID",
                        accessor: "id"
                    },
                    {
                        Header: 'Description',
                        accessor: 'description',
                        // Cell: EditTextField
                    },                    
                ]
            }
        ], [])
        
    return columns
}