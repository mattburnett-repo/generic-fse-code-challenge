
import {render, screen, userEvent, createMemoryHistory, Router, Admin} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('Admin component basic render / nav tests', () => {
    let result = null

    // beforeEach(async () => {
    //     render(
    //         <MockedProvider mocks={[mockAdminOperation]} addTypename={false}>
    //             <Admin />
    //         </MockedProvider>
    //     )
    // })

    //  https://testing-library.com/docs/example-react-router/
    beforeEach(() => { 
        render ( 
            <Router history={createMemoryHistory()}>
                 <Admin /> 
            </Router>
        )
    }) 

    it('should render the admin options panel', () => {
        screen.getByRole('presentation', {name: /admin-options-panel/i})        

        result = screen.getAllByRole('link')
        expect(result.length).toBe(4)

        // TODO: better to do something like: expect <<aria-label>> .toBeInTheDocument()
        expect(screen.getAllByRole('link', {name: /admin-options-users/i}).length).toBe(1)
        expect(screen.getAllByRole('link', {name: /admin-options-providers/i}).length).toBe(1)
        expect(screen.getAllByRole('link', {name: /admin-options-insurance-types/i}).length).toBe(1)
        expect(screen.getAllByRole('link', {name: /admin-options-policy-statuses/i}).length).toBe(1)
    })

    it('it should click to and render the Edit Users panel, then return to Admin panel', () => {
        result = screen.getAllByRole('link', {name: /admin-options-users/i})[0]
        userEvent.click(result)
        screen.getAllByRole('presentation', {name: /edit-users-panel/i})

        result = screen.getAllByRole('navigation', {name: /back-to-admin/i})[0]
        userEvent.click(result)
        screen.getByRole('presentation', {name: /admin-options-panel/i})  
    })
    it('it should click to and render the Edit Insurance Types panel, then return to Admin panel', () => {
        result = screen.getAllByRole('link', {name: /admin-options-insurance-types/i})[0]
        userEvent.click(result)
        screen.getAllByRole('presentation', {name: /edit-insurance-types-panel/i})

        result = screen.getAllByRole('navigation', {name: /back-to-admin/i})[0]
        userEvent.click(result)
        screen.getByRole('presentation', {name: /admin-options-panel/i})  
    })
    it('it should click to and render the Edit Providers panel, then return to Admin panel', () => {
        result = screen.getAllByRole('link', {name: /admin-options-providers/i})[0]
        userEvent.click(result)
        screen.getAllByRole('presentation', {name: /edit-providers-panel/i})

        result = screen.getAllByRole('navigation', {name: /back-to-admin/i})[0]
        userEvent.click(result)
        screen.getByRole('presentation', {name: /admin-options-panel/i})  
    })
    it('it should click to and render the Edit Policy Statuses panel, then return to Admin panel', () => {
        result = screen.getAllByRole('link', {name: /admin-options-policy-statuses/i})[0]
        userEvent.click(result)
        screen.getAllByRole('presentation', {name: /edit-policy-statuses-panel/i})

        result = screen.getAllByRole('navigation', {name: /back-to-admin/i})[0]
        userEvent.click(result)
        screen.getByRole('presentation', {name: /admin-options-panel/i})  
    })
})