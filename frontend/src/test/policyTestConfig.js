
import { within, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import 'jest-canvas-mock';

import { MockedProvider } from '@apollo/client/testing'
import { GET_POLICIES } from '../dataSources/gqlOperations'
import { mockPolicyData }  from './mockData/getPolicies'

import { Policies } from '../features/policy/policies'

const mockOperation = {      
    request: {
        query: GET_POLICIES,
    },
    result: mockPolicyData
}

module.exports = {
    within,
    render,
    screen,
    waitFor,
    userEvent,
    renderer,
    TestRenderer,
    // how to export jest-canvas-mock
    MockedProvider,
    GET_POLICIES,
    mockPolicyData,
    Policies,
    mockOperation
}