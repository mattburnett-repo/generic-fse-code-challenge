
import {render, screen, waitFor, MockedProvider, createMemoryHistory, Router, EditPolicyStatuses, mockPolicyStatusesOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('Edit Policy Status component tests', () => {
    let result = null

    beforeEach(() => { 
        render ( 
            <MockedProvider mocks={[mockPolicyStatusesOperation]} addTypename={false}>
                <Router history={createMemoryHistory()}>
                      <EditPolicyStatuses /> 
                </Router>
            </MockedProvider>
        )
    }) 
    describe('Render tests', () => {
        it('should render with a ... loading message', () => {
            result = screen.getByRole('presentation', {name: /loading-text/i})
            expect(result).toHaveTextContent('... loading')
        }) 
        it('should wait for render to complete', async () => {
            await waitFor(() => {
                screen.getByRole('table', {name: /data-table/i})
            })
        })
        it('should render the policy statuses table', async () => {
            await waitFor(() => {
                screen.getByRole('table', {name: /data-table/i})        
            })
            screen.getAllByRole('columnheader', {name: /id/i}) 
            screen.getAllByRole('columnheader', {name: /description/i})    
        })
        it('should show more than zero records', async () => {
            await waitFor(() => {
                result = screen.getAllByRole('row', {name: /^data-record$/i})       
            })
            expect(result.length).toBeGreaterThan(0)    
        })  
    })
    describe.skip('Edit tests', () => {
        it('should edit policy status', () => {})
    })
    describe.skip('Create tests', () => {
        it('should create new policy status', () => {})
    })
    describe.skip('Delete / deactivate tests', () => {
        it('should deactivate / delete policy status', () => {})
    })
})