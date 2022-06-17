
import { useRef } from 'react'
import { FlashMessageDisplay } from '../../components/util/FlashMessageDisplay'
import  { AdminDisplay } from '../../components/admin/AdminDisplay'

export const Admin = () => {
    const flashRef = useRef()

    return (
        <div className="bg-gray-100 my-2 px-2 border-2 border-black text-center">
            <h1 className="text-3xl m-4">Admin</h1>
            <h2 className="m-4 text-blue-500">Click an option</ h2>
            <h3 className="text-1xl text-center m-4" role="status" aria-label="flash-message-display">
                <FlashMessageDisplay ref={flashRef} />    
            </h3> 
            <AdminDisplay flashRef={flashRef} />
        </div>
    )
}