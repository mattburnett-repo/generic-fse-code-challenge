
import { useState, useEffect, useRef } from 'react'

import { TableDisplay } from '../../tableDisplay/tableDisplay'
import { BackToAdminButton } from './BackToAdminButton'

import { editInsuranceTypes_jsonToArray, EditInsuranceTypesTableColumns } from '../../../features/admin/edit/editInsuranceTypesFunctions'
import { TextFieldEditDef, DateFieldEditDef } from '../../tableDisplay/tableFunctions'

export const EditInsuranceTypesDisplay = (props) => {
    const flashRef = useRef()

    const [data, setData] = useState(() => editInsuranceTypes_jsonToArray(props.tableData)) // FIXME:

    // const [data, setData] = useState([]) 
    const [vars, setVars] = useState({})  // an object, not a string. zB: {customerId: 1, firstName: 'asdf'}

    // useEffect(() => {
    //     setData(editUsers_jsonToArray(props.tableData))
    // }, [])

    const EditTextField = TextFieldEditDef(setVars, {flashRef})
    const EditDateField = DateFieldEditDef(setVars)

    const columns = EditInsuranceTypesTableColumns(EditDateField, EditTextField)

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

    return (
        <div className="admin-edit-container w-1/2" role="presentation" aria-label="edit-insurance-types-panel">
            <h1>Edit Insurance Types</h1>
            <TableDisplay columns={columns} data={data} updateTableData={updateTableData} />
            <BackToAdminButton />
        </div>
    )
}