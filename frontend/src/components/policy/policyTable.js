
// 'container' for policy table display

import { useState, useEffect } from 'react'

import { TableDisplay } from '../../components/tableDisplay/tableDisplay';

import { useMutation } from '@apollo/client';
import { UPDATE_POLICY } from '../../dataSources/gqlOperations'

import { policy_jsonToArray, PolicyTableColumns } from '../../features/policy/policyTableFunctions'
import { TextFieldEditDef, DateFieldEditDef } from '../../components/tableDisplay/tableFunctions'

export function PolicyTable(props) {
    const flashRef = props.flashRef

    const [data, setData] = useState(() => policy_jsonToArray(props.tableData)) // FIXME: this should use data from Apollo cache
    const [vars, setVars] = useState({})  // an object, not a string. zB: {customerId: 1, firstName: 'asdf'}

    const EditTextField = TextFieldEditDef(setVars, {flashRef})
    const EditDateField = DateFieldEditDef(setVars)

    const columns = PolicyTableColumns(EditDateField, EditTextField)

    const [ updatePolicy ] = useMutation(UPDATE_POLICY, {
        variables: vars,            
        isLoading: loading => {
            flashRef.current.setInfoMessage(loading.message)
        },
        onError: error => {    
            flashRef.current.setErrorMessage(error.extensions.response.body)
        },
        onCompleted: data => {  
            flashRef.current.setSuccessMessage(data.updatePolicy.message)
        }
    });

    useEffect(() => {
        // startup always runs useEffect. On mount it sends updateField with empty 'vars', making needless error.
        if(Object.keys(vars).length !== 0) updatePolicy()
    }, [vars])

    // update the 'local' / memoized data / cache
    // TODO: this should be in tableFunctions.js. Figure out how to make setData() available
    const updateTableData = (rowIndex, columnId, value) => {
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    return <TableDisplay columns={columns} data={data} updateTableData={updateTableData} />
} // end function PolicyTable