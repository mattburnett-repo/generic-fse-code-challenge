
const resolvers = {
    Query: {
        insuranceTypes: (_, __, { dataSources }) => {
            return dataSources.policyAPI.getInsuranceTypes()
        },
        policyStatuses: (_, __, { dataSources }) => {
            return dataSources.policyAPI.getPolicyStatuses()
        },
        providers: (_, __, { dataSources }) => {
            return dataSources.policyAPI.getProviders()
        },    
        policies: (_, __, {dataSources}) => {
            return dataSources.policyAPI.getPolicies();
        },
        customers: (_, __, {dataSources}) => {
            return dataSources.policyAPI.getCustomers();
        }
    },  
    Mutation: {
        updatePolicy: async (_, { policyId, policyNumber }, { dataSources }) => {              
            if(policyNumber !== undefined) {
                try {
                    const policy = dataSources.policyAPI.updatePolicyPolicyNumber({policyId, policyNumber});

                    return {
                        code: 200,
                        success: true,
                        message: `Updated policy #${policyId} policy number ${policyNumber}`,
                        policy
                    }
                } catch (err) {
                    return {
                        code: err.extensions.response.status,
                        success: false,
                        message: err.extensions.response.body,
                        policy: null
                        };
                }
            }                
        },
        updateCustomer: async (_, { customerId, firstName, lastName, dateOfBirth }, { dataSources }) => {
            if(firstName !== undefined) {
                try {
                    const customer = await dataSources.policyAPI.updateCustomerFirstName({customerId, firstName})
                    return {
                        code: 200,
                        success: true,
                        message: `Updated customer #${customerId} firstName ${firstName}`,
                        customer
                    }                            
                } catch (err) {
                    return {
                        code: err.extensions.response.status,
                        success: false,
                        message: err.extensions.response.body,
                        customer: null
                    };                 
                }
            }
            if(lastName !== undefined) {
                try {
                    const customer = dataSources.policyAPI.updateCustomerLastName({customerId, lastName});
                    return {
                        code: 200,
                        success: true,
                        message: `Updated customer #${customerId} lastName ${lastName}`,
                        customer
                    }
                } catch (err) {
                    return {
                        code: err.extensions.response.status,
                        success: false,
                        message: err.extensions.response.body,
                        customer: null
                    };      
                }
            }
            if(dateOfBirth !== undefined) {
                const customer = dataSources.policyAPI.updateCustomerDateOfBirth({customerId, dateOfBirth});
                try {
                    return {
                        code: 200,
                        success: true,
                        message: `Updated customer #${customerId} dateOfBirth ${dateOfBirth}`,
                        customer
                    }
                } catch (err) {
                    return {
                        code: err.extensions.response.status,
                        success: false,
                        message: err.extensions.response.body,
                        customer: null
                    };      
                }
            }
        } 
    },
    Policy: {
        customer: ({ customer_id }, _, {dataSources}) => {
            return dataSources.policyAPI.getCustomer(customer_id);
        },
        provider: ({ provider_id }, _, { dataSources }) => {
            return dataSources.policyAPI.getProvider(provider_id)
        },
        insuranceType: ({ insurance_type_id }, _, { dataSources }) => {
            return dataSources.policyAPI.getInsuranceType(insurance_type_id);
        },
        status: ({ status_id }, _, { dataSources }) => {
            return dataSources.policyAPI.getPolicyStatus(status_id);
        },
    }
}

module.exports = resolvers;