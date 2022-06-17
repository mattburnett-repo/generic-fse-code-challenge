
import { Link } from 'react-router-dom'

export const AdminDisplay = (props) => {
    const flashRef = props.flashRef

    return (
        <div className="auth-container my-3 mb-5 bg-white" role="presentation" aria-label="admin-options-panel">
            <div className="pt-4">
                <div className="btn-admin">
                    <Link to="/admin/edit-users" aria-label="admin-options-users" >
                        Create / Edit Users
                    </Link>                  
                </div>
            </div>
            <div className='pt-4'>
                <div className="btn-admin">
                    <Link to="/admin/edit-providers" aria-label="admin-options-providers">
                        Create / Edit Providers
                    </Link> 
                </div>
            </div>      
            <div className='pt-4'>
                <div className="btn-admin">
                    <Link to="/admin/edit-insurance-types" aria-label="admin-options-insurance-types">
                        Create / Edit Insurance Types
                    </Link>
                </div>
            </div>
            <div className='py-4'>
                <div className="btn-admin">
                    <Link to="/admin/edit-policy-statuses" aria-label="admin-options-policy-statuses">
                        Create / Edit Policy Statuses
                    </Link>
                </div>
            </div>    
        </div>
    )
}