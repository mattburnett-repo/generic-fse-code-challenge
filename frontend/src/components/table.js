
// BASIC REACT-TABLE FUNCTIONALITY
// https://react-table.tanstack.com/

// REACT-TABLE EDITABLE FUNCTIONALITY
// https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v7/examples/editable-data?from-embed=&file=/src/App.js:6738-6747

import { useState, useEffect, useMemo, useContext } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'

import { useMutation } from '@apollo/client';
import { UPDATE_POLICY_FIELD } from '../dataSources/gqlOperations'

import { policy_jsonToArray, hasChanged, isEmpty } from './util/tableFunctions'
import { ResultMessageContext } from "./util/resultMessage-context"

import DatePicker from 'react-date-picker'
import { format } from 'date-fns'

export function Table(props) {
    const [data, setData] = useState(() => policy_jsonToArray(props.tableData))
    const [vars, setVars] = useState({})  // an object, not a string. zB: {customerId: 1, firstName: 'asdf'}

    const { setMessage, swapMessageText } = useContext(ResultMessageContext)

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
        // startup always runs useEffect. On mount it sends updateField with empty 'vars'. This makes needless error.
        if(Object.keys(vars).length !== 0) updateField()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vars])

    // update the 'local' / memo-ized data
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

    // use this in column defs to enable editing / updating data store from the UI
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
                    setMessage(`${column.id} can not be blank`)
                    let el = document.getElementsByName(e.target.name)[0]
                    el.focus();
                    swapMessageText()
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

                // do mutation (updateField()) upstairs in useEffect
            }
        }
    
        // If the initialValue is changed external, sync it up with our state
        useEffect(() => {
            setValue(initialValue)
        }, [initialValue])

        return  <input className="bg-blue-50 border-2 border-blue" value={value} name={`${column.id}${row.original.policyId}`} onChange={onChange} onBlur={onBlur} aria-label={column.id} />
    }
    
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
        }
           
        return (
          <div>
            <DatePicker className="w-48 bg-blue-50" onChange={handleOnChange} format='yyyy-MM-dd' value={new Date(initialValue)} calendarAriaLabel={column.id}/>
          </div>
        );
    }

    const columns = useMemo(
        () => [
            {
                Header: "#",
                accessor: "policyId"
            },
            {
                Header: 'Customer',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName', 
                        Cell: EditTextField,
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName', 
                        Cell: EditTextField,
                    },
                    {
                        Header: 'Date of Birth',
                        accessor: 'dateOfBirth',
                        Cell: EditDateField
                    },                    
                ]
            },
            {
                Header: 'Policy',
                columns: [
                    {
                        Header: 'Provider',
                        accessor: 'provider',
                    },
                    {
                        Header: 'Insurance Type',
                        accessor: 'insuranceType',
                    },
                    {
                        Header: 'Policy Status',
                        accessor: 'policyStatus',
                    },
                    {
                        Header: 'Policy Number',
                        accessor: 'policyNumber',
                        Cell: EditTextField,
                    },
                    {
                        Header: 'Start Date',
                        accessor: 'startDate',
                    },
                    {
                        Header: 'End Date',
                        accessor: 'endDate',
                    },
                    {
                        Header: 'Created At',
                        accessor: 'createdAt',
                    },                    
                ]
            }
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      )


    // everything below should be in a separate component thing
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,

        state: { pageIndex, pageSize },
      } = useTable({ 
            columns, 
            data,          // replacing 'theData' with another object name, zB 'tableData' causes everything to fail. 
            // https://react-table.tanstack.com/docs/faq#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-theData-changes
            autoResetPage: false, // use the false option to disable page resetting temporarily
            autoResetExpanded: false,
            autoResetGroupBy: false,
            autoResetSelectedRows: false,
            autoResetSortBy: false,
            autoResetFilters: false,
            autoResetRowState: false,
            updateTableData
        }, 
        useSortBy,
        usePagination,
    ) 

    return (
        <>
        <table {...getTableProps()} className="border border-black mx-auto" role="table" aria-label="policy-table">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            // column.Header
                            // column.id
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="bg-blue-200  border border-black p-4" aria-label={column.id}>
                                {column.render('Header')}
                                {/* Add a sort direction indicator */}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' 🔽'
                                        : ' 🔼'
                                    : ''}
                                </span>
                            </th>                       
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} className="bg-white" aria-label="policy-records">
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} className="p-4" aria-label="policy-record">
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} className="px-4 py-1">{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {/* 
            Pagination can be built however you'd like. 
            This is just a very basic UI implementation:
        */}
        <div className="text-center m-4" role="navigation" aria-label="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="hover:bg-blue-50 px-4" aria-label="pagination-start">
            {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="hover:bg-blue-50 px-2" aria-label='pagination-back'>
            {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage} className="hover:bg-blue-50 px-2" aria-label="pagination-forward">
            {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="hover:bg-blue-50 px-4" aria-label="pagination-end">
            {'>>'}
            </button>{' '}
            <span role="presentation" aria-label="page-indicator">
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span className="p-2">
                | 
            </span>
            <span className="p-2" aria-label="pagination-goto-page">
               Go to page:{' '}
                {/* input shows up in DOM as 'spinbutton' */}
                <input 
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    className="w-100 border border-black"
                    aria-label="pagination-goto-page-number"
                />
            </span>{' '}
            <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}  className="px-2 border border-black"
                aria-label="pagination-page-size"
                > 
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                        </option>
                    ))}
            </select>
        </div>
        </>
    )
} // end function Table