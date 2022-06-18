
import { useMemo } from "react"

// table component needs array data to work.
export const editPolicyStatuses_jsonToArray = (theData) => {    
    let theArray = []

    // FIXME: not sure that .data. is right. Look at source data
    // theData?.data.users?.forEach((user) => {
    theData?.policyStatuses?.forEach((policyStatus) => {
        theArray.push({
            // userId: user._id, userName: user?.username, password: user?.password, 
            // accessLevel: user.accessLevel
            id: policyStatus.id, description: policyStatus.description
        })
    })

    return theArray;
}

export const EditPolicyStatusesTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(() => 
        [
            {
                Header: 'PolicyStatuses',
                columns: [
                    {
                        Header: "ID",
                        accessor: "id"
                    },
                    // {
                    //     Header: 'User Name',
                    //     accessor: 'userName', 
                    //     Cell: EditTextField,
                    // },
                    // {
                    //     Header: 'Password',
                    //     accessor: 'password', 
                    //     Cell: EditTextField, 
                    // },
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