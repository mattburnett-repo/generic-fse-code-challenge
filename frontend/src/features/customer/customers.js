
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
        <div className="module-container">
            <h1 className="module-title">Customer Records</h1>
            <h2 className="module-message">Click a column header to sort on that column</ h2>
            <h3 className="flash-message-container" role="status" aria-label="flash-message-display">
                <FlashMessageDisplay ref={flashRef} />    
            </h3> 
            <CustomerTable tableData={data} flashRef={flashRef} />
        </div>
    )
}