 
 // BASIC REACT-TABLE FUNCTIONALITY
// https://react-table.tanstack.com/

// REACT-TABLE EDITABLE FUNCTIONALITY
// https://codesandbox.io/s/github/tannerlinsley/react-table/tree/v7/examples/editable-data?from-embed=&file=/src/App.js:6738-6747

// GENERIC TABLE RENDERING COMPONENT
// THIS RENDERS TABLE BASED ON PASSED-IN PROPS
// PASS IN columns / data / updateTableData FROM feature / container

// HOW TO DEAL WITH TYPE PROBLEMS THROUGHOUT THE COMPONENT BODY
//      https://stackoverflow.com/questions/64608974/react-table-pagination-properties-doesnt-exist-on-type-tableinstance
//      TLDR
//          in src folder, create types folder
//          in types folder, create react-table-config.d.ts file
//          in react-table-config.d.ts file, copy this:
//              https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table#example-type-file

// import { FC } from 'react'

// FIXME: should only reference this from one location, not copy into every component folder
import { useTable, useSortBy, usePagination } from 'react-table'

//  type TableDisplayProps = {
//     columns: [],
//     data: [],
//     updateTableData: Function
//  }

//  export const TableDisplay:FC<TableDisplayProps> = (props) => {
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

        // @ts-ignore
        state: { pageIndex, pageSize },
      } = useTable({ 
            columns, 
            data,          // replacing 'theData' with another object name, zB 'tableData' causes everything to fail. 
            // https://react-table.tanstack.com/docs/faq#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-theData-changes
            // @ts-ignore
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
        <table {...getTableProps()} className="border border-black mx-auto" role="table" aria-label="data-table">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            // column.Header
                            // column.id
                            // @ts-ignore
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
            <tbody {...getTableBodyProps()} className="bg-white" aria-label="data-records">
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} className="p-4" aria-label="data-record">
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} className="px-4 py-1">{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
       { /*  
            Pagination can be built however you'd like. 
            This is just a very basic UI implementation:
        */}

        {data.length>= 10 && 
            <div className="text-center m-4" role="navigation" aria-label="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="hover:bg-blue-100 px-4" aria-label="pagination-start">
                {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage} className="hover:bg-blue-100 px-2" aria-label='pagination-back'>
                {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage} className="hover:bg-blue-100 px-2" aria-label="pagination-forward">
                {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="hover:bg-blue-100 px-4" aria-label="pagination-end">
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
                        className="w-10 border border-black"
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
        }      
        </>
    )
}