
import {render, screen, waitFor, MockedProvider, Policies, mockOperation} from '../test/policyTestConfig'
import 'jest-canvas-mock';

describe('PolicyTable component basic render tests', () => {
    let policyRecords = null;
    let  result = null

    beforeEach(async () => {
        render(
            <MockedProvider mocks={[mockOperation]} addTypename={false}>
                <Policies />
            </MockedProvider>
        )
    })

    it('should render with a ... loading message', () => {
        result = screen.getByRole('presentation', {name: /loading-text/i})
        expect(result).toHaveTextContent('... loading')
    })
    it('should wait for render to complete', async () => {
        await waitFor(() => {
            result = screen.getByRole('table', {name: /policy-table/i})
        })
    })
    it('should render the policy table', async () => {
        await waitFor(() => {
            screen.getByRole('table', {name: /policy-table/i})
            screen.getByRole('columnheader', {name: /Customer/i})
            screen.getByRole('columnheader', {name: /Policy/})              
        })
    })
    it('should show 10 records', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)            
        })
    })        
})