
import { within, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
// import 'jest-canvas-mock';

import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

import { MockedProvider } from '@apollo/client/testing'
import { GET_POLICIES, GET_CUSTOMERS } from '../dataSources/gqlOperations'
import { mockPolicyData }  from './mockData/getPolicies'
import { mockCustomerData } from './mockData/getCustomers'

import { Policies } from '../features/policy/policies'
import { Customers } from '../features/customer/customers'
import { Admin } from '../features/admin/admin'

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

module.exports = {
    within,
    render,
    screen,
    waitFor,
    userEvent,
    renderer,
    TestRenderer,
    createMemoryHistory,
    Router,
    // how to export jest-canvas-mock
    MockedProvider,
    GET_POLICIES,
    mockPolicyData,
    Policies,
    Customers,
    Admin,
    mockPolicyOperation,
    mockCustomerOperation
}