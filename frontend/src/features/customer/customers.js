
// entry point for customer data display
// pulls together all needed parts

import { useRef } from 'react'
import { useQuery } from '@apollo/client';

import { CustomerTable } from '../../components/customer/customerTable'

import LoadingMessage from "../../components/spinner/LoadingMessage";
import ErrorPage from '../../components/errorPage.js';
import { FlashMessageDisplay } from '../../components/util/FlashMessageDisplay';

import { GET_CUSTOMERS } from '../../dataSources/gqlOperations'

export const Customers = () => {
    const flashRef = useRef()

    const {loading, error, data} = useQuery(GET_CUSTOMERS);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />

    return (
        <div className="bg-gray-100 my-2 px-2 border-2 border-black text-center">
            <h1 className="text-3xl m-4">Customer Records</h1>
            <h2 className="m-4 text-blue-500">Click a column header to sort on that column</ h2>
            <h3 className="text-1xl text-center m-4" role="status" aria-label="flash-message-display">
                <FlashMessageDisplay ref={flashRef} />    
            </h3> 
            <CustomerTable tableData={data} flashRef={flashRef} />
        </div>
    )
}