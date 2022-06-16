

// https://github.com/testing-library/jest-dom

import {renderer, MockedProvider, Customers, mockCustomerOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('CustomerTable snapshot', () => {
    it('creates a snapshot', () => {
        const tree = renderer.create(
            <MockedProvider mocks={[mockCustomerOperation]} addTypename={false}>
                <Customers />
            </MockedProvider>
        )
        expect(tree).toMatchSnapshot();  
    });
}) // end PolicyTable snapshot