
// entry point for policy data display
// pulls together all needed parts

import { useState } from 'react'
import { useQuery } from '@apollo/client';

import { PolicyTable } from './policyTable'
import LoadingMessage from "../../components/spinner/LoadingMessage";
import ErrorPage from '../../components/errorPage.js';

// FIXME: replace with flashRef, et al
import { ResultMessageContext } from "../../context/result.message.context"

import { GET_POLICIES } from '../../dataSources/gqlOperations'

export const Policies = () => {
    const defaultMessage = 'Click a column header to sort on that column'
    const swapMessageTextTimeout = 5000
    
    const [ message, setMessage ] = useState(defaultMessage)
    const { loading, error, data} = useQuery(GET_POLICIES);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />

    // when an info message is displayed at the top of the panel, wait ...timeout seconds
    //      before swapping back to defaultMessage.
    const swapMessageText = () => {
        setTimeout(() => {
          setMessage(defaultMessage)
        }, swapMessageTextTimeout)
    }

    return (
        // change functions passed in here
        <ResultMessageContext.Provider value={{message, setMessage, swapMessageText}}>  
            <div className="bg-gray-100 my-2 px-2 border-2 border-black">
                <h1 className="text-3xl text-center m-4">Policy Data Records</h1>
                <h3 className="text-1xl text-center m-4 text-sky-700">{message}</h3> 
                <PolicyTable tableData={data} />
            </div>
        </ ResultMessageContext.Provider>
    )
}