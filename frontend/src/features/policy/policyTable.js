
// 'container' for policy table display

import { useState, useEffect, useContext } from 'react'

import { TableDisplay } from '../../components/tableDisplay';

import { useMutation } from '@apollo/client';
import { UPDATE_POLICY_FIELD } from '../../dataSources/gqlOperations'

import { policy_jsonToArray, PolicyTableColumns } from './policyTableFunctions'
import { TextFieldEditDef, DateFieldEditDef } from '../../util/tableFunctions'

import { ResultMessageContext } from "../../util/resultMessage-context"

export function PolicyTable(props) {
    const [data, setData] = useState(() => policy_jsonToArray(props.tableData))
    const [vars, setVars] = useState({})  // an object, not a string. zB: {customerId: 1, firstName: 'asdf'}

    const { setMessage, swapMessageText } = useContext(ResultMessageContext)

    const EditTextField = TextFieldEditDef(setMessage, swapMessageText, setVars)
    const EditDateField = DateFieldEditDef(setMessage, swapMessageText, setVars)

    const columns = PolicyTableColumns(EditDateField, EditTextField)

    const [ updateField ] = useMutation(UPDATE_POLICY_FIELD, {
        variables: vars,            
        isLoading: loading => {
            setMessage(loading.message)
            swapMessageText()
        },
        onError: error => {    
            setMessage(error.message)
            console.log('Error ' , error)
        },
        onCompleted: data => {  
            setMessage(data.updateField.message)
            swapMessageText()
        }
    });

    useEffect(() => {
        // startup always runs useEffect. On mount it sends updateField with empty 'vars', making needless error.
        if(Object.keys(vars).length !== 0) updateField()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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