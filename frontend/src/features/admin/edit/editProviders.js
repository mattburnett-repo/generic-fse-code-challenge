
import { useRef } from 'react'
import { useQuery } from '@apollo/client';

import { EditProvidersDisplay } from '../../../components/admin/edit/EditProvidersDisplay';

import LoadingMessage from "../../../components/spinner/LoadingMessage";
import ErrorPage from '../../../components/errorPage.js';

import { GET_PROVIDERS } from '../../../dataSources/gqlOperations'

export const EditProviders = () => {
    const flashRef = useRef()

    const {loading, error, data} = useQuery(GET_PROVIDERS);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />
    
    return  <EditProvidersDisplay tableData={data}/>
}