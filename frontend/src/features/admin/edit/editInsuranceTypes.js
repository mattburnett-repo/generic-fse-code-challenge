
import { useRef } from 'react'
import { useQuery } from '@apollo/client';

import { EditInsuranceTypesDisplay } from '../../../components/admin/edit/EditInsuranceTypesDisplay';

import LoadingMessage from "../../../components/spinner/LoadingMessage";
import ErrorPage from '../../../components/errorPage.js';

import { GET_INSURANCE_TYPES } from '../../../dataSources/gqlOperations'

export const EditInsuranceTypes = () => {
    const flashRef = useRef()

    const {loading, error, data} = useQuery(GET_INSURANCE_TYPES);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />
    
    return  <EditInsuranceTypesDisplay tableData={data}/>
}