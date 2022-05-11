
// https://github.com/testing-library/jest-dom

import {renderer, MockedProvider, Policies, mockOperation} from '../test/polityTestConfig'
import 'jest-canvas-mock';

describe('PolicyTable snapshot', () => {
    it('creates a snapshot', () => {
        const tree = renderer.create(
            <MockedProvider mocks={[mockOperation]} addTypename={false}>
                <Policies />
            </MockedProvider>
        )
        expect(tree).toMatchSnapshot();  
    });
}) // end PolicyTable snapshot

