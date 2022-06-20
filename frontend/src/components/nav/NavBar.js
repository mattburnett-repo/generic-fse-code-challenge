
import { Link } from 'react-router-dom'

// https://tailwindcomponents.com/component/navbar

import { useRef } from 'react'
import { useAuth } from '../../context/auth.context'

import { FlashMessageDisplay } from '../util/FlashMessageDisplay'
import { handleLogoutClick } from "../../features/auth/authFunctions"

import appIcon from '../../images/ladderIcon_01.png'

export const NavBar = () => {
    const flashRef = useRef(null)
    const { setUser } = useAuth()

    return (
        <>
            <div className="bg-gray-200">
                <div className="container mx-auto py-2">
                    <div className="flex items-center justify-between">
                        <div className='border-2 border-black rounded  hover:drop-shadow-2xl hover:translate-y-1'>
                            <Link to="/dashboard">
                                <img src={appIcon} alt="ladder icon" className="w-16 h-16"/>
                            </ Link>
                        </div>
                        <div className="hidden sm:flex sm:items-center ">
                            <div>
                                <h1 className="text-5xl text-center m-4">Generic FSE Code Challenge</h1>
                                <FlashMessageDisplay ref={flashRef} />       
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center">
                            <button type="button" className="btn-auth" onClick={(e) => handleLogoutClick(e, {flashRef}, {setUser})}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around text-center border-2 p-2 bg-white border-black mx-auto">
                <div className="btn-customers-nav">
                    <Link to="/customers">
                        <p>Customers</p>                    
                    </Link>
                </div>
                <div className="btn-policies-nav">
                    <Link to="/policies">
                        <p>Policies</p>
                    </Link>
                </div>
                <div className="btn-admin-nav">
                    <Link to="/admin">
                        <p>Admin</p>
                    </Link>
                </div>
            </div>          
        </>
    )
}
