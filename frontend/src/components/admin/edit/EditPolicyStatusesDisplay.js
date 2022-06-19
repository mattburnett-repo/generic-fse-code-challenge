

import { useState, useEffect, useRef } from 'react'

import { TableDisplay } from '../../tableDisplay/tableDisplay'
import { BackToAdminButton } from './BackToAdminButton'

import { editPolicyStatuses_jsonToArray, EditPolicyStatusesTableColumns } from '../../../features/admin/edit/editPolicyStatusesFunctions'
import { TextFieldEditDef, DateFieldEditDef } from '../../tableDisplay/tableFunctions'

export const EditPolicyStatusesDisplay = (props) => {
    const flashRef = useRef()

    const [data, setData] = useState(() => editPolicyStatuses_jsonToArray(props.tableData)) // FIXME:

    const [vars, setVars] = useState({})  // an object, not a string. zB: {customerId: 1, firstName: 'asdf'}

    const EditTextField = TextFieldEditDef(setVars, {flashRef})
    const EditDateField = DateFieldEditDef(setVars)

    const columns = EditPolicyStatusesTableColumns(EditDateField, EditTextField)

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
        <div className="admin-edit-container w-1/2" role="presentation" aria-label="edit-policy-statuses-panel">
            <TableDisplay columns={columns} data={data} updateTableData={updateTableData} />
            <BackToAdminButton />
        </div>
    )
}