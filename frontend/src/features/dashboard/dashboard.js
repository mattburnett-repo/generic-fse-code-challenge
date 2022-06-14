
// entry point for app
// pulls together all needed parts

import { Route, Switch } from 'react-router-dom'

import { NavBar } from '../../components/nav/NavBar'

import { DashboardLanding } from "../../components/dashboard/DashboardLanding"
import { Customers } from '../customer/customers'
import { Policies } from '../policy/policies'
import { Admin } from '../admin/admin'

export const Dashboard = () => {
    return (
        <div className="bg-gray-200 my-5 mx-20 px-2 border-2 border-black">
            <NavBar />
            
            <div name="dashboard-container">
                <Switch>
                    <Route path="/dashboard" component={DashboardLanding} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/policies" component={Policies} />
                    <Route path="/admin" component={Admin} />               
                </Switch>                
            </div>
        </div>
    )
}