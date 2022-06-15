
// https://github.com/testing-library/jest-dom

import {renderer, MockedProvider, Policies, mockPolicyOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('PolicyTable snapshot', () => {
    it('creates a snapshot', () => {
        const tree = renderer.create(
            <MockedProvider mocks={[mockPolicyOperation]} addTypename={false}>
                <Policies />
            </MockedProvider>
        )
        expect(tree).toMatchSnapshot();  
    });
}) // end PolicyTable snapshot

