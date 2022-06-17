

import {render, screen, waitFor, MockedProvider, Admin, mockAdminOperation} from '../../test/genericFseTestConfig'
import 'jest-canvas-mock';
import { hasUncaughtExceptionCaptureCallback } from 'process';

describe('Admin component basic render tests', () => {
    let result = null

    // beforeEach(async () => {
    //     render(
    //         <MockedProvider mocks={[mockAdminOperation]} addTypename={false}>
    //             <Admin />
    //         </MockedProvider>
    //     )
    // })

    beforeEach(() => { render ( <Admin /> )})

    it('should render the admin options panel', () => {
        screen.getByRole('presentation', {name: /admin-options-panel/i})        

        let options = screen.getAllByRole('button')
        expect(options.length).toBe(4)

        // TODO: better to do:
        //      expect <<aria-label>> .toBeInTheDocument()
        expect(options[0]).toHaveTextContent('Create / Edit Users')
        expect(options[1]).toHaveTextContent('Create / Edit Providers')
        expect(options[2]).toHaveTextContent('Create / Edit Insurance Types')
        expect(options[3]).toHaveTextContent('Create / Edit Policy Statuses')
    })
})