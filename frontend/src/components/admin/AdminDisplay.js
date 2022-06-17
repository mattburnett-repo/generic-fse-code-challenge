
export const AdminDisplay = (props) => {
    const flashRef = props.flashRef

    return (
        <div className="border border-black mx-auto text-center py-5 mb-5 w-1/4 bg-white" role="presentation" aria-label="admin-options-panel">
            <div className='py-2'>
                <button type="button" className="btn-admin" aria-label="admin-options-users">Create / Edit Users</button>
            </div>
            <div className='py-2'>
                <button type="button" className="btn-admin" aria-label="admin-options-providers">Create / Edit Providers</button>   
            </div>      
            <div className='py-2'>
                <button type="button" className="btn-admin" aria-label="admin-options-insuranceTypes">Create / Edit Insurance Types</button>
            </div>
            <div className='py-2'>
                <button type="button" className="btn-admin" aria-label="admin-options-policyStatuses">Create / Edit Policy Statuses</button>
            </div>    
        </div>
    )
}