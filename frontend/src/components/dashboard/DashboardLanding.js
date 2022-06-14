
import { Link } from 'react-router-dom'

import ladderIcon from '../../images/ladderIcon_01.png'

export const DashboardLanding = () => {
    return (
        <>
            <div className="flex justify-around text-center border-2 my-5 p-5 bg-white border-black mx-auto">
                <div className="p-2 border-2 border-red-300 rounded-lg">
                    <Link to="/customers">
                        <img src={ladderIcon} alt="customer image here" className="w-96 h-96" /> 
                        <p>Customers</p>                    
                    </Link>
                </div>
                <div className="p-2 border-2 border-green-300 rounded-lg">
                    <Link to="/policies">
                        <img src={ladderIcon} alt="policy image here" className="w-96 h-96" />
                        <p>Policies</p>
                    </Link>
                </div>
                <div className="p-2 border-2 border-blue-300 rounded-lg">
                    <Link to="/admin">
                        <img src={ladderIcon} alt="admin image here" className="w-96 h-96" />
                        <p>Admin</p>
                    </Link>
                </div>
            </div>        
        </>
    )
}