
import {render, screen, waitFor, MockedProvider, Customers, mockCustomerOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('Customers component basic render tests', () => {
    let customerRecords = null;
    let result = null

    beforeEach(async () => {
        render(
            <MockedProvider mocks={[mockCustomerOperation]} addTypename={false}>
                <Customers />
            </MockedProvider>
        )
    })

    it('should render with a ... loading message', () => {
        result = screen.getByRole('presentation', {name: /loading-text/i})
        expect(result).toHaveTextContent('... loading')
    }) 
    it('should wait for render to complete', async () => {
        await waitFor(() => {
            screen.getByRole('table', {name: /data-table/i})
        })
    })
    it('should render the customer table', async () => {
        await waitFor(() => {
            screen.getByRole('table', {name: /data-table/i})        
        })
        screen.getByRole('columnheader', {name: /firstName/i})
        screen.getByRole('columnheader', {name: /lastName/})      
        screen.getByRole('columnheader', {name: /dateOfBirth/})    
    })
    it('should show 10 records', async () => {
        await waitFor(() => {
            customerRecords = screen.getAllByRole('row', {name: /^data-record$/i})       
        })
        expect(customerRecords.length).toBe(10)    
    })  
})