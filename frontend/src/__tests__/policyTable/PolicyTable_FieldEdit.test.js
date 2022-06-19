
import {render, screen, waitFor, userEvent, MockedProvider, Policies, mockPolicyOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';
import { clearScreenDown } from 'readline';

describe('it should edit one field', () => {
    let theCells = null;
    let theVal = null;

    beforeEach(async () => {
        render(
            <MockedProvider mocks={[mockPolicyOperation]} addTypename={false}>
                <Policies />
            </MockedProvider>
        )
    })

    it('starts with default render', async () => {
        let policyRecords = null
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})                
        })
        // expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02') 
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01') 
    })    

    it('should handle empty policy number value', async () => {
        await waitFor(() => {
            theCells = screen.getAllByRole('textbox', {name: /policyNumber/i})
        })

        theVal = theCells[0]
        expect(theVal).toHaveValue('ALLaaa111')

        userEvent.clear(theVal)
        expect(theVal).toHaveValue('')

        userEvent.tab()
        expect(screen.getByRole('status', {name: /flash-error-display/i})).toBeInTheDocument()
        expect(screen.getByRole('status', {name: /flash-error-display/i})).toHaveTextContent("policyNumber can't be blank")
    })
    it('should enter text into policy number', async () => {
        await waitFor(() => {
            theCells = screen.getAllByRole('textbox', {name: /policyNumber/i});           
        })
        
        theVal = theCells[0];
        expect(theVal).toHaveValue('ALLaaa111')

        userEvent.clear(theVal);
        expect(theVal).toHaveValue('')
        userEvent.type(theVal, "BBBbbbbb2222");
        expect(theVal).toHaveValue('BBBbbbbb2222')    
    }) 
}); // end edit