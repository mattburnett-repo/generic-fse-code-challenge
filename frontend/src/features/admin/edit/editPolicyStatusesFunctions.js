
import { useMemo } from "react"

// table component needs array data to work.
export const editPolicyStatuses_jsonToArray = (theData) => {    
    let theArray = []

    theData?.policyStatuses?.forEach((policyStatus) => {
        theArray.push({
            id: policyStatus.id, description: policyStatus.description
        })
    })

    return theArray;
}

export const EditPolicyStatusesTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(() => 
        [
            {
                Header: 'Create / Edit Policy Statuses',
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