
import { gql } from '@apollo/client';

export const POLICIES = gql`
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
