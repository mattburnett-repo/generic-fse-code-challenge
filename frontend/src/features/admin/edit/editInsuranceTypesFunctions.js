

import { useMemo } from "react"

// table component needs array data to work.
export const editInsuranceTypes_jsonToArray = (theData) => {    
    let theArray = []

    // FIXME: not sure that .data. is right. Look at source data
    // theData?.data.users?.forEach((user) => {
    theData?.insuranceTypes?.forEach((insuranceType) => {
        theArray.push({
            // userId: user._id, userName: user?.username, password: user?.password, 
            // accessLevel: user.accessLevel
            id: insuranceType.id, description: insuranceType.description
        })
    })

    return theArray;
}

export const EditInsuranceTypesTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(() => 
        [
            {
                Header: 'InsuranceTypes',
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