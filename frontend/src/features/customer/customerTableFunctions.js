
import { useMemo } from "react"

import { format } from 'date-fns'

// table component needs array data to work.
export const customer_jsonToArray = (theData) => {
    let theArray = []

    theData?.customers?.forEach((customer) => {
        theArray.push({
            customerId: customer.id, firstName: customer.first_name, lastName: customer.last_name, 
            dateOfBirth: customer.date_of_birth
        })
    })

    return theArray;
}

export const CustomerTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(() => 
        [
            {
                Header: "#",
                accessor: "customerId"
            },
            {
                Header: 'Customer',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName', 
                        Cell: EditTextField,
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName', 
                        Cell: EditTextField,
                    },
                    {
                        Header: 'Date of Birth',
                        accessor: 'dateOfBirth',
                        Cell: EditDateField
                    },                    
                ]
            }
        ], [])
        
    return columns
}