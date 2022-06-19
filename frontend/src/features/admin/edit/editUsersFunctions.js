
import { useMemo } from "react"

// table component needs array data to work.
export const editUsers_jsonToArray = (theData) => {    
    let theArray = []

    // FIXME: not sure that .data. is right. Look at source data
    // theData?.data.users?.forEach((user) => {
    theData?.data?.users?.forEach((user) => {
        theArray.push({
            // userId: user._id, userName: user?.username, password: user?.password, 
            // accessLevel: user.accessLevel
            userId: user._id, accessLevel: user.accessLevel
        })
    })

    return theArray;
}

export const EditUsersTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(() => 
        [
            {
                Header: 'Create / Edit Users',
                columns: [
                    {
                        Header: "User ID",
                        accessor: "userId"
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
                        Header: 'Access Level',
                        accessor: 'accessLevel',
                        Cell: EditTextField
                    },                    
                ]
            }
        ], [])
        
    return columns
}