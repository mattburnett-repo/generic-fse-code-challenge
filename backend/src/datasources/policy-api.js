
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
}

module.exports = PolicyAPI;