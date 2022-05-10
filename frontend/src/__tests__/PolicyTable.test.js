import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { mockPolicyData }  from '../test/mockData/getPolicies'

import { Table } from '../features/policyTable'

describe('PolicyTable component tests', () => {
    let policyRecords = null;

    beforeEach(() => render(<Table tableData={mockPolicyData} />))
    // afterEach(() => screen = null) // do we even use this anymore?
    
    it('should render the policy table', () => {
        screen.getByRole('table', {name: /policy-table/i})
        screen.getByRole('columnheader', {name: /Customer/i})
        screen.getByRole('columnheader', {name: /Policy/})
    })
    it('should show 10 records with default pagination', async () => {
        const policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
        expect(policyRecords.length).toBe(10)
    })

    // grab all of the text content for the first row. very unlikely that there will be duplicates

    describe('should sort on all columns', () => {
        it('starts with default render', () => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')     
        })
        it('clicks / sorts on the firstName column', () => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('2002-06-06AXAHouseholdPending1999-01-242012-08-132022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('2002-05-05AllianzHouseholdCancelled1973-09-012011-04-152022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^firstName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the lasttName column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1993-05-15ERGO Insurance GroupHouseholdCancelled1998-06-062019-10-192022-04-0')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('2002-05-05AllianzHouseholdCancelled1973-09-012011-04-152022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^lastName$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the date of birth column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('2002-11-06ERGO Insurance GroupLiabilityCancelled1997-05-032005-04-242022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^dateOfBirth$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the provider column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1980-02-02AXAHouseholdPending2000-02-022002-02-022022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1984-10-10ERGO Insurance GroupLiabilityPending1999-09-052015-09-142022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^provider$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the insurance type column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1990-03-03ERGO Insurance GroupHealthCancelled2000-03-032003-03-032022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1991-08-19AllianzLiabilityCancelled1996-04-262006-01-182022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^insuranceType$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the policy status column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
            
            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1984-10-10ERGO Insurance GroupLiabilityPending1999-09-052015-09-142022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyStatus$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the policy number column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        
            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1990-07-10AXALiabilityPending1989-03-182005-08-022022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^policyNumber$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the start date column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1971-02-05AXALiabilityActive1970-01-102004-05-092022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1997-07-09ERGO Insurance GroupLiabilityCancelled2002-12-252017-06-022022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^startDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the end date column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        
            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('2001-04-09AXALiabilityActive1996-06-252022-12-202022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^endDate$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
        it('clicks / sorts on the created at column', () => {
            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)

            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1991-08-19AllianzLiabilityCancelled1996-04-262006-01-182022-04-02')

            userEvent.click(screen.getByRole('columnheader', {name: /^createdAt$/i}));
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')
        })
    }); // end sort on all columns

    describe('should paginate through mock data', () => {
        let pageIndicator = null;

        it('starts with default render', () => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')  
        
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 101')
        })    
        it('goes forward one page', () => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-forward$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1978-12-14ERGO Insurance GroupHouseholdPending1981-03-192021-12-302022-04-02')  
        
            expect(pageIndicator).toHaveTextContent('Page 2 of 101')
        })
        it('goes to the end of the record set', () => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-end$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1981-11-15AllianzHouseholdActive1989-06-212021-07-232022-04-02')  
        
            expect(pageIndicator).toHaveTextContent('Page 101 of 101')
        })
        it('goes back one page', () => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-end$/i}));
            userEvent.click(screen.getByRole('button', {name: /^pagination-back$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1986-04-12AllianzLiabilityActive1977-03-282006-07-232022-04-02')  
        
            expect(pageIndicator).toHaveTextContent('Page 100 of 101')
        })
        it('goes back to the beginning', () => {
            userEvent.click(screen.getByRole('button', {name: /^pagination-start$/i}));
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')  
        
            expect(pageIndicator).toHaveTextContent('Page 1 of 101')
        })
    }); // end paginate

    describe('should go to different page numbers', () => {
        let gotoPageNumber = '';
        let pageIndicator = '';

        it('starts with default render', () => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')     
            
            gotoPageNumber = screen.getByRole('spinbutton', {name: /pagination-goto-page-number/i});
            expect(gotoPageNumber).toHaveValue(1);
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 101')
        })    
        it('goes to page 101', () => {
            gotoPageNumber = screen.getByRole('spinbutton', {name: /pagination-goto-page-number/i});
            userEvent.clear(gotoPageNumber);
            userEvent.type(gotoPageNumber, '101');

            expect(gotoPageNumber).toHaveValue(101);
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 101 of 101')

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1981-11-15AllianzHouseholdActive1989-06-212021-07-232022-04-02')       
        })
        it('goes back to page 1', () => {
            gotoPageNumber = screen.getByRole('spinbutton', {name: /pagination-goto-page-number/i});
            userEvent.clear(gotoPageNumber);
            userEvent.type(gotoPageNumber, '1');

            expect(gotoPageNumber).toHaveValue(1);
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 101')

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')     
        })
    }); // end go to different page numbers

    describe('it should change pagination pageSize', () => {
        let pageSizeSelector = null;
        let pageIndicator = null;

        it('starts with default render', () => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            pageSizeSelector = screen.getByRole('combobox', {name: /pagination-page-size/i});

            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')   

            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 101')
            
            expect(screen.getAllByRole('option').length).toBe(5)
            expect(screen.getByRole('option', { name: 'Show 10' }).selected).toBe(true)
        })
        it('changes page size to 20', () => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 20' }))

            expect(screen.getByRole('option', { name: 'Show 20' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(20)
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02') 

            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 51')
        })
        it('changes page size to 30', () => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 30' }))

            expect(screen.getByRole('option', { name: 'Show 30' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(30)
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 34')
        })
        it('changes page size to 40', () => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 40' }))

            expect(screen.getByRole('option', { name: 'Show 40' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(40)
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 26')
        })
        it('changes page size to 50', () => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 50' }))

            expect(screen.getByRole('option', { name: 'Show 50' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(50)
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 21')
        })
        it('changes page size back to 10', () => {
            userEvent.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', { name: 'Show 10' }))

            expect(screen.getByRole('option', { name: 'Show 10' }).selected).toBe(true)

            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords.length).toBe(10)
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02') 
            
            pageIndicator = screen.getByRole('presentation', {name: /page-indicator/i});
            expect(pageIndicator).toHaveTextContent('Page 1 of 101')
        })
    });

    describe('it should edit three fields', () => {
        let theCells = null;
        let theVal = null;

        it('starts with default render', () => {
            policyRecords = screen.getAllByRole('row', {name: /^policy-record$/i})
            expect(policyRecords[0]).toHaveTextContent('1970-01-01AllianzLiabilityActive2000-01-012001-01-012022-04-02')     
        })    

        it('should enter text into first name', () => {
            theCells = screen.getAllByRole('textbox', {name: /firstName/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('firstName 01')

            userEvent.clear(theVal);
            userEvent.type(theVal, "test first name");
            theCells = screen.getAllByRole('textbox', {name: /firstName/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('test first name')

        })   
        it('should enter text into last name', () => {
            theCells = screen.getAllByRole('textbox', {name: /lastName/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('lastName 01')

            userEvent.clear(theVal);
            userEvent.type(theVal, "test last name");
            theCells = screen.getAllByRole('textbox', {name: /lastName/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('test last name')
        }) 
        it('should enter text into policy number', () => {
            theCells = screen.getAllByRole('textbox', {name: /policyNumber/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('ALLaaa111')

            userEvent.clear(theVal);
            userEvent.type(theVal, "BBBbbbbb2222");
            theCells = screen.getAllByRole('textbox', {name: /policyNumber/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('BBBbbbbb2222')
        }) 
    }); // end edit

    describe.skip('it should tab between editable fields', () => {})

    it('creates a snapshot', () => {
        const tree = renderer.create(<Table tableData={mockPolicyData} />).toJSON();
        expect(tree).toMatchSnapshot();  
    });
}) // end PolicyTable component tests

