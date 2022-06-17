
import { useRef } from 'react'
// import { FlashMessageDisplay } from '../../components/util/FlashMessageDisplay'

export const AdminDisplay = (props) => {
    const flashRef = props.flashRef

    return (
        <div className="border border-black mx-auto text-center py-5 mb-5 w-1/4" role="presentation" aria-label="admin-options-panel">
            <div className='py-3'>
                <button type="button" className="px-4 p-2 border-2 border-blue-300 bg-blue-100 w-72 hover:bg-blue-300 active:bg-blue-400 rounded" aria-label="admin-options-users">Create / Edit Users</button>
            </div>
            <div className='py-3'>
                <button type="button" className="px-4 p-2 border-2 border-blue-300 bg-blue-100 w-72 hover:bg-blue-300 active:bg-blue-400 rounded" aria-label="admin-options-providers">Create / Edit Providers</button>   
            </div>      
            <div className='py-3'>
                <button type="button" className="px-4 p-2 border-2 border-blue-300 bg-blue-100 w-72 hover:bg-blue-300 active:bg-blue-400 rounded" aria-label="admin-options-insuranceTypes">Create / Edit Insurance Types</button>
            </div>
            <div className='py-3'>
                <button type="button" className="px-4 p-2 border-2 border-blue-300 bg-blue-100 w-72 hover:bg-blue-300 active:bg-blue-400 rounded" aria-label="admin-options-policyStatuses">Create / Edit Policy Statuses</button>
            </div>    
        </div>
    )
}