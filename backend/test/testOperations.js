

const insuranceTypes = 
    `query InsuranceTypes {
        insuranceTypes {
            id
            description
        }
    }`

const policyStatuses =
    `query getPolicyStatuses {
        policyStatuses {
          id
          description
        }
    }`

const providers = 
    `query getProviders {
        providers {
            id
            prefix_code
            description
        }
    }`

const customers = 
    `query getCustomers  {
        customers {
          id
          first_name
          last_name
          date_of_birth
        }
      }`

const policies =
    `query getPolicies {
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
    }`

const updatePolicyPolicyNumber = 
    `mutation UpdatePolicyPolicyNumber($policyId: Int, $policyNumber: String) {
        updateField(policyId: $policyId, policyNumber: $policyNumber) {
          code
          success
          message
          policy {
            id
            policy_number
          }
        }
      }`

const updateCustomerFirstName = 
    `mutation UpdateCustomerFirstName($customerId: Int, $firstName: String) {
        updateField(customerId: $customerId, firstName: $firstName) {
          code
          success
          message
          customer {
            id
            first_name
          }
        }
      }`

const updateCustomerLastName =
    `mutation UpdateCustomerLastName($customerId: Int, $lastName: String) {
        updateField(customerId: $customerId, lastName: $lastName) {
          code
          success
          message
          customer {
            id
            last_name
          }
        }
      }`

module.exports = {
    insuranceTypes,
    policyStatuses,
    providers, 
    customers,
    policies,
    updatePolicyPolicyNumber,
    updateCustomerFirstName,
    updateCustomerLastName
}