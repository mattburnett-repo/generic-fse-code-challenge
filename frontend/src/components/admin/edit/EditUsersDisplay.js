
import { useState, useEffect, useRef } from 'react'

import { TableDisplay } from '../../tableDisplay/tableDisplay'
import { BackToAdminButton } from './BackToAdminButton'

import { editUsers_jsonToArray, EditUsersTableColumns } from '../../../features/admin/edit/editUsersFunctions'
import { TextFieldEditDef, DateFieldEditDef } from '../../tableDisplay/tableFunctions'

export const EditUsersDisplay = (props) => {
    const flashRef = useRef()

    // const [data, setData] = useState(() => editUsers_jsonToArray(props.tableData)) // FIXME:
    const data = editUsers_jsonToArray(props.tableData)

    const [vars, setVars] = useState({})  // an object, not a string. zB: {customerId: 1, firstName: 'asdf'}

    const EditTextField = TextFieldEditDef(setVars, {flashRef})
    const EditDateField = DateFieldEditDef(setVars)

    const columns = EditUsersTableColumns(EditDateField, EditTextField)

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
        <div className="admin-edit-container" role="presentation" aria-label="edit-users-panel">
            <TableDisplay columns={columns} data={data} updateTableData={updateTableData} />
            <BackToAdminButton />
        </div>
    )
}