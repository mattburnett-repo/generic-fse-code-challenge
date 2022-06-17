
import { Link } from 'react-router-dom'

export const BackToAdminButton = () => {
    return (
        <div className="btn-admin">
            <Link to="/admin" role="navigation" aria-label='back-to-admin'>
                <p>Back to Admin</p>
            </Link>
        </div>
    )
}