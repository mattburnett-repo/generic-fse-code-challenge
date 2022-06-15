
import {render, screen, waitFor, userEvent, MockedProvider, Policies, mockPolicyOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('PolicyTable component pagination tests', () => {
    let policyRecords = null;

    beforeEach(async () => {
        render(
            <MockedProvider mocks={[mockPolicyOperation]} addTypename={false}>
                <Policies />
            </MockedProvider>
        )
    })

    let pageIndicator = null;

    it('starts with default render', async () => {
        await waitFor(() => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 1 of 101 ')              
        })
    })    
    it('goes forward one page', async () => {
        await waitFor(() => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-forward$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('11--ERGO Insurance GroupHouseholdPending1981-03-192021-12-302022-04-02')  
        
            expect(pageIndicator.textContent).toBe('Page 2 of 101 ')
        })
    })
    it('goes to the end of the record set', async () => {
        await waitFor(() => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-end$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1001--AllianzHouseholdActive1989-06-212021-07-232022-04-02')  
        
            expect(pageIndicator.textContent).toBe('Page 101 of 101 ')
        })
    })
    it('goes back one page', async () => {
        await waitFor(() => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-end$/i}));
            userEvent.click(screen.getByRole('button', {name: /^pagination-back$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('991-0-AllianzLiabilityActive1977-03-282006-07-232022-04-02')  
        
            expect(pageIndicator.textContent).toBe('Page 100 of 101 ')                
        })
    })
    it('goes back to the beginning', async () => {
        await waitFor(() => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-start$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')  
        
            expect(pageIndicator.textContent).toBe('Page 1 of 101 ')                
        })
    })

    let gotoPageNumber = '';

    it('goes to page 101', async () => {
        await waitFor(() => {
            gotoPageNumber = screen.getByRole('spinbutton', {name: /pagination-goto-page-number/i});
            userEvent.clear(gotoPageNumber);
            userEvent.type(gotoPageNumber, '101');

            expect(gotoPageNumber).toHaveValue(101);
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 101 of 101 ')

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1001--AllianzHouseholdActive1989-06-212021-07-232022-04-02')                  
        })
    })
    it('goes back to page 1', async () => {
        await waitFor(() => {
            gotoPageNumber = screen.getByRole('spinbutton', {name: /pagination-goto-page-number/i});
            userEvent.clear(gotoPageNumber);
            userEvent.type(gotoPageNumber, '1');

            expect(gotoPageNumber).toHaveValue(1);
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 1 of 101 ')

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02')                
        })
    })

    it('changes page size to 20', async () => {
        await waitFor(() => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 20' }))
            expect(screen.getByRole('option', { name: 'Show 20' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(20)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02') 

            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 1 of 51 ')                
        })
    })
    it('changes page size to 30', async () => {
        await waitFor(() => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 30' }))
            expect(screen.getByRole('option', { name: 'Show 30' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(30)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 1 of 34 ')                
        })
    })
    it('changes page size to 40', async () => {
        await waitFor(() => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 40' }))
            expect(screen.getByRole('option', { name: 'Show 40' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(40)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 1 of 26 ')                
        })
    })
    it('changes page size to 50', async () => {
        await waitFor(() => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 50' }))
            expect(screen.getByRole('option', { name: 'Show 50' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(50)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 1 of 21 ')                
        })
    })
    it('changes page size back to 10', async () => {
        await waitFor(() => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 10' }))
            expect(screen.getByRole('option', { name: 'Show 10' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0].textContent).toBe('1-0-AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator.textContent).toBe('Page 1 of 101 ')                
        })
    })
})