
import { Link } from 'react-router-dom'

// https://www.iconfinder.com/icons/2292229/chat_communication_conversation_customer_support_happy_support_teamspeak_icon
import customerIcon from '../../images/customer_01.png'
import policyIcon from '../../images/policy_01.png'
import adminIcon from '../../images/admin_01.png'

export const DashboardLanding = () => {
    return (
        <>
            <div className="dashboard">
                <div className="module-img-container border-orange-300">
                    <Link to="/customers">
                        <img src={customerIcon} alt="customer image here" className="button" /> 
                        <p className='text'>Customers</p>                    
                    </Link>
                </div>
                <div className="module-img-container border-green-300">
                    <Link to="/policies">
                        <img src={policyIcon} alt="policy image here" className="button" />
                        <p className='text'>Policies</p>
                    </Link>
                </div>
                <div className="module-img-container border-blue-300">
                    <Link to="/admin">
                        <img src={adminIcon} alt="admin image here" className="button" />
                        <p className='text'>Admin</p>
                    </Link>
                </div>
            </div>        
        </>
    )
}