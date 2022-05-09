
import { format } from 'date-fns'

// table component needs array data to work.
export const policy_jsonToArray = (theData) => {
    let theArray = []

    theData?.policies?.forEach((policy) => {
        theArray.push({
            policyId: policy.id, customerId: policy.customer.id, firstName: policy.customer.first_name, lastName: policy.customer.last_name, 
            dateOfBirth: policy.customer.date_of_birth,
            provider: policy.provider.description, insuranceType: policy.insuranceType.description,
            policyStatus: policy.status.description, policyNumber: policy.policy_number, 
            startDate: format(new Date(policy.start_date), 'yyyy-MM-dd'), 
            endDate: format(new Date(policy.end_date), 'yyyy-MM-dd'),
            createdAt: format(new Date(policy.created_at), 'yyyy-MM-dd'),
        })
    })

    return theArray;
}

export const hasChanged = (prev, curr) =>  {
    return (prev !== curr) ?  true : false
}

export const isEmpty = (theField) => {
    return (theField.length === 0) ? true : false
}