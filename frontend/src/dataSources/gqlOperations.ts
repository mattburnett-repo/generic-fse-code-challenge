
import { gql } from '@apollo/client';

export const GET_POLICIES = gql`
    query getPolicies {
        policies {
            id
            customer {
                id
                first_name
                last_name
                date_of_birth
            }
            provider {
                id
                prefix_code
                description
            }
            insuranceType {
                id
                description
            }
            status {
                id
                description
            }
            policy_number
            start_date
            end_date
            created_at
        }
    }
`

export const UPDATE_POLICY_FIELD = gql`
    mutation UpdateField($customerId: Int, $firstName: String, $lastName: String, $dateOfBirth: Date, $policyId: Int, $policyNumber: String) {
        updateField(customerId: $customerId, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, policyId: $policyId, policyNumber: $policyNumber) {
            code
            success
            message
            policy {
                id
                customer {
                    id
                    first_name
                    last_name
                    date_of_birth
                }
                provider {
                    id
                    prefix_code
                    description
                }
                insuranceType {
                    id
                    description       
                }
                status {
                    id
                    description      
                }
                policy_number
                start_date
                end_date
                created_at
            }
            customer {
                id
                first_name
                last_name
                date_of_birth
            }
        }
    }
`

export const GET_CUSTOMERS = gql`
    query getCustomers {
        customers {
            id
            first_name
            last_name
            date_of_birth
        }
    }
`
export const UPDATE_CUSTOMER_FIELD = gql`
    mutation UpdateCustomer($customerId: Int, $firstName: String, $lastName: String, $dateOfBirth: Date) {
        updateField(customerId: $customerId, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth) {
            code
            success
            message
            customer {
                id
                first_name
                last_name
                date_of_birth
            }
        }
    }
`
