
import { useRef } from 'react'
import { FlashMessageDisplay } from '../../components/util/FlashMessageDisplay'
import  { AdminDisplay } from '../../components/admin/AdminDisplay'

export const Admin = () => {
    const flashRef = useRef()

    return (
        <div className="module-container">
            <h1 className="module-title">Admin</h1>
            <h2 className="module-message">Click an option</ h2>
            <h3 className="flash-message-container" role="status" aria-label="flash-message-display">
                <FlashMessageDisplay ref={flashRef} />    
            </h3> 
            <AdminDisplay flashRef={flashRef} />
        </div>
    )
}