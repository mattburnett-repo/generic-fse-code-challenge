
import {render, screen, userEvent, waitFor, fail, createMemoryHistory, Router, mockUserData} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

import { EditUsersDisplay } from '../../components/admin/edit/editUsersDisplay'

describe('Edit User component tests', () => {
    let result = null

    beforeEach(() => { 
        render ( 
            <Router history={createMemoryHistory()}>
                <EditUsersDisplay tableData={mockUserData} /> 
                {/* <EditUsers />  */}
            </Router>              
        )
    }) 
    describe('Render tests', () => {
        it('should wait for render to complete', async () => {
            await waitFor(() => {
                screen.getByRole('table', {name: /data-table/i})
            })
        })
        it('should render the users table', async () => {
            await waitFor(() => {
                screen.getByRole('table', {name: /data-table/i})        
            })
            screen.getAllByRole('columnheader', {name: /userId/i}) 
            screen.getAllByRole('columnheader', {name: /accessLevel/i})    
        })
        it('should show more than zero records', async () => {
            await waitFor(() => {
                result = screen.getAllByRole('row', {name: /^data-record$/})       
            })
            expect(result.length).toBeGreaterThan(0)    
        })  
    })
    // TODO: finish these out in all tests / components
    // describe.skip('Edit tests', () => {
    //     it('should edit username', () => {})
    //     it('should edit password', () => {})
    //     it('should edit accessLevel', () => {})
    // })
    // describe.skip('Create tests', () => {
    //     it('should create new user', () => {})
    // })
    // describe.skip('Delete / deactivate tests', () => {
    //     it('should deactivate / delete user', () => {})
    // })
})