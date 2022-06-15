
import {render, screen, waitFor, userEvent, MockedProvider, Policies, mockPolicyOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('PolicyTable component sort tests', () => {
    let policyRecords = null;

    beforeEach(async () => {
        render(
            <MockedProvider mocks={[mockPolicyOperation]} addTypename={false}>
                <Policies />
            </MockedProvider>
        )
    })
    // grab all of the text content for the first row. very unlikely that there will be duplicate
    it('starts with default render', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')   
        })
    })
    it('clicks / sorts on the firstName column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('349-0-0AXAHouseholdPending1999-01-242012-08-132022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('290-0-0AllianzHouseholdCancelled1973-09-012011-04-152022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })
    it('clicks / sorts on the lasttName column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('451-0-ERGO Insurance GroupHouseholdCancelled1998-06-062019-10-192022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('290-0-0AllianzHouseholdCancelled1973-09-012011-04-152022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })

    it('clicks / sorts on the date of birth column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('953-0-0ERGO Insurance GroupHouseholdCancelled1980-07-312019-11-082022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('744--0ERGO Insurance GroupLiabilityCancelled1997-05-032005-04-242022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
    })
    it('clicks / sorts on the provider column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('2-0-0AXAHouseholdPending2000-02-022002-02-022022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1004--ERGO Insurance GroupLiabilityPending1999-09-052015-09-142022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })
    it('clicks / sorts on the insurance type column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('3-0-0ERGO Insurance GroupHealthCancelled2000-03-032003-03-032022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1005-0-AllianzLiabilityCancelled1996-04-262006-01-182022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })
    it('clicks / sorts on the policy status column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('1004--ERGO Insurance GroupLiabilityPending1999-09-052015-09-142022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')               
        })
    })
    it('clicks / sorts on the policy number column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('289-0-AXALiabilityPending1989-03-182005-08-022022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')    
        })
    })
    it('clicks / sorts on the start date column', async () => {
        await waitFor(() => {
            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('715-0-0AXALiabilityActive1970-01-102004-05-092022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('235-0-0ERGO Insurance GroupLiabilityCancelled2002-12-252017-06-022022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')      
        })
    })
    it('clicks / sorts on the end date column', async () => {
        await waitFor(() => {
            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        
            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('190-0-0AXALiabilityActive1996-06-252022-12-202022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')        
        })          
    })
    it('clicks / sorts on the created at column', async () => {
        await waitFor(() => {
            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1005-0-AllianzLiabilityCancelled1996-04-262006-01-182022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
    })
}); // end sort on all columns
