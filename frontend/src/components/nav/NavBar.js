
// https://tailwindcomponents.com/component/navbar

import { useRef } from 'react'
import { useAuth } from '../../context/auth.context'

import { FlashMessageDisplay } from '../util/FlashMessageDisplay'
import { handleLogoutClick } from "../../features/auth/authFunctions"

export const NavBar = () => {
    const flashRef = useRef(null)
    const { setUser } = useAuth()

    return (
        <div className="shadow bg-gray-200">
            <div className="container mx-auto px-4  ">
                <div className="flex items-center justify-between">
                    <div>
                        <img src="./favicon.ico" alt="ladder icon" className="w-16 h-16"/>
                    </div>

                    <div className="hidden sm:flex sm:items-center ">
                        <div>
                        <h1 className="text-5xl text-center m-4">Generic FSE Code Challenge Dashboard</h1>
                        <FlashMessageDisplay ref={flashRef} />       
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center">
                        <button type="button" className="bg-blue-200 hover:bg-blue-400 active:bg-blue-600 px-4" onClick={(e) => handleLogoutClick(e, {flashRef}, {setUser})}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
