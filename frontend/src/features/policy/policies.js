
// entry point for policy data display
// pulls together all needed parts

import { useRef } from 'react'
import { useQuery } from '@apollo/client';

import { PolicyTable } from '../../components/policy/policyTable'

import LoadingMessage from "../../components/spinner/LoadingMessage";
import ErrorPage from '../../components/errorPage.js';
import { FlashMessageDisplay } from '../../components/util/FlashMessageDisplay';

import { GET_POLICIES } from '../../dataSources/gqlOperations'

export const Policies = () => {
    const flashRef = useRef()

    const {loading, error, data} = useQuery(GET_POLICIES);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />

    return (
        <div className="bg-gray-100 my-2 px-2 border-2 border-black text-center">
            <h1 className="text-3xl text-center m-4">Policy Records</h1>
            <h2 className="m-4 text-blue-500">Click a column header to sort on that column</ h2>
            <h3 className="text-1xl text-center m-4">
                <FlashMessageDisplay ref={flashRef} />    
            </h3>  
            <PolicyTable tableData={data} flashRef={flashRef} />
        </div>
    )
}