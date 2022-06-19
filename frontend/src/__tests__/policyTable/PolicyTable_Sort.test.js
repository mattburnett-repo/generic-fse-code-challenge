
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
        })

        expect(policyRecords.length).toBe(10)  
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the firstName column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})               
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('349AbbieKunde2002-06-0')

        userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('290firstName 05lastName 052002-05-0')

        userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i}) 
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the lasttName column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})               
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        expect(policyRecords[0].textContent).toContain('451AmelyAbbott1993-05-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('290firstName 05lastName 052002-05-0')

        userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })

    it('clicks / sorts on the date of birth column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        expect(policyRecords[0].textContent).toContain('953CassidyOndricka')

        userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('744NapoleonProhaska2002-11-0')

        userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the provider column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})                
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        expect(policyRecords[0].textContent).toContain('2firstName 02lastName 021980-02-0')

        userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1004OkeyStamm1984-10')

        userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the insurance type column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})               
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        expect(policyRecords[0].textContent).toContain('3firstName 03lastName 031990-03-0')
        
        userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1005WeldonGreen1991-08-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the policy status column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})              
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1004OkeyStamm1984-10')

        userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the policy number column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})   
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
        
        userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('289GersonKessler1990-07')
        
        userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1') 
    })
    it('clicks / sorts on the start date column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})     
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)
        
        expect(policyRecords[0].textContent).toContain('715RussellConsidine1971-02-0')
       
        userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('235PatSwaniawski1997-07-0')

        userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the end date column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})       
        })          

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}))
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('190LaviniaAnkunding2001-04-0')

        userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
    it('clicks / sorts on the created at column', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        })

        expect(policyRecords.length).toBe(10)
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords.length).toBe(10)

        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1005WeldonGreen1991-08-1')

        userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
        policyRecords = screen.getAllByRole('row', {name: /^data-record$/i})
        expect(policyRecords[0].textContent).toContain('1firstName 01lastName 011970-01-1')
    })
}); // end sort on all columns
