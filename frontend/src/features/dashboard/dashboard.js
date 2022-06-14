
// entry point for policy data display
// pulls together all needed parts

import { NavBar } from '../../components/nav/NavBar'
import { DashboardDisplay } from "../../components/dashboard/DashboardDisplay"

import { Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from '../../components/ProtectedRoute'

import { Customers } from '../customer/customers'
import { Policies } from '../policy/policies'
import { Admin } from '../admin/admin'

export const Dashboard = () => {
    return (
        <div className="bg-gray-200 my-24 mx-20 px-2 border-2 border-black">
            <NavBar />
            <DashboardDisplay /> 
            <Switch>
                <Route path="/customers" component={Customers} />
                <Route path="/polices" component={Policies} />
                <Route path="/admin" component={Admin} />               
            </Switch>

        </div>
    )
}