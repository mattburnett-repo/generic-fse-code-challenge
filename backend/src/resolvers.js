
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
        }
    },  // pull customer / other fields as children of policies
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