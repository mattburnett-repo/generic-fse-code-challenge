
// 'container' for customer table display

import { useState, useEffect } from 'react'

import { TableDisplay } from '../tableDisplay/tableDisplay';

import { useMutation } from '@apollo/client';
import { UPDATE_CUSTOMER_FIELD } from '../../dataSources/gqlOperations'

import { customer_jsonToArray, CustomerTableColumns } from '../../features/customer/customerTableFunctions'
import { TextFieldEditDef, DateFieldEditDef } from '../tableDisplay/tableFunctions'

// FIXME: TS for props
export function CustomerTable(props) {
    const flashRef = props.flashRef

    const [data, setData] = useState(() => customer_jsonToArray(props.tableData)) // FIXME: this should use data from Apollo cache
    const [vars, setVars] = useState({})  // an object, not a string. zB: {customerId: 1, firstName: 'asdf'}

    const EditTextField = TextFieldEditDef(setVars, {flashRef})
    const EditDateField = DateFieldEditDef(setVars)

    const columns = CustomerTableColumns(EditDateField, EditTextField)

    // const [ updateField ] = useMutation(UPDATE_CUSTOMER_FIELD, {
    //     variables: vars,            
    //     isLoading: loading => {
    //         setMessage(loading.message)
    //         swapMessageText()
    //     },
    //     onError: error => {    
    //         setMessage(error.message)
    //         console.log('Error ' , error)
    //     },
    //     onCompleted: data => {  
    //         setMessage(data.updateField.message)
    //         swapMessageText()
    //     }
    // });

    useEffect(() => {
        // startup always runs useEffect. On mount it sends updateField with empty 'vars', making needless error.
        if(Object.keys(vars).length !== 0) updateField()
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