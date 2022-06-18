
import { within, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import { fail } from 'assert';

import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

import { MockedProvider } from '@apollo/client/testing'
import { GET_POLICIES, GET_CUSTOMERS, GET_INSURANCE_TYPES, GET_POLICY_STATUSES, GET_PROVIDERS } from '../dataSources/gqlOperations'
import { mockPolicyData }  from './mockData/getPolicies'
import { mockCustomerData } from './mockData/getCustomers'
import { mockUserData } from './mockData/getUsers'
import { mockInsuranceTypesData } from './mockData/getInsuranceTypes'
import { mockPolicyStatusesData } from './mockData/getPolicyStatuses'
import { mockProvidersData } from './mockData/getProviders'

import { Policies } from '../features/policy/policies'
import { Customers } from '../features/customer/customers'
import { Admin } from '../features/admin/admin'

// import { EditUsers } from '../features/admin/edit/editUsers'
import { EditProviders } from '../features/admin/edit/editProviders'
import { EditInsuranceTypes } from '../features/admin/edit/editInsuranceTypes'
import { EditPolicyStatuses } from '../features/admin/edit/editPolicyStatuses'

// import { EditUsersDisplay } from '../../components/admin/edit/editUsersDisplay'
// import { EditProvidersDisplay } from '../components/admin/edit/editProvidersDisplay'
// import { EditInsuranceTypesDisplay } from '../components/admin/edit/editInsuranceTypesDisplay'
// import { EditPolicyStatusesDisplay } from '../components/admin/edit/editPolicyStatusesDisplay'

const mockPolicyOperation = {      
    request: {
        query: GET_POLICIES,
    },
    result: mockPolicyData
}
const mockCustomerOperation = {      
    request: {
        query: GET_CUSTOMERS,
    },
    result: mockCustomerData
}
const mockInsuranceTypesOperation = {      
    request: {
        query: GET_INSURANCE_TYPES,
    },
    result: mockInsuranceTypesData
}
const mockPolicyStatusesOperation = {      
    request: {
        query: GET_POLICY_STATUSES,
    },
    result: mockPolicyStatusesData
}
const mockProvidersOperation = {      
    request: {
        query: GET_PROVIDERS,
    },
    result: mockProvidersData
}

module.exports = {
    within,
    render,
    screen,
    waitFor,
    userEvent,
    renderer,
    TestRenderer,
    fail,
    createMemoryHistory,
    Router,
    MockedProvider,
    GET_CUSTOMERS,
    GET_POLICIES,
    GET_POLICY_STATUSES,
    GET_INSURANCE_TYPES,
    GET_PROVIDERS,
    mockPolicyData,
    mockUserData,
    mockInsuranceTypesData,
    mockPolicyStatusesData,
    mockProvidersData,
    Policies,
    Customers,
    Admin,
    // EditUsersDisplay,
    EditInsuranceTypes,
    // EditProvidersDisplay,
    EditPolicyStatuses,
    EditProviders,
    mockPolicyOperation,
    mockCustomerOperation,
    mockInsuranceTypesOperation,
    mockPolicyStatusesOperation,
    mockProvidersOperation
}