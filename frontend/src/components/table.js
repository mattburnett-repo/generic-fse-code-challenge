
// BASIC REACT-TABLE FUNCTIONALITY
// https://react-table.tanstack.com/

// REACT-TABLE EDITABLE FUNCTIONALITY
// https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v7/examples/editable-data?from-embed=&file=/src/App.js:6738-6747

import { useState, useEffect, useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'

export function Table(props) {

    const { tableData } = props;

    // table component needs array data to work.
    const jsonToArray = (theData) => {
        let theArray = []

        theData?.policies?.forEach((policy) => {
            theArray.push(
                {id: policy.id, firstName: policy.customer.first_name, lastName: policy.customer.last_name, 
                dateOfBirth: policy.customer.date_of_birth.substring(0,10),
                provider: policy.provider.description, insuranceType: policy.insuranceType.description,
                policyStatus: policy.status.description, policyNumber: policy.policy_number, 
                startDate: policy.start_date.substring(0,10), 
                endDate: policy.end_date.substring(0,10),
                createdAt: policy.created_at.substring(0,10)
            })
        })

        return theArray;
    }

    const [data, setData] = useState(() => jsonToArray(tableData))
    const [skipPageReset, setSkipPageReset] = useState(false)

    // Create an editable cell renderer
    const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, // This is a custom function that we supplied to our table instance
    }) => {
        // We need to keep and update the state of the cell normally
        const [value, setValue] = useState(initialValue)
    
        const onChange = e => {
            setValue(e.target.value)
        }
    
        // We'll only update the external data when the input is blurred
        const onBlur = () => {
            updateMyData(index, id, value)
        }
    
        // If the initialValue is changed external, sync it up with our state
        useEffect(() => {
            setValue(initialValue)
        }, [initialValue])
    
        return <input className="bg-blue-50 border-2 border-blue" value={value} onChange={onChange} onBlur={onBlur} aria-label={id}/>
    }

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateMyData = (rowIndex, columnId, value) => {
        alert('rowIndex: ' + rowIndex + ' columnId: ' + columnId + ' value: ' + value)

        // We also turn on the flag to not reset the page
        setSkipPageReset(true)
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

    // After data chagnes, we turn the flag back off
    // so that if data actually changes when we're not
    // editing it, the page is reset
    useEffect(() => {
        setSkipPageReset(false)
    }, [data])

    // columns have to be memoized. 'accessor' matches key/s from the data object
    //      created in jsonToArray(), below
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id', // accessor is the "key" in the data
            },
            {
                Header: 'Customer',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName', 
                        Cell: EditableCell,
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName', 
                        Cell: EditableCell,
                    },
                    {
                        Header: 'Date of Birth',
                        accessor: 'dateOfBirth',
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
                        Cell: EditableCell,
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
        []
      )

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
            data,          // replacing 'data' with another object name, zB 'tableData' causes everything to fail. 
            autoResetPage: !skipPageReset, // use the skipPageReset option to disable page resetting temporarily
            updateMyData
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
                                // console.log('cell ', cell)
                            return <td {...cell.getCellProps()} className="px-4 py-1" aria-label={cell.column.id}>{cell.render('Cell')}</td>
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