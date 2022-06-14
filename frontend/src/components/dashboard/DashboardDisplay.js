
import { Link } from 'react-router-dom'

// make this a 'wrapper' component and treat the modules like { children }
export const DashboardDisplay = () => {
    return (
        <div className="flex justify-around text-center border-2 my-10 p-14 bg-white border-black mx-auto">
            <div className="p-10 border-2 border-red-300">
                <Link to="/customer">
                    <img src="./favicon.ico" alt="customer image here" className="w-48 h-48" />
                    <p>Customer</p>                    
                </Link>
            </div>
            <div className="p-10 border-2 border-green-300">
                <Link to="/policy">
                    <img src="./favicon.ico" alt="policy image here" className="w-48 h-48" />
                    <p>Policy</p>
                </Link>
            </div>
            <div className="p-10 border-2 border-blue-300">
                <Link to="/admin">
                    <img src="./favicon.ico" alt="admin image here" className="w-48 h-48" />
                    <p>Admin</p>
                </Link>
            </div>
        </div>
    )
}