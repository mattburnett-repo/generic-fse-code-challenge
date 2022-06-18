
import { useState, useEffect, useRef } from 'react'

import { mockUserData } from '../../../test/mockData/getUsers'

import axios from '../../auth/authApi'

import { EditUsersDisplay } from '../../../components/admin/edit/EditUsersDisplay'

export const EditUsers = () => {
    const [userData, setUserData] = useState([])
    const flashRef = useRef()

    const loadUsers = async () => {
        try {
            let result = await axios.GetUsers() // FIXME: memoize result

            if(result.status === 200) {
                await setUserData(result)
                // flashRef.current.setSuccessMessage('We found users')
            } else {
                console.log('ERROR: EditUsers GetUsers ', result.statusText)
            }
        } catch (err) {
            console.log('ERROR: EditUsers loadUsers ', err)
            // flashRef.current.setErrorMessage(err)
        }       
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return <EditUsersDisplay tableData={userData}/>
    // return <EditUsersDisplay tableData={mockUserData}/>
}