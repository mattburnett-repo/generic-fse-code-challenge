
// entry point for policy data display
// pulls together all needed parts

import { NavBar } from '../../components/nav/NavBar'
import { DashboardDisplay } from "../../components/dashboard/DashboardDisplay"

export const Dashboard = () => {
    return (
        <div className="bg-gray-200 my-24 mx-20 px-2 border-2 border-black">
            <NavBar />
            <DashboardDisplay /> 
        </div>
    )
}