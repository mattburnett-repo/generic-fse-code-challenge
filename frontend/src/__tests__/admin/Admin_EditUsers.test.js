
import {render, screen, userEvent, waitFor, fail, MockedProvider, createMemoryHistory, Router, EditUsers, mockAdminOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';

describe('Edit User component tests', () => {
    let result = null

    beforeEach(() => { 
        render ( 
            <Router history={createMemoryHistory()}>
                 <EditUsers /> 
            </Router>
        )
    }) 

    it('should render the Edit Users panel', () => {
        screen.getByRole('presentation', {name: /edit-users-panel/i})
    })
    it('should render rows of users', () => {
        fail()
    })
})