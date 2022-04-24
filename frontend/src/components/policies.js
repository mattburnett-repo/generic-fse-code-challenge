
import { useQuery } from '@apollo/client';

import { Table } from './table'
import LoadingMessage from "./spinner/LoadingMessage";
import ErrorPage from './errorPage';

import { POLICIES } from '../dataSources/gqlQueries'

export const Policies = () => {
    const { loading, error, data} = useQuery(POLICIES);

    if(loading) return <LoadingMessage type="spinner" />;
    if(error) return <ErrorPage error={error} />

    return (
        <div class="bg-gray-200 my-24 mx-20 px-2 border-2 border-black">
            <h1 class="text-5xl text-center m-4">Policy Data Records</h1>
            <Table tableData={data} />
        </div>
    )
}