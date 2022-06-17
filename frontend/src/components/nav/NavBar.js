
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
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className='border-2 border-black rounded'>
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
                            <button type="button" className="px-4 p-2 border-2 border-gray-300 bg-gray-100 w-36 hover:bg-gray-300 active:bg-gray-400 rounded" onClick={(e) => handleLogoutClick(e, {flashRef}, {setUser})}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around text-center border-2 my-1 p-2 bg-white border-black mx-auto">
                <div className="p-2 border-2 border-orange-300 bg-orange-50 w-36 hover:bg-orange-300 active:bg-orange-200 rounded">
                    <Link to="/customers">
                        <p>Customers</p>                    
                    </Link>
                </div>
                <div className="p-2 border-2 border-green-300 bg-green-50 w-36 hover:bg-green-300 active:bg-green-200rounded">
                    <Link to="/policies">
                        <p>Policies</p>
                    </Link>
                </div>
                <div className="p-2 border-2 border-blue-300 bg-blue-50 w-36 hover:bg-blue-300 active:bg-blue-200 rounded">
                    <Link to="/admin">
                        <p>Admin</p>
                    </Link>
                </div>
            </div>          
        </>
    )
}
