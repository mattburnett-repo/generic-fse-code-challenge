
import { useState, useEffect } from 'react'

import DatePicker from 'react-date-picker'
import { format } from 'date-fns'

const hasChanged = (prev, curr) =>  {
    return (prev !== curr) ?  true : false
}

const isEmpty = (theField) => {
    return (theField.length === 0) ? true : false
}

// export const TextFieldEditDef = (setMessage, swapMessageText, setVars) => {
export const TextFieldEditDef = (setVars, {flashRef}) => {
    const EditTextField = ({
        row,
        value: initialValue, 
        column,
        updateTableData
    }) => {
        const [value, setValue] = useState(initialValue)

        const onChange = e => {
            setValue(e.target.value)
        }
        const onBlur = (e) => {
            if(hasChanged(initialValue, e.target.value)) {
                if(isEmpty(e.target.value)) {
                    flashRef.current.setErrorMessage(`${column.id} can\'t be blank`)
                    e.target.focus()
                } else {
                    updateTableData(row.index, column.id, value)

                    // we can tell what to update by the column name / id
                    let isCustomer = ['firstName', 'lastName'].includes(column.id)
                    let isPolicy = ['policyNumber'].includes(column.id)

                    if(isCustomer) {
                        setVars({
                            customerId: parseInt(row.original.customerId, 10),
                            [column.id]: e.target.value
                        })
                    } 
                    if (isPolicy) {
                        setVars({
                            policyId: parseInt(row.original.policyId, 10),
                            [column.id]: e.target.value
                        })
                    }
                }

                // do mutation caller useEffect
            }
        }
    
        // If the initialValue is changed external, sync it up with our state
        useEffect(() => {
            setValue(initialValue)
        }, [initialValue])

        return  <input className="bg-blue-50 border-2 border-blue" value={value} name={`${column.id}${row.original.policyId}`} onChange={onChange} onBlur={onBlur} aria-label={column.id} />
    }

    return EditTextField
}

// export const DateFieldEditDef = (setMessage, swapMessageText, setVars) => {
    export const DateFieldEditDef = (setVars) => {
    const EditDateField = ({
        row,
        value: initialValue, 
        column,
        updateTableData
    }) => {
        // we can tell what to update by the column name / id
        let isCustomer = ['dateOfBirth'].includes(column.id)
        let isPolicy = ['startDate', 'endDate', 'createdAt'].includes(column.id)

        const handleOnChange = e => {
            updateTableData(row.index, column.id, e)

            if(isCustomer) {
                setVars({
                    customerId: parseInt(row.original.customerId, 10),
                    [column.id]: format(e, 'yyyy-MM-dd')
                })      
            }
            if(isPolicy) {
                console.log('EditDateField.handleOnChange: policy field needs code')
            }

             // do mutation caller useEffect
        }
        
        return (
            <div data-testid="asdf">
                <DatePicker className="w-48 bg-blue-50" onChange={handleOnChange} format='yyyy-MM-dd' value={new Date(initialValue)}  calendarAriaLabel={column.id}/>
            </div>
        );
    }

    return EditDateField
}