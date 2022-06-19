
import { useRef } from 'react'
import { useQuery } from '@apollo/client';

import { EditPolicyStatusesDisplay } from '../../../components/admin/edit/EditPolicyStatusesDisplay';

import LoadingMessage from "../../../components/spinner/LoadingMessage";
import ErrorPage from '../../../components/errorPage.js';

import { GET_POLICY_STATUSES } from '../../../dataSources/gqlOperations'

export const EditPolicyStatuses = () => {
    const flashRef = useRef()

    const {loading, error, data} = useQuery(GET_POLICY_STATUSES);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />
    
    return  <EditPolicyStatusesDisplay tableData={data}/>
}