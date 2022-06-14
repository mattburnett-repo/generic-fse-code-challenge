
import { Link } from 'react-router-dom'

// https://tailwindcomponents.com/component/navbar

import { useRef } from 'react'
import { useAuth } from '../../context/auth.context'

import { FlashMessageDisplay } from '../util/FlashMessageDisplay'
import { handleLogoutClick } from "../../features/auth/authFunctions"

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
                                <img src="./favicon.ico" alt="ladder icon" className="w-16 h-16"/>
                            </ Link>
                        </div>
                        <div className="hidden sm:flex sm:items-center ">
                            <div>
                                <h1 className="text-5xl text-center m-4">Generic FSE Code Challenge</h1>
                                <FlashMessageDisplay ref={flashRef} />       
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center">
                            <button type="button" className="bg-blue-200 hover:bg-blue-400 active:bg-blue-600 px-4" onClick={(e) => handleLogoutClick(e, {flashRef}, {setUser})}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around text-center border-2 my-1 p-5 bg-white border-black mx-auto">
                <div className="p-2 border-2 border-red-300 w-36">
                    <Link to="/customers">
                        {/* <img src="./favicon.ico" alt="customer image here" className="w-6 h-6" /> */}
                        <p>Customers</p>                    
                    </Link>
                </div>
                <div className="p-2 border-2 border-green-300 w-36">
                    <Link to="/policies">
                        {/* <img src="./favicon.ico" alt="policy image here" className="w-6 h-6" /> */}
                        <p>Policies</p>
                    </Link>
                </div>
                <div className="p-2 border-2 border-blue-300 w-36">
                    <Link to="/admin">
                        {/* <img src="./favicon.ico" alt="admin image here" className="w-6 h-6" /> */}
                        <p>Admin</p>
                    </Link>
                </div>
            </div>          
        </>
    )
}
