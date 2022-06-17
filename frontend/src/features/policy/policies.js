
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
        <div className="module-container">
            <h1 className="module-title">Policy Records</h1>
            <h2 className="module-message">Click a column header to sort on that column</ h2>
            <FlashMessageDisplay ref={flashRef} />    
            <PolicyTable tableData={data} flashRef={flashRef} />
        </div>
    )
}