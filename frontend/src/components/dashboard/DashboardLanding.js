
import { Link } from 'react-router-dom'

import ladderIcon from '../../images/ladderIcon_01.png'

// https://www.iconfinder.com/icons/2292229/chat_communication_conversation_customer_support_happy_support_teamspeak_icon
import customerIcon from '../../images/customer_01.png'
import policyIcon from '../../images/policy_01.png'
import adminIcon from '../../images/admin_01.png'

export const DashboardLanding = () => {
    return (
        <>
            <div className="flex justify-around text-center border-2 my-2 p-5 bg-white border-black mx-auto">
                <div className="p-10 border-2 border-red-300 rounded-lg">
                    <Link to="/customers">
                        <img src={customerIcon} alt="customer image here" className="w-96 h-96" /> 
                        <p className='pt-20 text-3xl'>Customers</p>                    
                    </Link>
                </div>
                <div className="p-10  border-2 border-green-300 rounded-lg">
                    <Link to="/policies">
                        <img src={policyIcon} alt="policy image here" className="w-96 h-96" />
                        <p className='pt-20 text-3xl'>Policies</p>
                    </Link>
                </div>
                <div className="p-10 border-2 border-blue-300 rounded-lg">
                    <Link to="/admin">
                        <img src={adminIcon} alt="admin image here" className="w-96 h-96" />
                        <p className='pt-20 text-3xl'>Admin</p>
                    </Link>
                </div>
            </div>        
        </>
    )
}