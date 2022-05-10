 
 // BASIC REACT-TABLE FUNCTIONALITY
// https://react-table.tanstack.com/

// REACT-TABLE EDITABLE FUNCTIONALITY
// https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v7/examples/editable-data?from-embed=&file=/src/App.js:6738-6747

// GENERIC TABLE RENDERING COMPONENT
// THIS RENDERS TABLE BASED ON PASSED-IN PROPS
// PASS IN columns / data / updateTableData FROM feature / container

 import { useTable, useSortBy, usePagination } from 'react-table'

 export const TableDisplay = (props) => {
    const { columns, data, updateTableData } = props

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
}