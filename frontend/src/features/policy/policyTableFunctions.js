
import { useMemo } from "react"

import { format } from 'date-fns'

// table component needs array data to work.
export const policy_jsonToArray = (theData) => {
    let theArray = []

    theData?.policies?.forEach((policy) => {
        theArray.push({
            policyId: policy.id, customerId: policy.customer.id, firstName: policy.customer.first_name, lastName: policy.customer.last_name, 
            dateOfBirth: format(new Date(policy.customer.date_of_birth), 'yyyy-MM-dd'),
            provider: policy.provider.description, insuranceType: policy.insuranceType.description,
            policyStatus: policy.status.description, policyNumber: policy.policy_number, 
            startDate: format(new Date(policy.start_date), 'yyyy-MM-dd'), 
            endDate: format(new Date(policy.end_date), 'yyyy-MM-dd'),
            createdAt: format(new Date(policy.created_at), 'yyyy-MM-dd'),
        })
    })

    return theArray;
}

export const PolicyTableColumns = (EditDateField, EditTextField) => {
    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: "policyId"
            },
            {
                Header: 'Customer',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName', 
                        // Cell: EditTextField,
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName', 
                        // Cell: EditTextField,
                    },
                    {
                        Header: 'Date of Birth',
                        accessor: 'dateOfBirth',
                        // Cell: EditDateField
                    },                    
                ]
            },
            {
                Header: 'Policy',
                columns: [
                    {
                        Header: 'Provider',
                        accessor: 'provider',
                    },
                    {
                        Header: 'Insurance Type',
                        accessor: 'insuranceType',
                    },
                    {
                        Header: 'Policy Status',
                        accessor: 'policyStatus',
                    },
                    {
                        Header: 'Policy Number',
                        accessor: 'policyNumber',
                        Cell: EditTextField,
                    },
                    {
                        Header: 'Start Date',
                        accessor: 'startDate',
                    },
                    {
                        Header: 'End Date',
                        accessor: 'endDate',
                    },
                    {
                        Header: 'Created At',
                        accessor: 'createdAt',
                    },                    
                ]
            }
        ],
        []
      )
    return columns
}