
import {render, screen, waitFor, userEvent, MockedProvider, Customers, mockCustomerOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('it should edit three fields', () => {
    let customerRecords = null;
    let theCells = null;
    let theVal = null;

    beforeEach(async () => {
        render(
            <MockedProvider mocks={[mockCustomerOperation]} addTypename={false}>
                <Customers />
            </MockedProvider>
        )
    })

    it('starts with default render', async () => {
        await waitFor(() => {
            customerRecords = screen.getAllByRole('row', {name: /^data-record$/i})
            expect(customerRecords[0].textContent).toBe('1-0-0')                 
        })
    })

    it('should handle empty first name value', async () => {
        await waitFor(() => {
            theCells = screen.getAllByRole('textbox', {name: /firstName/i})
            theVal = theCells[0]
            expect(theVal).toHaveValue('firstName 01')
        })

        userEvent.clear(theVal)
        expect(theVal).toHaveValue('')

        userEvent.tab()
        expect(screen.getByRole('status', {name: /flash-error-display/i})).toBeInTheDocument()
        expect(screen.getByRole('status', {name: /flash-error-display/i})).toHaveTextContent("firstName can't be blank")
    })
    it('should enter text into first name', async () => {  
        await waitFor(() => {
            theCells = screen.getAllByRole('textbox', {name: /firstName/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('firstName 01')

            userEvent.clear(theVal);
            expect(theVal).toHaveValue('')
            userEvent.type(theVal, 'test first name');
            expect(theVal).toHaveValue('test first name')                
        })
    })  
    it('should handle empty last name value', async () => {
        await waitFor(() => {
            theCells = screen.getAllByRole('textbox', {name: /lastName/i})
            theVal = theCells[0]
            expect(theVal).toHaveValue('lastName 01')
        })

        userEvent.clear(theVal)
        expect(theVal).toHaveValue('')

        userEvent.tab()
        expect(screen.getByRole('status', {name: /flash-error-display/i})).toBeInTheDocument()
        expect(screen.getByRole('status', {name: /flash-error-display/i})).toHaveTextContent("lastName can't be blank")
    })
    it('should enter text into last name', async () => {
        await waitFor(() => {
            theCells = screen.getAllByRole('textbox', {name: /lastName/i});
            theVal = theCells[0];
            expect(theVal).toHaveValue('lastName 01')

            userEvent.clear(theVal);
            expect(theVal).toHaveValue('')
            userEvent.type(theVal, "test last name");
            expect(theVal).toHaveValue('test last name')               
        })
    }) 
        // https://stackoverflow.com/questions/61949443/how-to-test-ant-design-date-picker-using-testing-library-react#62804579
    // https://github.com/wojtekmaj/react-date-picker#user-guide
    it.skip('should edit date of birth from the calendar popup', async () => {
        // const component = TestRenderer.create(
        //     <MockedProvider mocks={[mockOperation]} addTypename={false}>
        //         <Policies />
        //     </MockedProvider>
        // )

        render (
            <MockedProvider mocks={[mockOperation]} addTypename={false}>
                <Policies />
            </MockedProvider>
        )

        await new Promise(resolve => setTimeout(resolve, 200));
        // await waitFor(() => {
            // theCells  = getByText('date')
            // theCells = screen.queryAllByLabelText('dateOfBirth') // buttons / SVG images
            // let blorb = theCells.queryAllByLabelText('dateOfBirth')
            // theCells = screen.queryAllByRole('textbox') // doesn't go deep enough into DOM to get ^^^. only gives firstName, lastName, policyNumber
            // theCells = await screen.findAllByName('date')

            // theCells = screen.getElementsByClassName('react-date-picker__inputGroup') // nope
            // let theCells = screen.getAllByRole('button', {name: /^dateOfBirth$/i}) // same as queryAllByLabelText('dateOfBirth')

            // let theCell = theCells[1]

            theCells = screen.queryAllByTestId('asdf') // nested divs. four deep gets you to <input /> that we want

            // let theTarget = within(theCells).queryAllByRole('textbox')

            // let theButtons = screen.queryAllByRole('button', {name: /dateOfBirth/i})
            // expect(theButtons.length).toBe(10)
            // let theButton = theButtons[0]
            
            // userEvent.click(theCells)

            screen.debug(theCells)
            // console.log(theCells)
        // })
    })
})