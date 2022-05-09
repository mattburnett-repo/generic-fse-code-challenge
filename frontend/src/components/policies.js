
import { useState } from 'react'
import { useQuery } from '@apollo/client';

import { Table } from './table'
import LoadingMessage from "./spinner/LoadingMessage";
import ErrorPage from './errorPage';

import { ResultMessageContext } from "./util/resultMessage-context"

import { GET_POLICIES } from '../dataSources/gqlOperations'

export const Policies = () => {
    const defaultMessage = 'Click a column header to sort on that column'
    const [ message, setMessage ] = useState(defaultMessage)
    const { loading, error, data} = useQuery(GET_POLICIES);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />

    const swapMessageText = () => {
        setTimeout(() => {
          setMessage(defaultMessage)
        }, 5000)
    }

    return (
        <ResultMessageContext.Provider value={{message, setMessage, swapMessageText}}>
            <div className="bg-gray-200 my-24 mx-20 px-2 border-2 border-black">
                <h1 className="text-5xl text-center m-4">Policy Data Records</h1>
                <h3 className="text-1xl text-center m-4 text-sky-700">{message}</h3> 
                <Table tableData={data} />
            </div>
        </ ResultMessageContext.Provider>
    )
}