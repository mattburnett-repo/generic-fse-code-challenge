
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
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')   
        })
    })
    it('clicks / sorts on the firstName column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('349AbbieKunde2002-06-05T22:00:00.000ZAXAHouseholdPending1999-01-242012-08-132022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('290firstName 05lastName 052002-05-04T22:00:00.000ZAllianzHouseholdCancelled1973-09-012011-04-152022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })
    it('clicks / sorts on the lasttName column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('451AmelyAbbott1993-05-14T22:00:00.000ZERGO Insurance GroupHouseholdCancelled1998-06-062019-10-192022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('290firstName 05lastName 052002-05-04T22:00:00.000ZAllianzHouseholdCancelled1973-09-012011-04-152022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })

    it('clicks / sorts on the date of birth column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('953CassidyOndricka1969-12-31T23:00:00.000ZERGO Insurance GroupHouseholdCancelled1980-07-312019-11-082022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('744NapoleonProhaska2002-11-05T23:00:00.000ZERGO Insurance GroupLiabilityCancelled1997-05-032005-04-242022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
    })
    it('clicks / sorts on the provider column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('2firstName 02lastName 021980-02-01T23:00:00.000ZAXAHouseholdPending2000-02-022002-02-022022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1004OkeyStamm1984-10-09T23:00:00.000ZERGO Insurance GroupLiabilityPending1999-09-052015-09-142022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })
    it('clicks / sorts on the insurance type column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('3firstName 03lastName 031990-03-02T23:00:00.000ZERGO Insurance GroupHealthCancelled2000-03-032003-03-032022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1005WeldonGreen1991-08-18T22:00:00.000ZAllianzLiabilityCancelled1996-04-262006-01-182022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })
    it('clicks / sorts on the policy status column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('1004OkeyStamm1984-10-09T23:00:00.000ZERGO Insurance GroupLiabilityPending1999-09-052015-09-142022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')               
        })
    })
    it('clicks / sorts on the policy number column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('289GersonKessler1990-07-09T22:00:00.000ZAXALiabilityPending1989-03-182005-08-022022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')    
        })
    })
    it('clicks / sorts on the start date column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            
            expect(policyRecords[0].textContent).toBe('715RussellConsidine1971-02-04T23:00:00.000ZAXALiabilityActive1970-01-102004-05-092022-04-02')
           
            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('235PatSwaniawski1997-07-08T22:00:00.000ZERGO Insurance GroupLiabilityCancelled2002-12-252017-06-022022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')      
        })
    })
    it('clicks / sorts on the end date column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}))
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('190LaviniaAnkunding2001-04-08T22:00:00.000ZAXALiabilityActive1996-06-252022-12-202022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')        
        })          
    })
    it('clicks / sorts on the created at column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0].textContent).toBe('1005WeldonGreen1991-08-18T22:00:00.000ZAllianzLiabilityCancelled1996-04-262006-01-182022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(policyRecords[0].textContent).toBe('1firstName 01lastName 011970-01-14T23:00:00.000ZAllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
    })
}); // end sort on all columns
