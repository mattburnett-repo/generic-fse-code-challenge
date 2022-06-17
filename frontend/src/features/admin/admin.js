
import { useRef } from 'react'
import { Switch, Route } from 'react-router-dom'

import { FlashMessageDisplay } from '../../components/util/FlashMessageDisplay'

import { EditUsers } from '../admin/edit/editUsers'
import { EditProviders } from '../admin/edit/editProviders'
import { EditInsuranceTypes } from '../admin/edit/editInsuranceTypes'
import { EditPolicyStatuses } from '../admin/edit/editPolicyStatuses'
import  { AdminDisplay } from '../../components/admin/AdminDisplay'

export const Admin = () => {
    const flashRef = useRef()

    return (
        <div className="module-container">
            <h1 className="module-title">Admin</h1>
            <h2 className="module-message">Click an option</ h2>
            <FlashMessageDisplay ref={flashRef} />   
            <div name="dashboard-container">
                <Switch>
                    <Route path="/admin/edit-users" component={EditUsers} />
                    <Route path="/admin/edit-providers" component={EditProviders} />
                    <Route path="/admin/edit-insurance-types" component={EditInsuranceTypes} />
                    <Route path="/admin/edit-policy-statuses" component={EditPolicyStatuses} />
                    {/* need to pass flashRef? <AdminDisplay flashRef={flashRef} /> */}
                    {/* path is relative to what? */}
                    <Route path="/" component={AdminDisplay} />               
                </Switch>                
            </div> 
        </div>
    )
}