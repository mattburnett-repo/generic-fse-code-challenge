
if(process.env.NODE_ENV !== 'prod') {
    require('dotenv').config();
}

const {RESTDataSource} = require('apollo-datasource-rest');

class PolicyAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.DATASTORE_BASE_URL;
    }

    getPolicies() {
        return this.get("policy");
    }
    getInsuranceTypes() {
        return this.get("insurance-type")
    }
    getPolicyStatuses() {
        return this.get("policy-status")
    }
    getProviders() {
        return this.get("provider")
    }
    getCustomers() {
        return this.get("customer")
    }

    getPolicy(id) {
        return this.get(`policy/${id}`);
    }
    getCustomer(id) {
        return this.get(`customer/${id}`);
    }
    getProvider(id) {
        return this.get(`provider/${id}`);
    }
    getInsuranceType(id) {
        return this.get(`insurance-type/${id}`);
    }
    getPolicyStatus(id) {
        return this.get(`policy-status/${id}`);
    }

    updateCustomerFirstName(customer) {
        return this.patch(`customer`, {id: customer.customerId, firstName: customer.firstName});
    }
    updateCustomerLastName(customer) {
        return this.patch(`customer`, {id: customer.customerId, lastName: customer.lastName});
    }
    updateCustomerDateOfBirth (customer) {
        return this.patch(`customer`, {id: customer.customerId, dateOfBirth: customer.dateOfBirth});
    }
    
    updatePolicyPolicyNumber(policy) {
        return this.patch(`policy`, {id: policy.policyId, policyNumber: policy.policyNumber});
    }
}

module.exports = PolicyAPI;