
import { useState, useEffect, useRef } from 'react'

import axios from '../../auth/authApi'

import { EditUsersDisplay } from '../../../components/admin/edit/EditUsersDisplay'

export const EditUsers = () => {
    const [userData, setUserData] = useState([])
    const flashRef = useRef()

    const loadUsers = async () => {
        try {
            const authToken = JSON.parse(localStorage.getItem('generic-fse')).token
            let result = await axios.GetUsers(authToken) // FIXME: memoize result

            if(result.status === 200) {
                await setUserData(result)
            } else {
                console.log('ERROR: EditUsers GetUsers ', result.statusText)
            }
        } catch (err) {
            console.log('ERROR: EditUsers loadUsers ', err)
            //  flashRef.current.setErrorMessage(err.statusText)
        }       
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return <EditUsersDisplay tableData={userData}/>
}